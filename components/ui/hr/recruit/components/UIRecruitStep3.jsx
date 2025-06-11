"use client";

import React from "react";
import { Input, RadioGroup, Radio, Select, SelectItem } from "@heroui/react";

export default function UIRecruitStep3() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full gap-2 border-2 border-dark/25">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 text-center text-xl font-[600] bg-success text-white">
          <div>ภาษา กรุณาระบุ ดีมาก, ดี, พอใช้</div>
          <div>LANGUAGE - Please Identify: EXCELLENT, GOOD, FAIR</div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-5 w-full h-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">ภาษา</div>
              <div className="text-sm text-gray-500">Language</div>
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
                <SelectItem key="Thai" value="Thai">
                  ไทย (Thai)
                </SelectItem>
                <SelectItem key="English" value="English">
                  อังกฤษ (English)
                </SelectItem>
                <SelectItem key="Chinese" value="Chinese">
                  จีน (Chinese)
                </SelectItem>
                <SelectItem key="Japanese" value="Japanese">
                  ญี่ปุ่น (Japanese)
                </SelectItem>
              </Select>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">การฟัง</div>
              <div className="text-sm text-gray-500">Listening</div>
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
                <SelectItem key="Excellent" value="Excellent">
                  ดีมาก (Excellent)
                </SelectItem>
                <SelectItem key="Good" value="Good">
                  ดี (Good)
                </SelectItem>
                <SelectItem key="Fair" value="Fair">
                  พอใช้ (Fair)
                </SelectItem>
              </Select>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">การพูด</div>
              <div className="text-sm text-gray-500">Speaking</div>
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
                <SelectItem key="Excellent" value="Excellent">
                  ดีมาก (Excellent)
                </SelectItem>
                <SelectItem key="Good" value="Good">
                  ดี (Good)
                </SelectItem>
                <SelectItem key="Fair" value="Fair">
                  พอใช้ (Fair)
                </SelectItem>
              </Select>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">การอ่าน</div>
              <div className="text-sm text-gray-500">Reading</div>
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
                <SelectItem key="Excellent" value="Excellent">
                  ดีมาก (Excellent)
                </SelectItem>
                <SelectItem key="Good" value="Good">
                  ดี (Good)
                </SelectItem>
                <SelectItem key="Fair" value="Fair">
                  พอใช้ (Fair)
                </SelectItem>
              </Select>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">การเขียน</div>
              <div className="text-sm text-gray-500">Writing</div>
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
                <SelectItem key="Excellent" value="Excellent">
                  ดีมาก (Excellent)
                </SelectItem>
                <SelectItem key="Good" value="Good">
                  ดี (Good)
                </SelectItem>
                <SelectItem key="Fair" value="Fair">
                  พอใช้ (Fair)
                </SelectItem>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* //---// */}
      <div className="flex flex-col items-center justify-center w-full gap-2 border-2 border-dark/25">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 text-center text-xl font-[600] bg-success text-white">
          <div>ทักษะอื่นๆ</div>
          <div>Other Skill</div>
        </div>
        <div className="flex flex-col xl:flex-row w-full h-full gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
                <div className="font-medium text-black">
                  ทักษะทางด้านคอมพิวเตอร์
                </div>
                <div className="text-sm text-gray-500">Computer skills</div>
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
                <div className="font-medium text-black">กีฬา</div>
                <div className="text-sm text-gray-500">Sports</div>
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
                  ความสามารถพิเศษอื่นๆ
                </div>
                <div className="text-sm text-gray-500">
                  Other special skills
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
                  การใช้เครื่องใช้สำนักงาน
                </div>
                <div className="text-sm text-gray-500">Office Equipment</div>
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
                <div className="font-medium text-black">TOEIC</div>
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
                <div className="font-medium text-black">TOEFL</div>
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
                <div className="font-medium text-black">IELTS</div>
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
                <div className="font-medium text-black">อื่นๆ</div>
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
      </div>

      {/* //---// */}
      <div className="flex flex-col items-center justify-center w-full gap-2 border-2 border-dark/25">
        <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 text-center text-md font-[600]">
          <div>
            ท่านมีรถยนต์ /
            มอเตอร์ไซต์ส่วนตัวที่สามารถนำมาใช้ในธุระของบริษัทหรือไม่?
          </div>
          <div>
            Do you have a car / motorcycle available for company business?
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full h-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">รถยนต์</div>
              <div className="text-sm text-gray-500">Car</div>
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
              <div className="font-medium text-black">มอเตอร์ไซต์</div>
              <div className="text-sm text-gray-500">Motorcycle</div>
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
        </div>
        <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 text-center text-md font-[600]">
          <div>ท่านมีใบขับขี่หรือไม่?</div>
          <div>Do you have hold a driving license?</div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full h-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">รถยนต์</div>
              <div className="text-sm text-gray-500">Car</div>
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
              <div className="font-medium text-black">มอเตอร์ไซต์</div>
              <div className="text-sm text-gray-500">Motorcycle</div>
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
        </div>
      </div>

      {/* //---// */}
    </>
  );
}
