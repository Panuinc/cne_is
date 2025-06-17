"use client";

import React from "react";
import { Button } from "@heroui/react";
import { MinusCircle, PlusCircle } from "lucide-react";
import {
  renderInputField,
  renderTextAreaField,
  renderRadioGroupField,
  renderSelectField,
} from "@/components/ui/hr/recruit/components/UIRenderField";

export default function UIRecruitStep4({
  formData,
  handleInputChange,
  errors,
}) {
  const workExperiences = formData.recruitWorkExperiences || [];

  const handleAddWorkExperience = () => {
    handleInputChange("recruitWorkExperiences")([
      ...workExperiences,
      {
        recruitWorkplaceName: "",
        recruitWorkPosition: "",
        recruitEmploymentType: "",
        recruitStartDate: "",
        recruitEndDate: "",
        recruitSalary: "",
        recruitExtraIncome: "",
        recruitReasonForLeaving: "",
        recruitJobDescription: "",
      },
    ]);
  };

  const handleRemoveLastWorkExperience = () => {
    if (workExperiences.length > 1) {
      const updated = [...workExperiences];
      updated.pop();
      handleInputChange("recruitWorkExperiences")(updated);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-center text-lg font-[600]">
          ประวัติการทำงาน
          <br />
          From the most current
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
            กรุณาเรียงจากปัจจุบันไปหาอดีต
            <br />
            Do you have a driving license?
          </div>
        </div>

        {workExperiences.map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
              {renderInputField({
                labelTH: "ชื่อสถานที่ทำงาน",
                labelEN: "Company's name",
                name: `recruitWorkExperiences[${index}].recruitWorkplaceName`,
                type: "text",
                value:
                  formData?.recruitWorkExperiences?.[index]
                    ?.recruitWorkplaceName || "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitWorkplaceName`
                ),
                error:
                  errors?.recruitWorkExperiences?.[index]?.recruitWorkplaceName,
              })}

              {renderInputField({
                labelTH: "ตำแหน่งงาน",
                labelEN: "Position",
                name: `recruitWorkExperiences[${index}].recruitWorkPosition`,
                type: "text",
                value:
                  formData?.recruitWorkExperiences?.[index]
                    ?.recruitWorkPosition || "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitWorkPosition`
                ),
                error:
                  errors?.recruitWorkExperiences?.[index]?.recruitWorkPosition,
              })}
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
              {renderRadioGroupField({
                labelTH: "ประเภทการจ้างงาน",
                labelEN: "Type of employment",
                name: `recruitWorkExperiences[${index}].recruitEmploymentType`,
                value:
                  formData.recruitWorkExperiences?.[index]
                    ?.recruitEmploymentType || "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitEmploymentType`
                ),
                error:
                  errors?.recruitWorkExperiences?.[index]
                    ?.recruitEmploymentType,
                options: [
                  { value: "FullTime", labelTH: "ประจำ", labelEN: "FullTime" },
                  {
                    value: "PartTime",
                    labelTH: "ชั่วคราว",
                    labelEN: "PartTime",
                  },
                  {
                    value: "Internship",
                    labelTH: "ฝึกงาน",
                    labelEN: "Internship",
                  },
                ],
              })}
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
              {renderInputField({
                labelTH: "วัน เดือน ปี ที่เข้าทำงาน",
                labelEN: "Starting date",
                name: `recruitWorkExperiences[${index}].recruitStartDate`,
                type: "date",
                value:
                  formData?.recruitWorkExperiences?.[index]?.recruitStartDate ||
                  "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitStartDate`
                ),
                error:
                  errors?.recruitWorkExperiences?.[index]?.recruitStartDate,
              })}

              {renderInputField({
                labelTH: "วัน เดือน ปี ที่ลาออก",
                labelEN: "Leaving date",
                name: `recruitWorkExperiences[${index}].recruitEndDate`,
                type: "date",
                value:
                  formData?.recruitWorkExperiences?.[index]?.recruitEndDate ||
                  "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitEndDate`
                ),
                error: errors?.recruitWorkExperiences?.[index]?.recruitEndDate,
              })}
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
              {renderInputField({
                labelTH: "เงินเดือน",
                labelEN: "Salary",
                name: `recruitWorkExperiences[${index}].recruitSalary`,
                type: "number",
                value:
                  formData?.recruitWorkExperiences?.[index]?.recruitSalary ||
                  "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitSalary`
                ),
                error: errors?.recruitWorkExperiences?.[index]?.recruitSalary,
              })}

              {renderInputField({
                labelTH: "รายได้พิเศษ",
                labelEN: "Allowances",
                name: `recruitWorkExperiences[${index}].recruitExtraIncome`,
                type: "number",
                value:
                  formData?.recruitWorkExperiences?.[index]
                    ?.recruitExtraIncome || "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitExtraIncome`
                ),
                error:
                  errors?.recruitWorkExperiences?.[index]?.recruitExtraIncome,
              })}

              {renderInputField({
                labelTH: "เหตุผลในการลาออก",
                labelEN: "Reason for leaving",
                name: `recruitWorkExperiences[${index}].recruitReasonForLeaving`,
                type: "text",
                value:
                  formData?.recruitWorkExperiences?.[index]
                    ?.recruitReasonForLeaving || "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitReasonForLeaving`
                ),
                error:
                  errors?.recruitWorkExperiences?.[index]
                    ?.recruitReasonForLeaving,
              })}
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
              {renderTextAreaField({
                labelTH: "ลักษณะงานที่รับผิดชอบ",
                labelEN: "Job description & responsibility",
                name: `recruitWorkExperiences[${index}].recruitJobDescription`,
                value:
                  formData?.recruitWorkExperiences?.[index]
                    ?.recruitJobDescription || "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitJobDescription`
                ),
                error:
                  errors?.recruitWorkExperiences?.[index]
                    ?.recruitJobDescription,
              })}
            </div>
          </React.Fragment>
        ))}
        <div className="flex flex-row items-center justify-center w-full p-2 gap-2 border-4 border-warning">
          <div className="flex items-center justify-end w-full h-full p-2 gap-2 border-4 border-primary">
            <Button
              color="primary"
              size="md"
              radius="full"
              className="flex items-center justify-center h-full px-8 py-4 gap-2 border-2 border-dark"
              onPress={handleAddWorkExperience}
            >
              <PlusCircle /> เพิ่มประสบการณ์ทำงาน
            </Button>
          </div>
          {workExperiences.length > 1 && (
            <div className="flex items-center justify-end w-full h-full p-2 gap-2 border-4 border-warning">
              <Button
                color="danger"
                size="md"
                radius="full"
                className="flex items-center justify-center h-full px-8 py-4 gap-2 border-2 border-dark"
                onPress={handleRemoveLastWorkExperience}
              >
                <MinusCircle /> ลบประสบการณ์ทำงาน
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderInputField({
            labelTH: "ท่านจะมาเริ่มงานกับบริษัทได้เมื่อไหร่ ถ้ามีตำแหน่งให้",
            labelEN: "When can you start working with us, if employed",
            name: "recruitDetail.recruitDetailWhenStartWork",
            type: "text",
            value: formData?.recruitDetail?.recruitDetailWhenStartWork || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailWhenStartWork"
            ),
            error: errors?.["recruitDetail.recruitDetailWhenStartWork"],
          })}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderRadioGroupField({
            labelTH: "ข้าพเข้า",
            labelEN: "I",
            name: "recruitDetail.recruitDetailCheckWorkingHistory",
            value:
              formData?.recruitDetail?.recruitDetailCheckWorkingHistory || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailCheckWorkingHistory"
            ),
            error: errors?.["recruitDetail.recruitDetailCheckWorkingHistory"],
            options: [
              { labelTH: "ยินยอม", labelEN: "Yes", value: "Yes" },
              { labelTH: "ไม่ยินยอม", labelEN: "No", value: "No" },
            ],
          })}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
            ให้บริษัทตรวจสอบ
            <br />
            Do you have a car / motorcycle available for company business
          </div>
        </div>
      </div>
    </>
  );
}
