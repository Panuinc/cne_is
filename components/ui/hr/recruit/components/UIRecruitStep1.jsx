"use client";

import React from "react";
import Image from "next/image";
import { Input, RadioGroup, Radio, Select, SelectItem } from "@heroui/react";

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
      <div className="flex flex-col items-center justify-center w-full gap-2 border-2 border-dark">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <Image
            src="/logoCompany/com-1.png"
            alt="com-1"
            width={75}
            height={75}
          />
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-2xl font-[600]">
          บริษัท ชาญนครวิศวกรรม จำกัด
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-center bg-success text-white">
          <div>35 ม.12 ตำบล คูบางหลวง อำเภอลาดหลุมแก้ว ปทุมธานี 12140</div>
          <div>
            35 Moo 12, Ku Bang Luang Sub-district Lat Lum Kaeo District, Pathum
            Thani 12140
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full gap-2 border-2 border-dark">
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-9/12 p-2 gap-2 border-2 border-dark text-center text-xl font-[600] xl:indent-64">
          <div>ใบสมัครงาน</div>
          <div>Employment Application</div>
        </div>
        <div className="flex flex-col items-start justify-center w-full h-full xl:w-3/12 p-2 gap-2 border-2 border-dark text-center">
          <div>วันที่</div>
          <div>Date {formattedDate}</div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full gap-2 border-2 border-dark">
        <div className="flex flex-col items-center justify-center w-full xl:w-3/12 p-2 gap-2 border-2 border-dark">
          <div className="relative w-full h-52 overflow-hidden">
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

        <div className="flex flex-col items-center justify-center w-full h-full xl:w-9/12 p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">ตำแหน่งที่สมัคร</div>
              <div className="text-sm text-gray-500">Position applied</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2 border-2 border-dark">
              <Input
                name="positionApplied"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData?.recruitPerReq?.PerReqPositionId?.positionNameTH ||
                  ""
                }
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">เงินเดือนที่ต้องการ</div>
              <div className="text-sm text-gray-500">Expected salary</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailSalary"
                type="number"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
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
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-2 border-2 border-dark">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-center text-xl font-[600] bg-success text-white">
          <div>ประวัติส่วนตัว</div>
          <div>Personal Data</div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">
                ชื่อ - นามสกุล นาย / นาง / นางสาว (ภาษาไทย)
              </div>
              <div className="text-sm text-gray-500">{""}</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitFullNameTh"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={formData?.recruitDetail?.recruitFullNameTh || ""}
                onChange={handleInputChange("recruitDetail.recruitFullNameTh")}
                isInvalid={!!errors?.["recruitDetail.recruitFullNameTh"]}
                errorMessage={errors?.["recruitDetail.recruitFullNameTh"]}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">
                Name & Surname Mr. / Mrs. / Miss (English)
              </div>
              <div className="text-sm text-gray-500">{""}</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitFullNameEn"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={formData?.recruitDetail?.recruitFullNameEn || ""}
                onChange={handleInputChange("recruitDetail.recruitFullNameEn")}
                isInvalid={!!errors?.["recruitDetail.recruitFullNameEn"]}
                errorMessage={errors?.["recruitDetail.recruitFullNameEn"]}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">ชื่อเล่น</div>
              <div className="text-sm text-gray-500">Nick name</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitNickName"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={formData?.recruitDetail?.recruitNickName || ""}
                onChange={handleInputChange("recruitDetail.recruitNickName")}
                isInvalid={!!errors?.["recruitDetail.recruitNickName"]}
                errorMessage={errors?.["recruitDetail.recruitNickName"]}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">วัน เดือน ปี เกิด</div>
              <div className="text-sm text-gray-500">Date of Birth</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailBirthDay"
                type="date"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={formData?.recruitDetail?.recruitDetailBirthDay || ""}
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailBirthDay"
                )}
                isInvalid={!!errors?.["recruitDetail.recruitDetailBirthDay"]}
                errorMessage={errors?.["recruitDetail.recruitDetailBirthDay"]}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">เพศ</div>
              <div className="text-sm text-gray-500">Gender</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <RadioGroup
                name="recruitDetailGender"
                size="md"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-start w-full h-full"
                value={formData?.recruitDetail?.recruitDetailGender || ""}
                onValueChange={(value) =>
                  handleInputChange("recruitDetail.recruitDetailGender")({
                    target: { value },
                  })
                }
                isInvalid={!!errors?.["recruitDetail.recruitDetailGender"]}
                errorMessage={errors?.["recruitDetail.recruitDetailGender"]}
              >
                <Radio key="Male" value="Male">
                  ชาย <div className="text-sm text-gray-500">(Male)</div>
                </Radio>
                <Radio key="FeMale" value="FeMale">
                  หญิง <div className="text-sm text-gray-500">(Female)</div>
                </Radio>
              </RadioGroup>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">อายุ</div>
              <div className="text-sm text-gray-500">Age</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailAge"
                type="number"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={formData?.recruitDetail?.recruitDetailAge || ""}
                onChange={handleInputChange("recruitDetail.recruitDetailAge")}
                isInvalid={!!errors?.["recruitDetail.recruitDetailAge"]}
                errorMessage={errors?.["recruitDetail.recruitDetailAge"]}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">สัญชาติ</div>
              <div className="text-sm text-gray-500">Nationality</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailNationality"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={formData?.recruitDetail?.recruitDetailNationality || ""}
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailNationality"
                )}
                isInvalid={!!errors?.["recruitDetail.recruitDetailNationality"]}
                errorMessage={
                  errors?.["recruitDetail.recruitDetailNationality"]
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">ศาสนา</div>
              <div className="text-sm text-gray-500">Religion</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailReligion"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={formData?.recruitDetail?.recruitDetailReligion || ""}
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailReligion"
                )}
                isInvalid={!!errors?.["recruitDetail.recruitDetailReligion"]}
                errorMessage={errors?.["recruitDetail.recruitDetailReligion"]}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">ส่วนสูง</div>
              <div className="text-sm text-gray-500">Height</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailWright"
                type="number"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={formData?.recruitDetail?.recruitDetailWright || ""}
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailWright"
                )}
                isInvalid={!!errors?.["recruitDetail.recruitDetailWright"]}
                errorMessage={errors?.["recruitDetail.recruitDetailWright"]}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">น้ำหนัก</div>
              <div className="text-sm text-gray-500">Weight</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailHeight"
                type="number"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={formData?.recruitDetail?.recruitDetailHeight || ""}
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailHeight"
                )}
                isInvalid={!!errors?.["recruitDetail.recruitDetailHeight"]}
                errorMessage={errors?.["recruitDetail.recruitDetailHeight"]}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">กรุ๊ปเลือด</div>
              <div className="text-sm text-gray-500">Blood Type</div>
            </div>

            <div className="flex items-end justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Select
                name="recruitDetailBloodGroup"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                selectedKeys={
                  formData?.recruitDetail?.recruitDetailBloodGroup
                    ? [formData.recruitDetail.recruitDetailBloodGroup]
                    : []
                }
                onSelectionChange={(keys) =>
                  handleInputChange("recruitDetail.recruitDetailBloodGroup")({
                    target: { value: Array.from(keys)[0] },
                  })
                }
                isInvalid={!!errors?.["recruitDetail.recruitDetailBloodGroup"]}
                errorMessage={errors?.["recruitDetail.recruitDetailBloodGroup"]}
              >
                <SelectItem key="A" value="A">
                  A
                </SelectItem>
                <SelectItem key="B" value="B">
                  B
                </SelectItem>
                <SelectItem key="AB" value="AB">
                  AB
                </SelectItem>
                <SelectItem key="O" value="O">
                  O
                </SelectItem>
                <SelectItem key="Unknown" value="Unknown">
                  ไม่ทราบ (Unknown)
                </SelectItem>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">เลขที่บัตรประชาชน</div>
              <div className="text-sm text-gray-500">
                Identification card No
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailIdCardNumber"
                type="number"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={formData?.recruitDetail?.recruitDetailIdCardNumber || ""}
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailIdCardNumber"
                )}
                isInvalid={
                  !!errors?.["recruitDetail.recruitDetailIdCardNumber"]
                }
                errorMessage={
                  errors?.["recruitDetail.recruitDetailIdCardNumber"]
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">สถานที่ออกบัตร</div>
              <div className="text-sm text-gray-500">Issued at</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailIdCardIssuedAt"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData?.recruitDetail?.recruitDetailIdCardIssuedAt || ""
                }
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailIdCardIssuedAt"
                )}
                isInvalid={
                  !!errors?.["recruitDetail.recruitDetailIdCardIssuedAt"]
                }
                errorMessage={
                  errors?.["recruitDetail.recruitDetailIdCardIssuedAt"]
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">วันที่ออกบัตร</div>
              <div className="text-sm text-gray-500">Date issued</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailIdCardIssuedDate"
                type="date"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData?.recruitDetail?.recruitDetailIdCardIssuedDate || ""
                }
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailIdCardIssuedDate"
                )}
                isInvalid={
                  !!errors?.["recruitDetail.recruitDetailIdCardIssuedDate"]
                }
                errorMessage={
                  errors?.["recruitDetail.recruitDetailIdCardIssuedDate"]
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">วันหมดอายุ</div>
              <div className="text-sm text-gray-500">Date expired</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailIdCardEndDate"
                type="date"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData?.recruitDetail?.recruitDetailIdCardEndDate || ""
                }
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailIdCardEndDate"
                )}
                isInvalid={
                  !!errors?.["recruitDetail.recruitDetailIdCardEndDate"]
                }
                errorMessage={
                  errors?.["recruitDetail.recruitDetailIdCardEndDate"]
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">เบอร์โทรศัพท์</div>
              <div className="text-sm text-gray-500">Telephone number </div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailPhone"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={formData?.recruitDetail?.recruitDetailPhone || ""}
                onChange={handleInputChange("recruitDetail.recruitDetailPhone")}
                isInvalid={!!errors?.["recruitDetail.recruitDetailPhone"]}
                errorMessage={errors?.["recruitDetail.recruitDetailPhone"]}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">อีเมลล์</div>
              <div className="text-sm text-gray-500">Email</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailEmail"
                type="email"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={formData?.recruitDetail?.recruitDetailEmail || ""}
                onChange={handleInputChange("recruitDetail.recruitDetailEmail")}
                isInvalid={!!errors?.["recruitDetail.recruitDetailEmail"]}
                errorMessage={errors?.["recruitDetail.recruitDetailEmail"]}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">ไอดีไลน์</div>
              <div className="text-sm text-gray-500">Line ID</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailLine"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={formData?.recruitDetail?.recruitDetailLine || ""}
                onChange={handleInputChange("recruitDetail.recruitDetailLine")}
                isInvalid={!!errors?.["recruitDetail.recruitDetailLine"]}
                errorMessage={errors?.["recruitDetail.recruitDetailLine"]}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">ที่อยู่ปัจจุบัน</div>
              <div className="text-sm text-gray-500">Present address</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailPresentAddress"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData?.recruitDetail?.recruitDetailPresentAddress || ""
                }
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailPresentAddress"
                )}
                isInvalid={
                  !!errors?.["recruitDetail.recruitDetailPresentAddress"]
                }
                errorMessage={
                  errors?.["recruitDetail.recruitDetailPresentAddress"]
                }
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">
                ที่อยู่ปัจจุบัน (Google Map)
              </div>
              <div className="text-sm text-gray-500">
                Present address (Google Map)
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailPresentAddressLink"
                type="url"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData?.recruitDetail?.recruitDetailPresentAddressLink || ""
                }
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailPresentAddressLink"
                )}
                isInvalid={
                  !!errors?.["recruitDetail.recruitDetailPresentAddressLink"]
                }
                errorMessage={
                  errors?.["recruitDetail.recruitDetailPresentAddressLink"]
                }
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">
                ที่อยู่ตามทะเบียนบ้าน
              </div>
              <div className="text-sm text-gray-500">Registered address</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailRegisteredAddress"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData?.recruitDetail?.recruitDetailRegisteredAddress || ""
                }
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailRegisteredAddress"
                )}
                isInvalid={
                  !!errors?.["recruitDetail.recruitDetailRegisteredAddress"]
                }
                errorMessage={
                  errors?.["recruitDetail.recruitDetailRegisteredAddress"]
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">สถานภาพการสมรส</div>
              <div className="text-sm text-gray-500">Marital Status</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2 border-2 border-dark">
              <RadioGroup
                name="recruitDetailMaritalStatus"
                size="md"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-start w-full h-full"
                value={
                  formData?.recruitDetail?.recruitDetailMaritalStatus || ""
                }
                onValueChange={(value) =>
                  handleInputChange("recruitDetail.recruitDetailMaritalStatus")(
                    {
                      target: { value },
                    }
                  )
                }
                isInvalid={
                  !!errors?.["recruitDetail.recruitDetailMaritalStatus"]
                }
                errorMessage={
                  errors?.["recruitDetail.recruitDetailMaritalStatus"]
                }
              >
                <Radio key="Single" value="Single">
                  โสด <div className="text-sm text-gray-500">(Single)</div>
                </Radio>
                <Radio key="Married" value="Married">
                  สมรส <div className="text-sm text-gray-500">(Married)</div>
                </Radio>
                <Radio key="Divorced" value="Divorced">
                  หย่า <div className="text-sm text-gray-500">(Divorced)</div>
                </Radio>
                <Radio key="Widowed" value="Widowed">
                  หม้าย <div className="text-sm text-gray-500">(Widowed)</div>
                </Radio>
              </RadioGroup>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">
                คู่สมรสมีรายได้หรือไม่
              </div>
              <div className="text-sm text-gray-500">
                Does the spouse earn income
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2 border-2 border-dark">
              <RadioGroup
                name="recruitDetailSpouseEarnIncome"
                size="md"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-start w-full h-full"
                value={
                  formData?.recruitDetail?.recruitDetailSpouseEarnIncome || ""
                }
                onValueChange={(value) =>
                  handleInputChange(
                    "recruitDetail.recruitDetailSpouseEarnIncome"
                  )({
                    target: { value },
                  })
                }
                isInvalid={
                  !!errors?.["recruitDetail.recruitDetailSpouseEarnIncome"]
                }
                errorMessage={
                  errors?.["recruitDetail.recruitDetailSpouseEarnIncome"]
                }
              >
                <Radio key="Yes" value="Yes">
                  มี <div className="text-sm text-gray-500">(Yes)</div>
                </Radio>
                <Radio key="No" value="No">
                  ไม่มี <div className="text-sm text-gray-500">(No)</div>
                </Radio>
              </RadioGroup>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">
                จำนวนรายได้ของคู่สมรส
              </div>
              <div className="text-sm text-gray-500">Spouse's Income (THB)</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailSpouseIncomeAmount"
                type="number"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData?.recruitDetail?.recruitDetailSpouseIncomeAmount || ""
                }
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailSpouseIncomeAmount"
                )}
                isInvalid={
                  !!errors?.["recruitDetail.recruitDetailSpouseIncomeAmount"]
                }
                errorMessage={
                  errors?.["recruitDetail.recruitDetailSpouseIncomeAmount"]
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">จำนวนบุตร</div>
              <div className="text-sm text-gray-500">Number of Children</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2 border-2 border-dark">
              <Input
                name="recruitDetailNumberOfChildren"
                type="number"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData?.recruitDetail?.recruitDetailNumberOfChildren || ""
                }
                onChange={handleInputChange(
                  "recruitDetail.recruitDetailNumberOfChildren"
                )}
                isInvalid={
                  !!errors?.["recruitDetail.recruitDetailNumberOfChildren"]
                }
                errorMessage={
                  errors?.["recruitDetail.recruitDetailNumberOfChildren"]
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2 border-2 border-dark">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">สถานภาพทางทหาร</div>
              <div className="text-sm text-gray-500">
                Military Service Status
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2 border-2 border-dark">
              <RadioGroup
                name="recruitDetailMilitaryStatus"
                size="md"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-start w-full h-full"
                value={
                  formData?.recruitDetail?.recruitDetailMilitaryStatus || ""
                }
                onValueChange={(value) =>
                  handleInputChange(
                    "recruitDetail.recruitDetailMilitaryStatus"
                  )({
                    target: { value },
                  })
                }
                isInvalid={
                  !!errors?.["recruitDetail.recruitDetailMilitaryStatus"]
                }
                errorMessage={
                  errors?.["recruitDetail.recruitDetailMilitaryStatus"]
                }
              >
                <Radio key="Exempted" value="Exempted">
                  ได้รับการยกเว้น
                  <div className="text-sm text-gray-500">(Exempted)</div>
                </Radio>
                <Radio key="Completed" value="Completed">
                  ผ่านการเกณฑ์แล้ว
                  <div className="text-sm text-gray-500">(Completed)</div>
                </Radio>
                <Radio key="NotYetServed" value="NotYetServed">
                  ยังไม่เกณฑ์
                  <div className="text-sm text-gray-500">(NotYetServed)</div>
                </Radio>
                <Radio key="InProgress" value="InProgress">
                  อยู่ระหว่างการเกณฑ์
                  <div className="text-sm text-gray-500">(InProgress)</div>
                </Radio>
                <Radio key="NotRequired" value="NotRequired">
                  ไม่ต้องเกณฑ์
                  <div className="text-sm text-gray-500">(NotRequired)</div>
                </Radio>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
