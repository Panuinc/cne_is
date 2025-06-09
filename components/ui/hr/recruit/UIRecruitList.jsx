"use client";

import UICustomPagination from "@/components/other/UICustomPagination";
import UICustomTable from "@/components/other/UICustomTable";
import UIHeader from "@/components/other/UIHeader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Folder, Setting } from "@/components/icons/icons";
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

const completionOptions = [
  { name: "ทั้งหมด", uniqueIdentifier: "all" },
  { name: "นำส่งใบสมัคร", uniqueIdentifier: "Pending" },
  { name: "ผู้สมัครกรอกใบสมัครแล้วเสร็จ", uniqueIdentifier: "Submitted" },
  { name: "นัดสัมภาษณ์", uniqueIdentifier: "Interviewing" },
  { name: "ไม่ผ่าน", uniqueIdentifier: "Rejected" },
  { name: "ได้รับเลือก", uniqueIdentifier: "Hired" },
  { name: "เก็บไว้พิจารณา", uniqueIdentifier: "Considered" },
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
    size="md"
    variant="underlined"
    color="none"
    radius="full"
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

export default function UIRecruitList({ header, data = [], error = "" }) {
  const { data: session, status } = useSession();
  if (status === "loading") return null;

  const roleName = session?.user?.roleName;
  const divisionName = session?.user?.divisionName;
  const canManage =
    roleName === "ผู้ดูแลระบบ" || divisionName === "ทรัพยากรบุคคล";

  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [completionFilter, setCompletionFilter] = useState("all");
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = useMemo(() => {
    const baseColumns = [
      { name: "ลำดับ", uid: "recruitId" },
      { name: "ใบสมัครงาน", uid: "recruitFullNameTh" },
      { name: "ตำแหน่งที่ต้องการ", uid: "positionNameTH" },
      { name: "เลขที่เอกสาร", uid: "perReqDocumentId" },
      { name: "สถานะการใช้งาน", uid: "recruitStatus" },
    ];
    if (canManage) {
      baseColumns.push(
        { name: "สร้างโดย", uid: "createdBy" },
        { name: "สร้างเมื่อวันที่", uid: "recruitCreateAt" },
        { name: "แก้ไขโดย", uid: "updatedBy" },
        { name: "แก้ไขเมื่อวันที่", uid: "recruitUpdateAt" },
        { name: "การจัดการ", uid: "actions" }
      );
    }
    return baseColumns;
  }, [canManage]);

  const filteredData = useMemo(() => {
    let result = data;

    if (searchTerm.trim()) {
      result = result.filter((recruit) =>
        recruit.recruitFullNameTh
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    if (completionFilter !== "all") {
      result = result.filter(
        (recruit) => recruit.recruitStatus === completionFilter
      );
    }

    return result;
  }, [data, searchTerm, completionFilter]);

  useEffect(() => {
    setPageNumber(1);
  }, [searchTerm, completionFilter]);

  const handleAction = useCallback(
    (action, item) => {
      if (action === "edit") {
        router.push(`/recruit/${item.recruitId}`);
      }
    },
    [router]
  );

  const renderCell = useCallback(
    (item, idx, colKey) => {
      switch (colKey) {
        case "recruitId":
          return (pageNumber - 1) * rowsPerPage + idx + 1;
        case "recruitFullNameTh":
          return (
            <Link
              href={`/apply/${item.applySlug}`}
              className="text-blue-600 underline hover:text-blue-800"
              title={`ลิงก์: /apply/${item.applySlug}`}
            >
              {item.recruitFullNameTh?.trim() ||
                `คลิกเพื่อดูใบสมัคร ${item.recruitFullNameTh}`}
            </Link>
          );
        case "positionNameTH":
          return item.recruitPerReq?.PerReqPositionId?.positionNameTH || "-";
        case "perReqDocumentId":
          return item.recruitPerReq?.perReqDocumentId || "-";
        case "recruitStatus": {
          const statusMap = {
            Pending: { label: "นำส่งใบสมัคร", color: "warning" },
            Submitted: {
              label: "ผู้สมัครกรอกใบสมัครแล้วเสร็จ",
              color: "primary",
            },
            Interviewing: { label: "นัดสัมภาษณ์", color: "secondary" },
            Rejected: { label: "ไม่ผ่าน", color: "danger" },
            Hired: { label: "ได้รับเลือก", color: "success" },
            Considered: { label: "เก็บไว้พิจารณา", color: "default" },
          };

          const status = item.recruitStatus;
          const statusInfo = statusMap[status] || {
            label: "-",
            color: "default",
          };

          return (
            <Button
              size="sm"
              color={statusInfo.color}
              radius="full"
              className="min-w-10 min-h-10 text-white"
            >
              {statusInfo.label}
            </Button>
          );
        }
        case "createdBy":
          return item.RecruitCreateBy
            ? `${item.RecruitCreateBy.empFirstNameTH} ${item.RecruitCreateBy.empLastNameTH}`
            : "-";
        case "updatedBy":
          return item.RecruitUpdateBy
            ? `${item.RecruitUpdateBy.empFirstNameTH} ${item.RecruitUpdateBy.empLastNameTH}`
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
    <>
      <UIHeader Header={header} />
      <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white shadow-md rounded-3xl overflow-auto">
        <div className="flex flex-row items-center justify-between w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full xl:w-6/12 h-full p-2 gap-2">
            <Input
              isClearable
              label="ค้นหา"
              placeholder="ค้นหาโดยข้อมูล ระดับตำแหน่ง"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center h-full p-2 gap-2">
            {canManage && (
              <Button
                as={Link}
                href="/recruit/create"
                color="primary"
                size="md"
                radius="full"
                className="flex items-center justify-center w-full h-full p-4 gap-2"
                startContent={<Folder />}
              >
                เพิ่ม
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-row items-center justify-start w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full xl:w-3/12 h-full p-2 gap-2">
            <UISelectFilter
              label="สถานะใบสมัคร"
              selectedValue={completionFilter}
              items={completionOptions}
              onChange={setCompletionFilter}
            />
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
              variant="underlined"
              color="none"
              radius="full"
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
    </>
  );
}
