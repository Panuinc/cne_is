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
    <div className="flex flex-col items-center justify-center w-full p-4 gap-6">

      {/* ───── แนะนำตัวเอง ───── */}
      <Section title="แนะนำตัวเอง" subtitle="SELF INTRODUCTION">
        <Textarea
          label="โปรดแนะนำตัวเอง"
          value={formData.selfIntro}
          onChange={(e) => handleChange("selfIntro", e.target.value)}
          className="w-full"
        />
      </Section>

      {/* ───── ลิงก์แผนที่บ้าน ───── */}
      <Section title="ลิงก์ที่อยู่ Google Maps" subtitle="HOME LOCATION (GOOGLE MAPS)">
        <Input
          label="Google Maps URL"
          placeholder="https://maps.google.com/..."
          value={formData.homeMapUrl}
          onChange={(e) => handleChange("homeMapUrl", e.target.value)}
          className="w-full"
        />
      </Section>

      {/* ───── เอกสารแนบ ───── */}
      <Section title="แนบเอกสารประกอบ" subtitle="DOCUMENT ATTACHMENTS">
        <div className="grid grid-cols-2 gap-2 w-full">
          <Input
            label="สำเนาบัตรประชาชน"
            value={formData.attachIdCard}
            onChange={(e) => handleChange("attachIdCard", e.target.value)}
          />
          <Input
            label="สำเนาทะเบียนบ้าน"
            value={formData.attachHouseReg}
            onChange={(e) => handleChange("attachHouseReg", e.target.value)}
          />
          <Input
            label="วุฒิการศึกษา"
            value={formData.attachEducation}
            onChange={(e) => handleChange("attachEducation", e.target.value)}
          />
          <Input
            label="ใบรับรองแพทย์"
            value={formData.attachMedicalCert}
            onChange={(e) => handleChange("attachMedicalCert", e.target.value)}
          />
          <Input
            label="เอกสารทางทหาร"
            value={formData.attachMilitaryDoc}
            onChange={(e) => handleChange("attachMilitaryDoc", e.target.value)}
          />
        </div>
      </Section>

      {/* ───── ความยินยอมข้อมูล ───── */}
      <Section title="ความยินยอมข้อมูลส่วนบุคคล" subtitle="PERSONAL DATA CONSENT">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center justify-between border p-2 rounded">
            <span>ยินยอมให้ใช้ข้อมูลทั่วไป</span>
            <Switch
              checked={formData.consentGeneral}
              onChange={(e) => handleChange("consentGeneral", e.target.checked)}
            />
          </div>
          <div className="flex items-center justify-between border p-2 rounded">
            <span>ยินยอมให้ใช้ข้อมูลอ่อนไหว (สุขภาพ, คดี, ศาสนา ฯลฯ)</span>
            <Switch
              checked={formData.consentSensitive}
              onChange={(e) => handleChange("consentSensitive", e.target.checked)}
            />
          </div>
        </div>
      </Section>

      {/* ───── ลายเซ็น ───── */}
      <Section title="ลายเซ็นผู้สมัคร" subtitle="SIGNATURE">
        <Input
          label="ลิงก์รูปภาพลายเซ็น (.png หรือ .jpg)"
          value={formData.signatureImage}
          onChange={(e) => handleChange("signatureImage", e.target.value)}
          className="w-full"
        />
      </Section>
    </div>
  );
}

/* ────────── Sub Component ────────── */
function Section({ title, subtitle, children }) {
  return (
    <div className="flex flex-col w-full p-2 gap-4 border-2 border-dark rounded">
      <div className="text-center text-lg font-bold border-2 border-dark w-full p-2">{title}</div>
      <div className="text-center text-sm border-2 border-dark w-full p-2">{subtitle}</div>
      {children}
    </div>
  );
}
