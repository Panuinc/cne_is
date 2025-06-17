"use client";

import React from "react";
import {
  renderInputField,
  renderSelectField,
  renderRadioGroupField,
} from "@/components/ui/hr/recruit/components/UIRenderField";

export default function UIRecruitStep2({
  formData,
  handleInputChange,
  errors,
  preview,
  handleFileChange,
  fileInputRef,
  formattedDate,
}) {
  return (
    <>
      {/* Session 1 */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-center text-lg font-[600]">
          ข้อมูลทางครอบครัว
          <br />
          Family Data
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderSelectField({
            labelTH: "ความสัมพันธ์",
            labelEN: "Member Relation",
            name: "recruitFamilyMemberRelation",
            value: formData.recruitFamilyMemberRelation,
            onChange: handleInputChange("recruitFamilyMemberRelation"),
            error: errors.recruitFamilyMemberRelation,
            options: [
              { value: "Father", labelTH: "พ่อ", labelEN: "Father" },
              { value: "Mother", labelTH: "แม่", labelEN: "Mother" },
              { value: "Elder", labelTH: "พี่", labelEN: "Elder" },
              { value: "Younger", labelTH: "น้อง", labelEN: "Younger" },
              { value: "Wife", labelTH: "ภรรยา", labelEN: "Wife" },
              { value: "Husband", labelTH: "สามี", labelEN: "Husband" },
            ],
          })}

          {renderInputField({
            labelTH: "Name - Surname",
            labelEN: "Full name (EN)",
            name: "recruitDetail.recruitFullNameEn",
            value: formData?.recruitDetail?.recruitFullNameEn || "",
            onChange: handleInputChange("recruitDetail.recruitFullNameEn"),
            error: errors?.["recruitDetail.recruitFullNameEn"],
          })}
        </div>
      </div>
    </>
  );
}
