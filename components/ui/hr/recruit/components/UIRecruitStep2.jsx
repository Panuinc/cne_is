"use client";

import React from "react";
import { Input, Select, SelectItem } from "@heroui/react";

export default function UIRecruitStep2() {
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
              <div className="font-medium text-black">อาชีพ / ตำแหน่ง</div>
              <div className="text-sm text-gray-500">Occupation / Position</div>
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
              <div className="font-medium text-black">ที่ทำงาน</div>
              <div className="text-sm text-gray-500">Office</div>
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
              <div className="font-medium text-black">โทรศัพท์</div>
              <div className="text-sm text-gray-500">Tel</div>
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
        <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 text-center text-md font-[600]">
          <div>กรณีเร่งด่วนติดต่อ</div>
          <div>In case of emergency, please notify</div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 w-full h-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2">
              <div className="font-medium text-black">ชื่อ - นามสกุล</div>
              <div className="text-sm text-gray-500">
                First name - Last name
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
              <div className="font-medium text-black">ความสัมพันธ์</div>
              <div className="text-sm text-gray-500">Relation</div>
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
        <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 text-center text-md font-[600]">
          <div>
            ข้าพเจ้าขอรับรองว่าได้รับอนุญาตจากบุคคลที่มีรายชื่อข้างต้น
            ให้เปิดเผยข้แมูลส่วนบุคคลแก่บริษัท เพื่อให้บริษัทสามารถติดต่อ
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
                <SelectItem key="Primary" value="Primary">
                  ประถมศึกษา (Primary)
                </SelectItem>
                <SelectItem key="LowerSecondary" value="LowerSecondary">
                  มัธยมศึกษาตอนต้น (Lower Secondary)
                </SelectItem>
                <SelectItem key="UpperSecondary" value="UpperSecondary">
                  มัธยมศึกษาตอนปลาย (Upper Secondary)
                </SelectItem>
                <SelectItem key="Vocational" value="Vocational">
                  ปวช (Vocational)
                </SelectItem>
                <SelectItem key="HighVocational" value="HighVocational">
                  ปวส (High Vocational)
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
              <div className="font-medium text-black">ถึง</div>
              <div className="text-sm text-gray-500">To</div>
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
              <div className="font-medium text-black">
                ชื่อสถานศึกษา และที่ตั้ง
              </div>
              <div className="text-sm text-gray-500">
                Name of institute and location
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
              <div className="font-medium text-black">
                วุฒิการศึกษาที่ได้รับ
              </div>
              <div className="text-sm text-gray-500">
                Certificate / Diploma / Degree
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
              <div className="font-medium text-black">วิชาเอก</div>
              <div className="text-sm text-gray-500">Major subject</div>
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
              <div className="font-medium text-black">เกรดเฉลี่ย</div>
              <div className="text-sm text-gray-500">GPA</div>
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
              <div className="font-medium text-black">
                เลขที่ใบอนุญาตประกอบวิชาชีพ
              </div>
              <div className="text-sm text-gray-500">
                Professional License Number
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
    </>
  );
}
