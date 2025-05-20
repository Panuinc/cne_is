"use client";

import React from "react";
import UIHeader from "@/components/other/UIHeader";
import { Input, Button, Select, SelectItem } from "@heroui/react";

export default function UIRoleForm({
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
        <div className="flex flex-col xl:flex-row items-center justify-start w-full p-2 gap-2">
          <div className="flex items-center justify-center h-full p-4 gap-2 bg-primary/75 border-2 border-primary text-white rounded-lg">
            ข้อมูล พนักงาน
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="empFirstName"
              type="text"
              label="ชื่อ (TH)"
              placeholder="Please Enter Data"
              size="md"
              variant="bordered"
              color="primary"
              radius="lg"
              value={formData.empFirstName || ""}
              onChange={handleInputChange("empFirstName")}
              isInvalid={!!errors.empFirstName}
              errorMessage={errors.empFirstName}
            />
          </div>
        </div>

        {isUpdate && (
          <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              <Select
                name="empStatus"
                label="สถานะการใช้งาน"
                placeholder="Please Enter Data"
                size="md"
                variant="bordered"
                color="primary"
                radius="lg"
                value={formData.empStatus || ""}
                selectedKeys={formData.empStatus ? [formData.empStatus] : []}
                onChange={handleInputChange("empStatus")}
                isInvalid={!!errors.empStatus}
                errorMessage={errors.empStatus}
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
              placeholder="Please Enter Data"
              size="md"
              variant="flat"
              color="default"
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
