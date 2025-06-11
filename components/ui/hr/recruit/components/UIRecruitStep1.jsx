"use client";

import React from "react";
import Image from "next/image";
import { Input, RadioGroup, Radio, Select, SelectItem } from "@heroui/react";

export default function UIRecruitStep1() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Image
            src="/logoCompany/com-1.png"
            alt="com-1"
            width={75}
            height={75}
          />
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-2xl font-[600]">
          บริษัท ชาญนครวิศวกรรม จำกัด
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 text-center bg-success text-white">
          <div>
            50/1 หมู่ที่ 20 ซอยงามวงศ์วาน 57 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร
            กรุงเทพมหานคร 10900
          </div>
          <div>
            50/1 Moo 20, Soi Ngamwongwan 57, Ngamwongwan Road, Lat Yao
            Subdistrict, Chatuchak District, Bangkok 10900
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full gap-2">
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2 text-center text-xl font-[600]">
          <div>ใบสมัครงาน</div>
          <div>Employment Application</div>
        </div>
        <div className="flex flex-col items-start justify-center w-full h-full xl:w-2/12 p-2 gap-2 text-center">
          <div>วันที่</div>
          <div>Date {formattedDate}</div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full gap-2">
        <div className="flex flex-col items-center justify-center w-full h-48 xl:w-2/12 p-2 gap-2 border-2 border-dark/25">
          Pic
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2 border-2 border-dark/25">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">ตำแหน่งที่สมัคร</div>
              <div className="text-sm text-gray-500">Position applied</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">เงินเดือนที่ต้องการ</div>
              <div className="text-sm text-gray-500">Expected salary</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-2 border-2 border-dark/25">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 text-center text-xl font-[600] bg-success text-white">
          <div>ประวัติส่วนตัว</div>
          <div>Personal Data</div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">
                ชื่อ - นามสกุล นาย / นาง / นางสาว (ภาษาไทย)
              </div>
              <div className="text-sm text-gray-500">{""}</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">
                Name & Surname Mr. / Mrs. / Miss (English)
              </div>
              <div className="text-sm text-gray-500">{""}</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 w-full h-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">วัน เดือน ปี เกิด</div>
              <div className="text-sm text-gray-500">Date of Birth</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">เพศ</div>
              <div className="text-sm text-gray-500">Gender</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <RadioGroup
                name="recruitGender"
                size="sm"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-start w-full h-full"
                // value={formData.recruitGender}
                // onValueChange={(value) =>
                //   handleInputChange("recruitGender")({ target: { value } })
                // }
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
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
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">อายุ</div>
              <div className="text-sm text-gray-500">Age</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">สัญชาติ</div>
              <div className="text-sm text-gray-500">Nationality</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">ศาสนา</div>
              <div className="text-sm text-gray-500">Religion</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">ส่วนสูง</div>
              <div className="text-sm text-gray-500">Height</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">น้ำหนัก</div>
              <div className="text-sm text-gray-500">Weight</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">กรุ๊ปเลือด</div>
              <div className="text-sm text-gray-500">Blood Type</div>
            </div>

            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Select
                name="roleStatus"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleStatus || ""}
                // selectedKeys={formData.roleStatus ? [formData.roleStatus] : []}
                // onChange={handleInputChange("roleStatus")}
                // isInvalid={!!errors.roleStatus}
                // errorMessage={errors.roleStatus}
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
        <div className="grid grid-cols-1 xl:grid-cols-4 w-full h-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">เลขที่บัตรประชาชน</div>
              <div className="text-sm text-gray-500">
                Identification card No
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">สถานที่ออกบัตร</div>
              <div className="text-sm text-gray-500">Issued at</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">วันที่ออกบัตร</div>
              <div className="text-sm text-gray-500">Date issued</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">วันหมดอายุ</div>
              <div className="text-sm text-gray-500">Date expired</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 w-full h-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">เบอร์โทรศัพท์</div>
              <div className="text-sm text-gray-500">Telephone number </div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">ไอดีไลน์</div>
              <div className="text-sm text-gray-500">Line ID</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">อีเมลล์</div>
              <div className="text-sm text-gray-500">Email</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">ที่อยู่ปัจจุบัน</div>
              <div className="text-sm text-gray-500">Present address</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">
                ที่อยู่ปัจจุบัน (Google Map)
              </div>
              <div className="text-sm text-gray-500">
                Present address (Google Map)
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">
                ที่อยู่ตามทะเบียนบ้าน
              </div>
              <div className="text-sm text-gray-500">Registered address</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">สถานภาพการสมรส</div>
              <div className="text-sm text-gray-500">Marital Status</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <RadioGroup
                name="recruitGender"
                size="sm"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-start w-full h-full"
                // value={formData.recruitGender}
                // onValueChange={(value) =>
                //   handleInputChange("recruitGender")({ target: { value } })
                // }
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
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
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">
                คู่สมรสมีรายได้หรือไม่
              </div>
              <div className="text-sm text-gray-500">
                Does the spouse earn income
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <RadioGroup
                name="recruitGender"
                size="sm"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-start w-full h-full"
                // value={formData.recruitGender}
                // onValueChange={(value) =>
                //   handleInputChange("recruitGender")({ target: { value } })
                // }
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
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
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">
                จำนวนรายได้ของคู่สมรส
              </div>
              <div className="text-sm text-gray-500">Spouse's Income (THB)</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">จำนวนบุตร</div>
              <div className="text-sm text-gray-500">Number of Children</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="sm"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">สถานภาพทางทหาร</div>
              <div className="text-sm text-gray-500">
                Military Service Status
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <RadioGroup
                name="recruitGender"
                size="sm"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-start w-full h-full"
                // value={formData.recruitGender}
                // onValueChange={(value) =>
                //   handleInputChange("recruitGender")({ target: { value } })
                // }
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              >
                <Radio key="Exempted" value="Exempted">
                  ได้รับการยกเว้น{" "}
                  <div className="text-sm text-gray-500">(Exempted)</div>
                </Radio>
                <Radio key="Completed" value="Completed">
                  ผ่านการเกณฑ์แล้ว{" "}
                  <div className="text-sm text-gray-500">(Completed)</div>
                </Radio>
                <Radio key="NotYetServed" value="NotYetServed">
                  ยังไม่เกณฑ์{" "}
                  <div className="text-sm text-gray-500">(NotYetServed)</div>
                </Radio>
                <Radio key="InProgress" value="InProgress">
                  อยู่ระหว่างการเกณฑ์{" "}
                  <div className="text-sm text-gray-500">(InProgress)</div>
                </Radio>
                <Radio key="NotRequired" value="NotRequired">
                  ไม่ต้องเกณฑ์{" "}
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
