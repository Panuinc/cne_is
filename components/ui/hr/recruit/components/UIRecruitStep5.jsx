"use client";

import { Input, Textarea, Switch } from "@heroui/react";
import { useState } from "react";

export default function UIRecruitStep5() {
  const [formData, setFormData] = useState({
    selfIntro: "",
    homeMapUrl: "",
    attachIdCard: "",
    attachHouseReg: "",
    attachEducation: "",
    attachMedicalCert: "",
    attachMilitaryDoc: "",
    consentGeneral: false,
    consentSensitive: false,
    signatureImage: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Section title="แนะนำตัวเอง" subtitle="SELF INTRODUCTION">
        <ItemCard>
          <Textarea
            label="โปรดแนะนำตัวเอง"
            placeholder="Please Enter Data"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            value={formData.selfIntro}
            onChange={(e) => handleChange("selfIntro", e.target.value)}
            className="w-full"
          />
        </ItemCard>
      </Section>

      <Section
        title="ลิงก์ที่อยู่ Google Maps"
        subtitle="HOME LOCATION (GOOGLE MAPS)"
      >
        <ItemCard>
          <Input
            label="Google Maps URL"
            placeholder="https://maps.google.com/..."
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            value={formData.homeMapUrl}
            onChange={(e) => handleChange("homeMapUrl", e.target.value)}
            className="w-full"
          />
        </ItemCard>
      </Section>

      <Section title="แนบเอกสารประกอบ" subtitle="DOCUMENT ATTACHMENTS">
        <ItemCard>
          <Input
            label="สำเนาบัตรประชาชน"
            placeholder="Please Enter Data"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            value={formData.attachIdCard}
            onChange={(e) => handleChange("attachIdCard", e.target.value)}
          />
          <Input
            label="สำเนาทะเบียนบ้าน"
            placeholder="Please Enter Data"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            value={formData.attachHouseReg}
            onChange={(e) => handleChange("attachHouseReg", e.target.value)}
          />
          <Input
            label="วุฒิการศึกษา"
            placeholder="Please Enter Data"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            value={formData.attachEducation}
            onChange={(e) => handleChange("attachEducation", e.target.value)}
          />
          <Input
            label="ใบรับรองแพทย์"
            placeholder="Please Enter Data"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            value={formData.attachMedicalCert}
            onChange={(e) => handleChange("attachMedicalCert", e.target.value)}
          />
          <Input
            label="เอกสารทางทหาร"
            placeholder="Please Enter Data"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            value={formData.attachMilitaryDoc}
            onChange={(e) => handleChange("attachMilitaryDoc", e.target.value)}
          />
        </ItemCard>
      </Section>

      <Section
        title="ความยินยอมข้อมูลส่วนบุคคล"
        subtitle="PERSONAL DATA CONSENT"
      >
        <ItemCard>
          <div className="flex items-center justify-between border p-2 rounded w-full">
            <span>ยินยอมให้ใช้ข้อมูลทั่วไป</span>
            <Switch
              checked={formData.consentGeneral}
              onChange={(e) => handleChange("consentGeneral", e.target.checked)}
            />
          </div>
          <div className="flex items-center justify-between border p-2 rounded w-full">
            <span>ยินยอมให้ใช้ข้อมูลอ่อนไหว (สุขภาพ, คดี, ศาสนา ฯลฯ)</span>
            <Switch
              checked={formData.consentSensitive}
              onChange={(e) =>
                handleChange("consentSensitive", e.target.checked)
              }
            />
          </div>
        </ItemCard>
      </Section>

      <Section title="ลายเซ็นผู้สมัคร" subtitle="SIGNATURE">
        <ItemCard>
          <Input
            label="ลิงก์รูปภาพลายเซ็น (.png หรือ .jpg)"
            placeholder="Please Enter Data"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            value={formData.signatureImage}
            onChange={(e) => handleChange("signatureImage", e.target.value)}
            className="w-full"
          />
        </ItemCard>
      </Section>
    </>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600] bg-success text-white">
        {title}
      </div>
      <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600] bg-success text-white">
        {subtitle}
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
        {children}
      </div>
    </div>
  );
}

function ItemCard({ children }) {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
      {children}
    </div>
  );
}
