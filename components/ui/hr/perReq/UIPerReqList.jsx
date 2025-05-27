"use client";

import UICustomTable from "@/components/other/UICustomTable";
import UICustomPagination from "@/components/other/UICustomPagination";
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

const statusOptions = [
  { name: "ทั้งหมด", uniqueIdentifier: "all" },
  { name: "รอผู้จัดการฝ่ายอนุมัติ", uniqueIdentifier: "PendingManagerApprove" },
  { name: "รอผู้จัดการฝ่ายบุคคลอนุมัติ", uniqueIdentifier: "PendingHrApprove" },
  { name: "อนุมัติแล้ว", uniqueIdentifier: "ApprovedSuccess" },
  { name: "ยกเลิก", uniqueIdentifier: "Cancel" },
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

export default function UIPerReqList({ header, data = [], error = "" }) {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = useMemo(() => {
    return [
      { name: "ลำดับ", uid: "perReqId" },
      { name: "ขออัตรากำลังคน", uid: "perReqDocumentId" },
      { name: "สถานะเอกสาร", uid: "perReqStatus" },
      { name: "สร้างโดย", uid: "createdBy" },
      { name: "สร้างเมื่อวันที่", uid: "perReqCreateAt" },
      { name: "แก้ไขโดย", uid: "updatedBy" },
      { name: "แก้ไขเมื่อวันที่", uid: "perReqUpdateAt" },
      { name: "การจัดการ", uid: "actions" },
    ];
  }, []);

  const filteredData = useMemo(() => {
    if (!session?.user?.id) return [];

    const currentUserId = Number(session.user.id);

    let result = data.filter((perReq) => {
      if (perReq.perReqCreateBy === currentUserId) return true;

      const empEmployment = perReq.PerReqCreateBy?.empEmpEmployment?.[0];
      if (empEmployment?.empEmploymentParentId === currentUserId) return true;

      return false;
    });

    if (searchTerm.trim()) {
      result = result.filter((perReq) =>
        perReq.perReqDocumentId
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      result = result.filter((perReq) => perReq.perReqStatus === statusFilter);
    }

    return result;
  }, [data, searchTerm, statusFilter, session?.user?.id]);

  useEffect(() => {
    setPageNumber(1);
  }, [searchTerm, statusFilter]);

  const handleAction = useCallback(
    (action, item) => {
      if (action === "edit") {
        router.push(`/perReq/${item.perReqId}`);
      }
    },
    [router]
  );

  const renderCell = useCallback(
    (item, idx, colKey) => {
      switch (colKey) {
        case "perReqId":
          return (pageNumber - 1) * rowsPerPage + idx + 1;
        case "perReqStatus":
          const status = item.perReqStatus;
          const statusMap = {
            PendingManagerApprove: {
              label: "รอผู้จัดการฝ่ายอนุมัติ",
              color: "warning",
            },
            PendingHrApprove: {
              label: "รอผู้จัดการฝ่ายบุคคลอนุมัติ",
              color: "secondary",
            },
            ApprovedSuccess: { label: "อนุมัติแล้ว", color: "success" },
            Cancel: { label: "ยกเลิก", color: "danger" },
          };
          const { label, color } = statusMap[status] || {
            label: status,
            color: "default",
          };
          return (
            <Button
              size="sm"
              color={color}
              radius="lg"
              className="min-w-10 min-h-10 text-dark"
            >
              {label}
            </Button>
          );
        case "createdBy":
          return item.PerReqCreateBy
            ? `${item.PerReqCreateBy.empFirstNameTH} ${item.PerReqCreateBy.empLastNameTH}`
            : "-";
        case "updatedBy":
          return item.PerReqUpdateBy
            ? `${item.PerReqUpdateBy.empFirstNameTH} ${item.PerReqUpdateBy.empLastNameTH}`
            : "-";
        case "actions":
          const currentUserId = Number(session.user.id);
          const isOwner = item.perReqCreateBy === currentUserId;
          const isManager =
            item.PerReqCreateBy?.empEmpEmployment?.[0]
              ?.empEmploymentParentId === currentUserId;
          const isPending = item.perReqStatus === "PendingManagerApprove";

          if ((isOwner || isManager) && isPending) {
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
          } else {
            return null;
          }
        default:
          return item[colKey] || "-";
      }
    },
    [handleAction, pageNumber, rowsPerPage]
  );

  return (
    <>
      <UIHeader Header={header} />
      <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white overflow-auto">
        <div className="flex flex-row items-center justify-between w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full xl:w-6/12 h-full p-2 gap-2">
            <Input
              isClearable
              label="ค้นหา"
              placeholder="ค้นหาโดยข้อมูล ขออัตรากำลังคน"
              size="md"
              variant="bordered"
              color="none"
              radius="lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center h-full p-2 gap-2">
            <Button
              as={Link}
              href="/perReq/create"
              color="primary"
              size="md"
              radius="lg"
              className="flex items-center justify-center w-full h-full p-4 gap-2"
              startContent={<Folder />}
            >
              เพิ่มใหม่
            </Button>
          </div>
        </div>

        <div className="flex flex-row items-center justify-start w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full xl:w-3/12 h-full p-2 gap-2">
            <UISelectFilter
              label="สถานะเอกสาร"
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
