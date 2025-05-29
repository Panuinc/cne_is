"use client";

import UIHeader from "@/components/other/UIHeader";

import React from "react";
import { Input, Button, Select, SelectItem } from "@heroui/react";
import Image from "next/image";
import { Account, Email, Trash } from "@/components/icons/icons";

export default function UIEmpCvForm({
  header,
  formRef,
  onSubmit,
  errors,
  formData,
  handleInputChange,
  handleProjectFieldChange,
  handleAddSection,
  handleRemoveSection,
  handleAddProject,
  handleRemoveProject,
  operatedBy,
  empPictureUrl,
  empFullData,
}) {
  return (
    <>
      <UIHeader Header={header} />

      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white shadow-md rounded-3xl overflow-auto"
      >
        <div className="flex flex-col xl:flex-row items-start justify-center w-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full xl:w-4/12 h-full p-2 gap-2 bg-default rounded-3xl">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              {empPictureUrl ? (
                <Image
                  src={empPictureUrl}
                  alt="รูปพนักงาน"
                  width={150}
                  height={150}
                />
              ) : (
                <span className="text-gray-400">ไม่มีรูปภาพ</span>
              )}
            </div>

            <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-lg font-[600]">
              <div className="text-success">
                <Account />
              </div>
              {empFullData?.empBirthday || "-"}
            </div>

            <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-lg font-[600]">
              <div className="text-success">
                <Email />
              </div>
              {empFullData?.empEmail || "-"}
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full gap-2">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-lg font-[600]">
                การศึกษา
              </div>
              {formData.empCvEducations.map((edu, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center w-full gap-2 border-1 border-dark rounded-3xl"
                >
                  <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvEducations[${i}].empCvEducationDegreeTH`}
                        label="ระดับการศึกษา (TH)"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={edu.empCvEducationDegreeTH || ""}
                        onChange={handleInputChange(
                          "empCvEducations",
                          i,
                          "empCvEducationDegreeTH"
                        )}
                        isInvalid={
                          !!errors[
                            `empCvEducations.${i}.empCvEducationDegreeTH`
                          ]
                        }
                      />
                    </div>
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvEducations[${i}].empCvEducationDegreeEN`}
                        label="ระดับการศึกษา (EN)"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={edu.empCvEducationDegreeEN || ""}
                        onChange={handleInputChange(
                          "empCvEducations",
                          i,
                          "empCvEducationDegreeEN"
                        )}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvEducations[${i}].empCvEducationInstitutionTH`}
                        label="สถาบันการศึกษา (TH)"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={edu.empCvEducationInstitutionTH || ""}
                        onChange={handleInputChange(
                          "empCvEducations",
                          i,
                          "empCvEducationInstitutionTH"
                        )}
                      />
                    </div>
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvEducations[${i}].empCvEducationInstitutionEN`}
                        label="สถาบันการศึกษา (EN)"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={edu.empCvEducationInstitutionEN || ""}
                        onChange={handleInputChange(
                          "empCvEducations",
                          i,
                          "empCvEducationInstitutionEN"
                        )}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvEducations[${i}].empCvEducationStartDate`}
                        type="date"
                        label="วันที่เริ่ม"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={edu.empCvEducationStartDate?.slice(0, 10) || ""}
                        onChange={handleInputChange(
                          "empCvEducations",
                          i,
                          "empCvEducationStartDate"
                        )}
                        isInvalid={
                          !!errors[
                            `empCvEducations.${i}.empCvEducationStartDate`
                          ]
                        }
                      />
                    </div>
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvEducations[${i}].empCvEducationEndDate`}
                        type="date"
                        label="วันที่สิ้นสุด"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={edu.empCvEducationEndDate?.slice(0, 10) || ""}
                        onChange={handleInputChange(
                          "empCvEducations",
                          i,
                          "empCvEducationEndDate"
                        )}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-end w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-end w-full h-full p-2 gap-2">
                      <Button
                        color="danger"
                        size="md"
                        radius="full"
                        className="flex items-center justify-center h-full p-4 gap-2"
                        onPress={handleRemoveSection("empCvEducations", i)}
                      >
                        <Trash />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Button
                    color="primary"
                    size="md"
                    radius="full"
                    className="flex items-center justify-center w-full h-full p-4 gap-2"
                    onPress={handleAddSection("empCvEducations", {})}
                  >
                    เพิ่มประวัติการศึกษา
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full gap-2">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-lg font-[600]">
                ใบอนุญาตประกอบวิชาชีพ
              </div>
              {formData.empCvLicenses.map((lic, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center w-full gap-2 border-1 border-dark rounded-3xl"
                >
                  <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvLicenses[${i}].empCvLicenseNameTH`}
                        label="ชื่อใบอนุญาตประกอบวิชาชีพ (TH)"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={lic.empCvLicenseNameTH || ""}
                        onChange={handleInputChange(
                          "empCvLicenses",
                          i,
                          "empCvLicenseNameTH"
                        )}
                      />
                    </div>
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvLicenses[${i}].empCvLicenseNameEN`}
                        label="ชื่อใบอนุญาตประกอบวิชาชีพ (EN)"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={lic.empCvLicenseNameEN || ""}
                        onChange={handleInputChange(
                          "empCvLicenses",
                          i,
                          "empCvLicenseNameEN"
                        )}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvLicenses[${i}].empCvLicenseNumber`}
                        label="หมายเลขใบอนุญาตประกอบวิชาชีพ"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={lic.empCvLicenseNumber || ""}
                        onChange={handleInputChange(
                          "empCvLicenses",
                          i,
                          "empCvLicenseNumber"
                        )}
                      />
                    </div>
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvLicenses[${i}].empCvLicenseStartDate`}
                        type="date"
                        label="วันที่เริ่ม"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={lic.empCvLicenseStartDate?.slice(0, 10) || ""}
                        onChange={handleInputChange(
                          "empCvLicenses",
                          i,
                          "empCvLicenseStartDate"
                        )}
                      />
                    </div>
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvLicenses[${i}].empCvLicenseEndDate`}
                        type="date"
                        label="วันที่สิ้นสุด"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={lic.empCvLicenseEndDate?.slice(0, 10) || ""}
                        onChange={handleInputChange(
                          "empCvLicenses",
                          i,
                          "empCvLicenseEndDate"
                        )}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-end w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-end w-full h-full p-2 gap-2">
                      <Button
                        color="danger"
                        size="md"
                        radius="full"
                        className="flex items-center justify-center h-full p-4 gap-2"
                        onPress={handleRemoveSection("empCvLicenses", i)}
                      >
                        <Trash />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Button
                    color="primary"
                    size="md"
                    radius="full"
                    className="flex items-center justify-center w-full h-full p-4 gap-2"
                    onPress={handleAddSection("empCvLicenses", {})}
                  >
                    เพิ่มใบอนุญาตประกอบวิชาชีพ
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full gap-2">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-lg font-[600]">
                ความสามารถทางภาษา
              </div>
              {formData.empCvLanguageSkills.map((lang, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center w-full gap-2 border-1 border-dark rounded-3xl"
                >
                  <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                    <Input
                      name={`empCvLanguageSkills[${i}].empCvLanguageSkillNameTH`}
                      label="ความสามารถทางภาษา (TH)"
                      placeholder="กรุณากรอกข้อมูล"
                      size="md"
                      variant="underlined"
                      color="primary"
                      radius="full"
                      value={lang.empCvLanguageSkillNameTH || ""}
                      onChange={handleInputChange(
                        "empCvLanguageSkills",
                        i,
                        "empCvLanguageSkillNameTH"
                      )}
                    />
                  </div>
                  <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                    <Input
                      name={`empCvLanguageSkills[${i}].empCvLanguageSkillNameEN`}
                      label="ความสามารถทางภาษา (EN)"
                      placeholder="กรุณากรอกข้อมูล"
                      size="md"
                      variant="underlined"
                      color="primary"
                      radius="full"
                      value={lang.empCvLanguageSkillNameEN || ""}
                      onChange={handleInputChange(
                        "empCvLanguageSkills",
                        i,
                        "empCvLanguageSkillNameEN"
                      )}
                    />
                  </div>
                  <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                    <Select
                      name={`empCvLanguageSkills[${i}].empCvLanguageSkillProficiency`}
                      label="ระดับคะแนน"
                      placeholder="กรุณากรอกข้อมูล"
                      size="md"
                      variant="underlined"
                      color="primary"
                      radius="full"
                      selectedKeys={
                        lang.empCvLanguageSkillProficiency
                          ? [lang.empCvLanguageSkillProficiency]
                          : []
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "empCvLanguageSkills",
                          i,
                          "empCvLanguageSkillProficiency"
                        )({ target: { value: e.target?.value || e } })
                      }
                    >
                      <SelectItem key="Basic">พอใช้</SelectItem>
                      <SelectItem key="Good">ดี</SelectItem>
                      <SelectItem key="Excellent">ดีมาก</SelectItem>
                    </Select>
                  </div>
                  <div className="flex flex-row items-center justify-end w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-end w-full h-full p-2 gap-2">
                      <Button
                        color="danger"
                        size="md"
                        radius="full"
                        className="flex items-center justify-center h-full p-4 gap-2"
                        onPress={handleRemoveSection("empCvLanguageSkills", i)}
                      >
                        <Trash />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Button
                    color="primary"
                    size="md"
                    radius="full"
                    className="flex items-center justify-center w-full h-full p-4 gap-2"
                    onPress={handleAddSection("empCvLanguageSkills", {})}
                  >
                    เพิ่มความสามารถทางภาษา
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full xl:w-8/12 p-2 gap-2">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-3xl text-secondary font-[600]">
              {empFullData?.empFirstNameTH || "-"}{" "}
              {empFullData?.empLastNameTH || "-"}
            </div>

            <div className="flex items-center justify-center w-full h-full p-2 gap-2 bg-success text-xl text-white">
              {empFullData?.empEmpEmployment?.[0]?.EmpEmploymentPositionId
                ?.positionNameTH || "-"}
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full gap-2">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-lg font-[600]">
                ประวัติการทำงาน
              </div>
              {formData.empCvWorkHistories.map((wh, wi) => (
                <div
                  key={wi}
                  className="flex flex-col items-center justify-center w-full gap-2 border-1 border-dark rounded-3xl"
                >
                  <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvWorkHistories[${wi}].empCvWorkHistoryCompanyNameTH`}
                        label="ชื่อบริษัท (TH)"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={wh.empCvWorkHistoryCompanyNameTH || ""}
                        onChange={handleInputChange(
                          "empCvWorkHistories",
                          wi,
                          "empCvWorkHistoryCompanyNameTH"
                        )}
                      />
                    </div>
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvWorkHistories[${wi}].empCvWorkHistoryCompanyNameEN`}
                        label="ชื่อบริษัท (EN)"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={wh.empCvWorkHistoryCompanyNameEN || ""}
                        onChange={handleInputChange(
                          "empCvWorkHistories",
                          wi,
                          "empCvWorkHistoryCompanyNameEN"
                        )}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvWorkHistories[${wi}].empCvWorkHistoryPositionTH`}
                        label="ตำแหน่งงาน (TH)"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={wh.empCvWorkHistoryPositionTH || ""}
                        onChange={handleInputChange(
                          "empCvWorkHistories",
                          wi,
                          "empCvWorkHistoryPositionTH"
                        )}
                      />
                    </div>
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvWorkHistories[${wi}].empCvWorkHistoryPositionEN`}
                        label="ตำแหน่งงาน (EN)"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={wh.empCvWorkHistoryPositionEN || ""}
                        onChange={handleInputChange(
                          "empCvWorkHistories",
                          wi,
                          "empCvWorkHistoryPositionEN"
                        )}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvWorkHistories[${wi}].empCvWorkHistoryStartDate`}
                        type="date"
                        label="วันที่เริ่ม"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={wh.empCvWorkHistoryStartDate?.slice(0, 10) || ""}
                        onChange={handleInputChange(
                          "empCvWorkHistories",
                          wi,
                          "empCvWorkHistoryStartDate"
                        )}
                      />
                    </div>
                    <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                      <Input
                        name={`empCvWorkHistories[${wi}].empCvWorkHistoryEndDate`}
                        type="date"
                        label="วันที่สิ้นสุด"
                        placeholder="กรุณากรอกข้อมูล"
                        size="md"
                        variant="underlined"
                        color="primary"
                        radius="full"
                        value={wh.empCvWorkHistoryEndDate?.slice(0, 10) || ""}
                        onChange={handleInputChange(
                          "empCvWorkHistories",
                          wi,
                          "empCvWorkHistoryEndDate"
                        )}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
                    <div className="flex flex-col items-center justify-start w-full p-2 gap-2">
                      <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-lg font-[600]">
                        โปรเจคที่ผ่านมา
                      </div>
                    </div>

                    {(wh.empCvProjects || []).map((proj, pi) => (
                      <div
                        key={pi}
                        className="flex flex-col items-center justify-center w-full gap-2 border-1 border-dark rounded-3xl"
                      >
                        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
                          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                            <Input
                              name={`empCvWorkHistories[${wi}].empCvProjects[${pi}].empCvProjectNameTH`}
                              label="ชื่อโปรเจค (TH)"
                              placeholder="กรุณากรอกข้อมูล"
                              size="md"
                              variant="underlined"
                              color="primary"
                              radius="full"
                              value={proj.empCvProjectNameTH || ""}
                              onChange={handleProjectFieldChange(
                                wi,
                                pi,
                                "empCvProjectNameTH"
                              )}
                            />
                          </div>
                          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                            <Input
                              name={`empCvWorkHistories[${wi}].empCvProjects[${pi}].empCvProjectNameEN`}
                              label="ชื่อโปรเจค (EN)"
                              placeholder="กรุณากรอกข้อมูล"
                              size="md"
                              variant="underlined"
                              color="primary"
                              radius="full"
                              value={proj.empCvProjectNameEN || ""}
                              onChange={handleProjectFieldChange(
                                wi,
                                pi,
                                "empCvProjectNameEN"
                              )}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
                          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                            <Input
                              name={`empCvWorkHistories[${wi}].empCvProjects[${pi}].empCvProjectDescriptionTH`}
                              label="รายละเอียดโปรเจค (TH)"
                              placeholder="กรุณากรอกข้อมูล"
                              size="md"
                              variant="underlined"
                              color="primary"
                              radius="full"
                              value={proj.empCvProjectDescriptionTH || ""}
                              onChange={handleProjectFieldChange(
                                wi,
                                pi,
                                "empCvProjectDescriptionTH"
                              )}
                            />
                          </div>
                          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                            <Input
                              name={`empCvWorkHistories[${wi}].empCvProjects[${pi}].empCvProjectDescriptionEN`}
                              label="รายละเอียดโปรเจค (EN)"
                              placeholder="กรุณากรอกข้อมูล"
                              size="md"
                              variant="underlined"
                              color="primary"
                              radius="full"
                              value={proj.empCvProjectDescriptionEN || ""}
                              onChange={handleProjectFieldChange(
                                wi,
                                pi,
                                "empCvProjectDescriptionEN"
                              )}
                            />
                          </div>
                        </div>

                        <div className="flex flex-row items-center justify-end w-full h-full p-2 gap-2">
                          <div className="flex items-center justify-end w-full h-full p-2 gap-2">
                            <Button
                              color="danger"
                              size="md"
                              radius="full"
                              className="flex items-center justify-center h-full p-4 gap-2"
                              onPress={handleRemoveProject(wi, pi)}
                            >
                              <Trash />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
                      <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                        <Button
                          color="primary"
                          size="md"
                          radius="full"
                          className="flex items-center justify-center w-full h-full p-4 gap-2"
                          onPress={handleAddProject(wi)}
                        >
                          เพิ่มโปรเจคที่ผ่านมา
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-end w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-end w-full h-full p-2 gap-2">
                      <Button
                        color="danger"
                        size="md"
                        radius="full"
                        className="flex items-center justify-center h-full p-4 gap-2"
                        onPress={handleRemoveSection("empCvWorkHistories", wi)}
                      >
                        <Trash />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Button
                    color="primary"
                    size="md"
                    radius="full"
                    className="flex items-center justify-center w-full h-full p-4 gap-2"
                    onPress={handleAddSection("empCvWorkHistories", {
                      empCvProjects: [],
                    })}
                  >
                    เพิ่มประวัติการทำงาน
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              type="text"
              label="ดำเนินการโดย"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={operatedBy}
              readOnly
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-end w-full h-full p-2 gap-2">
            <Button
              color="primary"
              size="md"
              radius="full"
              type="submit"
              className="flex items-center justify-center h-full p-4 w-2/12 gap-2"
            >
              บันทึก
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
