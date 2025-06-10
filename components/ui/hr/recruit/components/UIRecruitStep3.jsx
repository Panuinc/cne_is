"use client";

import {
  Input,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
  Button,
} from "@heroui/react";
import { useState } from "react";

const skillLevels = [
  { label: "ดีมาก", value: "Excellent" },
  { label: "ดี", value: "Good" },
  { label: "พอใช้", value: "Fair" },
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
    {
      name: "",
      listenLevel: "",
      speakLevel: "",
      readLevel: "",
      writeLevel: "",
    },
  ]);

  const [otherSkills, setOtherSkills] = useState([
    { type: "", name: "", score: "" },
  ]);

  const [specialAbilities, setSpecialAbilities] = useState([{ name: "" }]);

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

  const addItem = (setter, newItem) => setter((prev) => [...prev, newItem]);
  const removeItem = (setter, list, index) => {
    if (list.length > 1) {
      const updated = [...list];
      updated.splice(index, 1);
      setter(updated);
    }
  };

  return (
    <>
      <Section title="ทักษะด้านภาษา" subtitle="LANGUAGE SKILLS">
        {languageSkills.map((lang, index) => (
          <ItemCard
            key={index}
            index={index}
            onRemove={() =>
              removeItem(setLanguageSkills, languageSkills, index)
            }
          >
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <Input
                  label="ชื่อภาษา"
                  placeholder="Please Enter Data"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  value={lang.name}
                  onChange={(e) =>
                    handleListChange(
                      setLanguageSkills,
                      languageSkills,
                      index,
                      "name",
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <Select
                  label="การฟัง"
                  placeholder="Please Enter Data"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  value={lang.listenLevel}
                  onValueChange={(val) =>
                    handleListChange(
                      setLanguageSkills,
                      languageSkills,
                      index,
                      "listenLevel",
                      val
                    )
                  }
                >
                  {skillLevels.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <Select
                  label="การพูด"
                  placeholder="Please Enter Data"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  options={skillLevels}
                  value={lang.speakLevel}
                  onValueChange={(val) =>
                    handleListChange(
                      setLanguageSkills,
                      languageSkills,
                      index,
                      "speakLevel",
                      val
                    )
                  }
                >
                  {skillLevels.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <Select
                  label="การอ่าน"
                  placeholder="Please Enter Data"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  options={skillLevels}
                  value={lang.readLevel}
                  onValueChange={(val) =>
                    handleListChange(
                      setLanguageSkills,
                      languageSkills,
                      index,
                      "readLevel",
                      val
                    )
                  }
                >
                  {skillLevels.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <Select
                  label="การเขียน"
                  placeholder="Please Enter Data"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  options={skillLevels}
                  value={lang.writeLevel}
                  onValueChange={(val) =>
                    handleListChange(
                      setLanguageSkills,
                      languageSkills,
                      index,
                      "writeLevel",
                      val
                    )
                  }
                >
                  {skillLevels.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
          </ItemCard>
        ))}
        <AddButton
          label="เพิ่มภาษา"
          onClick={() =>
            addItem(setLanguageSkills, {
              name: "",
              listenLevel: "",
              speakLevel: "",
              readLevel: "",
              writeLevel: "",
            })
          }
        />
      </Section>

      <Section title="ทักษะอื่น ๆ" subtitle="OTHER SKILLS">
        {otherSkills.map((skill, index) => (
          <ItemCard
            key={index}
            index={index}
            onRemove={() => removeItem(setOtherSkills, otherSkills, index)}
          >
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <Select
                  label="ประเภททักษะ"
                  placeholder="Please Enter Data"
                  size="md"
                  variant="underlined"
                  color="none"
                  radius="full"
                  value={skill.type}
                  onValueChange={(val) =>
                    handleListChange(
                      setOtherSkills,
                      otherSkills,
                      index,
                      "type",
                      val
                    )
                  }
                >
                  {otherSkillTypes.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <Input
                  label="ชื่อทักษะ"
                  value={skill.name}
                  onChange={(e) =>
                    handleListChange(
                      setOtherSkills,
                      otherSkills,
                      index,
                      "name",
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <Input
                  label="คะแนน (ถ้ามี)"
                  type="number"
                  value={skill.score}
                  onChange={(e) =>
                    handleListChange(
                      setOtherSkills,
                      otherSkills,
                      index,
                      "score",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </ItemCard>
        ))}
        <AddButton
          label="เพิ่มทักษะอื่น"
          onClick={() =>
            addItem(setOtherSkills, { type: "", name: "", score: "" })
          }
        />
      </Section>

      <Section title="ความสามารถพิเศษ" subtitle="SPECIAL ABILITIES">
        {specialAbilities.map((ability, index) => (
          <ItemCard
            key={index}
            index={index}
            onRemove={() =>
              removeItem(setSpecialAbilities, specialAbilities, index)
            }
          >
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <Input
                  label="ชื่อความสามารถพิเศษ"
                  value={ability.name}
                  onChange={(e) => handleAbilityChange(index, e.target.value)}
                />
              </div>
            </div>
          </ItemCard>
        ))}
        <AddButton
          label="เพิ่มความสามารถพิเศษ"
          onClick={() => addItem(setSpecialAbilities, { name: "" })}
        />
      </Section>

      <Section title="คะแนนภาษาอังกฤษ" subtitle="ENGLISH TEST SCORE">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Select
              label="ประเภทแบบทดสอบ"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={englishScore.type}
              onValueChange={(val) => handleEnglishScoreChange("type", val)}
            >
              {englishTestTypes.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              label="คะแนน"
              type="number"
              value={englishScore.value}
              onChange={(e) =>
                handleEnglishScoreChange("value", e.target.value)
              }
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              label="รายละเอียดเพิ่มเติม"
              className="col-span-2"
              value={englishScore.detail}
              onChange={(e) =>
                handleEnglishScoreChange("detail", e.target.value)
              }
            />
          </div>
        </div>
      </Section>

      <Section
        title="ข้อมูลยานพาหนะและใบขับขี่"
        subtitle="VEHICLE & LICENSE INFO"
      >
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">มีรถยนต์ส่วนตัว</span>
              <span className="text-sm font-[300]">(Own Car)</span>
            </div>
            <RadioGroup
              name="ownCar"
              orientation="horizontal"
              value={vehicleInfo.ownCar}
              onValueChange={(val) => handleVehicleChange("ownCar", val)}
              className="flex-1 flex gap-4"
            >
              <Radio value="Yes">มี</Radio>
              <Radio value="No">ไม่มี</Radio>
            </RadioGroup>
          </div>

          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">มีรถจักรยานยนต์ส่วนตัว</span>
              <span className="text-sm font-[300]">(Own Motorcycle)</span>
            </div>
            <RadioGroup
              name="ownMotorcycle"
              orientation="horizontal"
              value={vehicleInfo.ownMotorcycle}
              onValueChange={(val) => handleVehicleChange("ownMotorcycle", val)}
              className="flex-1 flex gap-4"
            >
              <Radio value="Yes">มี</Radio>
              <Radio value="No">ไม่มี</Radio>
            </RadioGroup>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">มีใบขับขี่รถยนต์</span>
              <span className="text-sm font-[300]">(Car License)</span>
            </div>
            <RadioGroup
              name="haveCarLicense"
              orientation="horizontal"
              value={vehicleInfo.haveCarLicense}
              onValueChange={(val) =>
                handleVehicleChange("haveCarLicense", val)
              }
              className="flex-1 flex gap-4"
            >
              <Radio value="Yes">มี</Radio>
              <Radio value="No">ไม่มี</Radio>
            </RadioGroup>
          </div>

          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">
                มีใบขับขี่รถจักรยานยนต์
              </span>
              <span className="text-sm font-[300]">(Motorcycle License)</span>
            </div>
            <RadioGroup
              name="haveMotorcycleLicense"
              orientation="horizontal"
              value={vehicleInfo.haveMotorcycleLicense}
              onValueChange={(val) =>
                handleVehicleChange("haveMotorcycleLicense", val)
              }
              className="flex-1 flex gap-4"
            >
              <Radio value="Yes">มี</Radio>
              <Radio value="No">ไม่มี</Radio>
            </RadioGroup>
          </div>
        </div>
      </Section>
    </>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-dark">
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-center text-sm bg-success text-white">
        <div>{title}</div>
        <div>{subtitle}</div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full gap-2">
        {children}
      </div>
    </div>
  );
}

function ItemCard({ index, onRemove, children }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-2">
      <div className="flex flex-row items-center justify-center w-full h-full gap-2">
        <div className="flex items-center justify-center h-full p-2 gap-2 border-2 border-dark">
          #{""}
          {index + 1}
        </div>
        <div className="flex flex-row items-center justify-end w-full h-full p-2 gap-2 border-2 border-dark">
          {index > 0 && (
            <Button
              color="danger"
              size="md"
              radius="full"
              className="flex items-center justify-center h-full p-4 gap-2 border-2 border-dark"
              onPress={onRemove}
            >
              ลบ
            </Button>
          )}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full h-full gap-2">
        {children}
      </div>
    </div>
  );
}

function AddButton({ label, onClick }) {
  return (
    <div className="flex items-center justify-end w-full h-full p-2 gap-2 border-2 border-dark">
      <Button
        color="primary"
        size="md"
        radius="full"
        className="flex items-center justify-center h-full p-4 gap-2 border-2 border-dark"
        onPress={onClick}
      >
        {label}
      </Button>
    </div>
  );
}
