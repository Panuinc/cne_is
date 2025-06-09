"use client";

import { Input, Select, Textarea, Button } from "@heroui/react";
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
    <>
      <Section title="ประสบการณ์ทำงาน" subtitle="WORK EXPERIENCE">
        {workExperiences.map((exp, index) => (
          <ItemCard
            key={index}
            index={index}
            onRemove={() => removeExperience(index)}
          >
            <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="ชื่อสถานที่ทำงาน"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    value={exp.workplaceName}
                    onChange={(e) =>
                      handleWorkChange(index, "workplaceName", e.target.value)
                    }
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="ตำแหน่ง"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    value={exp.position}
                    onChange={(e) =>
                      handleWorkChange(index, "position", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Select
                    label="ประเภทการจ้าง"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    options={employmentTypes}
                    value={exp.employmentType}
                    onValueChange={(val) =>
                      handleWorkChange(index, "employmentType", val)
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="วันที่เริ่มงาน"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    type="date"
                    value={exp.startDate}
                    onChange={(e) =>
                      handleWorkChange(index, "startDate", e.target.value)
                    }
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="วันที่สิ้นสุด"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    type="date"
                    value={exp.endDate}
                    onChange={(e) =>
                      handleWorkChange(index, "endDate", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="เงินเดือน"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    type="number"
                    value={exp.salary}
                    onChange={(e) =>
                      handleWorkChange(index, "salary", e.target.value)
                    }
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="รายได้เสริม"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    type="number"
                    value={exp.extraIncome}
                    onChange={(e) =>
                      handleWorkChange(index, "extraIncome", e.target.value)
                    }
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Input
                    label="เหตุผลที่ลาออก"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    value={exp.reasonForLeaving}
                    onChange={(e) =>
                      handleWorkChange(
                        index,
                        "reasonForLeaving",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  <Textarea
                    className="col-span-2"
                    label="ลักษณะงาน"
                    placeholder="Please Enter Data"
                    size="md"
                    variant="underlined"
                    color="none"
                    radius="full"
                    value={exp.jobDescription}
                    onChange={(e) =>
                      handleWorkChange(index, "jobDescription", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </ItemCard>
        ))}
        <AddButton label="+ เพิ่มประสบการณ์ทำงาน" onClick={addExperience} />
      </Section>

      <Section title="ข้อมูลเพิ่มเติม" subtitle="ADDITIONAL INFORMATION">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Select
              label="อนุญาตให้ตรวจสอบบุคคลอ้างอิงได้"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={detail.allowReferenceCheck}
              onValueChange={(val) =>
                handleDetailChange("allowReferenceCheck", val)
              }
              options={yesNoOptions}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              label="เหตุผล (ถ้าไม่อนุญาต)"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={detail.allowReferenceCheckReason}
              onChange={(e) =>
                handleDetailChange("allowReferenceCheckReason", e.target.value)
              }
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Select
              label="เคยถูกไล่ออกหรือไม่"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={detail.everFired}
              onValueChange={(val) => handleDetailChange("everFired", val)}
              options={yesNoOptions}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              label="เหตุผล"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={detail.everFiredReason}
              onChange={(e) =>
                handleDetailChange("everFiredReason", e.target.value)
              }
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Select
              label="มีประวัติป่วยร้ายแรงหรือไม่"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={detail.severeIllnessHistory}
              onValueChange={(val) =>
                handleDetailChange("severeIllnessHistory", val)
              }
              options={yesNoOptions}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              label="ระบุอาการ"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={detail.severeIllnessDetail}
              onChange={(e) =>
                handleDetailChange("severeIllnessDetail", e.target.value)
              }
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Select
              label="เคยมีคดีความหรือไม่"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={detail.criminalRecord}
              onValueChange={(val) => handleDetailChange("criminalRecord", val)}
              options={yesNoOptions}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              label="รายละเอียดคดี"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={detail.criminalRecordDetail}
              onChange={(e) =>
                handleDetailChange("criminalRecordDetail", e.target.value)
              }
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Select
              label="กำลังตั้งครรภ์หรือไม่"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={detail.isPregnant}
              onValueChange={(val) => handleDetailChange("isPregnant", val)}
              options={yesNoOptions}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              label="อายุครรภ์ (ถ้ามี)"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={detail.pregnancyDetail}
              onChange={(e) =>
                handleDetailChange("pregnancyDetail", e.target.value)
              }
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Select
              label="มีเพื่อน/ญาติทำงานในบริษัทนี้หรือไม่"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={detail.hasFriendInCompany}
              onValueChange={(val) =>
                handleDetailChange("hasFriendInCompany", val)
              }
              options={yesNoOptions}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              label="ชื่อเพื่อน/ญาติในบริษัท"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={detail.friendInCompanyName}
              onChange={(e) =>
                handleDetailChange("friendInCompanyName", e.target.value)
              }
            />
          </div>
        </div>
      </Section>

      <Section title="บุคคลอ้างอิง" subtitle="PERSONAL REFERENCES">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              label="ชื่ออ้างอิง 1"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={detail.ref1Name}
              onChange={(e) => handleDetailChange("ref1Name", e.target.value)}
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
              value={detail.ref1Occupation}
              onChange={(e) =>
                handleDetailChange("ref1Occupation", e.target.value)
              }
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
              value={detail.ref1Address}
              onChange={(e) =>
                handleDetailChange("ref1Address", e.target.value)
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
              value={detail.ref1Phone}
              onChange={(e) => handleDetailChange("ref1Phone", e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              label="ชื่ออ้างอิง 2"
              placeholder="Please Enter Data"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              value={detail.ref2Name}
              onChange={(e) => handleDetailChange("ref2Name", e.target.value)}
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
              value={detail.ref2Occupation}
              onChange={(e) =>
                handleDetailChange("ref2Occupation", e.target.value)
              }
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
              value={detail.ref2Address}
              onChange={(e) =>
                handleDetailChange("ref2Address", e.target.value)
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
              value={detail.ref2Phone}
              onChange={(e) => handleDetailChange("ref2Phone", e.target.value)}
            />
          </div>
        </div>
      </Section>
    </>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <div className="flex flex-col items-center justify-center w-full p-2 border-2 border-dark">
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

function ItemCard({ index, onRemove, children }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
      <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
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
              className="flex items-center justify-center h-full p-4 gap-2"
              onPress={onRemove}
            >
              ลบ
            </Button>
          )}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
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
        className="flex items-center justify-center h-full p-4 gap-2"
        onPress={onClick}
      >
        {label}
      </Button>
    </div>
  );
}
