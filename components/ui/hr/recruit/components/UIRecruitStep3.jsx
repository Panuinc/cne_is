"use client";

import React from "react";
import { Button } from "@heroui/react";
import { MinusCircle, PlusCircle } from "lucide-react";
import { renderSelectField } from "@/components/ui/hr/recruit/components/UIRenderField";

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
      </div>
    </>
  );
}
