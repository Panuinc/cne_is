"use client";

import { Input, Select } from "@heroui/react";
import { useState } from "react";

const skillLevels = [
  { label: "ดีมาก", value: "Excellent" },
  { label: "ดี", value: "Good" },
  { label: "พอใช้", value: "Fair" },
  { label: "น้อย", value: "Poor" },
];

const otherSkillTypes = [
  { label: "คอมพิวเตอร์", value: "Computer" },
  { label: "ทักษะอื่น", value: "Other" },
];

const englishTestTypes = [
  { label: "TOEIC", value: "TOEIC" },
  { label: "TOEFL", value: "TOEFL" },
  { label: "IELTS", value: "IELTS" },
  { label: "อื่น ๆ", value: "Other" },
];

const vehicleOptions = [
  { label: "มี", value: "Yes" },
  { label: "ไม่มี", value: "No" },
];

export default function UIRecruitStep3() {
  const [languageSkills, setLanguageSkills] = useState([
    { name: "", listenLevel: "", speakLevel: "", readLevel: "", writeLevel: "" },
  ]);

  const [otherSkills, setOtherSkills] = useState([
    { type: "", name: "", score: "" },
  ]);

  const [specialAbilities, setSpecialAbilities] = useState([
    { name: "" },
  ]);

  const [englishScore, setEnglishScore] = useState({
    type: "",
    value: "",
    detail: "",
  });

  const [vehicleInfo, setVehicleInfo] = useState({
    ownCar: "",
    ownMotorcycle: "",
    haveCarLicense: "",
    haveMotorcycleLicense: "",
  });

  // ───── Handlers ─────
  const handleListChange = (setter, list, index, field, value) => {
    const updated = [...list];
    updated[index][field] = value;
    setter(updated);
  };

  const handleEnglishScoreChange = (field, value) => {
    setEnglishScore((prev) => ({ ...prev, [field]: value }));
  };

  const handleAbilityChange = (index, value) => {
    const updated = [...specialAbilities];
    updated[index].name = value;
    setSpecialAbilities(updated);
  };

  const handleVehicleChange = (field, value) => {
    setVehicleInfo((prev) => ({ ...prev, [field]: value }));
  };

  // ───── Add/Remove ─────
  const addItem = (setter, newItem) => setter((prev) => [...prev, newItem]);
  const removeItem = (setter, list, index) => {
    if (list.length > 1) {
      const updated = [...list];
      updated.splice(index, 1);
      setter(updated);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 gap-6">

      {/* ───── ทักษะด้านภาษา ───── */}
      <Section title="ทักษะด้านภาษา" subtitle="LANGUAGE SKILLS">
        {languageSkills.map((lang, index) => (
          <ItemCard key={index} index={index} onRemove={() => removeItem(setLanguageSkills, languageSkills, index)}>
            <div className="grid grid-cols-2 gap-2">
              <Input label="ชื่อภาษา" value={lang.name} onChange={(e) => handleListChange(setLanguageSkills, languageSkills, index, "name", e.target.value)} />
              <Select label="การฟัง" options={skillLevels} value={lang.listenLevel} onValueChange={(val) => handleListChange(setLanguageSkills, languageSkills, index, "listenLevel", val)} />
              <Select label="การพูด" options={skillLevels} value={lang.speakLevel} onValueChange={(val) => handleListChange(setLanguageSkills, languageSkills, index, "speakLevel", val)} />
              <Select label="การอ่าน" options={skillLevels} value={lang.readLevel} onValueChange={(val) => handleListChange(setLanguageSkills, languageSkills, index, "readLevel", val)} />
              <Select label="การเขียน" options={skillLevels} value={lang.writeLevel} onValueChange={(val) => handleListChange(setLanguageSkills, languageSkills, index, "writeLevel", val)} />
            </div>
          </ItemCard>
        ))}
        <AddButton label="เพิ่มภาษา" onClick={() => addItem(setLanguageSkills, { name: "", listenLevel: "", speakLevel: "", readLevel: "", writeLevel: "" })} />
      </Section>

      {/* ───── ทักษะอื่น ๆ ───── */}
      <Section title="ทักษะอื่น ๆ" subtitle="OTHER SKILLS">
        {otherSkills.map((skill, index) => (
          <ItemCard key={index} index={index} onRemove={() => removeItem(setOtherSkills, otherSkills, index)}>
            <div className="grid grid-cols-2 gap-2">
              <Select label="ประเภททักษะ" options={otherSkillTypes} value={skill.type} onValueChange={(val) => handleListChange(setOtherSkills, otherSkills, index, "type", val)} />
              <Input label="ชื่อทักษะ" value={skill.name} onChange={(e) => handleListChange(setOtherSkills, otherSkills, index, "name", e.target.value)} />
              <Input label="คะแนน (ถ้ามี)" type="number" value={skill.score} onChange={(e) => handleListChange(setOtherSkills, otherSkills, index, "score", e.target.value)} />
            </div>
          </ItemCard>
        ))}
        <AddButton label="เพิ่มทักษะอื่น" onClick={() => addItem(setOtherSkills, { type: "", name: "", score: "" })} />
      </Section>

      {/* ───── ความสามารถพิเศษ ───── */}
      <Section title="ความสามารถพิเศษ" subtitle="SPECIAL ABILITIES">
        {specialAbilities.map((ability, index) => (
          <ItemCard key={index} index={index} onRemove={() => removeItem(setSpecialAbilities, specialAbilities, index)}>
            <Input label="ชื่อความสามารถพิเศษ" value={ability.name} onChange={(e) => handleAbilityChange(index, e.target.value)} />
          </ItemCard>
        ))}
        <AddButton label="เพิ่มความสามารถพิเศษ" onClick={() => addItem(setSpecialAbilities, { name: "" })} />
      </Section>

      {/* ───── คะแนนภาษาอังกฤษ ───── */}
      <Section title="คะแนนภาษาอังกฤษ" subtitle="ENGLISH TEST SCORE">
        <div className="grid grid-cols-2 gap-2 w-full">
          <Select label="ประเภทแบบทดสอบ" options={englishTestTypes} value={englishScore.type} onValueChange={(val) => handleEnglishScoreChange("type", val)} />
          <Input label="คะแนน" type="number" value={englishScore.value} onChange={(e) => handleEnglishScoreChange("value", e.target.value)} />
          <Input label="รายละเอียดเพิ่มเติม" className="col-span-2" value={englishScore.detail} onChange={(e) => handleEnglishScoreChange("detail", e.target.value)} />
        </div>
      </Section>

      {/* ───── ข้อมูลยานพาหนะ ───── */}
      <Section title="ข้อมูลยานพาหนะและใบขับขี่" subtitle="VEHICLE & LICENSE INFO">
        <div className="grid grid-cols-2 gap-2 w-full">
          <Select label="มีรถยนต์ส่วนตัว" options={vehicleOptions} value={vehicleInfo.ownCar} onValueChange={(val) => handleVehicleChange("ownCar", val)} />
          <Select label="มีรถจักรยานยนต์ส่วนตัว" options={vehicleOptions} value={vehicleInfo.ownMotorcycle} onValueChange={(val) => handleVehicleChange("ownMotorcycle", val)} />
          <Select label="มีใบขับขี่รถยนต์" options={vehicleOptions} value={vehicleInfo.haveCarLicense} onValueChange={(val) => handleVehicleChange("haveCarLicense", val)} />
          <Select label="มีใบขับขี่รถจักรยานยนต์" options={vehicleOptions} value={vehicleInfo.haveMotorcycleLicense} onValueChange={(val) => handleVehicleChange("haveMotorcycleLicense", val)} />
        </div>
      </Section>
    </div>
  );
}

/* ────────── Sub Components ────────── */
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
