"use client";

import UIHeader from "@/components/other/UIHeader";
import React from "react";
import Image from "next/image";
import { Input, Button, Select, SelectItem, Textarea } from "@heroui/react";

export default function UIPosJobDes({
  header,
  formRef,
  onSubmit,
  errors,
  formData,
  handleInputChange,
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
        <div className="flex flex-row items-center justify-center w-full p-2 gap-2 border-b-2 border-default">
          <div className="flex flex-col items-center justify-center w-3/12 h-full p-2 gap-2">
            <Image
              src="/logoCompany/com-1.png"
              alt="com-1"
              width={100}
              height={100}
              priority
            />
            บริษัท ชาญนครวิศวกรรม จำกัด
          </div>
          <div className="flex items-center justify-center w-9/12 h-full p-2 gap-2">
            ใบกำหนดลักษณะงาน (Job Description)
          </div>
        </div>

        {[
          {
            label: "ตำแหน่ง",
            value: formData.PosJobDesPositionId?.positionNameTH,
          },
          {
            label: "สังกัดฝ่าย",
            value:
              formData.PosJobDesPositionId?.PositionDivisionId?.divisionName,
          },
          {
            label: "สังกัดแผนก",
            value:
              formData.PosJobDesPositionId?.PositionDepartmentId
                ?.departmentName,
          },
          {
            label: "ผู้บังคับบัญชา",
            value: `หัวหน้าแผนก/ผู้ช่วยผู้จัดการฝ่าย/ผู้จัดการฝ่าย ${formData.PosJobDesPositionId?.PositionDivisionId?.divisionName}`,
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-row items-center justify-center w-full p-2 gap-2"
          >
            <div className="flex items-center justify-start w-3/12 h-full p-2 gap-2">
              {item.label}
            </div>
            <div className="flex items-center justify-start w-9/12 h-full p-2 gap-2 border-b-2 border-default">
              {item.value}
            </div>
          </div>
        ))}

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 bg-default border-b-2 border-default">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            คุณสมบัติ (Qualification)
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
              <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2">
                อายุ
              </div>
              <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2">
                <Input
                  name="posJobDesAge"
                  label="อายุ"
                  placeholder="กรุณากรอกข้อมูล"
                  size="md"
                  variant="bordered"
                  color="primary"
                  radius="lg"
                  value={formData.posJobDesAge || ""}
                  onChange={handleInputChange("posJobDesAge")}
                  isInvalid={!!errors.posJobDesAge}
                  errorMessage={errors.posJobDesAge}
                />
              </div>
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
              <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2">
                เพศ
              </div>
              <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2">
                <Select
                  name="posJobDesSex"
                  label="เพศ"
                  placeholder="กรุณากรอกข้อมูล"
                  size="md"
                  variant="bordered"
                  color="primary"
                  radius="lg"
                  selectedKeys={
                    formData.posJobDesSex ? [formData.posJobDesSex] : []
                  }
                  onChange={handleInputChange("posJobDesSex")}
                  isInvalid={!!errors.posJobDesSex}
                  errorMessage={errors.posJobDesSex}
                >
                  <SelectItem key="Male" value="Male">
                    ชาย
                  </SelectItem>
                  <SelectItem key="FeMale" value="FeMale">
                    หญิง
                  </SelectItem>
                  <SelectItem key="Male/FeMale" value="Male/FeMale">
                    ชาย/หญิง
                  </SelectItem>
                </Select>
              </div>
            </div>
          </div>

          {["การศึกษา", "ทักษะ", "ประสบการณ์"].map((label, idx) => (
            <div
              key={idx}
              className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2"
            >
              <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2">
                {label}
              </div>
              <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2">
                <Textarea
                  name={`posJobDes${
                    label === "การศึกษา"
                      ? "Educations"
                      : label === "ทักษะ"
                      ? "Skill"
                      : "Experience"
                  }`}
                  placeholder={`1. ...\n2. ...\n3. ...`}
                  size="md"
                  variant="bordered"
                  color="primary"
                  radius="lg"
                  minRows={4}
                  value={
                    formData[
                      `posJobDes${
                        label === "การศึกษา"
                          ? "Educations"
                          : label === "ทักษะ"
                          ? "Skill"
                          : "Experience"
                      }`
                    ] || ""
                  }
                  onChange={handleInputChange(
                    `posJobDes${
                      label === "การศึกษา"
                        ? "Educations"
                        : label === "ทักษะ"
                        ? "Skill"
                        : "Experience"
                    }`
                  )}
                  isInvalid={
                    !!errors[
                      `posJobDes${
                        label === "การศึกษา"
                          ? "Educations"
                          : label === "ทักษะ"
                          ? "Skill"
                          : "Experience"
                      }`
                    ]
                  }
                  errorMessage={
                    errors[
                      `posJobDes${
                        label === "การศึกษา"
                          ? "Educations"
                          : label === "ทักษะ"
                          ? "Skill"
                          : "Experience"
                      }`
                    ]
                  }
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 bg-default border-b-2 border-default">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            บทบาทและหน้าที่ความรับผิดชอบ (Responsibility)
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Textarea
              name="posJobDesResponsibility"
              placeholder={`1. ...\n2. ...\n3. ...`}
              size="md"
              variant="bordered"
              color="primary"
              radius="lg"
              minRows={4}
              value={formData.posJobDesResponsibility || ""}
              onChange={handleInputChange("posJobDesResponsibility")}
              isInvalid={!!errors.posJobDesResponsibility}
              errorMessage={errors.posJobDesResponsibility}
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
