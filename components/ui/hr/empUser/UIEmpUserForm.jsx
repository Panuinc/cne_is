"use client";

import UIHeader from "@/components/other/UIHeader";

import React from "react";
import { Input, Button } from "@heroui/react";

export default function UIEmpUserForm({
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
        className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white shadow-md rounded-xl overflow-auto"
      >
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="empUserUsername"
              type="text"
              label="ชื่อบัญชี"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="underlined"
              color="none"
              radius="lg"
              value={formData.empUserUsername || ""}
              onChange={handleInputChange("empUserUsername")}
              isInvalid={!!errors.empUserUsername}
              errorMessage={errors.empUserUsername}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="empUserPassword"
              type="password"
              label="รหัสผ่าน"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="underlined"
              color="none"
              radius="lg"
              value={formData.empUserPassword || ""}
              onChange={handleInputChange("empUserPassword")}
              isInvalid={!!errors.empUserPassword}
              errorMessage={errors.empUserPassword}
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              type="text"
              label="ดำเนินการโดย"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="underlined"
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
