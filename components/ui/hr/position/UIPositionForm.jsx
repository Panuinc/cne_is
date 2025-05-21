"use client";

import React from "react";
import UIHeader from "@/components/other/UIHeader";
import { Input, Button, Select, SelectItem } from "@heroui/react";

export default function UIPositionForm({
  header,
  formRef,
  onSubmit,
  errors,
  formData,
  handleInputChange,
  isUpdate,
  operatedBy,
  divisionOptions = [],
  departmentOptions = [],
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
            ข้อมูล ตำแหน่งงาน
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Select
              name="positionDivisionId"
              label="ฝ่าย"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="primary"
              radius="lg"
              isDisabled={isUpdate}
              selectedKeys={
                formData.positionDivisionId
                  ? [String(formData.positionDivisionId)]
                  : []
              }
              isInvalid={!!errors.positionDivisionId}
              errorMessage={errors.positionDivisionId}
              onChange={(e) => handleInputChange("positionDivisionId")(e)}
            >
              {divisionOptions.map((div) => (
                <SelectItem key={div.divisionId} value={String(div.divisionId)}>
                  {div.divisionName}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Select
              name="positionDepartmentId"
              label="แผนก"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="primary"
              radius="lg"
              isDisabled={!formData.positionDivisionId || isUpdate}
              selectedKeys={
                formData.positionDepartmentId
                  ? [String(formData.positionDepartmentId)]
                  : []
              }
              isInvalid={!!errors.positionDepartmentId}
              errorMessage={errors.positionDepartmentId}
              onChange={(e) => handleInputChange("positionDepartmentId")(e)}
            >
              {departmentOptions.map((dept) => (
                <SelectItem
                  key={dept.departmentId}
                  value={String(dept.departmentId)}
                >
                  {dept.departmentName}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="positionNameTH"
              type="text"
              label="ตำแหน่งงาน (TH)"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="primary"
              radius="lg"
              value={formData.positionNameTH || ""}
              onChange={handleInputChange("positionNameTH")}
              isInvalid={!!errors.positionNameTH}
              errorMessage={errors.positionNameTH}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="positionNameEN"
              type="text"
              label="ตำแหน่งงาน (EN)"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="primary"
              radius="lg"
              value={formData.positionNameEN || ""}
              onChange={handleInputChange("positionNameEN")}
              isInvalid={!!errors.positionNameEN}
              errorMessage={errors.positionNameEN}
            />
          </div>
        </div>

        {isUpdate && (
          <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              <Select
                name="positionStatus"
                label="สถานะการใช้งาน"
                placeholder="กรุณากรอกข้อมูล"
                size="md"
                variant="bordered"
                color="primary"
                radius="lg"
                value={formData.positionStatus || ""}
                selectedKeys={
                  formData.positionStatus ? [formData.positionStatus] : []
                }
                onChange={handleInputChange("positionStatus")}
                isInvalid={!!errors.positionStatus}
                errorMessage={errors.positionStatus}
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
              variant="flat"
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
