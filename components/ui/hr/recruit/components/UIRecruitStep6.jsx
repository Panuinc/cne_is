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

export default function UIRecruitStep6() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-center text-xl font-[600] bg-success text-white">
          <div>ความยินยอมเกี่ยวกับข้อมูลส่วนบุคคล</div>
          <div>Consent on Personal Data Processing</div>
        </div>
        <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
          <div>
            บริษัท ชาญนครวิศวกรรม จำกัด (CHAN NAKORN ENGINEERING CO., LTD.)
            มีความจำเป็นต้องเก็บ รวบรวม ใช้ และเปิดเผย (ซึ่งต่อไปนี้เรียกรวมว่า
            “ประมวลผล”) ข้อมูลส่วนบุคคลของท่าน
            เพื่อใช้ประกอบในกระบวนการพิจารณาใบสมัครงานของท่าน เช่น
            การสรรหาบุคลากร การตรวจสอบข้อมูล
            การพิจารณาคุณสมบัติและความเหมาะสมในตำแหน่งงานที่ท่านสมัครไว้กับบริษัท
            หรือในตำแหน่งงานอื่นใดที่บริษัทเห็นว่าเหมาะสมกับท่าน CHAN NAKORN
            ENGINEERING CO., LTD. is required to collect, use, and disclose
            (collectively referred to as “Process”) your personal data as part
            of the job application process. This includes, but is not limited
            to, recruitment, background verification, and the evaluation of your
            qualifications and suitability for the position you applied for, or
            any other position the Company deems appropriate for you.
          </div>
          <div>
            นอกจากนี้ หากท่านได้รับการพิจารณาให้เป็นพนักงานของบริษัทแล้ว
            บริษัทจะนำข้อมูลส่วนบุคคลที่ท่านให้ไว้มาใช้ประโยชน์ในการบริหารจัดการทรัพยากรบุคคล
            การจัดสวัสดิการ และสิทธิประโยชน์ต่าง ๆ ที่เกี่ยวข้องกับตัวท่าน
            ตามหลักเกณฑ์ของบริษัท และ/หรือ ตามที่กฎหมายที่เกี่ยวข้องกำหนด
            Furthermore, in the event that you are accepted as an employee of
            the Company, your personal data will be used for the purpose of
            managing human resources, administering employee benefits and
            welfare, in accordance with the Company’s policies and/or applicable
            legal requirements.
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-1 w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">ข้าพเจ้า</div>
              <div className="text-sm text-gray-500">I</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2 border-2 border-dark">
              <RadioGroup
                name="recruitGender"
                size="md"
                variant="underlined"
                color="none"
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
          <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
            <div>
              ข้าพเจ้ายินยอมให้บริษัท ชาญนครวิศวกรรม จำกัด (CHAN NAKORN
              ENGINEERING CO., LTD.) ประมวลผลข้อมูลส่วนบุคคลของข้าพเจ้า
              เพื่อใช้ในการพิจารณาตำแหน่งงานที่เหมาะสมกับข้าพเจ้า
              และเพื่อแจ้งเตือนเมื่อมีประกาศรับสมัครงานใหม่จากทางบริษัท
            </div>
            <div>
              II consent to CHAN NAKORN ENGINEERING CO., LTD. processing my
              personal data for the purpose of considering job positions
              appropriate to me and notifying me when new recruitment
              announcements are made by the Company.
            </div>
          </div>
        </div>
      </div>
      {/* //--// */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-center text-xl font-[600] bg-success text-white">
          <div>ความยินยอมเกี่ยวกับข้อมูลส่วนบุคคล ที่มีความอ่อนไหว</div>
          <div>Consent regarding sensitive personal data</div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-1 w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
            <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2 border-2 border-dark">
              <div className="font-medium text-black">ข้าพเจ้า</div>
              <div className="text-sm text-gray-500">I</div>
            </div>
            <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2 border-2 border-dark">
              <RadioGroup
                name="recruitGender"
                size="md"
                variant="underlined"
                color="none"
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
          <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
            <div>
              ข้าพเจ้ายินยอมให้บริษัท ชาญนครวิศวกรรม จำกัด (CHAN NAKORN
              ENGINEERING CO., LTD.) เก็บรวบรวม ใช้
              และเปิดเผยข้อมูลส่วนบุคคลที่มีความอ่อนไหวของข้าพเจ้า ได้แก่
              เชื้อชาติ ศาสนา ข้อมูลสุขภาพ ความพิการ ประวัติอาชญากรรม กรุ๊ปเลือด
              และข้อมูลการเป็นสมาชิกสหภาพแรงงาน
              เพื่อประกอบการพิจารณาตำแหน่งงานและสถานที่ปฏิบัติงานที่เหมาะสมกับข้าพเจ้า
            </div>
            <div>
              I consent to CHAN NAKORN ENGINEERING CO., LTD. collecting, using,
              and disclosing my sensitive personal data, including ethnicity,
              religion, health information, disability, criminal records, blood
              type, and labor union membership, for the purpose of considering
              appropriate job positions and work locations for me.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
          <div>
            ในการแสดงเจตนาของข้าพเจ้า
            ข้าพเจ้าเข้าใจและรับทราบถึงรายละเอียดตามที่กำหนดไว้ในประกาศคุ้มครองข้อมูลส่วนบุคคล
            สำหรับผู้สมัครเข้าทำงาน ผู้สมัครเข้าฝึกงาน และผู้ฝึกงาน
            ซึ่งแนบท้ายใบสมัครงานฉบับนี้
          </div>
          <div>
            I hereby express my intention that I have fully understood and
            acknowledged the details specified in the Personal Data Protection
            Notice for Job Applicants, Internship Applicants, and Interns
            attached hereto.
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-1 w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex items-end justify-center w-full h-full p-2 gap-2 border-2 border-dark">
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
      </div>
    </>
  );
}
