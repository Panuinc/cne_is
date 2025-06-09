"use client";

import { Input, RadioGroup, Radio, Select, SelectItem } from "@heroui/react";
import Image from "next/image";

export default function UIRecruitStep1({
  formData,
  handleInputChange,
  errors,
}) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-dark">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <Image
            src="/logoCompany/com-1.png"
            alt="com-1"
            width={75}
            height={75}
          />
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-xl font-[600]">
          บริษัท ชาญนคร วิศวกรรม จำกัด
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-center text-sm leading-tight bg-success text-white">
          <span>
            50/1 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพ 10900
            โทร.0-2105-0999 (10 คู่สาย) แฟ็กซ์.0-2589-2932
          </span>
          <span>
            50/1 Ngamwongwan Road, Lat Yao Subdistrict, Chatuchak District,
            Bangkok 10900 Tel: 0-2105-0999 (10 lines) Fax: 0-2589-2932
          </span>
        </div>
      </div>

      {/* //// ---- //// */}

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
        <div className="flex flex-col items-center justify-center w-full xl:w-10/12 h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600]">
            ใบสมัครงาน
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600]">
            EMPLOYMENT APPLICATION
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full xl:w-2/12 h-full p-2 gap-2 border-2 border-dark">
          <span className="text-md font-[600]">วันที่</span>
          <span className="text-sm font-[300] border-b-2 border-dark w-full">
            {formattedDate}
          </span>
        </div>
      </div>

      {/* //// ---- //// */}

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
        <div className="flex flex-col items-center justify-end w-full xl:w-10/12 h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">ตำแหน่งที่สมัคร</span>
              <span className="text-sm font-[300]">Position</span>
            </div>
            <Input
              id="recruitPosition"
              name="recruitPosition"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              className="flex-1"
            />
          </div>
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">เงินเดือนที่ต้องการ</span>
              <span className="text-sm font-[300]">Expected Salary</span>
            </div>
            <Input
              id="perReqDesiredSalary"
              name="perReqDesiredSalary"
              type="number"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              className="flex-1"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full xl:w-2/12 h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full h-60 p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col h-full">
              <span className="text-md font-[600]">
                รูปถ่าย 1 นิ้ว หรือ 2 นิ้ว
              </span>
              <span className="text-sm font-[300]">Photo 1” or 2”</span>
            </div>
            <Input
              id="recruitPhoto"
              name="recruitPhoto"
              type="file"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              className="flex-1"
            />
          </div>
        </div>
      </div>

      {/* //// ---- //// */}

      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-dark">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600] bg-success text-white">
            ประวัติส่วนตัว
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600] bg-success text-white">
            PERSONAL DATA
          </div>
        </div>

        {/* //// ---- //// */}

        <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">
                  คำนำหน้าชื่อ นาย/นาง/นางสาว
                </span>
                <span className="text-sm font-[300]">Title (TH)</span>
              </div>
              <Input
                id="recruitFullNameTh"
                name="recruitFullNameTh"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">Title Mr./Mrs./Miss</span>
                <span className="text-sm font-[300]">Title (EN)</span>
              </div>
              <Input
                id="recruitFullNameEn"
                name="recruitFullNameEn"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">ชื่อเล่น</span>
                <span className="text-sm font-[300]">Nickname</span>
              </div>
              <Input
                id="recruitNickName"
                name="recruitNickName"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 w-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">วัน เดือน ปี เกิด</span>
                <span className="text-sm font-[300]">Date of Birth</span>
              </div>
              <Input
                id="recruitDob"
                name="recruitDob"
                type="date"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">อายุ</span>
                <span className="text-sm font-[300]">Age</span>
              </div>
              <Input
                id="recruitAge"
                name="recruitAge"
                type="number"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">เพศ</span>
                <span className="text-sm font-[300]">Sex</span>
              </div>
              <RadioGroup
                name="recruitGender"
                orientation="horizontal"
                value={formData.recruitGender}
                onValueChange={(value) =>
                  handleInputChange("recruitGender")({ target: { value } })
                }
              >
                <Radio value="Male">
                  ชาย{" "}
                  <span className="text-xs font-[300] text-gray-600">
                    (Male)
                  </span>
                </Radio>
                <Radio value="FeMale">
                  หญิง{" "}
                  <span className="text-xs font-[300] text-gray-600">
                    (Female)
                  </span>
                </Radio>
              </RadioGroup>
            </div>

            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">สัญชาติ</span>
                <span className="text-sm font-[300]">Nationality</span>
              </div>
              <Input
                id="recruitNationality"
                name="recruitNationality"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">ศาสนา</span>
                <span className="text-sm font-[300]">Religion</span>
              </div>
              <Input
                id="recruitReligion"
                name="recruitReligion"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">ส่วนสูง</span>
                <span className="text-sm font-[300]">Height</span>
              </div>
              <Input
                id="recruitHeight"
                name="recruitHeight"
                type="number"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">น้ำหนัก</span>
                <span className="text-sm font-[300]">Weight</span>
              </div>
              <Input
                id="recruitWeight"
                name="recruitWeight"
                type="number"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">กรุ๊ปเลือด</span>
                <span className="text-sm font-[300]">Blood Type</span>
              </div>
              <Select
                id="recruitBlood"
                name="recruitBlood"
                selectedKeys={[formData.recruitBlood]}
                onSelectionChange={(key) =>
                  handleInputChange("recruitBlood")({
                    target: { value: Array.from(key)[0] },
                  })
                }
                className="flex-1"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
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
          <div className="grid grid-cols-1 xl:grid-cols-3 w-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">เบอร์โทรศัพท์</span>
                <span className="text-sm font-[300]">Phone Number</span>
              </div>
              <Input
                id="recruitPhone"
                name="recruitPhone"
                type="number"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">อีเมลล์</span>
                <span className="text-sm font-[300]">Email</span>
              </div>
              <Input
                id="recruitEmail"
                name="recruitEmail"
                type="email"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">ไอดีไลน์</span>
                <span className="text-sm font-[300]">ID Line</span>
              </div>
              <Input
                id="recruitLineId"
                name="recruitLineId"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>

            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">เลขที่บัตรประชาชน</span>
                <span className="text-sm font-[300]">
                  Identification card No.
                </span>
              </div>
              <Input
                id="recruitCardNo"
                name="recruitCardNo"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">วันที่ออกบัตร</span>
                <span className="text-sm font-[300]">Date issued</span>
              </div>
              <Input
                id="recruitCardIssuedDate"
                name="recruitCardIssuedDate"
                type="date"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>

            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">สถานที่ออกบัตร</span>
                <span className="text-sm font-[300]">Issued at</span>
              </div>
              <Input
                id="recruitCardIssuedAt"
                name="recruitCardIssuedAt"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">วันหมดอายุ</span>
                <span className="text-sm font-[300]">Date Expired</span>
              </div>
              <Input
                id="recruitCardExpired"
                name="recruitCardExpired"
                type="date"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">
                  ที่อยู่ปัจจุบัน (Present Address)
                </span>
              </div>
              <Input
                id="recruitAddressPresent"
                name="recruitAddressPresent"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">
                  ที่อยู่ตามทะเบียนบ้าน (Registered Address)
                </span>
              </div>
              <Input
                id="recruitAddressRegistered"
                name="recruitAddressRegistered"
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">สถานภาพการสมรส</span>
                <span className="text-sm font-[300]">Marital Status</span>
              </div>
              <RadioGroup
                name="recruitMaritalStatus"
                orientation="horizontal"
                value={formData.recruitMaritalStatus}
                onValueChange={(value) =>
                  handleInputChange("recruitMaritalStatus")({
                    target: { value },
                  })
                }
              >
                <Radio value="Single">
                  โสด{" "}
                  <span className="text-xs font-[300] text-gray-600">
                    (Single)
                  </span>
                </Radio>
                <Radio value="Married">
                  สมรส{" "}
                  <span className="text-xs font-[300] text-gray-600">
                    (Married)
                  </span>
                </Radio>
                <Radio value="Divorced">
                  หย่าร้าง{" "}
                  <span className="text-xs font-[300] text-gray-600">
                    (Divorced)
                  </span>
                </Radio>
                <Radio value="Widowed">
                  หม้าย{" "}
                  <span className="text-xs font-[300] text-gray-600">
                    (Widowed)
                  </span>
                </Radio>
              </RadioGroup>
            </div>

            {formData.recruitMaritalStatus === "Married" && (
              <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
                <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
                  <div className="flex flex-col">
                    <span className="text-md font-[600]">
                      คู่สมรสมีรายได้หรือไม่?
                    </span>
                    <span className="text-sm font-[300]">
                      Does the spouse earn income?
                    </span>
                  </div>
                  <RadioGroup
                    name="recruitSpouseEarnIncome"
                    orientation="horizontal"
                    value={formData.recruitSpouseEarnIncome}
                    onValueChange={(value) =>
                      handleInputChange("recruitSpouseEarnIncome")({
                        target: { value },
                      })
                    }
                  >
                    <Radio value="Yes">
                      มีรายได้ <span className="text-xs font-[300]">(Yes)</span>
                    </Radio>
                    <Radio value="No">
                      ไม่มีรายได้{" "}
                      <span className="text-xs font-[300]">(No)</span>
                    </Radio>
                  </RadioGroup>
                </div>

                {formData.recruitSpouseEarnIncome === "Yes" && (
                  <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
                    <div className="flex flex-col">
                      <span className="text-md font-[600]">
                        จำนวนรายได้ของคู่สมรส
                      </span>
                      <span className="text-sm font-[300]">
                        Spouse's Income (THB)
                      </span>
                    </div>
                    <Input
                      id="recruitSpouseIncomeAmount"
                      name="recruitSpouseIncomeAmount"
                      type="number"
                      size="md"
                      variant="underlined"
                      color="none"
                      radius="full"
                      className="flex-1"
                      value={formData.recruitSpouseIncomeAmount || ""}
                      onChange={handleInputChange("recruitSpouseIncomeAmount")}
                    />
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">จำนวนบุตร</span>
                <span className="text-sm font-[300]">Number of Children</span>
              </div>
              <Input
                id="recruitChildren"
                name="recruitChildren"
                type="number"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col">
                <span className="text-md font-[600]">สถานภาพทางทหาร</span>
                <span className="text-sm font-[300]">
                  Military Service Status
                </span>
              </div>
              <RadioGroup
                name="recruitMilitaryStatus"
                orientation="horizontal"
                value={formData.recruitMilitaryStatus}
                onValueChange={(value) =>
                  handleInputChange("recruitMilitaryStatus")({
                    target: { value },
                  })
                }
              >
                <Radio value="Exempted">
                  ได้รับการยกเว้น{" "}
                  <span className="text-xs font-[300] text-gray-600">
                    (Exempted)
                  </span>
                </Radio>
                <Radio value="Completed">
                  ผ่านการเกณฑ์แล้ว{" "}
                  <span className="text-xs font-[300] text-gray-600">
                    (Completed)
                  </span>
                </Radio>
                <Radio value="NotYetServed">
                  ยังไม่เกณฑ์{" "}
                  <span className="text-xs font-[300] text-gray-600">
                    (Not yet served)
                  </span>
                </Radio>
                <Radio value="InProgress">
                  อยู่ระหว่างการเกณฑ์{" "}
                  <span className="text-xs font-[300] text-gray-600">
                    (In progress)
                  </span>
                </Radio>
                <Radio value="NotRequired">
                  ไม่ต้องเกณฑ์{" "}
                  <span className="text-xs font-[300] text-gray-600">
                    (Not required)
                  </span>
                </Radio>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>

      {/* //// ---- //// */}
    </>
  );
}
