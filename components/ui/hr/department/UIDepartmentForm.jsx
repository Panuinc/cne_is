"use client";

import UIHeader from "@/components/other/UIHeader";

import React from "react";
import { Input, Button, Select, SelectItem } from "@heroui/react";

export default function UIDepartmentForm({
  header,
  formRef,
  onSubmit,
  errors,
  formData,
  handleInputChange,
  isUpdate,
  operatedBy,
  divisionOptions = [],
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
            <Select
              name="departmentDivisionId"
              label="ฝ่าย"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="primary"
              radius="lg"
              isDisabled={isUpdate}
              selectedKeys={
                formData.departmentDivisionId
                  ? [String(formData.departmentDivisionId)]
                  : []
              }
              isInvalid={!!errors.departmentDivisionId}
              errorMessage={errors.departmentDivisionId}
              onChange={handleInputChange("departmentDivisionId")}
            >
              {divisionOptions.map((div) => (
                <SelectItem key={div.divisionId} value={String(div.divisionId)}>
                  {div.divisionName}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="departmentName"
              type="text"
              label="แผนก"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="primary"
              radius="lg"
              value={formData.departmentName || ""}
              onChange={handleInputChange("departmentName")}
              isInvalid={!!errors.departmentName}
              errorMessage={errors.departmentName}
            />
          </div>
        </div>

        {isUpdate && (
          <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              <Select
                name="departmentStatus"
                label="สถานะการใช้งาน"
                placeholder="กรุณากรอกข้อมูล"
                size="md"
                variant="bordered"
                color="primary"
                radius="lg"
                value={formData.departmentStatus || ""}
                selectedKeys={
                  formData.departmentStatus ? [formData.departmentStatus] : []
                }
                onChange={handleInputChange("departmentStatus")}
                isInvalid={!!errors.departmentStatus}
                errorMessage={errors.departmentStatus}
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
              color="primary"
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
