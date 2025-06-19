"use client";

import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";
import { Button } from "@heroui/react";
import { MinusCircle, PlusCircle } from "lucide-react";
import {
  renderInputField,
  renderTextAreaField,
  renderRadioGroupField,
  renderSelectField,
} from "@/components/ui/hr/recruit/components/UIRenderField";

export default function UIRecruitStep6({
  formData,
  handleInputChange,
  errors,
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600] text-center">
          ความยินยอมเกี่ยวกับการประมวลผลข้อมูลส่วนบุคคลทั่วไป
          <br />
          Consent to the processing of general personal data
        </div>
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm">
          บริษัท ชาญนครวิศวกรรม จำกัด และบริษัทย่อย (รวมเรียกว่า “บริษัท”)
          มีความจำเป็นที่จะต้องเก็บ รวบรวม ใช้ รวมทั้งเปิดเผย
          (ซึ่งต่อไปนี้เรียกรวมกันว่า “ประมวลผล”)
          ข้อมูลส่วนบุคคลของท่านเพื่อใช้ประกอบกระบวนการพิจารณาใบสมัครงานของท่าน
          เช่น การสรรหาบุคลากร การตรวจสอบ
          การพิจารณาคุณสมบัติและความเหมาะสมในตำแหน่งงานที่ท่านได้สมัครไว้กับบริษัทหรือตำแหน่งงานอื่นใดที่บริษัทเห็นว่ามีความเหมาะสมกับท่าน
          <br />
          CHAN NAKORN ENGINEERING CO., LTD. and its subsidiaries (collectively
          referred to as the “Company”), have to collect, use, and disclose
          (collectively “Process”) your personal data as a part of the process
          for considering your job application such as recruitment,
          verification, and evaluation of your qualifications and suitability
          for the position you applied for, or any position which the Company
          deems appropriate for you.
        </div>

        <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm">
          นอกจากนี้ ในกรณีที่ท่านได้รับการพิจารณาให้เป็นพนักงานของบริษัทแล้ว
          บริษัทจะนำข้อมูลส่วนบุคคลที่ท่านได้ให้ไว้กับบริษัทไปใช้ประโยชน์ในการบริหารงานทรัพยากรบุคคล
          สิทธิประโยชน์ และสวัสดิการซึ่งเกี่ยวกับตัวท่านตามหลักเกณฑ์ของบริษัท
          และ/หรือหลักเกณฑ์ตามกฎหมายที่เกี่ยวข้อง
          <br />
          Moreover, in the event that you are accepted to be an employee of the
          Company, the Company will use your personal data provided by you for
          the purposes of managing human resources, benefits, and welfare
          related to you in accordance with the Company’s regulations and/or
          applicable laws.
        </div>

        <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
          ความยินยอมเกี่ยวกับข้อมูลส่วนบุคคลทั่วไป
          <br />
          Consent to the processing of general personal data
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderRadioGroupField({
            labelTH: "ข้าพเข้า",
            labelEN: "I",
            name: "recruitDetail.recruitConsentGeneral",
            value: formData?.recruitDetail?.recruitConsentGeneral || "",
            onChange: handleInputChange("recruitDetail.recruitConsentGeneral"),
            error: errors?.["recruitDetail.recruitConsentGeneral"],
            options: [
              { labelTH: "ยินยอม", labelEN: "Yes", value: "Yes" },
              { labelTH: "ไม่ยินยอม", labelEN: "No", value: "No" },
            ],
          })}
        </div>

        <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm">
          ให้บริษัทประมวลผลข้อมูลส่วนบุคคลของข้าพเจ้าเพื่อพิจารณาตำแหน่งงานที่เหมาะสม
          และแจ้งเตือนเมื่อมีการประกาศรับสมัครงานใหม่
          <br />I consent to the Company processing my personal data for the
          purpose of considering suitable job positions and notifying me when
          new job openings are announced.
        </div>

        <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
          ความยินยอมเกี่ยวกับการประมวลผลข้อมูลส่วนบุคคลที่มีความอ่อนไหว
          <br />
          Consent to the processing of sensitive personal data
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderRadioGroupField({
            labelTH: "ข้าพเข้า",
            labelEN: "I",
            name: "recruitDetail.recruitConsentSensitive",
            value: formData?.recruitDetail?.recruitConsentSensitive || "",
            onChange: handleInputChange(
              "recruitDetail.recruitConsentSensitive"
            ),
            error: errors?.["recruitDetail.recruitConsentSensitive"],
            options: [
              { labelTH: "ยินยอม", labelEN: "Yes", value: "Yes" },
              { labelTH: "ไม่ยินยอม", labelEN: "No", value: "No" },
            ],
          })}
        </div>

        <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm">
          ในการแสดงเจตนาของข้าพเจ้า
          ข้าพเจ้าเข้าใจและรับทราบถึงรายละเอียดตามที่กำหนดไว้ในประกาศคุ้มครองข้อมูลส่วนบุคคลสำหรับผู้สมัครเข้าร่วมงาน
          ผู้สมัครเข้าฝึกงาน และผู้ฝึกงาน ซึ่งแนบมากับใบสมัครงานฉบับนี้
          <br />I hereby acknowledge and understand the details specified in the
          Personal Data Protection Notice for Job Applicants, Internship
          Applicants, and Interns attached to this application.
        </div>
      </div>
    </>
  );
}
