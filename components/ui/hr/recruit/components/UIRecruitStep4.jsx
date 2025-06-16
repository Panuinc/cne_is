"use client";

import React from "react";
import Image from "next/image";
import {
  Input,
  RadioGroup,
  Radio,
  Textarea,
  Select,
  SelectItem,
} from "@heroui/react";

export default function UIRecruitStep4({
  formData,
  handleInputChange,
  errors,
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 text-center text-xl font-[600] bg-success text-white">
          <div>ประวัติการทำงาน</div>
          <div>Professional Experience</div>
        </div>
        <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 text-center text-md font-[600]">
          <div>กรุณาเรียงจากปัจจุบันไปหาอดีต?</div>
          <div>From the most current</div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
                <div className="font-medium text-black">ชื่อสถานที่ทำงาน</div>
                <div className="text-sm text-gray-500">Company's name</div>
              </div>
              <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
                <Input
                  name="recruitWorkExperiences[0].recruitWorkplaceName"
                  type="text"
                  placeholder="xxx xxx"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  value={
                    formData.recruitWorkExperiences?.[0]
                      ?.recruitWorkplaceName || ""
                  }
                  onChange={handleInputChange(
                    "recruitWorkExperiences[0].recruitWorkplaceName"
                  )}
                  isInvalid={
                    !!errors?.recruitWorkExperiences?.[0]?.recruitWorkplaceName
                  }
                  errorMessage={
                    errors?.recruitWorkExperiences?.[0]?.recruitWorkplaceName
                  }
                />
              </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
                <div className="font-medium text-black">ตำแหน่งงาน</div>
                <div className="text-sm text-gray-500">Position</div>
              </div>
              <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
                <Input
                  name="recruitWorkExperiences[0].recruitWorkPosition"
                  type="text"
                  placeholder="xxx xxx"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  value={
                    formData.recruitWorkExperiences?.[0]?.recruitWorkPosition ||
                    ""
                  }
                  onChange={handleInputChange(
                    "recruitWorkExperiences[0].recruitWorkPosition"
                  )}
                  isInvalid={
                    !!errors?.recruitWorkExperiences?.[0]?.recruitWorkPosition
                  }
                  errorMessage={
                    errors?.recruitWorkExperiences?.[0]?.recruitWorkPosition
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
                <div className="font-medium text-black">ประเภทการจ้างงาน</div>
                <div className="text-sm text-gray-500">Type of employment</div>
              </div>
              <div className="flex items-end justify-center w-full h-full p-2 gap-2">
                <RadioGroup
                  name="recruitWorkExperiences[0].recruitEmploymentType"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  orientation="horizontal"
                  className="flex items-start justify-center xl:items-start w-full h-full"
                  value={
                    formData.recruitWorkExperiences?.[0]
                      ?.recruitEmploymentType || ""
                  }
                  onValueChange={(value) =>
                    handleInputChange(
                      "recruitWorkExperiences[0].recruitEmploymentType"
                    )({
                      target: { value },
                    })
                  }
                  isInvalid={
                    !!errors?.recruitWorkExperiences?.[0]?.recruitEmploymentType
                  }
                  errorMessage={
                    errors?.recruitWorkExperiences?.[0]?.recruitEmploymentType
                  }
                >
                  <Radio value="FullTime">ประจำ</Radio>
                  <Radio value="PartTime">ชั่วคราว</Radio>
                  <Radio value="Internship">ฝึกงาน</Radio>
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
                <div className="font-medium text-black">
                  วัน เดือน ปี ที่เข้าทำงาน
                </div>
                <div className="text-sm text-gray-500">Starting date</div>
              </div>
              <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
                <Input
                  name="recruitWorkExperiences[0].recruitStartDate"
                  type="date"
                  placeholder="xxx xxx"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  value={
                    formData.recruitWorkExperiences?.[0]?.recruitStartDate || ""
                  }
                  onChange={handleInputChange(
                    "recruitWorkExperiences[0].recruitStartDate"
                  )}
                  isInvalid={
                    !!errors?.recruitWorkExperiences?.[0]?.recruitStartDate
                  }
                  errorMessage={
                    errors?.recruitWorkExperiences?.[0]?.recruitStartDate
                  }
                />
              </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
                <div className="font-medium text-black">
                  วัน เดือน ปี ที่ลาออก
                </div>
                <div className="text-sm text-gray-500">Leave date</div>
              </div>
              <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
                <Input
                  name="recruitWorkExperiences[0].recruitEndDate"
                  type="date"
                  placeholder="xxx xxx"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  value={
                    formData.recruitWorkExperiences?.[0]?.recruitEndDate || ""
                  }
                  onChange={handleInputChange(
                    "recruitWorkExperiences[0].recruitEndDate"
                  )}
                  isInvalid={
                    !!errors?.recruitWorkExperiences?.[0]?.recruitEndDate
                  }
                  errorMessage={
                    errors?.recruitWorkExperiences?.[0]?.recruitEndDate
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
                <div className="font-medium text-black">เงินเดือน</div>
                <div className="text-sm text-gray-500">Salary</div>
              </div>
              <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
                <Input
                  name="recruitWorkExperiences[0].recruitSalary"
                  type="number"
                  placeholder="xxx xxx"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  value={
                    formData.recruitWorkExperiences?.[0]?.recruitSalary || ""
                  }
                  onChange={handleInputChange(
                    "recruitWorkExperiences[0].recruitSalary"
                  )}
                  isInvalid={
                    !!errors?.recruitWorkExperiences?.[0]?.recruitSalary
                  }
                  errorMessage={
                    errors?.recruitWorkExperiences?.[0]?.recruitSalary
                  }
                />
              </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
                <div className="font-medium text-black">รายได้พิเศษอื่นๆ</div>
                <div className="text-sm text-gray-500">Allowances</div>
              </div>
              <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
                <Input
                  name="recruitWorkExperiences[0].recruitExtraIncome"
                  type="number"
                  placeholder="xxx xxx"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  value={
                    formData.recruitWorkExperiences?.[0]?.recruitExtraIncome ||
                    ""
                  }
                  onChange={handleInputChange(
                    "recruitWorkExperiences[0].recruitExtraIncome"
                  )}
                  isInvalid={
                    !!errors?.recruitWorkExperiences?.[0]?.recruitExtraIncome
                  }
                  errorMessage={
                    errors?.recruitWorkExperiences?.[0]?.recruitExtraIncome
                  }
                />
              </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
                <div className="font-medium text-black">เหตุผลในการลาออก</div>
                <div className="text-sm text-gray-500">Reason for leaving</div>
              </div>
              <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
                <Input
                  name="recruitWorkExperiences[0].recruitReasonForLeaving"
                  type="number"
                  placeholder="xxx xxx"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  value={
                    formData.recruitWorkExperiences?.[0]
                      ?.recruitReasonForLeaving || ""
                  }
                  onChange={handleInputChange(
                    "recruitWorkExperiences[0].recruitReasonForLeaving"
                  )}
                  isInvalid={
                    !!errors?.recruitWorkExperiences?.[0]
                      ?.recruitReasonForLeaving
                  }
                  errorMessage={
                    errors?.recruitWorkExperiences?.[0]?.recruitReasonForLeaving
                  }
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col items-center justify-center w-full h-full gap-2">
              <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
                <div className="font-medium text-black">
                  ลักษณะงานที่รับผิดชอบ
                </div>
                <div className="text-sm text-gray-500">
                  Job description & Responsibility
                </div>
              </div>
              <div className="flex items-end justify-center w-full h-full p-2 gap-2">
                <Textarea
                  name="recruitWorkExperiences[0].recruitJobDescription"
                  placeholder="รายละเอียดงานที่ทำ"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  value={
                    formData.recruitWorkExperiences?.[0]
                      ?.recruitJobDescription || ""
                  }
                  onChange={handleInputChange(
                    "recruitWorkExperiences[0].recruitJobDescription"
                  )}
                  isInvalid={
                    !!errors?.recruitWorkExperiences?.[0]?.recruitJobDescription
                  }
                  errorMessage={
                    errors?.recruitWorkExperiences?.[0]?.recruitJobDescription
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-2">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">
                ท่านจะมาเริ่มงานกับริษัทได้เมื่อไหร่ ถ้ามีตำแหน่ง
              </div>
              <div className="text-sm text-gray-500">
                When can you start working with us, if employed?
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="md"
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

        <div className="grid grid-cols-1 xl:grid-cols-1 w-full h-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">ข้าพเจ้า</div>
              <div className="text-sm text-gray-500">I</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <RadioGroup
                name="recruitGender"
                size="md"
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
                  ยินยอม
                  <div className="text-sm text-gray-500">(Give consent)</div>
                </Radio>
                <Radio key="No" value="No">
                  ไม่ยินยอม
                  <div className="text-sm text-gray-500">
                    (Do not give consent)
                  </div>
                </Radio>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 text-md font-[600]">
          <div>
            ข้าพเจ้าขออนุญาตให้บริษัททำการตรวจสอบประวัติการทำงานและความประพฤติของข้าพเจ้ากับนายจ้างเดิม
            เพื่อยืนยันความถูกต้องของข้อมูลที่ข้าพเจ้าได้แจ้งไว้กับบริษัท
            และเพื่อประกอบการพิจารณาในการจ้างงาน
          </div>
          <div>
            I hereby authorize the company to verify my employment history and
            conduct with my previous employers in order to confirm the accuracy
            of the information I have provided, and to support the company’s
            consideration for employment.
          </div>
        </div>
      </div>

      {/* //---// */}
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 text-center text-xl font-[600] bg-success text-white">
          <div>ข้อความเพิ่มเติม</div>
          <div>Further Information</div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          {/* //----// */}
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">
                ท่านเคยถูกให้ออกจากงานหรือไม่?
              </div>
              <div className="text-sm text-gray-500">
                Have you ever been discharged from employment for any reason?
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-5/12 p-2 gap-2">
              <RadioGroup
                name="recruitGender"
                size="md"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-stat w-full h-full"
                // value={formData.recruitGender}
                // onValueChange={(value) =>
                //   handleInputChange("recruitGender")({ target: { value } })
                // }
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              >
                <Radio key="No" value="No">
                  ไม่เคย <div className="text-sm text-gray-500">(No)</div>
                </Radio>
                <Radio key="Yes" value="Yes">
                  เคย เพราะ
                  <div className="text-sm text-gray-500">(Yes Because)</div>
                </Radio>
              </RadioGroup>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-3/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="md"
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
          {/* //----// */}
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">
                ท่านเคยป่วยหนักและเป็นโรคติดต่อร้ายแรงมาก่อนหรือไม่?
              </div>
              <div className="text-sm text-gray-500">
                Have you ever been seriously ill or contracted with contagious
                disease?
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-5/12 p-2 gap-2">
              <RadioGroup
                name="recruitGender"
                size="md"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-stat w-full h-full"
                // value={formData.recruitGender}
                // onValueChange={(value) =>
                //   handleInputChange("recruitGender")({ target: { value } })
                // }
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              >
                <Radio key="No" value="No">
                  ไม่เคย <div className="text-sm text-gray-500">(No)</div>
                </Radio>
                <Radio key="Yes" value="Yes">
                  เคยระบุชื่อโรค
                  <div className="text-sm text-gray-500">(Yes Explain)</div>
                </Radio>
              </RadioGroup>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-3/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="md"
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
          {/* //----// */}
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">
                ท่านเคยได้รับโทษทางอาญา หรือจำคุก หรือเป็นบุคคลล้มละลายหรือไม่?
              </div>
              <div className="text-sm text-gray-500">
                Have you ever been arrested or convicted for any offense or
                crime or bankrupt?
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-5/12 p-2 gap-2">
              <RadioGroup
                name="recruitGender"
                size="md"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-stat w-full h-full"
                // value={formData.recruitGender}
                // onValueChange={(value) =>
                //   handleInputChange("recruitGender")({ target: { value } })
                // }
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              >
                <Radio key="No" value="No">
                  ไม่เคย <div className="text-sm text-gray-500">(No)</div>
                </Radio>
                <Radio key="Yes" value="Yes">
                  เคย <div className="text-sm text-gray-500">(Yes)</div>
                </Radio>
              </RadioGroup>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-3/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="md"
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
          {/* //----// */}
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">
                ขณะนี้คุณตั้งครรภ์หรือไม่?
              </div>
              <div className="text-sm text-gray-500">Are you pregnant?</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-5/12 p-2 gap-2">
              <RadioGroup
                name="recruitGender"
                size="md"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-stat w-full h-full"
                // value={formData.recruitGender}
                // onValueChange={(value) =>
                //   handleInputChange("recruitGender")({ target: { value } })
                // }
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              >
                <Radio key="No" value="No">
                  ไม่
                  <div className="text-sm text-gray-500">(Not Pregnant)</div>
                </Radio>
                <Radio key="Yes" value="Yes">
                  ตั้งครรภ์
                  <div className="text-sm text-gray-500">
                    (Yes I'm Pregnant)
                  </div>
                </Radio>
              </RadioGroup>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-3/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                // value={formData.roleName || ""}
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              />
              เดือน (Months)
            </div>
          </div>
          {/* //----// */}
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">
                ท่านมีเพื่อน คนรู้จัก หรือญาติที่ทำงานในบริษัทนี้หรือไม่?
              </div>
              <div className="text-sm text-gray-500">
                Do you have relatives and/or friends who are working in this
                company?
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-5/12 p-2 gap-2">
              <RadioGroup
                name="recruitGender"
                size="md"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-stat w-full h-full"
                // value={formData.recruitGender}
                // onValueChange={(value) =>
                //   handleInputChange("recruitGender")({ target: { value } })
                // }
                // onChange={handleInputChange("roleName")}
                // isInvalid={!!errors.roleName}
                // errorMessage={errors.roleName}
              >
                <Radio key="No" value="No">
                  ไม่มี <div className="text-sm text-gray-500">(No)</div>
                </Radio>
                <Radio key="Yes" value="Yes">
                  มี ระบุชื่อ - นามสกุล
                  <div className="text-sm text-gray-500">
                    (Yes name - surname)
                  </div>
                </Radio>
              </RadioGroup>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-3/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="md"
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
          {/* //----// */}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-2">
        <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 text-center text-md font-[600]">
          <div>
            เขียน ชื่อ ที่อยู่ โทรศัพท์ และ อาชีพของผู้ที่จะอ้างถึง 2 คน
            (ซึ่งไม่ใช่ญาติหรือนายจ้างเดิม) ที่รู้จักคุ้นเคยตัวท่านดี
          </div>
          <div>
            List names, addresses, telephone and occupation of 2 references
            (other than relatives or former employers) who know you.
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-1 w-full h-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">ลำดับที่ 1</div>
              <div className="text-sm text-gray-500">No 1</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="md"
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
              <div className="font-medium text-black">ลำดับที่ 2</div>
              <div className="text-sm text-gray-500">No 2</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <Input
                name="roleName"
                type="text"
                placeholder="xxx xxx"
                size="md"
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
        <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 text-md font-[600]">
          <div>
            ข้าพเจ้าขอรับรองว่า ได้รับอนุญาตจากบุคคลอ้างอิงที่มีรายชื่อข้างต้น
            ให้ระบุชื่อไว้เพื่อเป็นข้อมูลอ้างอิงกับบริษัท
            รวมถึงเพื่อให้บริษัทสามารถติดต่อสอบถามและยืนยันข้อมูลเกี่ยวกับตัวข้าพเจ้าได้ตามความเหมาะสม
          </div>
          <div>
            I hereby certify that I have obtained permission from the reference
            persons listed above to provide their names as references to the
            company. I also authorize the company to contact them for the
            purpose of verifying information related to myself.
          </div>
        </div>
      </div>
    </>
  );
}
