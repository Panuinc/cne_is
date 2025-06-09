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
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Image
            src="/logoCompany/com-1.png"
            alt="com-1"
            width={75}
            height={75}
          />
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-2xl font-[600]">
          บริษัท ชาญนคร วิศวกรรม จำกัด
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 text-center text-sm bg-success text-white">
          <div>
            50/1 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพ 10900
            โทร.0-2105-0999 (10 คู่สาย) แฟ็กซ์.0-2589-2932
          </div>
          <div>
            50/1 Ngamwongwan Road, Lat Yao Subdistrict, Chatuchak District,
            Bangkok 10900 Tel: 0-2105-0999 (10 lines) Fax: 0-2589-2932
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2 text-xl font-[600] text-center bg-success text-white">
          <div>ใบสมัครงาน</div>
          <div>EMPLOYMENT APPLICATION</div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-2/12 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-md font-[600]">
            วันที่
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-sm font-[300]">
            {formattedDate}
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
        <div className="flex flex-col items-center justify-center w-full h-full xl:w-10/12 gap-2 border-2">
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">ตำแหน่งที่สมัคร</div>
              <div className="text-sm font-[300]">Position</div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">เงินเดือนที่ต้องการ</div>
              <div className="text-sm font-[300]">Expected Salary</div>
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

        <div className="flex flex-col items-center justify-center w-full h-full xl:w-2/12 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-52 p-2 gap-2 border-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">รูปถ่าย</div>
              <div className="text-sm font-[300]">Photo</div>
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

      <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 text-lg font-[600] text-center bg-success text-white">
          <div>ประวัติส่วนตัว</div>
          <div>PERSONAL DATA</div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full gap-2">
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">
                คำนำหน้าชื่อ นาย/นาง/นางสาว
              </div>
              <div className="text-sm font-[300]">Title (TH)</div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">Title Mr./Mrs./Miss</div>
              <div className="text-sm font-[300]">Title (EN)</div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">ชื่อเล่น</div>
              <div className="text-sm font-[300]">Nickname</div>
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

        <div className="grid grid-cols-1 xl:grid-cols-3 w-full h-full gap-2">
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">วัน เดือน ปี เกิด</div>
              <div className="text-sm font-[300]">Date of Birth</div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">อายุ</div>
              <div className="text-sm font-[300]">Age</div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">เพศ</div>
              <div className="text-sm font-[300]">Sex</div>
            </div>
            <RadioGroup
              name="recruitGender"
              orientation="horizontal"
              value={formData.recruitGender}
              className="w-full h-full"
              onValueChange={(value) =>
                handleInputChange("recruitGender")({ target: { value } })
              }
            >
              <Radio value="Male">
                ชาย{" "}
                <div className="text-xs font-[300] text-gray-600">(Male)</div>
              </Radio>
              <Radio value="FeMale">
                หญิง{" "}
                <div className="text-xs font-[300] text-gray-600">(Female)</div>
              </Radio>
            </RadioGroup>
          </div>

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">สัญชาติ</div>
              <div className="text-sm font-[300]">Nationality</div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">ศาสนา</div>
              <div className="text-sm font-[300]">Religion</div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">ส่วนสูง</div>
              <div className="text-sm font-[300]">Height</div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">น้ำหนัก</div>
              <div className="text-sm font-[300]">Weight</div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">กรุ๊ปเลือด</div>
              <div className="text-sm font-[300]">Blood Type</div>
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

        <div className="grid grid-cols-1 xl:grid-cols-3 w-full h-full gap-2">
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">เบอร์โทรศัพท์</div>
              <div className="text-sm font-[300]">Phone Number</div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">อีเมลล์</div>
              <div className="text-sm font-[300]">Email</div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">ไอดีไลน์</div>
              <div className="text-sm font-[300]">ID Line</div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">เลขที่บัตรประชาชน</div>
              <div className="text-sm font-[300]">Identification card No.</div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">วันที่ออกบัตร</div>
              <div className="text-sm font-[300]">Date issued</div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">สถานที่ออกบัตร</div>
              <div className="text-sm font-[300]">Issued at</div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">วันหมดอายุ</div>
              <div className="text-sm font-[300]">Date Expired</div>
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

        <div className="flex flex-col items-center justify-center w-full h-full gap-2">
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">
                ที่อยู่ปัจจุบัน (Present Address)
              </div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">
                ที่อยู่ตามทะเบียนบ้าน (Registered Address)
              </div>
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

        <div className="flex flex-col items-center justify-center w-full h-full gap-2">
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">สถานภาพการสมรส</div>
              <div className="text-sm font-[300]">Marital Status</div>
            </div>
            <RadioGroup
              name="recruitMaritalStatus"
              orientation="horizontal"
              value={formData.recruitMaritalStatus}
              className="w-full h-full"
              onValueChange={(value) =>
                handleInputChange("recruitMaritalStatus")({
                  target: { value },
                })
              }
            >
              <Radio value="Single">
                โสด{" "}
                <div className="text-xs font-[300] text-gray-600">(Single)</div>
              </Radio>
              <Radio value="Married">
                สมรส{" "}
                <div className="text-xs font-[300] text-gray-600">
                  (Married)
                </div>
              </Radio>
              <Radio value="Divorced">
                หย่าร้าง{" "}
                <div className="text-xs font-[300] text-gray-600">
                  (Divorced)
                </div>
              </Radio>
              <Radio value="Widowed">
                หม้าย{" "}
                <div className="text-xs font-[300] text-gray-600">
                  (Widowed)
                </div>
              </Radio>
            </RadioGroup>
          </div>

          {formData.recruitMaritalStatus === "Married" && (
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full gap-2">
              <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full h-full p-2 gap-2">
                <div className="flex flex-col">
                  <div className="text-md font-[600]">
                    คู่สมรสมีรายได้หรือไม่?
                  </div>
                  <div className="text-sm font-[300]">
                    Does the spouse earn income?
                  </div>
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
                    มีรายได้ <div className="text-xs font-[300]">(Yes)</div>
                  </Radio>
                  <Radio value="No">
                    ไม่มีรายได้ <div className="text-xs font-[300]">(No)</div>
                  </Radio>
                </RadioGroup>
              </div>

              {formData.recruitSpouseEarnIncome === "Yes" && (
                <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
                  <div className="flex flex-col">
                    <div className="text-md font-[600]">
                      จำนวนรายได้ของคู่สมรส
                    </div>
                    <div className="text-sm font-[300]">
                      Spouse's Income (THB)
                    </div>
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

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">จำนวนบุตร</div>
              <div className="text-sm font-[300]">Number of Children</div>
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

        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center w-full h-full gap-2">
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start w-full h-full p-2 gap-2">
            <div className="flex flex-col">
              <div className="text-md font-[600]">สถานภาพทางทหาร</div>
              <div className="text-sm font-[300]">Military Service Status</div>
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
                <div className="text-xs font-[300] text-gray-600">
                  (Exempted)
                </div>
              </Radio>
              <Radio value="Completed">
                ผ่านการเกณฑ์แล้ว{" "}
                <div className="text-xs font-[300] text-gray-600">
                  (Completed)
                </div>
              </Radio>
              <Radio value="NotYetServed">
                ยังไม่เกณฑ์{" "}
                <div className="text-xs font-[300] text-gray-600">
                  (Not yet served)
                </div>
              </Radio>
              <Radio value="InProgress">
                อยู่ระหว่างการเกณฑ์{" "}
                <div className="text-xs font-[300] text-gray-600">
                  (In progress)
                </div>
              </Radio>
              <Radio value="NotRequired">
                ไม่ต้องเกณฑ์{" "}
                <div className="text-xs font-[300] text-gray-600">
                  (Not required)
                </div>
              </Radio>
            </RadioGroup>
          </div>
        </div>
      </div>
    </>
  );
}
