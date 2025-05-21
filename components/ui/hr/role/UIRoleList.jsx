"use client";

import UICustomTable from "@/components/other/UICustomTable";
import UICustomPagination from "@/components/other/UICustomPagination";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Folder, Search, Setting } from "@/components/icons/icons";
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

export default function UIRoleList({ data = [], error = "" }) {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  const roleName = session?.user?.roleName;
  const divisionName = session?.user?.divisionName;
  const canManage = roleName === "ผู้ดูแลระบบ" || divisionName === "บุคคล";

  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = useMemo(() => {
    const baseColumns = [
      { name: "ลำดับ", uid: "roleId" },
      { name: "ระดับตำแหน่ง", uid: "roleName" },
      { name: "สถานะการใช้งาน", uid: "roleStatus" },
    ];

    if (canManage) {
      baseColumns.push(
        { name: "สร้างโดย", uid: "createdBy" },
        { name: "สร้างเมื่อวันที่", uid: "roleCreateAt" },
        { name: "แก้ไขโดย", uid: "updatedBy" },
        { name: "แก้ไขเมื่อวันที่", uid: "roleUpdateAt" },
        { name: "การจัดการ", uid: "actions" }
      );
    }

    return baseColumns;
  }, [canManage]);

  const filteredData = useMemo(() => {
    let result = data;
    if (searchTerm.trim()) {
      result = result.filter((role) =>
        role.roleName?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (statusFilter !== "all") {
      result = result.filter(
        (role) => role.roleStatus?.toLowerCase() === statusFilter
      );
    }
    return result;
  }, [data, searchTerm, statusFilter]);

  useEffect(() => {
    setPageNumber(1);
  }, [searchTerm, statusFilter]);

  const handleAction = useCallback(
    (action, item) => {
      if (action === "edit") {
        router.push(`/role/${item.roleId}`);
      }
    },
    [router]
  );

  const renderCell = useCallback(
    (item, idx, colKey) => {
      switch (colKey) {
        case "roleId":
          return (pageNumber - 1) * rowsPerPage + idx + 1;
        case "roleStatus":
          return (
            <Button
              size="sm"
              color={
                item.roleStatus?.toLowerCase() === "active"
                  ? "success"
                  : "danger"
              }
              radius="lg"
              className="min-w-10 min-h-10 text-white"
            >
              {item.roleStatus?.toLowerCase() === "active"
                ? "เปิดใช้งาน"
                : "ปิดใช้งาน"}
            </Button>
          );
        case "createdBy":
          return item.RoleCreateBy
            ? `${item.RoleCreateBy.empFirstNameTH} ${item.RoleCreateBy.empLastNameTH}`
            : "-";
        case "updatedBy":
          return item.RoleUpdateBy
            ? `${item.RoleUpdateBy.empFirstNameTH} ${item.RoleUpdateBy.empLastNameTH}`
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
    <div className="flex flex-col items-center justify-start w-full h-full p-2 bg-white overflow-auto">
      <div className="flex flex-row items-center justify-between w-full p-2 gap-2">
        <div className="flex items-center justify-center w-full xl:w-6/12 h-full p-2 gap-2">
          <Input
            isClearable
            label="ค้นหา"
            placeholder="ค้นหาโดยข้อมูล ระดับตำแหน่ง"
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
              href="/role/create"
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
