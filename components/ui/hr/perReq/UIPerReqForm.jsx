"use client";

import UIHeader from "@/components/other/UIHeader";

import Image from "next/image";
import React, { useCallback } from "react";
import { Button, Checkbox, Input, Select, SelectItem } from "@heroui/react";

export default function UIPerReqForm({
  header,
  formRef,
  onSubmit,
  cancelRef,
  errors,
  formData,
  handleInputChange,
  setFormData,
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

  const toggleArrayValue = useCallback(
    (field, value) => {
      if (!setFormData) return;
      setFormData((prev) => {
        const list = Array.isArray(prev[field]) ? prev[field] : [];
        const exists = list.includes(value);
        return {
          ...prev,
          [field]: exists ? list.filter((v) => v !== value) : [...list, value],
        };
      });
    },
    [setFormData]
  );

  const toggleProfessionalName = useCallback(
    (name) => {
      if (!setFormData) return;
      setFormData((prev) => {
        const list = prev.perReqProfessionalLicenses || [];
        const exists = list.find((p) => p.name === name);
        return {
          ...prev,
          perReqProfessionalLicenses: exists
            ? list.filter((p) => p.name !== name)
            : [...list, { name, level: null }],
        };
      });
    },
    [setFormData]
  );

  const setProfessionalLevel = useCallback(
    (level) => {
      if (!setFormData) return;
      setFormData((prev) => {
        const list = prev.perReqProfessionalLicenses || [];
        const idx = list.findIndex((p) => p.name === "กว" || p.name === "กส");
        if (idx === -1) return prev;
        const next = [...list];
        next[idx] = { ...next[idx], level };
        return { ...prev, perReqProfessionalLicenses: next };
      });
    },
    [setFormData]
  );

  return (
    <>
      <UIHeader Header={header} />
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark bg-white overflow-auto"
      >
        <input
          type="hidden"
          name="perReqEmpEmploymentType"
          value={formData.perReqEmpEmploymentType || ""}
        />
        <input
          type="hidden"
          name="perReqReasonForRequest"
          value={formData.perReqReasonForRequest || ""}
        />
        <input
          type="hidden"
          name="perReqReasonGender"
          value={formData.perReqReasonGender || ""}
        />
        <input
          type="hidden"
          name="perReqReasonEducation"
          value={formData.perReqReasonEducation || ""}
        />
        <input
          type="hidden"
          name="perReqReasonExperience"
          value={formData.perReqReasonExperience || ""}
        />

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
                placeholder="Please Enter Data"
                type="date"
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
                placeholder="Please Enter Data"
                type="number"
                size="md"
                variant="bordered"
                color="none"
                radius="lg"
                value={formData.perReqAmount || ""}
                onChange={handleInputChange("perReqAmount")}
                isInvalid={!!errors.perReqAmount}
                errorMessage={errors.perReqAmount}
              />{" "}
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
              {[
                { val: "Monthly", label: "รายเดือน" },
                { val: "Daily", label: "รายวัน" },
                { val: "Contract", label: "ชั่วคราว/สัญญาจ้าง" },
              ].map(({ val, label }) => (
                <Checkbox
                  key={val}
                  size="md"
                  color="none"
                  aria-label={label}
                  isSelected={formData.perReqEmpEmploymentType === val}
                  onChange={() =>
                    handleInputChange("perReqEmpEmploymentType")({
                      target: { value: val },
                    })
                  }
                >
                  {label}
                </Checkbox>
              ))}
            </div>
          </div>
          {formData.perReqEmpEmploymentType === "Contract" && (
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="perReqEmpEmploymentTypeNote"
                placeholder="Please Enter Data"
                type="number"
                size="md"
                variant="bordered"
                color="none"
                radius="lg"
                value={formData.perReqEmpEmploymentTypeNote || ""}
                onChange={handleInputChange("perReqEmpEmploymentTypeNote")}
                isInvalid={!!errors.perReqEmpEmploymentTypeNote}
                errorMessage={errors.perReqEmpEmploymentTypeNote}
              />{" "}
              วัน
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
                aria-label="ทดแทน"
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
              <Input
                name="perReqReasonForRequestNote"
                placeholder="Please Enter Data"
                type="text"
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
                placeholder="Please Enter Data"
                type="text"
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
              {[
                { val: "Male", label: "ชาย" },
                { val: "FeMale", label: "หญิง" },
                { val: "Other", label: "ไม่ระบุ" },
              ].map(({ val, label }) => (
                <Checkbox
                  key={val}
                  size="md"
                  color="none"
                  aria-label={label}
                  isSelected={formData.perReqReasonGender === val}
                  onChange={() =>
                    handleInputChange("perReqReasonGender")({
                      target: { value: val },
                    })
                  }
                >
                  {label}
                </Checkbox>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              การศึกษา
            </div>
            <div className="flex flex-wrap flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              {[
                { val: "PrimaryEducation", label: "ประถมศึกษา" },
                { val: "SecondaryEducation", label: "มัธยมศึกษา" },
                { val: "VocationalCertificate", label: "ปวช. สาขา" },
                { val: "HighVocationalCertificate", label: "ปวส. สาขา" },
                { val: "BachelorMasterDegree", label: "ปริญญาตรี / โท สาขา" },
              ].map(({ val, label }) => (
                <Checkbox
                  key={val}
                  size="md"
                  color="none"
                  aria-label={label}
                  isSelected={formData.perReqReasonEducation === val}
                  onChange={() =>
                    handleInputChange("perReqReasonEducation")({
                      target: { value: val },
                    })
                  }
                >
                  {label}
                </Checkbox>
              ))}
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
              <Input
                name="perReqReasonEducationNote"
                placeholder="Please Enter Data"
                type="text"
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
          )}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              ประสบการณ์
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              {[
                { val: "NoneExperience", label: "ไม่มีประสบการณ์" },
                { val: "Experience1To4Years", label: "ประสบการณ์ 1-4 ปี" },
                { val: "Experience5YearsUp", label: "ประสบการณ์ 5 ปีขึ้นไป" },
              ].map(({ val, label }) => (
                <Checkbox
                  key={val}
                  size="md"
                  color="none"
                  aria-label={label}
                  isSelected={formData.perReqReasonExperience === val}
                  onChange={() =>
                    handleInputChange("perReqReasonExperience")({
                      target: { value: val },
                    })
                  }
                >
                  {label}
                </Checkbox>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              ความสามารถด้านคอมพิวเตอร์
            </div>
            <div className="flex flex-wrap flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              {[
                "MicrosoftOffice",
                "MicrosoftProject",
                "Revit",
                "Autocad",
                "Sketchup",
                "Solidwork",
                "Canva",
                "Adobe",
                "BPluse",
              ].map((skill) => (
                <Checkbox
                  key={skill}
                  size="md"
                  color="none"
                  aria-label={skill}
                  isSelected={(formData.perReqComputerSkills || []).includes(
                    skill
                  )}
                  onChange={() =>
                    toggleArrayValue("perReqComputerSkills", skill)
                  }
                >
                  {skill === "BPluse" ? "B-Pluse" : skill}
                </Checkbox>
              ))}
              <Checkbox
                size="md"
                color="none"
                aria-label="Other"
                isSelected={(formData.perReqComputerSkills || []).includes(
                  "Other"
                )}
                onChange={() =>
                  toggleArrayValue("perReqComputerSkills", "Other")
                }
              >
                อื่นๆ
              </Checkbox>
            </div>
          </div>
          {(formData.perReqComputerSkills || []).includes("Other") && (
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="perReqComputerSkillIsOther"
                placeholder="Please Enter Data"
                type="text"
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
          )}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              ความสามารถทางภาษา
            </div>
            <div className="flex flex-col gap-2 w-full xl:w-9/12">
              {[
                { lang: "English", label: "ภาษา อังกฤษ" },
                { lang: "Chinese", label: "ภาษา จีน" },
                { lang: "Thai", label: "ภาษา ไทย" },
                { lang: "Japanese", label: "ภาษา ญี่ปุ่น" },
              ].map(({ lang, label }) => {
                const current = (formData.perReqLanguageSkills || []).find(
                  (l) => l.language === lang
                );
                return (
                  <div
                    key={lang}
                    className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark"
                  >
                    <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
                      {label}
                    </div>
                    <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
                      {[
                        { level: "Basic", text: "พอใช้" },
                        { level: "Good", text: "ดี" },
                        { level: "Excellent", text: "ดีมาก" },
                      ].map(({ level, text }) => (
                        <Checkbox
                          key={level}
                          size="lg"
                          color="none"
                          aria-label={text}
                          isSelected={current?.level === level}
                          onChange={() => {
                            if (!setFormData) return;
                            setFormData((prev) => {
                              const list = prev.perReqLanguageSkills || [];
                              const idx = list.findIndex(
                                (l) => l.language === lang
                              );
                              if (idx === -1)
                                return {
                                  ...prev,
                                  perReqLanguageSkills: [
                                    ...list,
                                    { language: lang, level },
                                  ],
                                };
                              const next = [...list];
                              next[idx] = { language: lang, level };
                              return { ...prev, perReqLanguageSkills: next };
                            });
                          }}
                        >
                          {text}
                        </Checkbox>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              ใบอนุญาตขับขี่
            </div>
            <div className="flex flex-wrap flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              {["บ.1", "บ.2", "บ.3", "บ.4", "ท.1", "ท.2", "ท.3", "ท.4"].map(
                (lic) => (
                  <Checkbox
                    key={lic}
                    size="md"
                    color="none"
                    aria-label={lic}
                    isSelected={(formData.perReqDrivingLicenses || []).includes(
                      lic
                    )}
                    onChange={() =>
                      toggleArrayValue("perReqDrivingLicenses", lic)
                    }
                  >
                    ใบขับขี่ {lic}
                  </Checkbox>
                )
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
              ใบอนุญาตประกอบวิชาชีพ
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
              {[
                { name: "กส", label: "กส" },
                { name: "กว", label: "กว" },
              ].map(({ name, label }) => (
                <Checkbox
                  key={name}
                  size="lg"
                  color="none"
                  aria-label={label}
                  isSelected={(formData.perReqProfessionalLicenses || []).some(
                    (p) => p.name === name
                  )}
                  onChange={() => toggleProfessionalName(name)}
                >
                  {label}
                </Checkbox>
              ))}
            </div>
          </div>
          {(formData.perReqProfessionalLicenses || []).some(
            (p) => p.name === "กว" || p.name === "กส"
          ) && (
            <div className="flex flex-col xl:flex-row items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark">
              <label className="w-full xl:w-3/12">เลือกระดับ</label>
              <div className="w-full xl:w-9/12">
                <Select
                  name="perReqProfessionalLicenseLevel"
                  placeholder="-- เลือกระดับ --"
                  size="md"
                  variant="bordered"
                  color="none"
                  radius="lg"
                  selectedKeys={(() => {
                    const found = (
                      formData.perReqProfessionalLicenses || []
                    ).find((p) => p.name === "กว" || p.name === "กส");
                    return found?.level ? [found.level] : [];
                  })()}
                  onChange={(e) => setProfessionalLevel(e.target.value)}
                  isInvalid={!!errors.perReqProfessionalLicenseLevel}
                  errorMessage={errors.perReqProfessionalLicenseLevel}
                >
                  {(() => {
                    const hasGv = (
                      formData.perReqProfessionalLicenses || []
                    ).some((p) => p.name === "กว");
                    if (hasGv) {
                      return (
                        <>
                          <SelectItem key="ภาคีวิศวกร" value="ภาคีวิศวกร">
                            ภาคีวิศวกร
                          </SelectItem>
                          <SelectItem
                            key="ภาคีวิศวกรพิเศษ"
                            value="ภาคีวิศวกรพิเศษ"
                          >
                            ภาคีวิศวกรพิเศษ
                          </SelectItem>
                          <SelectItem key="สามัญวิศวกร" value="สามัญวิศวกร">
                            สามัญวิศวกร
                          </SelectItem>
                          <SelectItem key="วุฒิวิศวกร" value="วุฒิวิศวกร">
                            วุฒิวิศวกร
                          </SelectItem>
                        </>
                      );
                    }
                    return (
                      <>
                        <SelectItem key="สามัญสถาปนิก" value="สามัญสถาปนิก">
                          สามัญสถาปนิก
                        </SelectItem>
                        <SelectItem key="วุฒิสถาปนิก" value="วุฒิสถาปนิก">
                          วุฒิสถาปนิก
                        </SelectItem>
                      </>
                    );
                  })()}
                </Select>
              </div>
            </div>
          )}
        </div>
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
              (รออนุมัติ)
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              (ผู้จัดการฝ่าย)
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              (รออนุมัติ)
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              (รออนุมัติ)
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              (ผู้จัดการฝ่าย บุคคล)
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              (รออนุมัติ)
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
              onPress={() => cancelRef && (cancelRef.current = false)}
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
                onPress={() => cancelRef && (cancelRef.current = true)}
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
