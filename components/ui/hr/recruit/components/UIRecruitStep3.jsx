"use client";

import React from "react";
import { Input, RadioGroup, Radio, Select, SelectItem } from "@heroui/react";

export default function UIRecruitStep3({
  formData,
  handleInputChange,
  errors,
}) {
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
                name="recruitLanguageSkills[0].recruitLanguageName"
                placeholder="เลือกภาษา"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                selectedKeys={
                  formData.recruitLanguageSkills?.[0]?.recruitLanguageName
                    ? [formData.recruitLanguageSkills[0].recruitLanguageName]
                    : []
                }
                onChange={handleInputChange(
                  "recruitLanguageSkills[0].recruitLanguageName"
                )}
                isInvalid={
                  !!errors?.recruitLanguageSkills?.[0]?.recruitLanguageName
                }
                errorMessage={
                  errors?.recruitLanguageSkills?.[0]?.recruitLanguageName
                }
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
                name="recruitLanguageSkills[0].recruitLanguageListenLevel"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                selectedKeys={
                  formData.recruitLanguageSkills?.[0]
                    ?.recruitLanguageListenLevel
                    ? [
                        formData.recruitLanguageSkills[0]
                          .recruitLanguageListenLevel,
                      ]
                    : []
                }
                onChange={handleInputChange(
                  "recruitLanguageSkills[0].recruitLanguageListenLevel"
                )}
                isInvalid={
                  !!errors?.recruitLanguageSkills?.[0]
                    ?.recruitLanguageListenLevel
                }
                errorMessage={
                  errors?.recruitLanguageSkills?.[0]?.recruitLanguageListenLevel
                }
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
                name="recruitLanguageSkills[0].recruitLanguageSpeakLevel"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                selectedKeys={
                  formData.recruitLanguageSkills?.[0]?.recruitLanguageSpeakLevel
                    ? [
                        formData.recruitLanguageSkills[0]
                          .recruitLanguageSpeakLevel,
                      ]
                    : []
                }
                onChange={handleInputChange(
                  "recruitLanguageSkills[0].recruitLanguageSpeakLevel"
                )}
                isInvalid={
                  !!errors?.recruitLanguageSkills?.[0]
                    ?.recruitLanguageSpeakLevel
                }
                errorMessage={
                  errors?.recruitLanguageSkills?.[0]?.recruitLanguageSpeakLevel
                }
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
                name="recruitLanguageSkills[0].recruitLanguageReadLevel"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                selectedKeys={
                  formData.recruitLanguageSkills?.[0]?.recruitLanguageReadLevel
                    ? [
                        formData.recruitLanguageSkills[0]
                          .recruitLanguageReadLevel,
                      ]
                    : []
                }
                onChange={handleInputChange(
                  "recruitLanguageSkills[0].recruitLanguageReadLevel"
                )}
                isInvalid={
                  !!errors?.recruitLanguageSkills?.[0]?.recruitLanguageReadLevel
                }
                errorMessage={
                  errors?.recruitLanguageSkills?.[0]?.recruitLanguageReadLevel
                }
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
                name="recruitLanguageSkills[0].recruitLanguageWriteLevel"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                selectedKeys={
                  formData.recruitLanguageSkills?.[0]?.recruitLanguageWriteLevel
                    ? [
                        formData.recruitLanguageSkills[0]
                          .recruitLanguageWriteLevel,
                      ]
                    : []
                }
                onChange={handleInputChange(
                  "recruitLanguageSkills[0].recruitLanguageWriteLevel"
                )}
                isInvalid={
                  !!errors?.recruitLanguageSkills?.[0]
                    ?.recruitLanguageWriteLevel
                }
                errorMessage={
                  errors?.recruitLanguageSkills?.[0]?.recruitLanguageWriteLevel
                }
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

      {/* //--5555--// */}
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
                  name="recruitDetailComputerSkill"
                  type="text"
                  placeholder="xxx xxx"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  value={
                    formData?.recruitDetail?.recruitDetailComputerSkill || ""
                  }
                  onChange={handleInputChange(
                    "recruitDetail.recruitDetailComputerSkill"
                  )}
                  isInvalid={
                    !!errors?.["recruitDetail.recruitDetailComputerSkill"]
                  }
                  errorMessage={
                    errors?.["recruitDetail.recruitDetailComputerSkill"]
                  }
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
                  name="recruitDetailOtherSkill"
                  type="text"
                  placeholder="xxx xxx"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  value={formData?.recruitDetail?.recruitDetailOtherSkill || ""}
                  onChange={handleInputChange(
                    "recruitDetail.recruitDetailOtherSkill"
                  )}
                  isInvalid={
                    !!errors?.["recruitDetail.recruitDetailOtherSkill"]
                  }
                  errorMessage={
                    errors?.["recruitDetail.recruitDetailOtherSkill"]
                  }
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
                  name="recruitDetailScoreToeic"
                  type="number"
                  placeholder="xxx xxx"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  value={formData?.recruitDetail?.recruitDetailScoreToeic || ""}
                  onChange={handleInputChange(
                    "recruitDetail.recruitDetailScoreToeic"
                  )}
                  isInvalid={
                    !!errors?.["recruitDetail.recruitDetailScoreToeic"]
                  }
                  errorMessage={
                    errors?.["recruitDetail.recruitDetailScoreToeic"]
                  }
                />
              </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
                <div className="font-medium text-black">TOEFL</div>
              </div>
              <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
                <Input
                  name="recruitDetailScoreToefl"
                  type="number"
                  placeholder="xxx xxx"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  value={formData?.recruitDetail?.recruitDetailScoreToefl || ""}
                  onChange={handleInputChange(
                    "recruitDetail.recruitDetailScoreToefl"
                  )}
                  isInvalid={
                    !!errors?.["recruitDetail.recruitDetailScoreToefl"]
                  }
                  errorMessage={
                    errors?.["recruitDetail.recruitDetailScoreToefl"]
                  }
                />
              </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
                <div className="font-medium text-black">IELTS</div>
              </div>
              <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
                <Input
                  name="recruitDetailScoreIelts"
                  type="number"
                  placeholder="xxx xxx"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  value={formData?.recruitDetail?.recruitDetailScoreIelts || ""}
                  onChange={handleInputChange(
                    "recruitDetail.recruitDetailScoreIelts"
                  )}
                  isInvalid={
                    !!errors?.["recruitDetail.recruitDetailScoreIelts"]
                  }
                  errorMessage={
                    errors?.["recruitDetail.recruitDetailScoreIelts"]
                  }
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
                name="recruitDetailAllowReferenceCheck"
                size="md"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-start w-full h-full"
                value={
                  formData?.recruitDetail?.recruitDetailAllowReferenceCheck ||
                  ""
                }
                onValueChange={(value) =>
                  handleInputChange(
                    "recruitDetail.recruitDetailAllowReferenceCheck"
                  )({
                    target: { value },
                  })
                }
                isInvalid={
                  !!errors?.["recruitDetail.recruitDetailAllowReferenceCheck"]
                }
                errorMessage={
                  errors?.["recruitDetail.recruitDetailAllowReferenceCheck"]
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
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
              <div className="font-medium text-black">มอเตอร์ไซต์</div>
              <div className="text-sm text-gray-500">Motorcycle</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
              <RadioGroup
                name="recruitDetailAllowReferenceCheckReason"
                size="md"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-start w-full h-full"
                value={
                  formData?.recruitDetail
                    ?.recruitDetailAllowReferenceCheckReason || ""
                }
                onValueChange={(value) =>
                  handleInputChange(
                    "recruitDetail.recruitDetailAllowReferenceCheckReason"
                  )({
                    target: { value },
                  })
                }
                isInvalid={
                  !!errors?.[
                    "recruitDetail.recruitDetailAllowReferenceCheckReason"
                  ]
                }
                errorMessage={
                  errors?.[
                    "recruitDetail.recruitDetailAllowReferenceCheckReason"
                  ]
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
                name="recruitDetailEverFired"
                size="md"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-start w-full h-full"
                value={formData?.recruitDetail?.recruitDetailEverFired || ""}
                onValueChange={(value) =>
                  handleInputChange("recruitDetail.recruitDetailEverFired")({
                    target: { value },
                  })
                }
                isInvalid={!!errors?.["recruitDetail.recruitDetailEverFired"]}
                errorMessage={errors?.["recruitDetail.recruitDetailEverFired"]}
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
                name="recruitDetailEverFiredReason"
                size="md"
                variant="underlined"
                color="primary"
                radius="full"
                orientation="horizontal"
                className="flex items-start justify-center xl:items-start w-full h-full"
                value={
                  formData?.recruitDetail?.recruitDetailEverFiredReason || ""
                }
                onValueChange={(value) =>
                  handleInputChange(
                    "recruitDetail.recruitDetailEverFiredReason"
                  )({
                    target: { value },
                  })
                }
                isInvalid={
                  !!errors?.["recruitDetail.recruitDetailEverFiredReason"]
                }
                errorMessage={
                  errors?.["recruitDetail.recruitDetailEverFiredReason"]
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
        </div>
      </div>

      {/* //---// */}
    </>
  );
}
