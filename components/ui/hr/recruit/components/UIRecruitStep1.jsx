"use client";

import Image from "next/image";
import React from "react";
import { Input, RadioGroup, Radio } from "@heroui/react";

function renderInputField({
  labelTH,
  labelEN,
  name,
  type = "text",
  placeholder = "xxx xxx",
  value,
  onChange,
  error,
  required = true,
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 border-4 border-primary">
      <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[600]">
        {labelTH} <br /> {labelEN}
      </div>
      <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          size="md"
          variant="underlined"
          color="none"
          radius="full"
          required={required}
          value={value}
          onChange={onChange}
          isInvalid={!!error}
          errorMessage={error}
        />
      </div>
    </div>
  );
}

function renderRadioGroupField({
  labelTH,
  labelEN,
  name,
  value,
  onChange,
  error,
  options = [],
  orientation = "horizontal",
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 border-4 border-primary">
      <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[600]">
        {labelTH} <br /> {labelEN}
      </div>
      <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark">
        <RadioGroup
          name={name}
          size="md"
          variant="underlined"
          color="primary"
          radius="full"
          orientation={orientation}
          value={value}
          onValueChange={(val) => onChange({ target: { value: val } })}
          isInvalid={!!error}
          errorMessage={error}
        >
          {options.map((opt) => (
            <Radio key={opt.value} value={opt.value}>
              {opt.labelTH}
              {opt.labelEN && <>({opt.labelEN})</>}
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}

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
      {/* Session 1 */}
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

      {/* Session 2 */}
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

      {/* Session 3 */}
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
          {renderInputField({
            labelTH: "เงินเดือนที่ต้องการ",
            labelEN: "Expected salary",
            name: "recruitDetail.recruitDetailSalary",
            type: "number",
            value: formData?.recruitDetail?.recruitDetailSalary || "",
            onChange: handleInputChange("recruitDetail.recruitDetailSalary"),
            error: errors?.["recruitDetail.recruitDetailSalary"],
          })}
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-2/12 p-2 gap-2 border-4 border-warning">
          <div className="relative w-full h-full overflow-hidden">
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

      {/* Session 4 */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-center">
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

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderInputField({
            labelTH: "วัน เดือน ปี เกิด",
            labelEN: "Date Of Birth",
            name: "recruitDetail.recruitDetailBirthDay",
            type: "date",
            value: formData?.recruitDetail?.recruitDetailBirthDay || "",
            onChange: handleInputChange("recruitDetail.recruitDetailBirthDay"),
            error: errors?.["recruitDetail.recruitDetailBirthDay"],
          })}
          {renderRadioGroupField({
            labelTH: "เพศ",
            labelEN: "Gender",
            name: "recruitDetail.recruitDetailGender",
            value: formData?.recruitDetail?.recruitDetailGender || "",
            onChange: handleInputChange("recruitDetail.recruitDetailGender"),
            error: errors?.["recruitDetail.recruitDetailGender"],
            options: [
              { labelTH: "ชาย", labelEN: "Male", value: "ชาย" },
              { labelTH: "หญิง", labelEN: "Female", value: "หญิง" },
              { labelTH: "อื่นๆ", labelEN: "Other", value: "อื่นๆ" },
            ],
          })}
          {renderInputField({
            labelTH: "อายุ",
            labelEN: "Age",
            name: "recruitDetail.recruitDetailAge",
            type: "number",
            value: formData?.recruitDetail?.recruitDetailAge || "",
            onChange: handleInputChange("recruitDetail.recruitDetailAge"),
            error: errors?.["recruitDetail.recruitDetailAge"],
          })}
          {renderInputField({
            labelTH: "สัญชาติ",
            labelEN: "Nationality",
            name: "recruitDetail.recruitDetailNationality",
            type: "text",
            value: formData?.recruitDetail?.recruitDetailNationality || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailNationality"
            ),
            error: errors?.["recruitDetail.recruitDetailNationality"],
          })}
          {renderInputField({
            labelTH: "ศาสนา",
            labelEN: "Religion",
            name: "recruitDetail.recruitDetailReligion",
            type: "text",
            value: formData?.recruitDetail?.recruitDetailReligion || "",
            onChange: handleInputChange("recruitDetail.recruitDetailReligion"),
            error: errors?.["recruitDetail.recruitDetailReligion"],
          })}
          {renderInputField({
            labelTH: "น้ำหนัก",
            labelEN: "Wright",
            name: "recruitDetail.recruitDetailWright",
            type: "number",
            value: formData?.recruitDetail?.recruitDetailWright || "",
            onChange: handleInputChange("recruitDetail.recruitDetailWright"),
            error: errors?.["recruitDetail.recruitDetailWright"],
          })}
          {renderInputField({
            labelTH: "ส่วนสูง",
            labelEN: "Height",
            name: "recruitDetail.recruitDetailHeight",
            type: "number",
            value: formData?.recruitDetail?.recruitDetailHeight || "",
            onChange: handleInputChange("recruitDetail.recruitDetailHeight"),
            error: errors?.["recruitDetail.recruitDetailHeight"],
          })}
          {renderRadioGroupField({
            labelTH: "กรุ๊ปเลือด",
            labelEN: "Blood Group",
            name: "recruitDetail.recruitDetailBloodGroup",
            value: formData?.recruitDetail?.recruitDetailBloodGroup || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailBloodGroup"
            ),
            error: errors?.["recruitDetail.recruitDetailBloodGroup"],
            options: [
              { labelTH: "A", value: "A" },
              { labelTH: "B", value: "B" },
              { labelTH: "AB", value: "AB" },
              { labelTH: "O", value: "O" },
              { labelTH: "Other", value: "Other" },
            ],
          })}
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderInputField({
            labelTH: "เลขที่บัตรประชาชน",
            labelEN: "Identification card No",
            name: "recruitDetail.recruitDetailIdCardNumber",
            type: "number",
            value: formData?.recruitDetail?.recruitDetailIdCardNumber || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailIdCardNumber"
            ),
            error: errors?.["recruitDetail.recruitDetailIdCardNumber"],
          })}
          {renderInputField({
            labelTH: "สถานที่ออกบัตร",
            labelEN: "Issued at",
            name: "recruitDetail.recruitDetailIdCardIssuedAt",
            type: "tex",
            value: formData?.recruitDetail?.recruitDetailIdCardIssuedAt || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailIdCardIssuedAt"
            ),
            error: errors?.["recruitDetail.recruitDetailIdCardIssuedAt"],
          })}
          {renderInputField({
            labelTH: "วันที่ออกบัตร",
            labelEN: "Date issued",
            name: "recruitDetail.recruitDetailIdCardIssuedDate",
            type: "date",
            value: formData?.recruitDetail?.recruitDetailIdCardIssuedDate || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailIdCardIssuedDate"
            ),
            error: errors?.["recruitDetail.recruitDetailIdCardIssuedDate"],
          })}
          {renderInputField({
            labelTH: "วันหมดอายุ",
            labelEN: "Date expired",
            name: "recruitDetail.recruitDetailIdCardEndDate",
            type: "date",
            value: formData?.recruitDetail?.recruitDetailIdCardEndDate || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailIdCardEndDate"
            ),
            error: errors?.["recruitDetail.recruitDetailIdCardEndDate"],
          })}
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderInputField({
            labelTH: "เบอร์โทรศัพท์",
            labelEN: "Phone number",
            name: "recruitDetail.recruitDetailPhone",
            type: "number",
            value: formData?.recruitDetail?.recruitDetailPhone || "",
            onChange: handleInputChange("recruitDetail.recruitDetailPhone"),
            error: errors?.["recruitDetail.recruitDetailPhone"],
          })}
          {renderInputField({
            labelTH: "อีเมลล์",
            labelEN: "Eamil",
            name: "recruitDetail.recruitDetailEmail",
            type: "email",
            value: formData?.recruitDetail?.recruitDetailEmail || "",
            onChange: handleInputChange("recruitDetail.recruitDetailEmail"),
            error: errors?.["recruitDetail.recruitDetailEmail"],
          })}
          {renderInputField({
            labelTH: "ไอเีไลน์",
            labelEN: "Line Id",
            name: "recruitDetail.recruitDetailLine",
            type: "text",
            value: formData?.recruitDetail?.recruitDetailLine || "",
            onChange: handleInputChange("recruitDetail.recruitDetailLine"),
            error: errors?.["recruitDetail.recruitDetailLine"],
          })}
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderInputField({
            labelTH: "ที่อยู่ปัจจุบัน",
            labelEN: "Present address",
            name: "recruitDetail.recruitDetailPresentAddress",
            type: "text",
            value: formData?.recruitDetail?.recruitDetailPresentAddress || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailPresentAddress"
            ),
            error: errors?.["recruitDetail.recruitDetailPresentAddress"],
          })}
          {renderInputField({
            labelTH: "ที่อยู่ปัจจุบันลิงค์ (Google Map)",
            labelEN: "Present address Link (Google Map)",
            name: "recruitDetail.recruitDetailPresentAddressLink",
            type: "url",
            value:
              formData?.recruitDetail?.recruitDetailPresentAddressLink || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailPresentAddressLink"
            ),
            error: errors?.["recruitDetail.recruitDetailPresentAddressLink"],
          })}
          {renderInputField({
            labelTH: "ที่อยู่ตามสำเนาทะเบียนบ้าน",
            labelEN: "Registered address",
            name: "recruitDetail.recruitDetailRegisteredAddress",
            type: "text",
            value:
              formData?.recruitDetail?.recruitDetailRegisteredAddress || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailRegisteredAddress"
            ),
            error: errors?.["recruitDetail.recruitDetailRegisteredAddress"],
          })}
          {renderRadioGroupField({
            labelTH: "ที่พักอาศัย",
            labelEN: "Residence",
            name: "recruitDetail.recruitDetailResidence",
            value: formData?.recruitDetail?.recruitDetailResidence || "",
            onChange: handleInputChange("recruitDetail.recruitDetailResidence"),
            error: errors?.["recruitDetail.recruitDetailResidence"],
            options: [
              {
                labelTH: "อยู่กับบิดามารดา",
                labelEN: "Parents_house",
                value: "Parents_house",
              },
              {
                labelTH: "บ้านของตนเอง",
                labelEN: "Own_house",
                value: "Own_house",
              },
              {
                labelTH: "หอพัก/บ้านเช่า",
                labelEN: "Boarding_house_Rented_house",
                value: "Boarding_house_Rented_house",
              },
            ],
          })}
        </div>
      </div>
    </>
  );
}
