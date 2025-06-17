"use client";

import Image from "next/image";
import React from "react";
import {
  renderInputField,
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
          ประวัติส่วนตัว
          <br />
          Personal Data
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderInputField({
            labelTH: "ชื่อ - นามสกุล",
            labelEN: "Full name (TH)",
            name: "recruitDetail.recruitFullNameTh",
            value: formData?.recruitDetail?.recruitFullNameTh || "",
            onChange: handleInputChange("recruitDetail.recruitFullNameTh"),
            error: errors?.["recruitDetail.recruitFullNameTh"],
          })}

          {renderInputField({
            labelTH: "Name - Surname",
            labelEN: "Full name (EN)",
            name: "recruitDetail.recruitFullNameEn",
            value: formData?.recruitDetail?.recruitFullNameEn || "",
            onChange: handleInputChange("recruitDetail.recruitFullNameEn"),
            error: errors?.["recruitDetail.recruitFullNameEn"],
          })}

          {renderInputField({
            labelTH: "ชื่อเล่น",
            labelEN: "Nickname",
            name: "recruitDetail.recruitNickName",
            value: formData?.recruitDetail?.recruitNickName || "",
            onChange: handleInputChange("recruitDetail.recruitNickName"),
            error: errors?.["recruitDetail.recruitNickName"],
          })}
        </div>
      </div>
    </>
  );
}
