"use client";

import UIHeader from "@/components/other/UIHeader";

import React from "react";
import { Input, Button, Select, SelectItem } from "@heroui/react";

export default function UIPerReqForm({
  header,
  formRef,
  onSubmit,
  errors,
  formData,
  handleInputChange,
  isUpdate,
  operatedBy,
}) {
  return (
    <>
      <UIHeader Header={header} />
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white overflow-auto"
      >
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="perReqName"
              type="text"
              label="ขออัตรากำลังคน"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="none"
              radius="lg"
              value={formData.perReqName || ""}
              onChange={handleInputChange("perReqName")}
              isInvalid={!!errors.perReqName}
              errorMessage={errors.perReqName}
            />
          </div>
        </div>

        {isUpdate && (
          <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              <Select
                name="perReqStatus"
                label="สถานะการใช้งาน"
                placeholder="กรุณากรอกข้อมูล"
                size="md"
                variant="bordered"
                color="none"
                radius="lg"
                value={formData.perReqStatus || ""}
                selectedKeys={formData.perReqStatus ? [formData.perReqStatus] : []}
                onChange={handleInputChange("perReqStatus")}
                isInvalid={!!errors.perReqStatus}
                errorMessage={errors.perReqStatus}
              >
                <SelectItem key="Active" value="Active">
                  เปิดใช้งาน
                </SelectItem>
                <SelectItem key="InActive" value="InActive">
                  ปิดใช้งาน
                </SelectItem>
              </Select>
            </div>
          </div>
        )}

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              type="text"
              label="ดำเนินการโดย"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="none"
              radius="lg"
              value={operatedBy}
              readOnly
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-end w-full h-full p-2 gap-2">
            <Button
              color="primary"
              size="md"
              radius="lg"
              type="submit"
              className="flex items-center justify-center w-2/12 h-full p-4 gap-2"
            >
              บันทึก
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
