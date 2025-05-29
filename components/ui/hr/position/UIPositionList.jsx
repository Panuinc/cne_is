"use client";

import UICustomTable from "@/components/other/UICustomTable";
import UICustomPagination from "@/components/other/UICustomPagination";
import UIHeader from "@/components/other/UIHeader";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Folder, Setting, Document } from "@/components/icons/icons";
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

export default function UIPositionList({
  header,
  data = [],
  error = "",
  onExportPDF,
}) {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  const roleName = session?.user?.roleName;
  const divisionName = session?.user?.divisionName;

  const canManage = roleName === "ผู้ดูแลระบบ" || divisionName === "ทรัพยากรบุคคล";

  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [divisionFilter, setDivisionFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const divisionOptions = useMemo(() => {
    const divisions = Array.from(
      new Set(
        data
          .map((item) => item.PositionDivisionId?.divisionName)
          .filter(Boolean)
      )
    );
    return [
      { name: "ทั้งหมด", uniqueIdentifier: "all" },
      ...divisions.map((name) => ({ name, uniqueIdentifier: name })),
    ];
  }, [data]);

  const departmentOptions = useMemo(() => {
    const departments = Array.from(
      new Set(
        data
          .map((item) => item.PositionDepartmentId?.departmentName)
          .filter(Boolean)
      )
    );
    return [
      { name: "ทั้งหมด", uniqueIdentifier: "all" },
      ...departments.map((name) => ({ name, uniqueIdentifier: name })),
    ];
  }, [data]);

  const columns = useMemo(() => {
    const baseColumns = [
      { name: "ลำดับ", uid: "positionId" },
      { name: "ฝ่าย", uid: "divisionName" },
      { name: "แผนก", uid: "departmentName" },
      { name: "ตำแหน่งงาน (TH)", uid: "positionNameTH" },
      { name: "ตำแหน่งงาน (EN)", uid: "positionNameEN" },
      { name: "สถานะการใช้งาน", uid: "positionStatus" },
    ];

    if (canManage) {
      baseColumns.push(
        { name: "สร้างโดย", uid: "createdBy" },
        { name: "สร้างเมื่อวันที่", uid: "positionCreateAt" },
        { name: "แก้ไขโดย", uid: "updatedBy" },
        { name: "แก้ไขเมื่อวันที่", uid: "positionUpdateAt" },
        { name: "ใบกำหนดลักษณะงาน", uid: "jdPdf" },
        { name: "การจัดการ", uid: "actions" }
      );
    }

    return baseColumns;
  }, [canManage]);

  const filteredData = useMemo(() => {
    let result = data;
    if (searchTerm.trim()) {
      result = result.filter((position) =>
        position.positionNameTH
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }
    if (statusFilter !== "all") {
      result = result.filter(
        (position) => position.positionStatus?.toLowerCase() === statusFilter
      );
    }
    if (divisionFilter !== "all") {
      result = result.filter(
        (position) =>
          position.PositionDivisionId?.divisionName === divisionFilter
      );
    }
    if (departmentFilter !== "all") {
      result = result.filter(
        (position) =>
          position.PositionDepartmentId?.departmentName === departmentFilter
      );
    }
    return result;
  }, [data, searchTerm, statusFilter, divisionFilter, departmentFilter]);

  useEffect(() => {
    setPageNumber(1);
  }, [searchTerm, statusFilter, divisionFilter, departmentFilter]);

  const handleAction = useCallback(
    (action, item) => {
      if (action === "edit") {
        router.push(`/position/${item.positionId}`);
      } else if (action === "posJobDes") {
        const posJobDesId = item.positionIdPosJobDes?.[0]?.posJobDesId;
        if (posJobDesId) {
          router.push(`/posJobDes/${posJobDesId}`);
        } else {
          toast.error("ไม่พบข้อมูลใบกำหนดลักษณะงานของตำแหน่งนี้");
        }
      }
    },
    [router]
  );

  const renderCell = useCallback(
    (item, idx, colKey) => {
      switch (colKey) {
        case "positionId":
          return (pageNumber - 1) * rowsPerPage + idx + 1;
        case "positionStatus":
          return (
            <Button
              size="sm"
              color={
                item.positionStatus?.toLowerCase() === "active"
                  ? "primary"
                  : "danger"
              }
              radius="lg"
              className="min-w-10 min-h-10 text-white"
            >
              {item.positionStatus?.toLowerCase() === "active"
                ? "เปิดใช้งาน"
                : "ปิดใช้งาน"}
            </Button>
          );
        case "divisionName":
          return item.PositionDivisionId?.divisionName || "-";
        case "departmentName":
          return item.PositionDepartmentId?.departmentName || "-";
        case "createdBy":
          return item.PositionCreateBy
            ? `${item.PositionCreateBy.empFirstNameTH} ${item.PositionCreateBy.empLastNameTH}`
            : "-";
        case "updatedBy":
          return item.PositionUpdateBy
            ? `${item.PositionUpdateBy.empFirstNameTH} ${item.PositionUpdateBy.empLastNameTH}`
            : "-";
        case "jdPdf": {
          const posJobDesId = item.positionIdPosJobDes?.[0]?.posJobDesId;
          return (
            <Button
              size="lg"
              color="none"
              radius="lg"
              isDisabled={!posJobDesId}
              className="text-primary"
              onPress={() => onExportPDF?.(posJobDesId)}
            >
              <Document />
            </Button>
          );
        }
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
                  <DropdownItem key="posJobDes">ใบกำหนดลักษณะงาน</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return item[colKey] || "-";
      }
    },
    [handleAction, onExportPDF, pageNumber, rowsPerPage, canManage]
  );

  return (
    <>
      <UIHeader Header={header} />
      <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white shadow-md rounded-xl overflow-auto">
        <div className="flex flex-row items-center justify-between w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full xl:w-6/12 h-full p-2 gap-2">
            <Input
              isClearable
              label="ค้นหา"
              placeholder="ค้นหาโดยข้อมูล ตำแหน่งงาน"
              size="md"
              variant="underlined"
              color="none"
              radius="lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-center h-full p-2 gap-2">
            {canManage && (
              <Button
                as={Link}
                href="/position/create"
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

        <div className="flex flex-row items-center justify-start w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full xl:w-3/12 h-full p-2 gap-2">
            <UISelectFilter
              label="สถานะการใช้งาน"
              selectedValue={statusFilter}
              items={statusOptions}
              onChange={setStatusFilter}
            />
          </div>
          <div className="flex items-center justify-center w-full xl:w-3/12 h-full p-2 gap-2">
            <UISelectFilter
              label="ฝ่าย"
              selectedValue={divisionFilter}
              items={divisionOptions}
              onChange={setDivisionFilter}
            />
          </div>
          <div className="flex items-center justify-center w-full xl:w-3/12 h-full p-2 gap-2">
            <UISelectFilter
              label="แผนก"
              selectedValue={departmentFilter}
              items={departmentOptions}
              onChange={setDepartmentFilter}
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
    </>
  );
}
