"use client";

import Image from "next/image";
import React from "react";
import { Input, Button, Select, SelectItem } from "@heroui/react";

export default function UIRecruitStep1({
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
      {/*session 1 */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <Image
            src="/logoCompany/com-1.png"
            alt="com-1"
            width={75}
            height={75}
            property="true"
          />
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          บริษัท ชาญนครวิศวกรรม จำกัด
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-center">
          35 ม.12 ตำบล คูบางหลวง อำเภอลาดหลุมแก้ว ปทุมธานี 12140
          <br />
          35, Moo 12, Khubangluang Sub-district, Lat Lum Kaeo District, Pathum
          Thani 12140
        </div>
      </div>

      {/*session 2 */}
      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2 border-2 border-dark text-center">
          ใบสมัครงาน
          <br />
          Employment Application
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-2/12 p-2 gap-2 border-2 border-dark">
          วันที่ {formattedDate} <br />
          Date
        </div>
      </div>

      {/*session 3 */}
      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2 border-4 border-warning">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 border-4 border-primary">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[600]">
              ตำแหน่งที่สมัคร <br /> The job position you are applying for
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark">
              {formData?.recruitPerReq?.PerReqPositionId?.positionNameTH || ""}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-2 border-4 border-primary">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[600]">
              เงินเดือนที่ต้องการ <br /> Expected salary
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailSalary"
                type="number"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                required
                value={formData?.recruitDetail?.recruitDetailSalary || ""}
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailSalary"
                )}
                isInvalid={!!errors?.["recruitDetail.recruitDetailSalary"]}
                errorMessage={errors?.["recruitDetail.recruitDetailSalary"]}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-2/12 p-2 gap-2 border-4 border-warning">
          <div className="relative w-full h-40 overflow-hidden">
            {preview ? (
              <Image
                src={preview}
                alt="Profile Preview"
                fill
                className="object-contain object-center"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 bg-default">
                ไม่มีรูปโปรไฟล์
              </div>
            )}
          </div>

          <label className="flex items-center justify-center w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer transition">
            เลือกรูปภาพ
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              name="recruitDetailProfileImage"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>

      {/*session 4 */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-center">
          ประวัติส่วนตัว
          <br />
          Personal Data
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 border-4 border-warning">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[600]">
            ชื่อ - นามสกุล <br /> Expected salary
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              name="recruitFullNameTh"
              type="text"
              placeholder="xxx xxx"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              required
              value={formData?.recruitDetail?.recruitFullNameTh || ""}
              onChange={handleInputChange("recruitDetail.recruitFullNameTh")}
              isInvalid={!!errors?.["recruitDetail.recruitFullNameTh"]}
              errorMessage={errors?.["recruitDetail.recruitFullNameTh"]}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 border-4 border-warning">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[600]">
            Name - Surname <br />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              name="recruitFullNameEn"
              type="text"
              placeholder="xxx xxx"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              required
              value={formData?.recruitDetail?.recruitFullNameEn || ""}
              onChange={handleInputChange("recruitDetail.recruitFullNameEn")}
              isInvalid={!!errors?.["recruitDetail.recruitFullNameEn"]}
              errorMessage={errors?.["recruitDetail.recruitFullNameEn"]}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 border-4 border-warning">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[600]">
            ชื่อเล่น <br /> Nickname
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              name="recruitNickName"
              type="text"
              placeholder="xxx xxx"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              required
              value={formData?.recruitDetail?.recruitNickName || ""}
              onChange={handleInputChange("recruitDetail.recruitNickName")}
              isInvalid={!!errors?.["recruitDetail.recruitNickName"]}
              errorMessage={errors?.["recruitDetail.recruitNickName"]}
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 border-4 border-primary">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[600]">
              วัน เดือน ปี เกิด <br /> Date Of Birth
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailBirthDay"
                type="date"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                required
                value={formData?.recruitDetail?.recruitDetailBirthDay || ""}
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailBirthDay"
                )}
                isInvalid={!!errors?.["recruitDetail.recruitDetailBirthDay"]}
                errorMessage={errors?.["recruitDetail.recruitDetailBirthDay"]}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-2 border-4 border-primary">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[600]">
              เพศ <br /> Gender
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailGender"
                type="text"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                required
                value={formData?.recruitDetail?.recruitDetailGender || ""}
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailGender"
                )}
                isInvalid={!!errors?.["recruitDetail.recruitDetailGender"]}
                errorMessage={errors?.["recruitDetail.recruitDetailGender"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
