"use client";

import { Input } from "@heroui/react";
import { useState } from "react";

export default function UIRecruitStep2({ formData, handleInputChange, errors }) {
  // ข้อมูลครอบครัว
  const [familyList, setFamilyList] = useState([
    {
      relation: "",
      fullName: "",
      age: "",
      occupation: "",
      workplace: "",
      phone: "",
    },
  ]);

  // ข้อมูลติดต่อฉุกเฉิน
  const [emergencyContact, setEmergencyContact] = useState({
    name: "",
    relation: "",
    phone: "",
    address: "",
  });

  // การศึกษา
  const [educationList, setEducationList] = useState([
    {
      level: "",
      fromDate: "",
      toDate: "",
      school: "",
      degree: "",
      major: "",
      gpa: "",
    },
  ]);

  // ใบอนุญาต
  const [licenseList, setLicenseList] = useState([
    {
      name: "",
      number: "",
    },
  ]);

  const handleChangeList = (setter, list, index, field, value) => {
    const updated = [...list];
    updated[index][field] = value;
    setter(updated);
  };

  const addToList = (setter, newItem) => {
    setter((prev) => [...prev, newItem]);
  };

  const removeFromList = (setter, list, index) => {
    if (list.length > 1) {
      const updated = [...list];
      updated.splice(index, 1);
      setter(updated);
    }
  };

  const handleEmergencyChange = (field, value) => {
    setEmergencyContact((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 gap-6">
      {/* ───── ข้อมูลครอบครัว ───── */}
      <Section title="ข้อมูลทางครอบครัว" subtitle="FAMILY DATA">
        {familyList.map((member, index) => (
          <ItemCard
            key={index}
            index={index}
            onRemove={() => removeFromList(setFamilyList, familyList, index)}
            children={
              <div className="grid grid-cols-2 gap-2">
                <Input label="ความสัมพันธ์" value={member.relation} onChange={(e) => handleChangeList(setFamilyList, familyList, index, "relation", e.target.value)} />
                <Input label="ชื่อ-นามสกุล" value={member.fullName} onChange={(e) => handleChangeList(setFamilyList, familyList, index, "fullName", e.target.value)} />
                <Input label="อายุ" type="number" value={member.age} onChange={(e) => handleChangeList(setFamilyList, familyList, index, "age", e.target.value)} />
                <Input label="อาชีพ" value={member.occupation} onChange={(e) => handleChangeList(setFamilyList, familyList, index, "occupation", e.target.value)} />
                <Input label="สถานที่ทำงาน" value={member.workplace} onChange={(e) => handleChangeList(setFamilyList, familyList, index, "workplace", e.target.value)} />
                <Input label="เบอร์โทร" value={member.phone} onChange={(e) => handleChangeList(setFamilyList, familyList, index, "phone", e.target.value)} />
              </div>
            }
          />
        ))}
        <AddButton label="เพิ่มสมาชิกในครอบครัว" onClick={() => addToList(setFamilyList, { relation: "", fullName: "", age: "", occupation: "", workplace: "", phone: "" })} />
      </Section>

      {/* ───── บุคคลติดต่อฉุกเฉิน ───── */}
      <Section title="บุคคลที่สามารถติดต่อได้ในกรณีฉุกเฉิน" subtitle="EMERGENCY CONTACT">
        <div className="grid grid-cols-2 gap-2 w-full">
          <Input label="ชื่อ-นามสกุล" value={emergencyContact.name} onChange={(e) => handleEmergencyChange("name", e.target.value)} />
          <Input label="ความสัมพันธ์" value={emergencyContact.relation} onChange={(e) => handleEmergencyChange("relation", e.target.value)} />
          <Input label="เบอร์โทร" value={emergencyContact.phone} onChange={(e) => handleEmergencyChange("phone", e.target.value)} />
          <Input label="ที่อยู่" value={emergencyContact.address} onChange={(e) => handleEmergencyChange("address", e.target.value)} />
        </div>
      </Section>

      {/* ───── ประวัติการศึกษา ───── */}
      <Section title="ประวัติการศึกษา" subtitle="EDUCATION BACKGROUND">
        {educationList.map((edu, index) => (
          <ItemCard
            key={index}
            index={index}
            onRemove={() => removeFromList(setEducationList, educationList, index)}
            children={
              <div className="grid grid-cols-2 gap-2">
                <Input label="ระดับการศึกษา" value={edu.level} onChange={(e) => handleChangeList(setEducationList, educationList, index, "level", e.target.value)} />
                <Input label="สถานศึกษา" value={edu.school} onChange={(e) => handleChangeList(setEducationList, educationList, index, "school", e.target.value)} />
                <Input label="ช่วงเวลาเริ่มต้น" type="date" value={edu.fromDate} onChange={(e) => handleChangeList(setEducationList, educationList, index, "fromDate", e.target.value)} />
                <Input label="ช่วงเวลาสิ้นสุด" type="date" value={edu.toDate} onChange={(e) => handleChangeList(setEducationList, educationList, index, "toDate", e.target.value)} />
                <Input label="วุฒิ/ปริญญา" value={edu.degree} onChange={(e) => handleChangeList(setEducationList, educationList, index, "degree", e.target.value)} />
                <Input label="สาขา" value={edu.major} onChange={(e) => handleChangeList(setEducationList, educationList, index, "major", e.target.value)} />
                <Input label="เกรดเฉลี่ย" type="number" value={edu.gpa} onChange={(e) => handleChangeList(setEducationList, educationList, index, "gpa", e.target.value)} />
              </div>
            }
          />
        ))}
        <AddButton label="เพิ่มการศึกษา" onClick={() => addToList(setEducationList, { level: "", fromDate: "", toDate: "", school: "", degree: "", major: "", gpa: "" })} />
      </Section>

      {/* ───── ใบอนุญาตประกอบวิชาชีพ ───── */}
      <Section title="ใบอนุญาตประกอบวิชาชีพ" subtitle="PROFESSIONAL LICENSES">
        {licenseList.map((lic, index) => (
          <ItemCard
            key={index}
            index={index}
            onRemove={() => removeFromList(setLicenseList, licenseList, index)}
            children={
              <div className="grid grid-cols-2 gap-2">
                <Input label="ชื่อใบอนุญาต" value={lic.name} onChange={(e) => handleChangeList(setLicenseList, licenseList, index, "name", e.target.value)} />
                <Input label="เลขที่ใบอนุญาต" value={lic.number} onChange={(e) => handleChangeList(setLicenseList, licenseList, index, "number", e.target.value)} />
              </div>
            }
          />
        ))}
        <AddButton label="เพิ่มใบอนุญาต" onClick={() => addToList(setLicenseList, { name: "", number: "" })} />
      </Section>
    </div>
  );
}

/* ─────────── Sub Components ─────────── */

function Section({ title, subtitle, children }) {
  return (
    <div className="flex flex-col items-center w-full p-2 gap-4 border-2 border-dark">
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

function AddButton({ label, onClick }) {
  return (
    <button type="button" onClick={onClick} className="p-2 bg-green-500 text-white rounded hover:bg-green-600">
      + {label}
    </button>
  );
}
