import { Input } from "@heroui/react";
import Image from "next/image";

export default function UIRecruitStep1({
  formData,
  handleInputChange,
  errors,
}) {
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
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          บริษัท ชาญนคร วิศวกรรม จำกัด
        </div>
        <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              ใบสมัครงาน
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              EMPLOYMENT APPLICATION
            </div>
          </div>
          <div className="flex items-center justify-center w-60 h-full p-2 gap-2 border-2 border-dark">
            วันที่
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            ตำแหน่งที่สมัคร
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            เงินเดือนที่ต้องการ
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            รูปภาพ
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-dark">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          ประวัติส่วนตัว
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          PERSONAL DATA
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          คำนำหน้าชื่อ นาย/นาง/นางสาว
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          ชื่อ-นามสกุล (ภาษาไทย)
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          Title Mr./Mrs./Miss
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          ชื่อ-นามสกุล (ภาษาอังกฤษ)
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
        <div className="flex items-center justify-end w-full h-full p-2 gap-2 border-2 border-dark">
          ชื่อเล่น
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          วัน เดือน ปี เกิด
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          อายุ
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          เพศ
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          สัญชาติ
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          ศาสนา
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          ส่วนสูง
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          น้ำหนัก
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          กรุ๊ปเลือด
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            เลขที่บัตรประชาชน
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            วันที่ออกบัตร
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            สถานที่ออกบัตร
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            วันหมดอายุ
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            เบอร์โทรศัพท์
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            อีเมลล์
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            Line
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-dark">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          ที่อยู่ปัจจุบัน
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          ที่อยู่ตามทะเบียนบ้าน
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
        <div className="flex items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <Input
            name="recruitFullNameTh"
            type="text"
            label="ชื่อ-นามสกุล (ภาษาไทย)"
            placeholder="กรุณากรอกชื่อ"
            variant="underlined"
            radius="full"
            value={formData.recruitFullNameTh || ""}
            onChange={handleInputChange("recruitFullNameTh")}
            isInvalid={!!errors.recruitFullNameTh}
            errorMessage={errors.recruitFullNameTh}
          />
        </div>
        <div className="flex items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <Input
            name="recruitFullNameTh"
            type="text"
            label="ชื่อ-นามสกุล (ภาษาไทย)"
            placeholder="กรุณากรอกชื่อ"
            variant="underlined"
            radius="full"
            value={formData.recruitFullNameTh || ""}
            onChange={handleInputChange("recruitFullNameTh")}
            isInvalid={!!errors.recruitFullNameTh}
            errorMessage={errors.recruitFullNameTh}
          />
        </div>
      </div>
    </>
  );
}
