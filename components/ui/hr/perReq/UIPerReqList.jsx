"use client";

import UICustomTable from "@/components/other/UICustomTable";
import UICustomPagination from "@/components/other/UICustomPagination";
import UIHeader from "@/components/other/UIHeader";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Folder, Setting, Document, Picture } from "@/components/icons/icons";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import toast from "react-hot-toast";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

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
  {
    name: "รอผู้จัดการฝ่ายทรัพยากรบุคคลอนุมัติ",
    uniqueIdentifier: "PendingHrApprove",
  },
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

export default function UIPerReqList({
  header,
  data = [],
  error = "",
  onExportPDF,
  onExportImages,
  onExportImagesAll,
  onGenerateRecruitLink,
}) {
  const { data: session, status } = useSession();
  if (status === "loading") return null;

  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = useMemo(
    () => [
      { name: "ลำดับ", uid: "perReqId" },
      { name: "ขออัตรากำลังคน", uid: "perReqDocumentId" },
      { name: "สถานะเอกสาร", uid: "perReqStatus" },
      { name: "สร้างโดย", uid: "createdBy" },
      { name: "สร้างเมื่อวันที่", uid: "perReqCreateAt" },
      { name: "แก้ไขโดย", uid: "updatedBy" },
      { name: "แก้ไขเมื่อวันที่", uid: "perReqUpdateAt" },
      { name: "ผู้จัดการฝ่ายอนุมัติ", uid: "perReqReasonManagerApproveBy" },
      {
        name: "ผู้จัดการฝ่ายอนุมัติวันที่",
        uid: "perReqReasonManagerApproveAt",
      },
      {
        name: "ผู้จัดการฝ่ายทรัพยากรบุคคลอนุมัติ",
        uid: "perReqReasonHrApproveBy",
      },
      {
        name: "ผู้จัดการฝ่ายทรัพยากรบุคคลอนุมัติวันนที่",
        uid: "perReqReasonHrApproveAt",
      },
      { name: "ใบขออัตรากำลังคน", uid: "perReqPdf" },
      { name: "รูปใบรับประกาศสมัครงาน", uid: "perReqImages" },
      { name: "การจัดการ", uid: "actions" },
    ],
    []
  );

  const filteredData = useMemo(() => {
    if (!session?.user?.id) return [];

    const currentUserId = Number(session.user.id);
    const roleName = session?.user?.roleName;
    const divisionName = session?.user?.divisionName;

    let result = data.filter((perReq) => {
      if (roleName === "ผู้ดูแลระบบ") return true;
      if (roleName === "ผู้จัดการฝ่าย" && divisionName === "ทรัพยากรบุคคล")
        return true;
      if (divisionName === "ทรัพยากรบุคคล") return true;
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
  }, [data, searchTerm, statusFilter, session?.user]);

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
      const currentUserId = Number(session.user.id);
      const roleName = session?.user?.roleName;
      const divisionName = session?.user?.divisionName;

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
              label: "รอผู้จัดการฝ่ายทรัพยากรบุคคลอนุมัติ",
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
              radius="full"
              className="min-w-10 min-h-10 text-white"
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
        case "perReqReasonManagerApproveBy":
          return item.PerReqManagerApproveBy
            ? `${item.PerReqManagerApproveBy.empFirstNameTH} ${item.PerReqManagerApproveBy.empLastNameTH}`
            : "-";
        case "perReqReasonHrApproveBy":
          return item.PerReqHrApproveBy
            ? `${item.PerReqHrApproveBy.empFirstNameTH} ${item.PerReqHrApproveBy.empLastNameTH}`
            : "-";
        case "perReqPdf": {
          const perReqId = item.perReqId;
          const isApproved = item.perReqStatus === "ApprovedSuccess";

          if (!isApproved || !perReqId) return "ยังไม่สามารถดาวน์โหลดได้";

          return (
            <Button
              size="lg"
              color="none"
              radius="full"
              className="text-primary"
              onPress={() => onExportPDF?.(perReqId)}
            >
              <Document />
            </Button>
          );
        }

        case "perReqImages": {
          const perReqId = item.perReqId;
          const isApproved = item.perReqStatus === "ApprovedSuccess";

          if (!isApproved || !perReqId) return "ยังไม่สามารถดาวน์โหลดได้";

          return (
            <Button
              size="lg"
              color="none"
              radius="full"
              className="text-primary"
              onPress={() => onExportImages?.(perReqId)}
            >
              <Picture />
            </Button>
          );
        }
        case "actions": {
          const isOwner = item.perReqCreateBy === currentUserId;
          const isManager =
            item.PerReqCreateBy?.empEmpEmployment?.[0]
              ?.empEmploymentParentId === currentUserId;
          const isPendingManager =
            item.perReqStatus === "PendingManagerApprove";
          const isPendingHr = item.perReqStatus === "PendingHrApprove";
          const isApproved = item.perReqStatus === "ApprovedSuccess";

          const canEdit =
            (roleName === "ผู้จัดการฝ่าย" &&
              divisionName === "ทรัพยากรบุคคล" &&
              isPendingHr) ||
            ((isOwner || isManager) && isPendingManager);

          return (
            <div className="flex items-center justify-center p-2 gap-2">
              {canEdit && (
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
              )}
              {isApproved && (
                <Button
                  size="sm"
                  radius="full"
                  color="secondary"
                  className="text-white"
                  onPress={() => onGenerateRecruitLink?.(item.perReqId)}
                >
                  สร้างลิงก์สมัครใหม่
                </Button>
              )}
            </div>
          );
        }

        default:
          return item[colKey] || "-";
      }
    },
    [handleAction, onExportPDF, pageNumber, rowsPerPage, session?.user]
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
              placeholder="ค้นหาโดยข้อมูล ขออัตรากำลังคน"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
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
              radius="full"
              className="flex items-center justify-center w-full h-full p-4 gap-2"
              startContent={<Folder />}
            >
              เพิ่ม
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

        <div className="flex w-full justify-end p-2">
          <Button
            color="primary"
            size="md"
            radius="full"
            onPress={onExportImagesAll}
            className="text-white"
          >
            ส่งออกรูปภาพทั้งหมด (ที่อนุมัติแล้ว)
          </Button>
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
