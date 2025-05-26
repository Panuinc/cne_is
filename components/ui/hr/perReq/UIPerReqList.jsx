"use client";

import UICustomTable from "@/components/other/UICustomTable";
import UICustomPagination from "@/components/other/UICustomPagination";
import UIHeader from "@/components/other/UIHeader";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Folder, Setting } from "@/components/icons/icons";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
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

export default function UIPerReqList({
  header,
  data = [],
  error = "",
  onApprove,
  onReject,
}) {
  const { data: sessionData, status } = useSession();
  if (status === "loading") return null;

  const router = useRouter();
  const { id: userId } = sessionData?.user || {};

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = useMemo(
    () => [
      { name: "ลำดับ", uid: "perReqId" },
      { name: "เลขที่รหัสใบร้องขอ", uid: "perReqDocumentId" },
      { name: "สถานะการใช้งาน", uid: "perReqStatus" },
      { name: "ผู้ร้องขอ", uid: "createdBy" },
      { name: "สร้างเมื่อวันที่", uid: "perReqCreateAt" },
      { name: "แก้ไขโดย", uid: "updatedBy" },
      { name: "แก้ไขเมื่อวันที่", uid: "perReqUpdateAt" },
      {
        name: "อนุมัติโดย : ผู้จัดการฝ่าย",
        uid: "perReqReasonManagerApproveBy",
      },
      { name: "อนุมัติเมื่อวันที่", uid: "perReqReasonManagerApproveAt" },
      {
        name: "อนุมัติโดย : ผู้จัดการฝ่ายบุคคล",
        uid: "perReqReasonHrApproveBy",
      },
      { name: "อนุมัติเมื่อวันที่", uid: "perReqReasonHrApproveAt" },
      { name: "การจัดการ", uid: "actions" },
    ],
    []
  );

  const filteredData = useMemo(() => {
    let result = data;
    if (searchTerm.trim()) {
      result = result.filter((perReq) =>
        perReq.perReqDocumentId
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }
    if (statusFilter !== "all") {
      result = result.filter(
        (perReq) => perReq.perReqStatus?.toLowerCase() === statusFilter
      );
    }
    return result;
  }, [data, searchTerm, statusFilter]);

  useEffect(() => {
    setPageNumber(1);
  }, [searchTerm, statusFilter]);

  const nextStatus = (item) =>
    item.perReqStatus === "PendingManagerApprove"
      ? "PendingHrApprove"
      : "ApprovedSuccess";

  const handleAction = useCallback(
    async (action, item) => {
      const mgrStage = item.perReqStatus === "PendingManagerApprove";

      if (action === "edit") {
        return router.push(`/perReq/${item.perReqId}`);
      }

      const newStatus = action === "approve" ? nextStatus(item) : "Cancel";
      const response =
        action === "approve"
          ? await onApprove(item, newStatus, userId, mgrStage)
          : await onReject(item, newStatus, userId, mgrStage);

      if (response.success) toast.success(response.message);
      else toast.error(response.message);
    },
    [router, userId, onApprove, onReject]
  );

  const renderCell = useCallback(
    (item, idx, colKey) => {
      switch (colKey) {
        case "perReqId":
          return (pageNumber - 1) * rowsPerPage + idx + 1;
        case "perReqStatus":
          const statusColorMap = {
            PendingManagerApprove: "secondary",
            PendingHrApprove: "secondary",
            ApprovedSuccess: "primary",
            Cancel: "danger",
          };
          const statusLabelMap = {
            PendingManagerApprove: "รอผู้จัดการฝ่ายอนุมัติ",
            PendingHrApprove: "รอผู้จัดการฝ่ายบุคคลอนุมัติ",
            ApprovedSuccess: "อนุมัติแล้ว",
            Cancel: "ยกเลิก",
          };
          const statusKey = item.perReqStatus || "Cancel";
          return (
            <Button
              size="sm"
              color={statusColorMap[statusKey] || "default"}
              radius="lg"
              className="text-white"
            >
              {statusLabelMap[statusKey] || "-"}
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
          const isOwner = String(item.perReqCreateBy) === String(userId);
          const canEdit =
            isOwner && item.perReqStatus === "PendingManagerApprove";
          const canApprove =
            !isOwner &&
            (item.perReqStatus === "PendingManagerApprove" ||
              item.perReqStatus === "PendingHrApprove");

          if (!canEdit && !canApprove) return null;

          return (
            <div className="flex items-center justify-center p-2 gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly variant="none" className="text-primary">
                    <Setting />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu onAction={(key) => handleAction(key, item)}>
                  {canEdit && <DropdownItem key="edit">แก้ไข</DropdownItem>}
                  {canApprove && (
                    <>
                      <DropdownItem key="approve">อนุมัติ</DropdownItem>
                      <DropdownItem key="reject">ปฏิเสธ</DropdownItem>
                    </>
                  )}
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return item[colKey] || "-";
      }
    },
    [handleAction, pageNumber, rowsPerPage, userId]
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
              label="สถานะการอนุมัติ"
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
