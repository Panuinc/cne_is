"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import UICustomTable from "@/components/other/UICustomTable";
import { Folder, Search, Setting, Trash } from "@/components/icons/icons";
import UICustomPagination from "@/components/other/UICustomPagination";
import React, { useState, useMemo, useEffect, useCallback } from "react";

import {
  Input,
  Button,
  Select,
  SelectItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

const statusOptions = [
  { name: "ทั้งหมด", uniqueIdentifier: "all" },
  { name: "เปิดใช้งาน", uniqueIdentifier: "active" },
  { name: "ปิดใช้งาน", uniqueIdentifier: "inactive" },
];

const empTypeOptions = [
  { name: "ทั้งหมด", uniqueIdentifier: "all" },
  { name: "รายเดือน", uniqueIdentifier: "Monthly" },
  { name: "รายเดือน (คนพิการ)", uniqueIdentifier: "perDisabilities" },
  { name: "รายวัน", uniqueIdentifier: "Daily" },
];

const genderOptions = [
  { name: "ทั้งหมด", uniqueIdentifier: "all" },
  { name: "ชาย", uniqueIdentifier: "Male" },
  { name: "หญิง", uniqueIdentifier: "FeMale" },
];

const rowsOptions = [5, 10, 15];

const UISelectFilter = ({
  label,
  selectedValue,
  items,
  onChange,
  isDisabled = false,
}) => (
  <Select
    label={label}
    placeholder={`กรุณาเลือก${label}`}
    size="md"
    variant="bordered"
    color="primary"
    radius="lg"
    isDisabled={isDisabled}
    selectedKeys={[selectedValue]}
    onChange={(e) => onChange(e.target.value)}
    selectionMode="single"
    disallowEmptySelection
  >
    {items.map((item) => (
      <SelectItem key={item.uniqueIdentifier} value={item.uniqueIdentifier}>
        {item.name}
      </SelectItem>
    ))}
  </Select>
);

export default function UIEmpList({ data = [], error = "" }) {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  const roleName = session?.user?.roleName;
  const divisionName = session?.user?.divisionName;

  const canManage = roleName === "ผู้ดูแลระบบ" || divisionName === "บุคคล";

  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [empTypeFilter, setEmpTypeFilter] = useState("all");
  const [divisionFilter, setDivisionFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [positionFilter, setPositionFilter] = useState("all");
  const [genderFilter, setGenderFilter] = useState("all");

  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = useMemo(() => {
    const baseColumns = [
      { name: "ลำดับ", uid: "empId" },
      { name: "ชื่อพนักงาน (TH)", uid: "empFirstNameTH" },
      { name: "นามสกุลพนักงาน (TH)", uid: "empLastNameTH" },
      { name: "อีเมลล์", uid: "empEmail" },
      { name: "เบอร์โทร", uid: "empTel" },
      { name: "สัญชาติ", uid: "empCitizen" },
      { name: "เพศ", uid: "empGender" },
      { name: "สถานะการใช้งาน", uid: "empStatus" },

      { name: "รหัสพนักงาน", uid: "empEmploymentNumber" },
      { name: "ประเภทพนักงาน", uid: "empEmploymentType" },
      { name: "ชื่อฝ่าย", uid: "divisionName" },
      { name: "ชื่อแผนก", uid: "departmentName" },
      { name: "ตำแหน่งงาน", uid: "positionName" },
      { name: "บทบาทหน้าที่", uid: "roleName" },
      { name: "ผู้บังคับบัญชา", uid: "parentName" },
      { name: "รูปภาพ", uid: "empEmploymentPicture" },
      { name: "ลายเซ็น", uid: "empEmploymentSignature" },
    ];

    if (canManage) {
      baseColumns.push(
        { name: "สร้างโดย", uid: "createdBy" },
        { name: "สร้างเมื่อวันที่", uid: "empCreateAt" },
        { name: "แก้ไขโดย", uid: "updatedBy" },
        { name: "แก้ไขเมื่อวันที่", uid: "empUpdateAt" },
        { name: "การจัดการ", uid: "actions" }
      );
    }

    return baseColumns;
  }, [canManage]);

  const divisionOptions = useMemo(() => {
    const unique = [
      ...new Set(
        data
          .map(
            (d) =>
              d.empEmpEmployment?.[0]?.EmpEmploymentDivisionId?.divisionName
          )
          .filter(Boolean)
      ),
    ];
    return [
      { name: "ทั้งหมด", uniqueIdentifier: "all" },
      ...unique.map((name) => ({ name, uniqueIdentifier: name })),
    ];
  }, [data]);

  const departmentOptions = useMemo(() => {
    const unique = [
      ...new Set(
        data
          .map(
            (d) =>
              d.empEmpEmployment?.[0]?.EmpEmploymentDepartmentId?.departmentName
          )
          .filter(Boolean)
      ),
    ];
    return [
      { name: "ทั้งหมด", uniqueIdentifier: "all" },
      ...unique.map((name) => ({ name, uniqueIdentifier: name })),
    ];
  }, [data]);

  const positionOptions = useMemo(() => {
    const unique = [
      ...new Set(
        data
          .map(
            (d) =>
              d.empEmpEmployment?.[0]?.EmpEmploymentPositionId?.positionNameTH
          )
          .filter(Boolean)
      ),
    ];
    return [
      { name: "ทั้งหมด", uniqueIdentifier: "all" },
      ...unique.map((name) => ({ name, uniqueIdentifier: name })),
    ];
  }, [data]);

  const filteredData = useMemo(() => {
    let result = data;
    if (searchTerm.trim()) {
      result = result.filter((emp) =>
        emp.empFirstNameTH?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (statusFilter !== "all") {
      result = result.filter(
        (emp) => emp.empStatus?.toLowerCase() === statusFilter
      );
    }

    if (empTypeFilter !== "all") {
      result = result.filter(
        (emp) => emp.empEmpEmployment?.[0]?.empEmploymentType === empTypeFilter
      );
    }

    if (genderFilter !== "all") {
      result = result.filter((emp) => emp.empGender === genderFilter);
    }

    if (divisionFilter !== "all") {
      result = result.filter(
        (emp) =>
          emp.empEmpEmployment?.[0]?.EmpEmploymentDivisionId?.divisionName ===
          divisionFilter
      );
    }

    if (departmentFilter !== "all") {
      result = result.filter(
        (emp) =>
          emp.empEmpEmployment?.[0]?.EmpEmploymentDepartmentId
            ?.departmentName === departmentFilter
      );
    }

    if (positionFilter !== "all") {
      result = result.filter(
        (emp) =>
          emp.empEmpEmployment?.[0]?.EmpEmploymentPositionId?.positionNameTH ===
          positionFilter
      );
    }

    return result;
  }, [
    data,
    searchTerm,
    statusFilter,
    empTypeFilter,
    genderFilter,
    divisionFilter,
    departmentFilter,
    positionFilter,
  ]);

  useEffect(() => {
    setPageNumber(1);
  }, [
    searchTerm,
    statusFilter,
    empTypeFilter,
    genderFilter,
    divisionFilter,
    departmentFilter,
    positionFilter,
  ]);

  const handleAction = useCallback(
    (action, item) => {
      if (action === "edit") {
        router.push(`/emp/${item.empId}`);
      } else if (action === "empView") {
        router.push(`/empView/${item.empId}`);
      } else if (action === "empUser") {
        const empUserId = item.empEmpUser?.[0]?.empUserId;
        if (empUserId) {
          router.push(`/empUser/${empUserId}`);
        } else {
          alert("Emp User information for this employee was not found");
        }
      } else if (action === "empEmployment") {
        const empEmploymentId = item.empEmpEmployment?.[0]?.empEmploymentId;
        if (empEmploymentId) {
          router.push(`/empEmployment/${empEmploymentId}`);
        } else {
          alert("Emp Employment information for this employee was not found");
        }
      } else if (action === "empCv") {
        const empCvId = item.empEmpCv?.[0]?.empCvId;
        if (empCvId) {
          router.push(`/empCv/${empCvId}`);
        } else {
          alert("Emp Cv information for this employee was not found");
        }
      } else if (action === "empDocument") {
        const empDocumentId = item.empEmpDocument?.[0]?.empDocumentId;
        if (empDocumentId) {
          router.push(`/empDocument/${empDocumentId}`);
        } else {
          alert("Emp Document information for this employee was not found");
        }
      }
    },
    [router]
  );

  const renderCell = useCallback(
    (item, idx, colKey) => {
      switch (colKey) {
        case "empId":
          return (pageNumber - 1) * rowsPerPage + idx + 1;
        case "empTitle":
          if (item.empTitle === "Mr") return "นาย";
          if (item.empTitle === "Mrs") return "นาง";
          if (item.empTitle === "Ms") return "นางสาว";
          return item.empTitle || "-";
        case "empCitizen":
          if (item.empCitizen === "Thai") return "ไทย";
          if (item.empCitizen === "Cambodian") return "กัมพูชา";
          if (item.empCitizen === "Lao") return "ลาว";
          if (item.empCitizen === "Burmese") return "พม่า";
          if (item.empCitizen === "Vietnam") return "เวียดนาม";
          return item.empCitizen || "-";
        case "empGender":
          if (item.empGender === "Male") return "ชาย";
          if (item.empGender === "FeMale") return "หญิง";
          return item.empGender || "-";
        case "empStatus":
          return (
            <Button
              size="sm"
              color={
                item.empStatus?.toLowerCase() === "active"
                  ? "success"
                  : "danger"
              }
              radius="lg"
              className="min-w-10 min-h-10 text-white"
            >
              {item.empStatus?.toLowerCase() === "active"
                ? "เปิดใช้งาน"
                : "ปิดใช้งาน"}
            </Button>
          );
        case "empEmploymentNumber":
          return item.empEmpEmployment?.[0]?.empEmploymentNumber || "-";
        case "empEmploymentType":
          if (item.empEmpEmployment?.[0]?.empEmploymentType === "Monthly")
            return "รายเดือน";
          if (
            item.empEmpEmployment?.[0]?.empEmploymentType === "perDisabilities"
          )
            return "รายเดือน (คนพิการ)";
          if (item.empEmpEmployment?.[0]?.empEmploymentType === "Daily")
            return "รายวัน";
          return item.empEmpEmployment?.[0]?.empEmploymentType || "-";
        case "divisionName":
          return (
            item.empEmpEmployment?.[0]?.EmpEmploymentDivisionId?.divisionName ||
            "-"
          );
        case "departmentName":
          return (
            item.empEmpEmployment?.[0]?.EmpEmploymentDepartmentId
              ?.departmentName || "-"
          );
        case "positionName":
          return (
            item.empEmpEmployment?.[0]?.EmpEmploymentPositionId
              ?.positionNameTH || "-"
          );
        case "roleName":
          return (
            item.empEmpEmployment?.[0]?.EmpEmploymentRoleId?.roleName || "-"
          );
        case "parentName":
          return item.empEmpEmployment?.[0]?.EmpEmploymentParentBy
            ? `${item.empEmpEmployment[0].EmpEmploymentParentBy.empFirstNameTH} ${item.empEmpEmployment[0].EmpEmploymentParentBy.empLastNameTH}`
            : "-";
        case "empEmploymentPicture":
          return item.empEmpEmployment?.[0]?.empEmploymentPicture ? "มี" : "-";
        case "empEmploymentSignature":
          return item.empEmpEmployment?.[0]?.empEmploymentSignature
            ? "มี"
            : "-";
        case "createdBy":
          return item.EmpCreateBy
            ? `${item.EmpCreateBy.empFirstNameTH} ${item.EmpCreateBy.empLastNameTH}`
            : "-";
        case "updatedBy":
          return item.EmpUpdateBy
            ? `${item.EmpUpdateBy.empFirstNameTH} ${item.EmpUpdateBy.empLastNameTH}`
            : "-";
        case "actions":
          if (!canManage) return null;
          return (
            <div className="flex items-center justify-center p-2 gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly variant="none" className="text-primary">
                    <Setting />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu onAction={(key) => handleAction(key, item)}>
                  <DropdownItem key="edit">แก้ไข</DropdownItem>
                  <DropdownItem key="empUser">บัญชีการใช้งาน</DropdownItem>
                  <DropdownItem key="empEmployment">การจ้างงาน</DropdownItem>
                  <DropdownItem key="empCv">เรซูเม่</DropdownItem>
                  <DropdownItem key="empDocument">เอกสาร</DropdownItem>
                  <DropdownItem key="empView">รายละเอียด</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return item[colKey] || "-";
      }
    },
    [handleAction, pageNumber, rowsPerPage, canManage]
  );

  return (
    <div className="flex flex-col items-center justify-start w-full h-full p-2 bg-white overflow-auto">
      <div className="flex flex-row items-center justify-between w-full p-2 gap-2">
        <div className="flex items-center justify-center w-full xl:w-6/12 h-full p-2 gap-2">
          <Input
            isClearable
            label="ค้นหา"
            placeholder="ค้นหาโดยข้อมูล ชื่อ (TH)"
            size="md"
            variant="bordered"
            color="primary"
            radius="lg"
            startContent={<Search />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-center h-full p-2 gap-2">
          {canManage && (
            <Button
              as={Link}
              href="/emp/create"
              color="primary"
              size="md"
              radius="lg"
              className="flex items-center justify-center w-full h-full p-4 gap-2"
              startContent={<Folder />}
            >
              เพิ่มใหม่
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-start w-full p-2 gap-2">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <UISelectFilter
            label="สถานะการใช้งาน"
            selectedValue={statusFilter}
            items={statusOptions}
            onChange={setStatusFilter}
          />
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <UISelectFilter
            label="ประเภทพนักงาน"
            selectedValue={empTypeFilter}
            items={empTypeOptions}
            onChange={setEmpTypeFilter}
          />
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <UISelectFilter
            label="เพศ"
            selectedValue={genderFilter}
            items={genderOptions}
            onChange={setGenderFilter}
          />
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <UISelectFilter
            label="ฝ่าย"
            selectedValue={divisionFilter}
            items={divisionOptions}
            onChange={setDivisionFilter}
          />
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <UISelectFilter
            label="แผนก"
            selectedValue={departmentFilter}
            items={departmentOptions}
            onChange={setDepartmentFilter}
          />
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <UISelectFilter
            label="ตำแหน่ง"
            selectedValue={positionFilter}
            items={positionOptions}
            onChange={setPositionFilter}
          />
        </div>
        <div className="flex items-center justify-end w-full h-full p-2 gap-2">
          <Button
            color="primary"
            size="md"
            radius="lg"
            startContent={<Trash />}
            className="min-w-12 min-h-12 p-2 gap-2"
            onPress={() => {
              setSearchTerm("");
              setStatusFilter("all");
              setEmpTypeFilter("all");
              setGenderFilter("all");
              setDivisionFilter("all");
              setDepartmentFilter("all");
              setPositionFilter("all");
              setPageNumber(1);
            }}
          ></Button>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-full p-2 gap-2">
        <div className="flex items-center justify-start w-full xl:w-10/12 h-full p-2 gap-2">
          จำนวนข้อมูล
        </div>
        <div className="flex items-center justify-center w-full xl:w-2/12 h-full p-2 gap-2">
          <Select
            label="จำนวนข้อมูล"
            placeholder="จำนวนข้อมูล"
            size="md"
            variant="bordered"
            color="primary"
            radius="lg"
            selectedKeys={[String(rowsPerPage)]}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setPageNumber(1);
            }}
          >
            {rowsOptions.map((num) => (
              <SelectItem key={num} value={String(num)}>
                {String(num)}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-full p-2 gap-2">
        <UICustomTable
          columns={columns}
          data={filteredData}
          pageNumber={pageNumber}
          rowsPerPage={rowsPerPage}
          error={error}
          renderCell={renderCell}
        />
      </div>

      <UICustomPagination
        page={pageNumber}
        totalItems={filteredData.length}
        rowsPerPage={rowsPerPage}
        onPageChange={setPageNumber}
      />
    </div>
  );
}
