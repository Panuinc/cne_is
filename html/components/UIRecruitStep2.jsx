"use client";

import { Input, Select, SelectItem, Button } from "@heroui/react";
import { useState } from "react";

export default function UIRecruitStep2({
  formData,
  handleInputChange,
  errors,
}) {
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

  const [emergencyContact, setEmergencyContact] = useState({
    name: "",
    relation: "",
    phone: "",
    address: "",
  });

  const educationLevelOptions = [
    { label: "ประถมศึกษา", value: "Primary" },
    { label: "มัธยมศึกษาตอนต้น", value: "LowerSecondary" },
    { label: "มัธยมศึกษาตอนปลาย", value: "UpperSecondary" },
    { label: "ปวช.", value: "Vocational" },
    { label: "ปวส.", value: "HighVocational" },
    { label: "ปริญญาตรี", value: "Bachelor" },
    { label: "ปริญญาโท", value: "Master" },
    { label: "ปริญญาเอก", value: "Doctorate" },
  ];

  const familyRelationOptions = [
    { label: "บิดา", value: "Father" },
    { label: "มารดา", value: "Mother" },
    { label: "พี่", value: "OlderSibling" },
    { label: "น้อง", value: "YoungerSibling" },
  ];

  const emergencyRelationOptions = [
    { label: "บิดา", value: "Father" },
    { label: "มารดา", value: "Mother" },
    { label: "พี่น้อง", value: "Sibling" },
    { label: "เพื่อน", value: "Friend" },
    { label: "หัวหน้า", value: "Manager" },
    { label: "อื่น ๆ", value: "Other" },
  ];

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
    <>
      <Section title="ข้อมูลทางครอบครัว" subtitle="FAMILY DATA">
        {familyList.map((member, index) => (
          <ItemCard
            key={index}
            index={index}
            onRemove={() => removeFromList(setFamilyList, familyList, index)}
            children={
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Select
                    label="ความสัมพันธ์"
                    placeholder="Please Select"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    selectedKey={member.relation}
                    onSelectionChange={(val) =>
                      handleChangeList(
                        setFamilyList,
                        familyList,
                        index,
                        "relation",
                        val
                      )
                    }
                  >
                    {familyRelationOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="ชื่อ-นามสกุล"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    value={member.fullName}
                    onChange={(e) =>
                      handleChangeList(
                        setFamilyList,
                        familyList,
                        index,
                        "fullName",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="อายุ"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    type="number"
                    value={member.age}
                    onChange={(e) =>
                      handleChangeList(
                        setFamilyList,
                        familyList,
                        index,
                        "age",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="อาชีพ"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    value={member.occupation}
                    onChange={(e) =>
                      handleChangeList(
                        setFamilyList,
                        familyList,
                        index,
                        "occupation",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="สถานที่ทำงาน"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    value={member.workplace}
                    onChange={(e) =>
                      handleChangeList(
                        setFamilyList,
                        familyList,
                        index,
                        "workplace",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="เบอร์โทร"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    value={member.phone}
                    onChange={(e) =>
                      handleChangeList(
                        setFamilyList,
                        familyList,
                        index,
                        "phone",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            }
          />
        ))}
        <div className="flex items-center justify-center w-full h-full gap-2">
          <AddButton
            label="เพิ่มสมาชิกในครอบครัว"
            onClick={() =>
              addToList(setFamilyList, {
                relation: "",
                fullName: "",
                age: "",
                occupation: "",
                workplace: "",
                phone: "",
              })
            }
          />
        </div>
      </Section>

      <Section title="บุคคลติดต่อในกรณีฉุกเฉิน" subtitle="EMERGENCY CONTACT">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              label="ชื่อ-นามสกุล"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={emergencyContact.name}
              onChange={(e) => handleEmergencyChange("name", e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Select
              label="ความสัมพันธ์"
              placeholder="Please Select"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              selectedKey={emergencyContact.relation}
              onSelectionChange={(val) =>
                handleEmergencyChange("relation", val)
              }
            >
              {emergencyRelationOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              label="เบอร์โทร"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={emergencyContact.phone}
              onChange={(e) => handleEmergencyChange("phone", e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              label="ที่อยู่"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={emergencyContact.address}
              onCh
              ange={(e) => handleEmergencyChange("address", e.target.value)}
            />
          </div>
        </div>
      </Section>

      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-dark">
        <div className="flex items-center justify-start w-full p-2 gap-2 border-2 border-dark text-sm">
          ข้าพเจ้าขอรับรองว่าได้รับอนุญาตจากบุคคลที่มีรายชื่อข้างต้น
          ให้เปิดเผยข้อมูลส่วนบุคคลแก่บริษัท เพื่อให้บริษัทสามารถติดต่อ
          สอบถามข้อมูล และยืนยันข้อมูลเกี่ยวกับตัวข้าพเจ้า
        </div>
        <div className="flex items-center justify-start w-full p-2 gap-2 border-2 border-dark text-sm">
          I certify that I have received the above person’s consent for
          disclosing his/her personal data to the company for making contact,
          asking for information and verifying my information.
        </div>
      </div>

      <Section title="ประวัติการศึกษา" subtitle="EDUCATION BACKGROUND">
        {educationList.map((edu, index) => (
          <ItemCard
            key={index}
            index={index}
            onRemove={() =>
              removeFromList(setEducationList, educationList, index)
            }
            children={
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Select
                    label="ระดับการศึกษา"
                    placeholder="Please Select"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    selectedKey={edu.level}
                    onSelectionChange={(val) =>
                      handleChangeList(
                        setEducationList,
                        educationList,
                        index,
                        "level",
                        val
                      )
                    }
                  >
                    {educationLevelOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="ช่วงเวลาเริ่มต้น"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    type="date"
                    value={edu.fromDate}
                    onChange={(e) =>
                      handleChangeList(
                        setEducationList,
                        educationList,
                        index,
                        "fromDate",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="ช่วงเวลาสิ้นสุด"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    type="date"
                    value={edu.toDate}
                    onChange={(e) =>
                      handleChangeList(
                        setEducationList,
                        educationList,
                        index,
                        "toDate",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="สถานศึกษา"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    value={edu.school}
                    onChange={(e) =>
                      handleChangeList(
                        setEducationList,
                        educationList,
                        index,
                        "school",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="วุฒิ/ปริญญา"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    value={edu.degree}
                    onChange={(e) =>
                      handleChangeList(
                        setEducationList,
                        educationList,
                        index,
                        "degree",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="สาขา"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    value={edu.major}
                    onChange={(e) =>
                      handleChangeList(
                        setEducationList,
                        educationList,
                        index,
                        "major",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="เกรดเฉลี่ย"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    type="number"
                    value={edu.gpa}
                    onChange={(e) =>
                      handleChangeList(
                        setEducationList,
                        educationList,
                        index,
                        "gpa",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            }
          />
        ))}
        <AddButton
          label="เพิ่มการศึกษา"
          onClick={() =>
            addToList(setEducationList, {
              level: "",
              fromDate: "",
              toDate: "",
              school: "",
              degree: "",
              major: "",
              gpa: "",
            })
          }
        />
      </Section>

      <Section title="ใบอนุญาตประกอบวิชาชีพ" subtitle="PROFESSIONAL LICENSES">
        {licenseList.map((lic, index) => (
          <ItemCard
            key={index}
            index={index}
            onRemove={() => removeFromList(setLicenseList, licenseList, index)}
            children={
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="ชื่อใบอนุญาต"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    value={lic.name}
                    onChange={(e) =>
                      handleChangeList(
                        setLicenseList,
                        licenseList,
                        index,
                        "name",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="เลขที่ใบอนุญาต"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    value={lic.number}
                    onChange={(e) =>
                      handleChangeList(
                        setLicenseList,
                        licenseList,
                        index,
                        "number",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            }
          />
        ))}
        <AddButton
          label="เพิ่มใบอนุญาต"
          onClick={() => addToList(setLicenseList, { name: "", number: "" })}
        />
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
