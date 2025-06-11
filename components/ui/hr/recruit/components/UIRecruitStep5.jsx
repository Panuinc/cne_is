"use client";

import React from "react";
import {
  Input,
  Textarea,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
} from "@heroui/react";

export default function UIRecruitStep5() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full gap-2 border-2 border-dark/25">
        <div className="grid grid-cols-1 xl:grid-cols-1 w-full h-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">
                กรุณาแนะนำตัวท่านเอง เพื่อให้บริษัทรู้จักตัวท่านดีขึ้น
              </div>
              <div className="text-sm text-gray-500">
                Please provide any further information about yourself which will
                allow our company to know you better.
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Textarea
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
        <div className="grid grid-cols-1 xl:grid-cols-1 w-full h-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">
                ข้าพเจ้าขอรับรองว่า
                ข้อความทั้งหมดในใบสมัครนี้เป็นความจริงทุกประการ
                หากภายหลังที่บริษัทได้ว่าจ้างให้ข้าพเจ้าทำงานแล้ว
                ปรากฏว่าข้อความในใบสมัคร เอกสารประกอบ
                หรือรายละเอียดที่ได้ให้ไว้ไม่เป็นความจริง
                บริษัทมีสิทธิ์เลิกจ้างข้าพเจ้าได้โดยไม่ต้องจ่ายเงินชดเชยหรือค่าเสียหายใด
                ๆ ทั้งสิ้น
              </div>
              <div className="text-sm text-gray-500">
                I hereby certify that all statements made in this application
                are true and correct in every respect. If, after being employed
                by the company, any information provided in this application,
                supporting documents, or other related details is found to be
                false, the company reserves the right to terminate my employment
                without any compensation or damages whatsoever.
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
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-2 border-2 border-dark/25">
        <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 text-center text-md font-[600]">
          <div>เอกสารที่แนบพร้อมใบสมัคร</div>
          <div>Enclosed Documents</div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">สำเนาบัตรประชาชน</div>
              <div className="text-sm text-gray-500">Identification Card</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-5/12 p-2 gap-2">
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
            <div className="flex items-end justify-center w-full h-full xl:w-3/12 p-2 gap-2">
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
          {/* //--// */}
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">สำเนาทะเบียนบ้าน</div>
              <div className="text-sm text-gray-500">House Registration</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-5/12 p-2 gap-2">
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
            <div className="flex items-end justify-center w-full h-full xl:w-3/12 p-2 gap-2">
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
          {/* //--// */}
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">หลักฐานการศึกษา</div>
              <div className="text-sm text-gray-500">Transcript</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-5/12 p-2 gap-2">
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
            <div className="flex items-end justify-center w-full h-full xl:w-3/12 p-2 gap-2">
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
          {/* //--// */}
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">ใบรับรองการผ่านงาน</div>
              <div className="text-sm text-gray-500">
                Employment Certificate
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-5/12 p-2 gap-2">
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
            <div className="flex items-end justify-center w-full h-full xl:w-3/12 p-2 gap-2">
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
          {/* //--// */}
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">
                ใบรับรองแพทย์ (ไม่เกิน 30 วัน)
              </div>
              <div className="text-sm text-gray-500">
                Medical Certificate (Not over 30 day)
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-5/12 p-2 gap-2">
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
            <div className="flex items-end justify-center w-full h-full xl:w-3/12 p-2 gap-2">
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
          {/* //--// */}
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">หลักฐานการเกณฑ์ทหาร</div>
              <div className="text-sm text-gray-500">Military Certificate</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-5/12 p-2 gap-2">
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
            <div className="flex items-end justify-center w-full h-full xl:w-3/12 p-2 gap-2">
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
    </>
  );
}
