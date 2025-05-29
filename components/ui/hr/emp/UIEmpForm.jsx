"use client";

import UIHeader from "@/components/other/UIHeader";

import React from "react";
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
        className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white shadow-md rounded-xl overflow-auto"
      >
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Select
              name="empTitle"
              label="คำนำหน้าชื่อ"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="none"
              radius="lg"
              value={formData.empTitle || ""}
              selectedKeys={formData.empTitle ? [formData.empTitle] : []}
              onChange={handleInputChange("empTitle")}
              isInvalid={!!errors.empTitle}
              errorMessage={errors.empTitle}
            >
              <SelectItem key="Mr" value="Mr">
                นาย
              </SelectItem>
              <SelectItem key="Mrs" value="Mrs">
                นาง
              </SelectItem>
              <SelectItem key="Ms" value="Ms">
                นางสาว
              </SelectItem>
            </Select>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="empFirstNameTH"
              type="text"
              label="ชื่อพนักงาน (TH)"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="none"
              radius="lg"
              value={formData.empFirstNameTH}
              onChange={handleInputChange("empFirstNameTH")}
              isInvalid={!!errors.empFirstNameTH}
              errorMessage={errors.empFirstNameTH}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="empLastNameTH"
              type="text"
              label="นามสกุลพนักงาน (TH)"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="none"
              radius="lg"
              value={formData.empLastNameTH}
              onChange={handleInputChange("empLastNameTH")}
              isInvalid={!!errors.empLastNameTH}
              errorMessage={errors.empLastNameTH}
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="empFirstNameEN"
              type="text"
              label="ชื่อพนักงาน (EN)"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="none"
              radius="lg"
              value={formData.empFirstNameEN}
              onChange={handleInputChange("empFirstNameEN")}
              isInvalid={!!errors.empFirstNameEN}
              errorMessage={errors.empFirstNameEN}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="empLastNameEN"
              type="text"
              label="นามสกุลพนักงาน (EN)"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="none"
              radius="lg"
              value={formData.empLastNameEN}
              onChange={handleInputChange("empLastNameEN")}
              isInvalid={!!errors.empLastNameEN}
              errorMessage={errors.empLastNameEN}
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="empEmail"
              type="email"
              label="อีเมลล์"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="none"
              radius="lg"
              value={formData.empEmail}
              onChange={handleInputChange("empEmail")}
              isInvalid={!!errors.empEmail}
              errorMessage={errors.empEmail}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="empTel"
              type="number"
              label="เบอร์โทรศัพท์"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="none"
              radius="lg"
              value={formData.empTel}
              onChange={handleInputChange("empTel")}
              isInvalid={!!errors.empTel}
              errorMessage={errors.empTel}
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="empIdCard"
              type="number"
              label="เลขบัตรประชาชน"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="none"
              radius="lg"
              value={formData.empIdCard}
              onChange={handleInputChange("empIdCard")}
              isInvalid={!!errors.empIdCard}
              errorMessage={errors.empIdCard}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="empBirthday"
              type="date"
              label="วันเกิด"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="none"
              radius="lg"
              value={formData.empBirthday}
              onChange={handleInputChange("empBirthday")}
              isInvalid={!!errors.empBirthday}
              errorMessage={errors.empBirthday}
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Select
              name="empCitizen"
              label="สัญชาติ"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="none"
              radius="lg"
              value={formData.empCitizen || ""}
              selectedKeys={formData.empCitizen ? [formData.empCitizen] : []}
              onChange={handleInputChange("empCitizen")}
              isInvalid={!!errors.empCitizen}
              errorMessage={errors.empCitizen}
            >
              <SelectItem key="Thai" value="Thai">
                ไทย
              </SelectItem>
              <SelectItem key="Cambodian" value="Cambodian">
                กัมพูชา
              </SelectItem>
              <SelectItem key="Lao" value="Lao">
                ลาว
              </SelectItem>
              <SelectItem key="Burmese" value="Burmese">
                พม่า
              </SelectItem>
              <SelectItem key="Vietnam" value="Vietnam">
                เวียดนาม
              </SelectItem>
            </Select>
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Select
              name="empGender"
              label="เพศ"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="bordered"
              color="none"
              radius="lg"
              value={formData.empGender || ""}
              selectedKeys={formData.empGender ? [formData.empGender] : []}
              onChange={handleInputChange("empGender")}
              isInvalid={!!errors.empGender}
              errorMessage={errors.empGender}
            >
              <SelectItem key="Male" value="Male">
                ชาย
              </SelectItem>
              <SelectItem key="FeMale" value="FeMale">
                หญิง
              </SelectItem>
            </Select>
          </div>
        </div>

        {isUpdate && (
          <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              <Select
                name="empStatus"
                label="สถานะการใช้งาน"
                placeholder="กรุณากรอกข้อมูล"
                size="md"
                variant="bordered"
                color="none"
                radius="lg"
                value={formData.empStatus || ""}
                selectedKeys={formData.empStatus ? [formData.empStatus] : []}
                onChange={handleInputChange("empStatus")}
                isInvalid={!!errors.empStatus}
                errorMessage={errors.empStatus}
              >
                <SelectItem key="InActive" value="InActive">
                  ลาออก
                </SelectItem>
                <SelectItem key="Active" value="Active">
                  คงอยู่
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
