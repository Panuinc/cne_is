"use client";

import React from "react";
import { Button } from "@heroui/react";
import { MinusCircle, PlusCircle } from "lucide-react";
import {
  renderInputField,
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

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-md font-[600] text-center">
          ภาษา กรุณาระบุ ดีมาก ดี พอใช้
          <br />
          Language - Please Identify Excellent Good Fair
        </div>

        {languageSkills.map((_, index) => (
          <div
            key={index}
            className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2"
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

        <div className="flex flex-row items-center justify-center w-full gap-2">
          <div className="flex items-center justify-end w-full h-full p-2 gap-2">
            <Button
              color="primary"
              size="md"
              radius="full"
              className="flex items-center justify-center h-full px-8 py-4 gap-2"
              onPress={handleAddLanguageSkill}
            >
              <PlusCircle /> เพิ่มทักษะภาษา
            </Button>
          </div>
          {languageSkills.length > 1 && (
            <div className="flex items-center justify-end w-full h-full p-2 gap-2">
              <Button
                color="danger"
                size="md"
                radius="full"
                className="flex items-center justify-center h-full px-8 py-4 gap-2"
                onPress={handleRemoveLastSkill}
              >
                <MinusCircle /> ลบทักษะภาษา
              </Button>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-md font-[600] text-center">
          ทักษะอื่นๆ
          <br />
          Other Skills
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
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

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
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

        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-sm">
          ท่านมีรถยนต์ /
          มอเตอร์ไซต์ส่วนตัวที่สามารถนำมาใช้ในธุระของบริษัทหรือไม่
          <br />
          Do you have a car / motorcycle available for company business
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
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

        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-sm">
          ท่านมีใบขับขี่หรือไม่
          <br />
          Do you have a driving license?
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
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
    </>
  );
}
