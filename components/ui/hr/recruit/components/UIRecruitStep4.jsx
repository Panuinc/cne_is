"use client";

import { Input, Select, Textarea } from "@heroui/react";
import { useState } from "react";

const employmentTypes = [
  { label: "ประจำ", value: "FullTime" },
  { label: "ชั่วคราว", value: "PartTime" },
  { label: "ฟรีแลนซ์", value: "Freelance" },
  { label: "อื่น ๆ", value: "Other" },
];

const yesNoOptions = [
  { label: "ใช่", value: "true" },
  { label: "ไม่ใช่", value: "false" },
];

export default function UIRecruitStep4() {
  const [workExperiences, setWorkExperiences] = useState([
    {
      workplaceName: "",
      position: "",
      employmentType: "",
      startDate: "",
      endDate: "",
      salary: "",
      extraIncome: "",
      reasonForLeaving: "",
      jobDescription: "",
    },
  ]);

  const [detail, setDetail] = useState({
    allowReferenceCheck: "",
    allowReferenceCheckReason: "",
    everFired: "",
    everFiredReason: "",
    severeIllnessHistory: "",
    severeIllnessDetail: "",
    criminalRecord: "",
    criminalRecordDetail: "",
    isPregnant: "",
    pregnancyDetail: "",
    hasFriendInCompany: "",
    friendInCompanyName: "",
    ref1Name: "",
    ref1Address: "",
    ref1Phone: "",
    ref1Occupation: "",
    ref2Name: "",
    ref2Address: "",
    ref2Phone: "",
    ref2Occupation: "",
  });

  const handleWorkChange = (index, field, value) => {
    const updated = [...workExperiences];
    updated[index][field] = value;
    setWorkExperiences(updated);
  };

  const addExperience = () =>
    setWorkExperiences([
      ...workExperiences,
      {
        workplaceName: "",
        position: "",
        employmentType: "",
        startDate: "",
        endDate: "",
        salary: "",
        extraIncome: "",
        reasonForLeaving: "",
        jobDescription: "",
      },
    ]);

  const removeExperience = (index) => {
    if (workExperiences.length > 1) {
      const updated = [...workExperiences];
      updated.splice(index, 1);
      setWorkExperiences(updated);
    }
  };

  const handleDetailChange = (field, value) => {
    setDetail((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 gap-6">

      {/* ───── ประสบการณ์ทำงาน ───── */}
      <Section title="ประสบการณ์ทำงาน" subtitle="WORK EXPERIENCE">
        {workExperiences.map((exp, index) => (
          <ItemCard key={index} index={index} onRemove={() => removeExperience(index)}>
            <div className="grid grid-cols-2 gap-2">
              <Input label="ชื่อสถานที่ทำงาน" value={exp.workplaceName} onChange={(e) => handleWorkChange(index, "workplaceName", e.target.value)} />
              <Input label="ตำแหน่ง" value={exp.position} onChange={(e) => handleWorkChange(index, "position", e.target.value)} />
              <Select label="ประเภทการจ้าง" options={employmentTypes} value={exp.employmentType} onValueChange={(val) => handleWorkChange(index, "employmentType", val)} />
              <Input label="วันที่เริ่มงาน" type="date" value={exp.startDate} onChange={(e) => handleWorkChange(index, "startDate", e.target.value)} />
              <Input label="วันที่สิ้นสุด" type="date" value={exp.endDate} onChange={(e) => handleWorkChange(index, "endDate", e.target.value)} />
              <Input label="เงินเดือน" type="number" value={exp.salary} onChange={(e) => handleWorkChange(index, "salary", e.target.value)} />
              <Input label="รายได้เสริม" type="number" value={exp.extraIncome} onChange={(e) => handleWorkChange(index, "extraIncome", e.target.value)} />
              <Input label="เหตุผลที่ลาออก" value={exp.reasonForLeaving} onChange={(e) => handleWorkChange(index, "reasonForLeaving", e.target.value)} />
              <Textarea className="col-span-2" label="ลักษณะงาน" value={exp.jobDescription} onChange={(e) => handleWorkChange(index, "jobDescription", e.target.value)} />
            </div>
          </ItemCard>
        ))}
        <button onClick={addExperience} className="p-2 bg-green-500 text-white rounded hover:bg-green-600">
          + เพิ่มประสบการณ์ทำงาน
        </button>
      </Section>

      {/* ───── คำถามพฤติกรรม ───── */}
      <Section title="ข้อมูลเพิ่มเติม" subtitle="ADDITIONAL INFORMATION">
        <div className="grid grid-cols-2 gap-2 w-full">
          <Select label="อนุญาตให้ตรวจสอบบุคคลอ้างอิงได้" value={detail.allowReferenceCheck} onValueChange={(val) => handleDetailChange("allowReferenceCheck", val)} options={yesNoOptions} />
          <Input label="เหตุผล (ถ้าไม่อนุญาต)" value={detail.allowReferenceCheckReason} onChange={(e) => handleDetailChange("allowReferenceCheckReason", e.target.value)} />
          <Select label="เคยถูกไล่ออกหรือไม่" value={detail.everFired} onValueChange={(val) => handleDetailChange("everFired", val)} options={yesNoOptions} />
          <Input label="เหตุผล" value={detail.everFiredReason} onChange={(e) => handleDetailChange("everFiredReason", e.target.value)} />
          <Select label="มีประวัติป่วยร้ายแรงหรือไม่" value={detail.severeIllnessHistory} onValueChange={(val) => handleDetailChange("severeIllnessHistory", val)} options={yesNoOptions} />
          <Input label="ระบุอาการ" value={detail.severeIllnessDetail} onChange={(e) => handleDetailChange("severeIllnessDetail", e.target.value)} />
          <Select label="เคยมีคดีความหรือไม่" value={detail.criminalRecord} onValueChange={(val) => handleDetailChange("criminalRecord", val)} options={yesNoOptions} />
          <Input label="รายละเอียดคดี" value={detail.criminalRecordDetail} onChange={(e) => handleDetailChange("criminalRecordDetail", e.target.value)} />
          <Select label="กำลังตั้งครรภ์หรือไม่" value={detail.isPregnant} onValueChange={(val) => handleDetailChange("isPregnant", val)} options={yesNoOptions} />
          <Input label="อายุครรภ์ (ถ้ามี)" value={detail.pregnancyDetail} onChange={(e) => handleDetailChange("pregnancyDetail", e.target.value)} />
          <Select label="มีเพื่อน/ญาติทำงานในบริษัทนี้หรือไม่" value={detail.hasFriendInCompany} onValueChange={(val) => handleDetailChange("hasFriendInCompany", val)} options={yesNoOptions} />
          <Input label="ชื่อเพื่อน/ญาติในบริษัท" value={detail.friendInCompanyName} onChange={(e) => handleDetailChange("friendInCompanyName", e.target.value)} />
        </div>
      </Section>

      {/* ───── บุคคลอ้างอิง ───── */}
      <Section title="บุคคลอ้างอิง" subtitle="PERSONAL REFERENCES">
        <div className="grid grid-cols-2 gap-2 w-full">
          <Input label="ชื่ออ้างอิง 1" value={detail.ref1Name} onChange={(e) => handleDetailChange("ref1Name", e.target.value)} />
          <Input label="อาชีพ" value={detail.ref1Occupation} onChange={(e) => handleDetailChange("ref1Occupation", e.target.value)} />
          <Input label="ที่อยู่" value={detail.ref1Address} onChange={(e) => handleDetailChange("ref1Address", e.target.value)} />
          <Input label="เบอร์โทร" value={detail.ref1Phone} onChange={(e) => handleDetailChange("ref1Phone", e.target.value)} />
          <Input label="ชื่ออ้างอิง 2" value={detail.ref2Name} onChange={(e) => handleDetailChange("ref2Name", e.target.value)} />
          <Input label="อาชีพ" value={detail.ref2Occupation} onChange={(e) => handleDetailChange("ref2Occupation", e.target.value)} />
          <Input label="ที่อยู่" value={detail.ref2Address} onChange={(e) => handleDetailChange("ref2Address", e.target.value)} />
          <Input label="เบอร์โทร" value={detail.ref2Phone} onChange={(e) => handleDetailChange("ref2Phone", e.target.value)} />
        </div>
      </Section>
    </div>
  );
}

/* ────────── Sub Components ────────── */
function Section({ title, subtitle, children }) {
  return (
    <div className="flex flex-col w-full p-2 gap-4 border-2 border-dark">
      <div className="text-center text-lg font-bold border-2 border-dark w-full p-2">{title}</div>
      <div className="text-center text-sm border-2 border-dark w-full p-2">{subtitle}</div>
      {children}
    </div>
  );
}

function ItemCard({ index, onRemove, children }) {
  return (
    <div className="flex flex-col w-full p-4 gap-4 border-2 border-dark">
      <div className="flex justify-between items-center">
        <span>#{index + 1}</span>
        {index > 0 && (
          <button type="button" className="text-red-500 underline" onClick={onRemove}>
            ลบ
          </button>
        )}
      </div>
      {children}
    </div>
  );
}
