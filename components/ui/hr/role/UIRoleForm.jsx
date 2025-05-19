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
            ข้อมูล ระดับตำแหน่งงาน
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="roleName"
              type="text"
              label="บทบาทหน้าที่"
              placeholder="Please Enter Data"
              size="md"
              variant="bordered"
              color="primary"
              radius="lg"
              value={formData.roleName || ""}
              onChange={handleInputChange("roleName")}
              isInvalid={!!errors.roleName}
              errorMessage={errors.roleName}
            />
          </div>
        </div>

        {isUpdate && (
          <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              <Select
                name="roleStatus"
                label="สถานะการใช้งาน"
                placeholder="Please Enter Data"
                size="md"
                variant="bordered"
                color="primary"
                radius="lg"
                value={formData.roleStatus || ""}
                selectedKeys={formData.roleStatus ? [formData.roleStatus] : []}
                onChange={handleInputChange("roleStatus")}
                isInvalid={!!errors.roleStatus}
                errorMessage={errors.roleStatus}
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
