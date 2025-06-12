"use client";

import React from "react";
import { Input, Select, SelectItem } from "@heroui/react";

export default function UIRecruitStep2({
  formData,
  handleInputChange,
  errors,
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full gap-2 border-2 border-dark/25">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 text-center text-xl font-[600] bg-success text-white">
          <div>ข้อมูลทางครอบครัว</div>
          <div>Family Data</div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-6 w-full h-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">ความสัมพันธ์</div>
              <div className="text-sm text-gray-500">Relation</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Select
                name="recruitFamilyMembers[0].recruitFamilyMemberRelation"
                placeholder="เลือกความสัมพันธ์"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                selectedKeys={
                  formData.recruitFamilyMembers?.[0]
                    ?.recruitFamilyMemberRelation
                    ? [
                        formData.recruitFamilyMembers[0]
                          .recruitFamilyMemberRelation,
                      ]
                    : []
                }
                onSelectionChange={(keys) =>
                  handleInputChange(
                    "recruitFamilyMembers[0].recruitFamilyMemberRelation"
                  )({
                    target: { value: Array.from(keys)[0] },
                  })
                }
                isInvalid={
                  !!errors?.recruitFamilyMembers?.[0]
                    ?.recruitFamilyMemberRelation
                }
                errorMessage={
                  errors?.recruitFamilyMembers?.[0]?.recruitFamilyMemberRelation
                }
              >
                <SelectItem key="Father" value="Father">
                  บิดา (Father)
                </SelectItem>
                <SelectItem key="Mother" value="Mother">
                  มารดา (Mother)
                </SelectItem>
                <SelectItem key="OlderSibling" value="OlderSibling">
                  พี่ (Older Sibling)
                </SelectItem>
                <SelectItem key="YoungerSibling" value="YoungerSibling">
                  น้อง (Younger Sibling)
                </SelectItem>
              </Select>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">ชื่อ - นามสกุล</div>
              <div className="text-sm text-gray-500">
                First name - Last name
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="recruitFamilyMembers[0].recruitFamilyMemberFullName"
                type="text"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData.recruitFamilyMembers?.[0]
                    ?.recruitFamilyMemberFullName || ""
                }
                onChange={handleInputChange(
                  "recruitFamilyMembers[0].recruitFamilyMemberFullName"
                )}
                isInvalid={
                  !!errors?.recruitFamilyMembers?.[0]
                    ?.recruitFamilyMemberFullName
                }
                errorMessage={
                  errors?.recruitFamilyMembers?.[0]?.recruitFamilyMemberFullName
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">อายุ</div>
              <div className="text-sm text-gray-500">Age</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="recruitFamilyMembers[0].recruitFamilyMemberAge"
                type="text"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData.recruitFamilyMembers?.[0]?.recruitFamilyMemberAge ||
                  ""
                }
                onChange={handleInputChange(
                  "recruitFamilyMembers[0].recruitFamilyMemberAge"
                )}
                isInvalid={
                  !!errors?.recruitFamilyMembers?.[0]?.recruitFamilyMemberAge
                }
                errorMessage={
                  errors?.recruitFamilyMembers?.[0]?.recruitFamilyMemberAge
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">อาชีพ / ตำแหน่ง</div>
              <div className="text-sm text-gray-500">Occupation / Position</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="recruitFamilyMembers[0].recruitFamilyMemberOccupation"
                type="text"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData.recruitFamilyMembers?.[0]
                    ?.recruitFamilyMemberOccupation || ""
                }
                onChange={handleInputChange(
                  "recruitFamilyMembers[0].recruitFamilyMemberOccupation"
                )}
                isInvalid={
                  !!errors?.recruitFamilyMembers?.[0]
                    ?.recruitFamilyMemberOccupation
                }
                errorMessage={
                  errors?.recruitFamilyMembers?.[0]
                    ?.recruitFamilyMemberOccupation
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">ที่ทำงาน</div>
              <div className="text-sm text-gray-500">Office</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="recruitFamilyMembers[0].recruitFamilyMemberWorkplace"
                type="text"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData.recruitFamilyMembers?.[0]
                    ?.recruitFamilyMemberWorkplace || ""
                }
                onChange={handleInputChange(
                  "recruitFamilyMembers[0].recruitFamilyMemberWorkplace"
                )}
                isInvalid={
                  !!errors?.recruitFamilyMembers?.[0]
                    ?.recruitFamilyMemberWorkplace
                }
                errorMessage={
                  errors?.recruitFamilyMembers?.[0]
                    ?.recruitFamilyMemberWorkplace
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">โทรศัพท์</div>
              <div className="text-sm text-gray-500">Tel</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="recruitFamilyMembers[0].recruitFamilyMemberPhone"
                type="text"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData.recruitFamilyMembers?.[0]
                    ?.recruitFamilyMemberPhone || ""
                }
                onChange={handleInputChange(
                  "recruitFamilyMembers[0].recruitFamilyMemberPhone"
                )}
                isInvalid={
                  !!errors?.recruitFamilyMembers?.[0]?.recruitFamilyMemberPhone
                }
                errorMessage={
                  errors?.recruitFamilyMembers?.[0]?.recruitFamilyMemberPhone
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 text-center text-md font-[600]">
          <div>กรณีเร่งด่วนติดต่อ</div>
          <div>In case of emergency, please notify</div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 w-full h-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">ชื่อ - นามสกุล</div>
              <div className="text-sm text-gray-500">
                First name - Last name
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="recruitEmergencyContacts[0].recruitEmergencyContactName"
                type="text"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData.recruitEmergencyContacts?.[0]
                    ?.recruitEmergencyContactName || ""
                }
                onChange={handleInputChange(
                  "recruitEmergencyContacts[0].recruitEmergencyContactName"
                )}
                isInvalid={
                  !!errors?.recruitEmergencyContacts?.[0]
                    ?.recruitEmergencyContactName
                }
                errorMessage={
                  errors?.recruitEmergencyContacts?.[0]
                    ?.recruitEmergencyContactName
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">ความสัมพันธ์</div>
              <div className="text-sm text-gray-500">Relation</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Select
                name="recruitEmergencyContacts[0].recruitEmergencyContactRelation"
                placeholder="เลือกความสัมพันธ์"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                selectedKeys={
                  formData.recruitEmergencyContacts?.[0]
                    ?.recruitEmergencyContactRelation
                    ? [
                        formData.recruitEmergencyContacts[0]
                          .recruitEmergencyContactRelation,
                      ]
                    : []
                }
                onSelectionChange={(keys) =>
                  handleInputChange(
                    "recruitEmergencyContacts[0].recruitEmergencyContactRelation"
                  )({
                    target: { value: Array.from(keys)[0] },
                  })
                }
                isInvalid={
                  !!errors?.recruitEmergencyContacts?.[0]
                    ?.recruitEmergencyContactRelation
                }
                errorMessage={
                  errors?.recruitEmergencyContacts?.[0]
                    ?.recruitEmergencyContactRelation
                }
              >
                <SelectItem key="Father" value="Father">
                  บิดา (Father)
                </SelectItem>
                <SelectItem key="Mother" value="Mother">
                  มารดา (Mother)
                </SelectItem>
                <SelectItem key="Sibling" value="Sibling">
                  พี่น้อง (Sibling)
                </SelectItem>
                <SelectItem key="Friend" value="Friend">
                  เพื่อน (Friend)
                </SelectItem>
                <SelectItem key="Manager" value="Manager">
                  หัวหน้า (Manager)
                </SelectItem>
                <SelectItem key="Other" value="Other">
                  อื่น ๆ (Other)
                </SelectItem>
              </Select>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">โทรศัพท์</div>
              <div className="text-sm text-gray-500">Tel</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="recruitEmergencyContacts[0].recruitEmergencyContactPhone"
                type="text"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData.recruitEmergencyContacts?.[0]
                    ?.recruitEmergencyContactPhone || ""
                }
                onChange={handleInputChange(
                  "recruitEmergencyContacts[0].recruitEmergencyContactPhone"
                )}
                isInvalid={
                  !!errors?.recruitEmergencyContacts?.[0]
                    ?.recruitEmergencyContactPhone
                }
                errorMessage={
                  errors?.recruitEmergencyContacts?.[0]
                    ?.recruitEmergencyContactPhone
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">ที่อยู่</div>
              <div className="text-sm text-gray-500">Address</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="recruitEmergencyContacts[0].recruitEmergencyContactAddress"
                type="text"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData.recruitEmergencyContacts?.[0]
                    ?.recruitEmergencyContactAddress || ""
                }
                onChange={handleInputChange(
                  "recruitEmergencyContacts[0].recruitEmergencyContactAddress"
                )}
                isInvalid={
                  !!errors?.recruitEmergencyContacts?.[0]
                    ?.recruitEmergencyContactAddress
                }
                errorMessage={
                  errors?.recruitEmergencyContacts?.[0]
                    ?.recruitEmergencyContactAddress
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 text-center text-md font-[600]">
          <div>
            ข้าพเจ้าขอรับรองว่าได้รับอนุญาตจากบุคคลที่มีรายชื่อข้างต้น
            ให้เปิดเผยข้อมูลส่วนบุคคลแก่บริษัท เพื่อให้บริษัทสามารถติดต่อ
            สอบถามข้อมูล และยืนยันข้อมูลเกี่ยวกับตัวข้าพเจ้า
          </div>
          <div>
            I certify that I have received the above person’s consent for
            disclosing his/her personal data to the company for making contact,
            asking for information and verifying my information.
          </div>
        </div>
      </div>

      {/* //---// */}

      <div className="flex flex-col items-center justify-center w-full gap-2 border-2 border-dark/25">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 text-center text-xl font-[600] bg-success text-white">
          <div>ประวัติการศึกษา</div>
          <div>Education Background</div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-7 w-full h-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">ระดับการศึกษา</div>
              <div className="text-sm text-gray-500">Level of education</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Select
                name="recruitEducations[0].recruitEducationLevel"
                placeholder="เลือกระดับการศึกษา"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                selectedKeys={
                  formData.recruitEducations?.[0]?.recruitEducationLevel
                    ? [formData.recruitEducations[0].recruitEducationLevel]
                    : []
                }
                onSelectionChange={(keys) =>
                  handleInputChange(
                    "recruitEducations[0].recruitEducationLevel"
                  )({
                    target: { value: Array.from(keys)[0] },
                  })
                }
                isInvalid={
                  !!errors?.recruitEducations?.[0]?.recruitEducationLevel
                }
                errorMessage={
                  errors?.recruitEducations?.[0]?.recruitEducationLevel
                }
              >
                <SelectItem key="Primary" value="Primary">
                  ประถมศึกษา (Primary)
                </SelectItem>
                <SelectItem key="LowerSecondary" value="LowerSecondary">
                  มัธยมต้น (Lower Secondary)
                </SelectItem>
                <SelectItem key="UpperSecondary" value="UpperSecondary">
                  มัธยมปลาย (Upper Secondary)
                </SelectItem>
                <SelectItem key="Vocational" value="Vocational">
                  ปวช. (Vocational)
                </SelectItem>
                <SelectItem key="HighVocational" value="HighVocational">
                  ปวส. (High Vocational)
                </SelectItem>
                <SelectItem key="Bachelor" value="Bachelor">
                  ปริญญาตรี (Bachelor)
                </SelectItem>
                <SelectItem key="Master" value="Master">
                  ปริญญาโท (Master)
                </SelectItem>
                <SelectItem key="Doctorate" value="Doctorate">
                  ปริญญาเอก (Doctorate)
                </SelectItem>
              </Select>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">ตั้งแต่</div>
              <div className="text-sm text-gray-500">From</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="recruitEducations[0].recruitEducationFromDate"
                type="date"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData.recruitEducations?.[0]?.recruitEducationFromDate ||
                  ""
                }
                onChange={handleInputChange(
                  "recruitEducations[0].recruitEducationFromDate"
                )}
                isInvalid={
                  !!errors?.recruitEducations?.[0]?.recruitEducationFromDate
                }
                errorMessage={
                  errors?.recruitEducations?.[0]?.recruitEducationFromDate
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">ถึง</div>
              <div className="text-sm text-gray-500">To</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="recruitEducations[0].recruitEducationToDate"
                type="date"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData.recruitEducations?.[0]?.recruitEducationToDate || ""
                }
                onChange={handleInputChange(
                  "recruitEducations[0].recruitEducationToDate"
                )}
                isInvalid={
                  !!errors?.recruitEducations?.[0]?.recruitEducationToDate
                }
                errorMessage={
                  errors?.recruitEducations?.[0]?.recruitEducationToDate
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">
                ชื่อสถานศึกษา และที่ตั้ง
              </div>
              <div className="text-sm text-gray-500">
                Name of institute and location
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="recruitEducations[0].recruitEducationSchool"
                type="text"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData.recruitEducations?.[0]?.recruitEducationSchool || ""
                }
                onChange={handleInputChange(
                  "recruitEducations[0].recruitEducationSchool"
                )}
                isInvalid={
                  !!errors?.recruitEducations?.[0]?.recruitEducationSchool
                }
                errorMessage={
                  errors?.recruitEducations?.[0]?.recruitEducationSchool
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">
                วุฒิการศึกษาที่ได้รับ
              </div>
              <div className="text-sm text-gray-500">
                Certificate / Diploma / Degree
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="recruitEducations[0].recruitEducationDegree"
                type="text"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData.recruitEducations?.[0]?.recruitEducationDegree || ""
                }
                onChange={handleInputChange(
                  "recruitEducations[0].recruitEducationDegree"
                )}
                isInvalid={
                  !!errors?.recruitEducations?.[0]?.recruitEducationDegree
                }
                errorMessage={
                  errors?.recruitEducations?.[0]?.recruitEducationDegree
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">วิชาเอก</div>
              <div className="text-sm text-gray-500">Major subject</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="recruitEducations[0].recruitEducationMajor"
                type="text"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData.recruitEducations?.[0]?.recruitEducationMajor || ""
                }
                onChange={handleInputChange(
                  "recruitEducations[0].recruitEducationMajor"
                )}
                isInvalid={
                  !!errors?.recruitEducations?.[0]?.recruitEducationMajor
                }
                errorMessage={
                  errors?.recruitEducations?.[0]?.recruitEducationMajor
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">เกรดเฉลี่ย</div>
              <div className="text-sm text-gray-500">GPA</div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="recruitEducations[0].recruitEducationGPA"
                type="number"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData.recruitEducations?.[0]?.recruitEducationGPA || ""
                }
                onChange={handleInputChange(
                  "recruitEducations[0].recruitEducationGPA"
                )}
                isInvalid={
                  !!errors?.recruitEducations?.[0]?.recruitEducationGPA
                }
                errorMessage={
                  errors?.recruitEducations?.[0]?.recruitEducationGPA
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* //---// */}

      <div className="flex flex-col items-center justify-center w-full gap-2 border-2 border-dark/25">
        <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 text-center text-md font-[600]">
          <div>ใบอนุญาตประกอบวิชาชีพ</div>
          <div>Professional License</div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full h-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">
                ชื่อใบอนุญาตประกอบวิชาชีพ
              </div>
              <div className="text-sm text-gray-500">
                Professional License Name
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="recruitProfessionalLicenses[0].recruitLicenseName"
                type="text"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData.recruitProfessionalLicenses?.[0]
                    ?.recruitLicenseName || ""
                }
                onChange={handleInputChange(
                  "recruitProfessionalLicenses[0].recruitLicenseName"
                )}
                isInvalid={
                  !!errors?.recruitProfessionalLicenses?.[0]?.recruitLicenseName
                }
                errorMessage={
                  errors?.recruitProfessionalLicenses?.[0]?.recruitLicenseName
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">
                เลขที่ใบอนุญาตประกอบวิชาชีพ
              </div>
              <div className="text-sm text-gray-500">
                Professional License Number
              </div>
            </div>
            <div className="flex items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="recruitProfessionalLicenses[0].recruitLicenseNumber"
                type="number"
                placeholder="xxx xxx"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                value={
                  formData.recruitProfessionalLicenses?.[0]
                    ?.recruitLicenseNumber || ""
                }
                onChange={handleInputChange(
                  "recruitProfessionalLicenses[0].recruitLicenseNumber"
                )}
                isInvalid={
                  !!errors?.recruitProfessionalLicenses?.[0]
                    ?.recruitLicenseNumber
                }
                errorMessage={
                  errors?.recruitProfessionalLicenses?.[0]?.recruitLicenseNumber
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
