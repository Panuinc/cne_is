"use client";

import UICustomPagination from "@/components/other/UICustomPagination";
import UICustomTable from "@/components/other/UICustomTable";
import UIHeader from "@/components/other/UIHeader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Setting } from "@/components/icons/icons";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import {
  Button,
  Select,
  SelectItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import thLocale from "@fullcalendar/core/locales/th";

const completionOptions = [
  { name: "ทั้งหมด", uniqueIdentifier: "all" },
  { name: "ยังไม่กรอก/ยังไม่ส่งใบสมัคร", uniqueIdentifier: "Pending" },
  { name: "ส่งใบสมัครแล้ว", uniqueIdentifier: "Submitted" },
  { name: "นัดสัมภาษณ์", uniqueIdentifier: "Interviewing" },
  { name: "สัมภาษณ์ผ่าน", uniqueIdentifier: "PassedInterview" },
  { name: "สัมภาษณ์ไม่ผ่าน", uniqueIdentifier: "FailedInterview" },
  { name: "เก็บไว้พิจารณา", uniqueIdentifier: "Considered" },
  { name: "ปฏิเสธ", uniqueIdentifier: "Rejected" },
  { name: "รับเข้าทำงาน", uniqueIdentifier: "Hired" },
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
  const [completionFilter, setCompletionFilter] = useState("all");
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = useMemo(() => {
    const baseColumns = [
      { name: "ลำดับ", uid: "recruitId" },
      { name: "ใบสมัครงาน", uid: "recruitDetailFullNameTh" },
      { name: "เลขที่เอกสารอ้างอิง", uid: "perReqDocumentId" },
      { name: "ตำแหน่งที่เปิดรับสมัคร", uid: "positionNameTH" },
      { name: "สถานะการใช้งาน", uid: "recruitStatus" },
    ];
    if (canManage) {
      baseColumns.push(
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
    if (completionFilter !== "all") {
      result = result.filter(
        (recruit) => recruit.recruitStatus === completionFilter
      );
    }
    return result;
  }, [data, completionFilter]);

  useEffect(() => {
    setPageNumber(1);
  }, [completionFilter]);

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
        case "recruitDetailFullNameTh":
          return (
            <Link
              href={item.applySlug ? `/apply/${item.applySlug}` : "#"}
              target={item.applySlug ? "_blank" : undefined}
              className="text-blue-600 underline hover:text-blue-800"
              title={
                item.applySlug
                  ? `ลิงก์: /apply/${item.applySlug}`
                  : "ยังไม่มีลิงก์ใบสมัคร"
              }
            >
              {item.recruitDetail?.recruitDetailFullNameTh?.trim()
                ? item.recruitDetail.recruitDetailFullNameTh.trim()
                : "คลิกเพื่อดูใบสมัคร"}
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

  const interviewEvents = useMemo(() => {
    return data
      .filter(
        (item) =>
          item.recruitStatus === "Interviewing" && item.recruitInterviewDate
      )
      .map((item) => ({
        title: item.recruitDetail?.recruitDetailFullNameTh || "ไม่ระบุชื่อ",
        date: item.recruitInterviewDate,
      }));
  }, [data]);

  return (
    <>
      <UIHeader Header={header} />

      <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white shadow-md rounded-3xl overflow-auto">
        <div className="w-full p-2 gap-2">
          <h2 className="text-xl font-bold mb-4">ตารางนัดสัมภาษณ์</h2>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={interviewEvents}
            height="auto"
            locale={thLocale} 
          />
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
