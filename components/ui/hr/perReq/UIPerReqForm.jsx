"use client";

import UIHeader from "@/components/other/UIHeader";

import Image from "next/image";
import React, { useCallback } from "react";
import { Button, Checkbox, Input, Select, SelectItem } from "@heroui/react";

export default function UIPerReqForm({
  header,
  formRef,
  actionRef,
  onSubmit,
  cancelRef,
  errors,
  formData,
  handleInputChange,
  setFormData,
  isUpdate,
  isCreate = false,
  divisionOptions = [],
  departmentOptions = [],
  positionOptions = [],
  allowApprove = false,
  onApprove = () => {},
  onReject = () => {},
  isReadOnly = false,
}) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getSignatureBlock = (title, nameObj, sigFile, date) => {
    const isRequester = title === "ผู้ร้องขอ";

    return (
      <div className="flex flex-col items-center justify-center w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-default rounded-xl">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          {sigFile ? (
            <Image
              src={`/empEmployment/signature/${sigFile}`}
              alt="signature"
              width={100}
              height={100}
              priority
            />
          ) : isRequester ? (
            "ผู้ร้องขอ"
          ) : (
            "(รออนุมัติ)"
          )}
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          {nameObj
            ? `(${nameObj.empFirstNameTH} ${nameObj.empLastNameTH})`
            : isRequester
            ? "ผู้ร้องขอ"
            : "(รออนุมัติ)"}
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          {date || (isRequester ? "ผู้ร้องขอ" : "(รออนุมัติ)")}
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 font-[600]">
          {title}
        </div>
      </div>
    );
  };

  const applyDisableProps = (props) => ({
    ...props,
    disabled: isReadOnly,
    isDisabled: isReadOnly,
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

  const toggleLanguageLevel = useCallback(
    (language, level) => {
      if (!setFormData) return;
      setFormData((prev) => {
        const list = prev.perReqLanguageSkills || [];
        const idx = list.findIndex((l) => l.language === language);
        const current = list[idx];

        if (current?.level === level) {
          return {
            ...prev,
            perReqLanguageSkills: list.filter((l) => l.language !== language),
          };
        }

        if (idx === -1) {
          return {
            ...prev,
            perReqLanguageSkills: [...list, { language, level }],
          };
        }

        const updated = [...list];
        updated[idx] = { language, level };
        return { ...prev, perReqLanguageSkills: updated };
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
        className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white overflow-auto"
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
        <div className="flex xl:flex-row items-center justify-center w-full p-2 gap-2 border-b-1 border-default">
          <div className="flex flex-col items-center justify-center w-3/12 h-full p-2 gap-2">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              <Image
                src="/logoCompany/com-1.png"
                alt="com-1"
                width={100}
                height={100}
                priority
              />
            </div>
            <div className="xl:flex hidden items-center justify-center w-full h-full p-2 gap-2 font-[600]">
              CHANNAKORN
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-9/12 h-full p-2 gap-2">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-3xl font-[600]">
              ใบขออนุมัติอัตรากำลังคน
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-xl font-[600]">
              (Personnel Request)
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 font-[600]">
              วันที่ร้องขอ
            </div>
            <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2">
              {formattedDate}
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 font-[600]">
              วันที่ต้องการ
            </div>
            <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2">
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
                {...applyDisableProps({})}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 font-[600]">
              ฝ่าย
            </div>
            <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2">
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
                {...applyDisableProps({})}
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
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 font-[600]">
              แผนก
            </div>
            <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2">
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
                {...applyDisableProps({})}
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
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 font-[600]">
              ตำแหน่ง
            </div>
            <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2">
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
                {...applyDisableProps({})}
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
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 font-[600]">
              จำนวน
            </div>
            <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2">
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
                {...applyDisableProps({})}
              />{" "}
              คน
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 font-[600]">
              ประเภทการจ้างงาน
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-8">
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
                  {...applyDisableProps({})}
                >
                  {label}
                </Checkbox>
              ))}
            </div>
          </div>
          {formData.perReqEmpEmploymentType === "Contract" && (
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
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
                {...applyDisableProps({})}
              />{" "}
              วัน
            </div>
          )}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 font-[600]">
              เหตุผลในการขอรับ
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-8">
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
                {...applyDisableProps({})}
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
                {...applyDisableProps({})}
              >
                ทดแทน ชื่อ
              </Checkbox>
            </div>
          </div>
          {formData.perReqReasonForRequest === "Replace" && (
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
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
                {...applyDisableProps({})}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 bg-default">
          <div className="flex items-center justify-center w-full p-2 gap-2 font-[600]">
            คุณสมบัติทั่วไป
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 font-[600]">
              อายุ
            </div>
            <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2">
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
                {...applyDisableProps({})}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 font-[600]">
              เพศ
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-8">
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
                  {...applyDisableProps({})}
                >
                  {label}
                </Checkbox>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 font-[600]">
              การศึกษา
            </div>
            <div className="flex flex-wrap flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-8">
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
                  {...applyDisableProps({})}
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
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
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
                {...applyDisableProps({})}
                errorMessage={errors.perReqReasonEducationNote}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 font-[600]">
              ประสบการณ์
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-8">
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
                  {...applyDisableProps({})}
                >
                  {label}
                </Checkbox>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 font-[600]">
              ความสามารถด้านคอมพิวเตอร์
            </div>
            <div className="flex flex-wrap flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-8">
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
                  {...applyDisableProps({})}
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
                {...applyDisableProps({})}
              >
                อื่นๆ
              </Checkbox>
            </div>
          </div>
          {(formData.perReqComputerSkills || []).includes("Other") && (
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
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
                {...applyDisableProps({})}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 font-[600]">
              ความสามารถทางภาษา
            </div>
            <div className="flex flex-col gap-2 w-full xl:w-9/12">
              {[
                { lang: "Thai", label: "ภาษา ไทย" },
                { lang: "English", label: "ภาษา อังกฤษ" },
                { lang: "Chinese", label: "ภาษา จีน" },
                { lang: "Japanese", label: "ภาษา ญี่ปุ่น" },
              ].map(({ lang, label }) => {
                const current = (formData.perReqLanguageSkills || []).find(
                  (l) => l.language === lang
                );
                return (
                  <div
                    key={lang}
                    className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2"
                  >
                    <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2">
                      {label}
                    </div>
                    <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-8">
                      {[
                        { level: "Basic", text: "พอใช้" },
                        { level: "Good", text: "ดี" },
                        { level: "Excellent", text: "ดีมาก" },
                      ].map(({ level, text }) => (
                        <Checkbox
                          key={level}
                          size="md"
                          color="none"
                          aria-label={text}
                          isSelected={current?.level === level}
                          onChange={() => toggleLanguageLevel(lang, level)}
                          {...applyDisableProps({})}
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
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 font-[600]">
              ใบอนุญาตขับขี่
            </div>
            <div className="flex flex-wrap flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-8">
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
                    {...applyDisableProps({})}
                  >
                    ใบขับขี่ {lic}
                  </Checkbox>
                )
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 font-[600]">
              ใบอนุญาตประกอบวิชาชีพ
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-start w-full xl:w-9/12 h-full p-2 gap-8">
              {[
                { name: "กส", label: "กส" },
                { name: "กว", label: "กว" },
              ].map(({ name, label }) => (
                <Checkbox
                  key={name}
                  size="md"
                  color="none"
                  aria-label={label}
                  isSelected={(formData.perReqProfessionalLicenses || []).some(
                    (p) => p.name === name
                  )}
                  onChange={() => toggleProfessionalName(name)}
                  {...applyDisableProps({})}
                >
                  {label}
                </Checkbox>
              ))}
            </div>
          </div>
          {(formData.perReqProfessionalLicenses || []).some(
            (p) => p.name === "กว" || p.name === "กส"
          ) && (
            <div className="flex flex-col xl:flex-row items-center justify-start w-full h-full p-2 gap-2">
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
                  {...applyDisableProps({})}
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

        <div className="flex flex-col xl:flex-row items-center justify-evenly w-full p-2 gap-2">
          {getSignatureBlock(
            "ผู้ร้องขอ",
            formData.PerReqCreateBy,
            formData.PerReqCreateBy?.empEmpEmployment?.[0]
              ?.empEmploymentSignature,
            formData.perReqCreateAt
              ? new Date(formData.perReqCreateAt).toLocaleDateString("th-TH", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : null
          )}
          {getSignatureBlock(
            "ผู้อนุมัติ",
            formData.PerReqManagerApproveBy,
            formData.PerReqManagerApproveBy?.empEmpEmployment?.[0]
              ?.empEmploymentSignature,
            formData.perReqReasonManagerApproveAt
              ? new Date(
                  formData.perReqReasonManagerApproveAt
                ).toLocaleDateString("th-TH", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : null
          )}
          {getSignatureBlock(
            "ผู้รับทราบ",
            formData.PerReqHrApproveBy,
            formData.PerReqHrApproveBy?.empEmpEmployment?.[0]
              ?.empEmploymentSignature,
            formData.perReqReasonHrApproveAt
              ? new Date(formData.perReqReasonHrApproveAt).toLocaleDateString(
                  "th-TH",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )
              : null
          )}
        </div>

        <div className="flex flex-row items-center justify-end w-full p-2 gap-2">
          {allowApprove ? (
            <>
              <Button
                color="success"
                radius="lg"
                type="submit"
                onPress={onApprove}
              >
                อนุมัติ
              </Button>
              <Button
                color="danger"
                radius="lg"
                type="submit"
                onPress={onReject}
              >
                ไม่อนุมัติ
              </Button>
            </>
          ) : (
            <>
              {(isUpdate || isCreate) && !isReadOnly && (
                <Button
                  color="warning"
                  radius="lg"
                  type="submit"
                  onPress={() => {
                    cancelRef && (cancelRef.current = false);
                  }}
                >
                  บันทึก
                </Button>
              )}
              {isUpdate && !isReadOnly && (
                <Button
                  color="danger"
                  radius="lg"
                  type="submit"
                  onPress={() => {
                    actionRef.current = "cancel";
                  }}
                >
                  ยกเลิกเอกสาร
                </Button>
              )}
            </>
          )}
        </div>
      </form>
    </>
  );
}
