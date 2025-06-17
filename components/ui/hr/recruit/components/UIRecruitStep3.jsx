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

export default function UIRecruitStep3({
  formData,
  handleInputChange,
  errors,
}) {
  const languageSkills = formData.recruitLanguageSkills || [];

  const handleAddLanguageSkill = () => {
    handleInputChange("recruitLanguageSkills")([
      ...languageSkills,
      {
        recruitLanguageName: "",
        recruitLanguageListenLevel: "",
        recruitLanguageSpeakLevel: "",
        recruitLanguageReadLevel: "",
        recruitLanguageWriteLevel: "",
      },
    ]);
  };

  const handleRemoveLastSkill = () => {
    if (languageSkills.length > 1) {
      const updated = [...languageSkills];
      updated.pop();
      handleInputChange("recruitLanguageSkills")(updated);
    }
  };

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
          ภาษา กรุณาระบุ ดีมาก ดี พอใช้
          <br />
          Language - Please Identify Excellent Good Fair
        </div>

        {languageSkills.map((_, index) => (
          <div
            key={index}
            className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning"
          >
            {renderSelectField({
              labelTH: "ภาษา",
              labelEN: "Language",
              name: `recruitLanguageSkills[${index}].recruitLanguageName`,
              value:
                formData.recruitLanguageSkills?.[index]?.recruitLanguageName ||
                "",
              onChange: handleInputChange(
                `recruitLanguageSkills[${index}].recruitLanguageName`
              ),
              error:
                errors?.recruitLanguageSkills?.[index]?.recruitLanguageName,
              options: [
                { value: "th", labelTH: "ภาษาไทย", labelEN: "Thai" },
                { value: "en", labelTH: "ภาษาอังกฤษ", labelEN: "English" },
                {
                  value: "id",
                  labelTH: "ภาษาอินโดนีเซีย",
                  labelEN: "Indonesian",
                },
                { value: "ms", labelTH: "ภาษามลายู", labelEN: "Malay" },
                { value: "vi", labelTH: "ภาษาเวียดนาม", labelEN: "Vietnamese" },
                { value: "my", labelTH: "ภาษาพม่า", labelEN: "Burmese" },
                { value: "km", labelTH: "ภาษากัมพูชา", labelEN: "Khmer" },
                { value: "lo", labelTH: "ภาษาลาว", labelEN: "Lao" },
                { value: "tl", labelTH: "ภาษาฟิลิปปินส์", labelEN: "Filipino" },
                { value: "zh", labelTH: "ภาษาจีน", labelEN: "Chinese" },
                { value: "ja", labelTH: "ภาษาญี่ปุ่น", labelEN: "Japanese" },
                { value: "ko", labelTH: "ภาษาเกาหลี", labelEN: "Korean" },
                { value: "fr", labelTH: "ภาษาฝรั่งเศส", labelEN: "French" },
              ],
            })}

            {renderSelectField({
              labelTH: "การฟัง",
              labelEN: "Listening",
              name: `recruitLanguageSkills[${index}].recruitLanguageListenLevel`,
              value:
                formData.recruitLanguageSkills?.[index]
                  ?.recruitLanguageListenLevel || "",
              onChange: handleInputChange(
                `recruitLanguageSkills[${index}].recruitLanguageListenLevel`
              ),
              error:
                errors?.recruitLanguageSkills?.[index]
                  ?.recruitLanguageListenLevel,
              options: [
                { value: "Excellent", labelTH: "ดีมาก", labelEN: "Excellent" },
                { value: "Good", labelTH: "ดี", labelEN: "Good" },
                { value: "Fair", labelTH: "พอใช้", labelEN: "Fair" },
              ],
            })}

            {renderSelectField({
              labelTH: "การพูด",
              labelEN: "Speaking",
              name: `recruitLanguageSkills[${index}].recruitLanguageSpeakLevel`,
              value:
                formData.recruitLanguageSkills?.[index]
                  ?.recruitLanguageSpeakLevel || "",
              onChange: handleInputChange(
                `recruitLanguageSkills[${index}].recruitLanguageSpeakLevel`
              ),
              error:
                errors?.recruitLanguageSkills?.[index]
                  ?.recruitLanguageSpeakLevel,
              options: [
                { value: "Excellent", labelTH: "ดีมาก", labelEN: "Excellent" },
                { value: "Good", labelTH: "ดี", labelEN: "Good" },
                { value: "Fair", labelTH: "พอใช้", labelEN: "Fair" },
              ],
            })}

            {renderSelectField({
              labelTH: "การอ่าน",
              labelEN: "Reading",
              name: `recruitLanguageSkills[${index}].recruitLanguageReadLevel`,
              value:
                formData.recruitLanguageSkills?.[index]
                  ?.recruitLanguageReadLevel || "",
              onChange: handleInputChange(
                `recruitLanguageSkills[${index}].recruitLanguageReadLevel`
              ),
              error:
                errors?.recruitLanguageSkills?.[index]
                  ?.recruitLanguageReadLevel,
              options: [
                { value: "Excellent", labelTH: "ดีมาก", labelEN: "Excellent" },
                { value: "Good", labelTH: "ดี", labelEN: "Good" },
                { value: "Fair", labelTH: "พอใช้", labelEN: "Fair" },
              ],
            })}

            {renderSelectField({
              labelTH: "การเขียน",
              labelEN: "Writing",
              name: `recruitLanguageSkills[${index}].recruitLanguageWriteLevel`,
              value:
                formData.recruitLanguageSkills?.[index]
                  ?.recruitLanguageWriteLevel || "",
              onChange: handleInputChange(
                `recruitLanguageSkills[${index}].recruitLanguageWriteLevel`
              ),
              error:
                errors?.recruitLanguageSkills?.[index]
                  ?.recruitLanguageWriteLevel,
              options: [
                { value: "Excellent", labelTH: "ดีมาก", labelEN: "Excellent" },
                { value: "Good", labelTH: "ดี", labelEN: "Good" },
                { value: "Fair", labelTH: "พอใช้", labelEN: "Fair" },
              ],
            })}
          </div>
        ))}

        <div className="flex flex-row items-center justify-center w-full p-2 gap-2 border-4 border-warning">
          <div className="flex items-center justify-end w-full h-full p-2 gap-2 border-4 border-primary">
            <Button
              color="primary"
              size="md"
              radius="full"
              className="flex items-center justify-center h-full px-8 py-4 gap-2 border-2 border-dark"
              onPress={handleAddLanguageSkill}
            >
              <PlusCircle /> เพิ่มทักษะภาษา
            </Button>
          </div>
          {languageSkills.length > 1 && (
            <div className="flex items-center justify-end w-full h-full p-2 gap-2 border-4 border-warning">
              <Button
                color="danger"
                size="md"
                radius="full"
                className="flex items-center justify-center h-full px-8 py-4 gap-2 border-2 border-dark"
                onPress={handleRemoveLastSkill}
              >
                <MinusCircle /> ลบทักษะภาษา
              </Button>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-center text-lg font-[600]">
          ทักษะอื่นๆ
          <br />
          Other Skills
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderInputField({
            labelTH: "ทักษะทางด้านคอมพิวเตอร์",
            labelEN: "Computer Skills",
            name: "recruitDetail.recruitDetailComputerSkill",
            type: "text",
            value: formData?.recruitDetail?.recruitDetailComputerSkill || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailComputerSkill"
            ),
            error: errors?.["recruitDetail.recruitDetailComputerSkill"],
          })}
          {renderInputField({
            labelTH: "ทักษะทางด้านกีฬา",
            labelEN: "Sport Skills",
            name: "recruitDetail.recruitDetailSportSkill",
            type: "text",
            value: formData?.recruitDetail?.recruitDetailSportSkill || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailSportSkill"
            ),
            error: errors?.["recruitDetail.recruitDetailSportSkill"],
          })}
          {renderInputField({
            labelTH: "ทักษะทางด้านอื่นๆ",
            labelEN: "Other Skills",
            name: "recruitDetail.recruitDetailOtherSkill",
            type: "text",
            value: formData?.recruitDetail?.recruitDetailOtherSkill || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailOtherSkill"
            ),
            error: errors?.["recruitDetail.recruitDetailOtherSkill"],
          })}
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderInputField({
            labelTH: "คะแนน Toeic",
            labelEN: "Score Toeic",
            name: "recruitDetail.recruitDetailScoreToeic",
            type: "number",
            value: formData?.recruitDetail?.recruitDetailScoreToeic || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailScoreToeic"
            ),
            error: errors?.["recruitDetail.recruitDetailScoreToeic"],
          })}
          {renderInputField({
            labelTH: "คะแนน Toefl",
            labelEN: "Score Toefl",
            name: "recruitDetail.recruitDetailScoreToefl",
            type: "number",
            value: formData?.recruitDetail?.recruitDetailScoreToefl || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailScoreToefl"
            ),
            error: errors?.["recruitDetail.recruitDetailScoreToefl"],
          })}
          {renderInputField({
            labelTH: "คะแนน Ielts",
            labelEN: "Score Ielts",
            name: "recruitDetail.recruitDetailScoreIelts",
            type: "number",
            value: formData?.recruitDetail?.recruitDetailScoreIelts || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailScoreIelts"
            ),
            error: errors?.["recruitDetail.recruitDetailScoreIelts"],
          })}
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
            ท่านมีรถยนต์ /
            มอเตอร์ไซต์ส่วนตัวที่สามารถนำมาใช้ในธุระของบริษัทหรือไม่
            <br />
            Do you have a car / motorcycle available for company business
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderRadioGroupField({
            labelTH: "รถยนต์",
            labelEN: "Car",
            name: "recruitDetail.recruitDetailOwnCar",
            value: formData?.recruitDetail?.recruitDetailOwnCar || "",
            onChange: handleInputChange("recruitDetail.recruitDetailOwnCar"),
            error: errors?.["recruitDetail.recruitDetailOwnCar"],
            options: [
              { labelTH: "มี", labelEN: "Yes", value: "Yes" },
              { labelTH: "ไม่มี", labelEN: "No", value: "No" },
            ],
          })}
          {renderRadioGroupField({
            labelTH: "รถมอไซต์",
            labelEN: "Motorcycle",
            name: "recruitDetail.recruitDetailOwnMotorcycle",
            value: formData?.recruitDetail?.recruitDetailOwnMotorcycle || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailOwnMotorcycle"
            ),
            error: errors?.["recruitDetail.recruitDetailOwnMotorcycle"],
            options: [
              { labelTH: "มี", labelEN: "Yes", value: "Yes" },
              { labelTH: "ไม่มี", labelEN: "No", value: "No" },
            ],
          })}
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
            ท่านมีใบขับขี่หรือไม่
            <br />
            Do you have a driving license?
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderRadioGroupField({
            labelTH: "รถยนต์",
            labelEN: "Car",
            name: "recruitDetail.recruitDetailHaveCarLicense",
            value: formData?.recruitDetail?.recruitDetailHaveCarLicense || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailHaveCarLicense"
            ),
            error: errors?.["recruitDetail.recruitDetailHaveCarLicense"],
            options: [
              { labelTH: "มี", labelEN: "Yes", value: "Yes" },
              { labelTH: "ไม่มี", labelEN: "No", value: "No" },
            ],
          })}
          {renderRadioGroupField({
            labelTH: "รถมอไซต์",
            labelEN: "Motorcycle",
            name: "recruitDetail.recruitDetailHaveMotorcycleLicense",
            value:
              formData?.recruitDetail?.recruitDetailHaveMotorcycleLicense || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailHaveMotorcycleLicense"
            ),
            error: errors?.["recruitDetail.recruitDetailHaveMotorcycleLicense"],
            options: [
              { labelTH: "มี", labelEN: "Yes", value: "Yes" },
              { labelTH: "ไม่มี", labelEN: "No", value: "No" },
            ],
          })}
        </div>
      </div>

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
          {languageSkills.length > 1 && (
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
    </>
  );
}
