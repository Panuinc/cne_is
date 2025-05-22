"use client";

import UIHeader from "@/components/other/UIHeader";

import React from "react";
import { Input, Button, Select, SelectItem, Checkbox } from "@heroui/react";
import Image from "next/image";

export default function UIPerReqForm({
  header,
  formRef,
  onSubmit,
  cancelRef,
  errors,
  formData,
  handleInputChange,
  isUpdate,
  operatedBy,
  signature,
  divisionOptions = [],
  departmentOptions = [],
  positionOptions = [],
}) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <UIHeader Header={header} />
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark bg-white overflow-auto"
      >
        <div className="flex xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-3/12 h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Image
                src="/logoCompany/com-1.png"
                alt="com-1"
                width={100}
                height={100}
                priority
              />
            </div>
            <div className="xl:flex hidden items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              CHANNAKORN
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-9/12 h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              ใบขออนุมัติอัตรากำลังคน
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              (Personnel Request)
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              วันที่ร้องขอ
            </div>
            <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              {formattedDate}
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              วันที่ต้องการ
            </div>
            <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="perReqDesiredDate"
                type="date"
                aria-label="วันที่ต้องการ"
                placeholder="Please Enter Data"
                size="md"
                variant="bordered"
                color="none"
                radius="lg"
                value={formData.perReqDesiredDate || ""}
                onChange={handleInputChange("perReqDesiredDate")}
                isInvalid={!!errors.perReqDesiredDate}
                errorMessage={errors.perReqDesiredDate}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              ฝ่าย
            </div>
            <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              <Select
                name="perReqDivisionId"
                aria-label="ฝ่าย"
                placeholder="Please Enter Data"
                size="md"
                variant="bordered"
                color="none"
                radius="lg"
                selectedKeys={
                  formData.perReqDivisionId
                    ? [String(formData.perReqDivisionId)]
                    : []
                }
                onChange={handleInputChange("perReqDivisionId")}
                isInvalid={!!errors.perReqDivisionId}
                errorMessage={errors.perReqDivisionId}
              >
                {divisionOptions.map((div) => (
                  <SelectItem
                    key={div.divisionId}
                    value={String(div.divisionId)}
                  >
                    {div.divisionName}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              แผนก
            </div>
            <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              <Select
                name="perReqDepartmentId"
                aria-label="แผนก"
                placeholder="Please Enter Data"
                size="md"
                variant="bordered"
                color="none"
                radius="lg"
                isDisabled={!formData.perReqDivisionId}
                selectedKeys={
                  formData.perReqDepartmentId
                    ? [String(formData.perReqDepartmentId)]
                    : []
                }
                onChange={handleInputChange("perReqDepartmentId")}
                isInvalid={!!errors.perReqDepartmentId}
                errorMessage={errors.perReqDepartmentId}
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
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              ตำแหน่ง
            </div>
            <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              <Select
                name="perReqPositionId"
                aria-label="ตำแหน่ง"
                placeholder="Please Enter Data"
                size="md"
                variant="bordered"
                color="none"
                radius="lg"
                isDisabled={
                  !formData.perReqDivisionId || !formData.perReqDepartmentId
                }
                selectedKeys={
                  formData.perReqPositionId
                    ? [String(formData.perReqPositionId)]
                    : []
                }
                onChange={handleInputChange("perReqPositionId")}
                isInvalid={!!errors.perReqPositionId}
                errorMessage={errors.perReqPositionId}
              >
                {positionOptions.map((pos) => (
                  <SelectItem
                    key={pos.positionId}
                    value={String(pos.positionId)}
                  >
                    {pos.positionNameTH}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              จำนวน
            </div>
            <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="perReqAmount"
                type="number"
                aria-label="จำนวน"
                placeholder="Please Enter Data"
                size="md"
                variant="bordered"
                color="none"
                radius="lg"
                value={formData.perReqAmount || ""}
                onChange={handleInputChange("perReqAmount")}
                isInvalid={!!errors.perReqAmount}
                errorMessage={errors.perReqAmount}
              />
              คน
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              ประเภทการจ้างงาน
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              <Checkbox
                size="md"
                color="none"
                aria-label="รายเดือน"
                isSelected={formData.perReqEmpEmploymentType === "Monthly"}
                onChange={() =>
                  handleInputChange("perReqEmpEmploymentType")({
                    target: { value: "Monthly" },
                  })
                }
              >
                รายเดือน
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="รายวัน"
                isSelected={formData.perReqEmpEmploymentType === "Daily"}
                onChange={() =>
                  handleInputChange("perReqEmpEmploymentType")({
                    target: { value: "Daily" },
                  })
                }
              >
                รายวัน
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="ชั่วคราว/สัญญาจ้าง"
                isSelected={formData.perReqEmpEmploymentType === "Contract"}
                onChange={() =>
                  handleInputChange("perReqEmpEmploymentType")({
                    target: { value: "Contract" },
                  })
                }
              >
                ชั่วคราว/สัญญาจ้าง
              </Checkbox>
            </div>
          </div>
          {formData.perReqEmpEmploymentType === "Contract" && (
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <Input
                  name="perReqEmpEmploymentTypeNote"
                  type="number"
                  placeholder="Please Enter Data"
                  size="md"
                  variant="bordered"
                  color="none"
                  radius="lg"
                  value={formData.perReqEmpEmploymentTypeNote || ""}
                  onChange={handleInputChange("perReqEmpEmploymentTypeNote")}
                  isInvalid={!!errors.perReqEmpEmploymentTypeNote}
                  errorMessage={errors.perReqEmpEmploymentTypeNote}
                />
                วัน
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              เหตุผลในการขอรับ
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              <Checkbox
                size="md"
                color="none"
                aria-label="เพิ่มอัตรากำลังพล"
                isSelected={formData.perReqReasonForRequest === "New"}
                onChange={() =>
                  handleInputChange("perReqReasonForRequest")({
                    target: { value: "New" },
                  })
                }
              >
                เพิ่มอัตรากำลังพล
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="ทดแทน ชื่อ"
                isSelected={formData.perReqReasonForRequest === "Replace"}
                onChange={() =>
                  handleInputChange("perReqReasonForRequest")({
                    target: { value: "Replace" },
                  })
                }
              >
                ทดแทน ชื่อ
              </Checkbox>
            </div>
          </div>
          {formData.perReqReasonForRequest === "Replace" && (
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <Input
                  name="perReqReasonForRequestNote"
                  type="text"
                  placeholder="Please Enter Data"
                  size="md"
                  variant="bordered"
                  color="none"
                  radius="lg"
                  value={formData.perReqReasonForRequestNote || ""}
                  onChange={handleInputChange("perReqReasonForRequestNote")}
                  isInvalid={!!errors.perReqReasonForRequestNote}
                  errorMessage={errors.perReqReasonForRequestNote}
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              อายุ
            </div>
            <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="perReqReasonAge"
                type="text"
                aria-label="วันที่ต้องการ"
                placeholder="Please Enter Data"
                size="md"
                variant="bordered"
                color="none"
                radius="lg"
                value={formData.perReqReasonAge || ""}
                onChange={handleInputChange("perReqReasonAge")}
                isInvalid={!!errors.perReqReasonAge}
                errorMessage={errors.perReqReasonAge}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              เพศ
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              <Checkbox
                size="md"
                color="none"
                aria-label="ชาย"
                isSelected={formData.perReqReasonGender === "Male"}
                onChange={() =>
                  handleInputChange("perReqReasonGender")({
                    target: { value: "Male" },
                  })
                }
              >
                ชาย
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="หญิง"
                isSelected={formData.perReqReasonGender === "FeMale"}
                onChange={() =>
                  handleInputChange("perReqReasonGender")({
                    target: { value: "FeMale" },
                  })
                }
              >
                หญิง
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="ไม่ระบุ"
                isSelected={formData.perReqReasonGender === "Other"}
                onChange={() =>
                  handleInputChange("perReqReasonGender")({
                    target: { value: "Other" },
                  })
                }
              >
                ไม่ระบุ
              </Checkbox>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              การศึกษา
            </div>
            <div className="flex flex-wrap flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              <Checkbox
                size="md"
                color="none"
                aria-label="ประถมศึกษา"
                isSelected={
                  formData.perReqReasonEducation === "PrimaryEducation"
                }
                onChange={() =>
                  handleInputChange("perReqReasonEducation")({
                    target: { value: "PrimaryEducation" },
                  })
                }
              >
                ประถมศึกษา
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="มัธยมศึกษา"
                isSelected={
                  formData.perReqReasonEducation === "SecondaryEducation"
                }
                onChange={() =>
                  handleInputChange("perReqReasonEducation")({
                    target: { value: "SecondaryEducation" },
                  })
                }
              >
                มัธยมศึกษา
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="ปวช. สาขา"
                isSelected={
                  formData.perReqReasonEducation === "VocationalCertificate"
                }
                onChange={() =>
                  handleInputChange("perReqReasonEducation")({
                    target: { value: "VocationalCertificate" },
                  })
                }
              >
                ปวช. สาขา
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="ปวส. สาขา"
                isSelected={
                  formData.perReqReasonEducation === "HighVocationalCertificate"
                }
                onChange={() =>
                  handleInputChange("perReqReasonEducation")({
                    target: { value: "HighVocationalCertificate" },
                  })
                }
              >
                ปวส. สาขา
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="ปริญญาตรี / โท สาขา"
                isSelected={
                  formData.perReqReasonEducation === "BachelorMasterDegree"
                }
                onChange={() =>
                  handleInputChange("perReqReasonEducation")({
                    target: { value: "BachelorMasterDegree" },
                  })
                }
              >
                ปริญญาตรี / โท สาขา
              </Checkbox>
            </div>
          </div>
          {[
            "PrimaryEducation",
            "SecondaryEducation",
            "VocationalCertificate",
            "HighVocationalCertificate",
            "BachelorMasterDegree",
          ].includes(formData.perReqReasonEducation) && (
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <Input
                  name="perReqReasonEducationNote"
                  type="text"
                  placeholder="Please Enter Data"
                  size="md"
                  variant="bordered"
                  color="none"
                  radius="lg"
                  required
                  value={formData.perReqReasonEducationNote || ""}
                  onChange={handleInputChange("perReqReasonEducationNote")}
                  isInvalid={!!errors.perReqReasonEducationNote}
                  errorMessage={errors.perReqReasonEducationNote}
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              ประสบการณ์
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              <Checkbox
                size="md"
                color="none"
                aria-label="ไม่มีประสบการณ์"
                isSelected={
                  formData.perReqReasonExperience === "NoneExperience"
                }
                onChange={() =>
                  handleInputChange("perReqReasonExperience")({
                    target: { value: "NoneExperience" },
                  })
                }
              >
                ไม่มีประสบการณ์
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="ประสบการณ์ 1-4 ปี"
                isSelected={
                  formData.perReqReasonExperience === "Experience1To4Years"
                }
                onChange={() =>
                  handleInputChange("perReqReasonExperience")({
                    target: { value: "Experience1To4Years" },
                  })
                }
              >
                ประสบการณ์ 1-4 ปี
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="ประสบการณ์ 5 ปีขึ้นไป"
                isSelected={
                  formData.perReqReasonExperience === "Experience5YearsUp"
                }
                onChange={() =>
                  handleInputChange("perReqReasonExperience")({
                    target: { value: "Experience5YearsUp" },
                  })
                }
              >
                ประสบการณ์ 5 ปีขึ้นไป
              </Checkbox>
            </div>
          </div>
        </div>
        //
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              ความสามารถด้านคอมพิวเตอร์
            </div>
            <div className="flex flex-wrap flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              <Checkbox
                size="md"
                color="none"
                aria-label="MicrosoftOffice"
                isSelected={
                  formData.perReqComputerSkillName === "MicrosoftOffice"
                }
                onChange={() =>
                  handleInputChange("perReqComputerSkillName")({
                    target: { value: "MicrosoftOffice" },
                  })
                }
              >
                Microsoft Office
              </Checkbox>

              <Checkbox
                size="md"
                color="none"
                aria-label="MicrosoftProject"
                isSelected={
                  formData.perReqComputerSkillName === "MicrosoftProject"
                }
                onChange={() =>
                  handleInputChange("perReqComputerSkillName")({
                    target: { value: "MicrosoftProject" },
                  })
                }
              >
                Microsoft Project
              </Checkbox>

              <Checkbox
                size="md"
                color="none"
                aria-label="Revit"
                isSelected={formData.perReqComputerSkillName === "Revit"}
                onChange={() =>
                  handleInputChange("perReqComputerSkillName")({
                    target: { value: "Revit" },
                  })
                }
              >
                Revit
              </Checkbox>

              <Checkbox
                size="md"
                color="none"
                aria-label="Autocad"
                isSelected={formData.perReqComputerSkillName === "Autocad"}
                onChange={() =>
                  handleInputChange("perReqComputerSkillName")({
                    target: { value: "Autocad" },
                  })
                }
              >
                Autocad
              </Checkbox>

              <Checkbox
                size="md"
                color="none"
                aria-label="Sketchup"
                isSelected={formData.perReqComputerSkillName === "Sketchup"}
                onChange={() =>
                  handleInputChange("perReqComputerSkillName")({
                    target: { value: "Sketchup" },
                  })
                }
              >
                Sketchup
              </Checkbox>

              <Checkbox
                size="md"
                color="none"
                aria-label="Solidwork"
                isSelected={formData.perReqComputerSkillName === "Solidwork"}
                onChange={() =>
                  handleInputChange("perReqComputerSkillName")({
                    target: { value: "Solidwork" },
                  })
                }
              >
                Solidwork
              </Checkbox>

              <Checkbox
                size="md"
                color="none"
                aria-label="Canva"
                isSelected={formData.perReqComputerSkillName === "Canva"}
                onChange={() =>
                  handleInputChange("perReqComputerSkillName")({
                    target: { value: "Canva" },
                  })
                }
              >
                Canva
              </Checkbox>

              <Checkbox
                size="md"
                color="none"
                aria-label="Adobe"
                isSelected={formData.perReqComputerSkillName === "Adobe"}
                onChange={() =>
                  handleInputChange("perReqComputerSkillName")({
                    target: { value: "Adobe" },
                  })
                }
              >
                Adobe
              </Checkbox>

              <Checkbox
                size="md"
                color="none"
                aria-label="BPluse"
                isSelected={formData.perReqComputerSkillName === "BPluse"}
                onChange={() =>
                  handleInputChange("perReqComputerSkillName")({
                    target: { value: "BPluse" },
                  })
                }
              >
                B-Pluse
              </Checkbox>

              <Checkbox
                size="md"
                color="none"
                aria-label="อื่นๆ"
                isSelected={formData.perReqComputerSkillName === "Other"}
                onChange={() =>
                  handleInputChange("perReqComputerSkillName")({
                    target: { value: "Other" },
                  })
                }
              >
                อื่นๆ
              </Checkbox>
            </div>
          </div>
          {formData.perReqComputerSkillName === "Other" && (
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <Input
                  name="perReqComputerSkillIsOther"
                  type="text"
                  placeholder="Please Enter Data"
                  size="md"
                  variant="bordered"
                  color="none"
                  radius="lg"
                  value={formData.perReqComputerSkillIsOther || ""}
                  onChange={handleInputChange("perReqComputerSkillIsOther")}
                  isInvalid={!!errors.perReqComputerSkillIsOther}
                  errorMessage={errors.perReqComputerSkillIsOther}
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              ความสามารถทางด้านภาษา
            </div>
            <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
                    ภาษา อังกฤษ
                  </div>
                  <div className="flex flex-col xl:flex-row items-start justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
                    <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                      <Checkbox
                        size="lg"
                        color="default"
                        aria-label="พอใช้"
                        isSelected={
                          formData.perReqReasonEnglishSkill === "Basic"
                        }
                        onChange={() =>
                          handleInputChange("perReqReasonEnglishSkill")({
                            target: { value: "Basic" },
                          })
                        }
                      >
                        พอใช้
                      </Checkbox>
                      <Checkbox
                        size="lg"
                        color="default"
                        aria-label="ดี"
                        isSelected={
                          formData.perReqReasonEnglishSkill === "Good"
                        }
                        onChange={() =>
                          handleInputChange("perReqReasonEnglishSkill")({
                            target: { value: "Good" },
                          })
                        }
                      >
                        ดี
                      </Checkbox>
                      <Checkbox
                        size="lg"
                        color="default"
                        aria-label="ดีมาก"
                        isSelected={
                          formData.perReqReasonEnglishSkill === "Excellent"
                        }
                        onChange={() =>
                          handleInputChange("perReqReasonEnglishSkill")({
                            target: { value: "Excellent" },
                          })
                        }
                      >
                        ดีมาก
                      </Checkbox>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
                    ภาษา จีน
                  </div>
                  <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
                    <Checkbox
                      size="lg"
                      color="default"
                      aria-label="พอใช้"
                      isSelected={formData.perReqReasonEnglishSkill === "Basic"}
                      onChange={() =>
                        handleInputChange("perReqReasonEnglishSkill")({
                          target: { value: "Basic" },
                        })
                      }
                    >
                      พอใช้
                    </Checkbox>
                    <Checkbox
                      size="lg"
                      color="default"
                      aria-label="ดี"
                      isSelected={formData.perReqReasonEnglishSkill === "Good"}
                      onChange={() =>
                        handleInputChange("perReqReasonEnglishSkill")({
                          target: { value: "Good" },
                        })
                      }
                    >
                      ดี
                    </Checkbox>
                    <Checkbox
                      size="lg"
                      color="default"
                      aria-label="ดีมาก"
                      isSelected={
                        formData.perReqReasonEnglishSkill === "Excellent"
                      }
                      onChange={() =>
                        handleInputChange("perReqReasonEnglishSkill")({
                          target: { value: "Excellent" },
                        })
                      }
                    >
                      ดีมาก
                    </Checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              ใบอนุญาตขับขี่
            </div>
            <div className="flex flex-wrap flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              <Checkbox
                size="md"
                color="none"
                aria-label="ใบขับขี่บ.1"
                isSelected={formData.perReqReasonForRequest === "ใบขับขี่บ.1"}
                onChange={() =>
                  handleInputChange("perReqReasonForRequest")({
                    target: { value: "ใบขับขี่บ.1" },
                  })
                }
              >
                ใบขับขี่ บ.1
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="ใบขับขี่บ.2"
                isSelected={formData.perReqReasonForRequest === "ใบขับขี่บ.2"}
                onChange={() =>
                  handleInputChange("perReqReasonForRequest")({
                    target: { value: "ใบขับขี่บ.2" },
                  })
                }
              >
                ใบขับขี่ บ.2
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="ใบขับขี่บ.3"
                isSelected={formData.perReqReasonForRequest === "ใบขับขี่บ.3"}
                onChange={() =>
                  handleInputChange("perReqReasonForRequest")({
                    target: { value: "ใบขับขี่บ.3" },
                  })
                }
              >
                ใบขับขี่ บ.3
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="ใบขับขี่บ.4"
                isSelected={formData.perReqReasonForRequest === "ใบขับขี่บ.4"}
                onChange={() =>
                  handleInputChange("perReqReasonForRequest")({
                    target: { value: "ใบขับขี่บ.4" },
                  })
                }
              >
                ใบขับขี่ บ.4
              </Checkbox>{" "}
              <Checkbox
                size="md"
                color="none"
                aria-label="ใบขับขี่บ.4"
                isSelected={formData.perReqReasonForRequest === "ใบขับขี่บ.4"}
                onChange={() =>
                  handleInputChange("perReqReasonForRequest")({
                    target: { value: "ใบขับขี่บ.4" },
                  })
                }
              >
                ใบขับขี่ บ.4
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="ใบขับขี่ท.1"
                isSelected={formData.perReqReasonForRequest === "ใบขับขี่ท.1"}
                onChange={() =>
                  handleInputChange("perReqReasonForRequest")({
                    target: { value: "ใบขับขี่ท.1" },
                  })
                }
              >
                ใบขับขี่ ท.1
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="ใบขับขี่ท.2"
                isSelected={formData.perReqReasonForRequest === "ใบขับขี่ท.2"}
                onChange={() =>
                  handleInputChange("perReqReasonForRequest")({
                    target: { value: "ใบขับขี่ท.2" },
                  })
                }
              >
                ใบขับขี่ ท.2
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="ใบขับขี่ท.3"
                isSelected={formData.perReqReasonForRequest === "ใบขับขี่ท.3"}
                onChange={() =>
                  handleInputChange("perReqReasonForRequest")({
                    target: { value: "ใบขับขี่ท.3" },
                  })
                }
              >
                ใบขับขี่ ท.3
              </Checkbox>
              <Checkbox
                size="md"
                color="none"
                aria-label="ใบขับขี่ท.4"
                isSelected={formData.perReqReasonForRequest === "ใบขับขี่ท.4"}
                onChange={() =>
                  handleInputChange("perReqReasonForRequest")({
                    target: { value: "ใบขับขี่ท.4" },
                  })
                }
              >
                ใบขับขี่ ท.4
              </Checkbox>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              ใบอนุญาตประกอบวิชาชีพ
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              <Checkbox
                size="lg"
                color="default"
                aria-label="กส"
                isSelected={formData.perReqProfessionalLicenseName === "กส"}
                onChange={() =>
                  handleInputChange("perReqProfessionalLicenseName")({
                    target: { value: "กส" },
                  })
                }
              >
                กส
              </Checkbox>
              <Checkbox
                size="lg"
                color="default"
                aria-label="กว"
                isSelected={formData.perReqProfessionalLicenseName === "กว"}
                onChange={() =>
                  handleInputChange("perReqProfessionalLicenseName")({
                    target: { value: "กว" },
                  })
                }
              >
                กว
              </Checkbox>
            </div>
          </div>
          {["กว", "กส"].includes(formData.perReqProfessionalLicenseName) && (
            <div className="flex flex-col xl:flex-row items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark">
              <label className="w-full xl:w-3/12">
                {formData.perReqProfessionalLicenseName === "กว"
                  ? "ระดับ กว"
                  : "ระดับ กส"}
              </label>
              <div className="w-full xl:w-9/12">
                <Select
                  name="perReqProfessionalLicenseLevel"
                  aria-label={`ระดับ ${formData.perReqProfessionalLicenseName}`}
                  placeholder="-- เลือกระดับ --"
                  size="md"
                  variant="bordered"
                  color="none"
                  radius="lg"
                  selectedKeys={
                    formData.perReqProfessionalLicenseLevel
                      ? [formData.perReqProfessionalLicenseLevel]
                      : []
                  }
                  onChange={handleInputChange("perReqProfessionalLicenseLevel")}
                  isInvalid={!!errors.perReqProfessionalLicenseLevel}
                  errorMessage={errors.perReqProfessionalLicenseLevel}
                >
                  {formData.perReqProfessionalLicenseName === "กว" ? (
                    <>
                      <SelectItem key="ภาคีวิศวกร" value="ภาคีวิศวกร">
                        ภาคีวิศวกร
                      </SelectItem>
                      <SelectItem key="ภาคีวิศวกรพิเศษ" value="ภาคีวิศวกรพิเศษ">
                        ภาคีวิศวกรพิเศษ
                      </SelectItem>
                      <SelectItem key="สามัญวิศวกร" value="สามัญวิศวกร">
                        สามัญวิศวกร
                      </SelectItem>
                      <SelectItem key="วุฒิวิศวกร" value="วุฒิวิศวกร">
                        วุฒิวิศวกร
                      </SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem key="สามัญสถาปนิก" value="สามัญสถาปนิก">
                        สามัญสถาปนิก
                      </SelectItem>
                      <SelectItem key="วุฒิสถาปนิก" value="วุฒิสถาปนิก">
                        วุฒิสถาปนิก
                      </SelectItem>
                    </>
                  )}
                </Select>
              </div>
            </div>
          )}
        </div>
        //
        <div className="flex flex-col xl:flex-row items-center justify-evenly w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Image
                src={`/empEmployment/signature/${signature}`}
                alt="signature"
                width={100}
                height={100}
                priority
              />
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              ({operatedBy})
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              {formattedDate}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              1
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              1
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              1
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              1
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              1
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              1
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-end w-full h-full p-2 gap-2 border-2 border-dark">
            <Button
              color="primary"
              size="md"
              radius="lg"
              type="submit"
              className="flex items-center justify-center w-2/12 h-full p-4 gap-2 border-2 border-dark"
              onPress={() => {
                cancelRef.current = false;
              }}
            >
              บันทึก
            </Button>
          </div>
          {isUpdate && (
            <div className="flex items-center justify-end w-full h-full p-2 gap-2 border-2 border-dark">
              <Button
                color="danger"
                size="md"
                radius="lg"
                type="submit"
                className="flex items-center justify-center w-2/12 h-full p-4 gap-2 border-2 border-dark"
                onPress={() => {
                  cancelRef.current = true;
                }}
              >
                ยกเลิก
              </Button>
            </div>
          )}
        </div>
      </form>
    </>
  );
}
