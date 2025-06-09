"use client";

import {
  Input,
  RadioGroup,
  Radio,
  Select,
  Textarea,
  Button,
} from "@heroui/react";
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
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-between w-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">
                ท่านเคยถูกให้ออกจากงานหรือไม่?
              </span>
              <span className="text-xs font-[300]">
                Have you ever been discharged from employment for any reason?
              </span>
            </div>
            <RadioGroup
              name="fired"
              orientation="horizontal"
              value={detail.fired}
              onValueChange={(val) => handleDetailChange("fired", val)}
            >
              <Radio value="Yes">ใช่</Radio>
              <Radio value="No">ไม่ใช่</Radio>
            </RadioGroup>
          </div>
          {detail.fired === "Yes" && (
            <div className="flex items-center justify-center w-full p-2 gap-2 border-2 border-dark">
              <Input
                label="เหตุผล"
                placeholder="Please Enter Data"
                size="md"
                variant="underlined"
                radius="full"
                value={detail.firedReason}
                onChange={(e) =>
                  handleDetailChange("firedReason", e.target.value)
                }
              />
            </div>
          )}
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-between w-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">
                ท่านเคยป่วยหนักและเป็นโรคติดต่อร้ายแรงมาก่อนหรือไม่?
              </span>
              <span className="text-xs font-[300]">
                Have you ever been seriously ill or contracted with contagious
                disease?
              </span>
            </div>
            <RadioGroup
              name="severeIllness"
              orientation="horizontal"
              value={detail.severeIllness}
              onValueChange={(val) => handleDetailChange("severeIllness", val)}
            >
              <Radio value="Yes">ใช่</Radio>
              <Radio value="No">ไม่ใช่</Radio>
            </RadioGroup>
          </div>
          {detail.severeIllness === "Yes" && (
            <div className="flex items-center justify-center w-full p-2 gap-2 border-2 border-dark">
              <Input
                label="ระบุอาการ"
                placeholder="Please Enter Data"
                size="md"
                variant="underlined"
                radius="full"
                value={detail.severeIllnessDetail}
                onChange={(e) =>
                  handleDetailChange("severeIllnessDetail", e.target.value)
                }
              />
            </div>
          )}
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-between w-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">
                ท่านเคยได้รับโทษทางอาญา หรือจำคุก หรือเป็นบุคคลล้มละลายหรือไม่?
              </span>
              <span className="text-xs font-[300]">
                Have you ever been arrested or convicted for any offense or
                crime or bankrupt?
              </span>
            </div>
            <RadioGroup
              name="criminalRecord"
              orientation="horizontal"
              value={detail.criminalRecord}
              onValueChange={(val) => handleDetailChange("criminalRecord", val)}
            >
              <Radio value="Yes">ใช่</Radio>
              <Radio value="No">ไม่ใช่</Radio>
            </RadioGroup>
          </div>
          {detail.criminalRecord === "Yes" && (
            <div className="flex items-center justify-center w-full p-2 gap-2 border-2 border-dark">
              <Input
                label="รายละเอียดคดี"
                placeholder="Please Enter Data"
                size="md"
                variant="underlined"
                radius="full"
                value={detail.criminalRecordDetail}
                onChange={(e) =>
                  handleDetailChange("criminalRecordDetail", e.target.value)
                }
              />
            </div>
          )}
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-between w-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">
                ขณะนี้คุณตั้งครรภ์หรือไม่?
              </span>
              <span className="text-xs font-[300]">Are you pregnant?</span>
            </div>
            <RadioGroup
              name="isPregnant"
              orientation="horizontal"
              value={detail.isPregnant}
              onValueChange={(val) => handleDetailChange("isPregnant", val)}
            >
              <Radio value="Yes">ใช่</Radio>
              <Radio value="No">ไม่ใช่</Radio>
            </RadioGroup>
          </div>
          {detail.isPregnant === "Yes" && (
            <div className="flex items-center justify-center w-full p-2 gap-2 border-2 border-dark">
              <Input
                label="อายุครรภ์ (ถ้ามี)"
                placeholder="Please Enter Data"
                size="md"
                variant="underlined"
                radius="full"
                value={detail.pregnancyDetail}
                onChange={(e) =>
                  handleDetailChange("pregnancyDetail", e.target.value)
                }
              />
            </div>
          )}
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-between w-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">
                ท่านมีเพื่อน คนรู้จัก หรือญาติที่ทำงานในบริษัทนี้หรือไม่?
              </span>
              <span className="text-xs font-[300]">
                Do you have relatives and/or friends who are working in this
                company?
              </span>
            </div>
            <RadioGroup
              name="hasFriendInCompany"
              orientation="horizontal"
              value={detail.hasFriendInCompany}
              onValueChange={(val) =>
                handleDetailChange("hasFriendInCompany", val)
              }
            >
              <Radio value="Yes">ใช่</Radio>
              <Radio value="No">ไม่ใช่</Radio>
            </RadioGroup>
          </div>
          {detail.hasFriendInCompany === "Yes" && (
            <div className="flex items-center justify-center w-full p-2 gap-2 border-2 border-dark">
              <Input
                label="ชื่อเพื่อน/ญาติในบริษัท"
                placeholder="Please Enter Data"
                size="md"
                variant="underlined"
                radius="full"
                value={detail.friendInCompanyName}
                onChange={(e) =>
                  handleDetailChange("friendInCompanyName", e.target.value)
                }
              />
            </div>
          )}
        </div>
      </Section>

      <Section title="บุคคลอ้างอิง" subtitle="PERSONAL REFERENCES">
        <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-start w-full p-2 gap-2 border-2 border-dark text-sm">
            กรุณาเขียนชื่อ ที่อยู่ เบอร์โทรศัพท์ และอาชีพของบุคคลอ้างอิงจำนวน 2
            คน (ซึ่งไม่ใช่ญาติหรืออดีตนายจ้าง)
            ที่รู้จักและคุ้นเคยกับตัวท่านเป็นอย่างดี
          </div>
          <div className="flex items-center justify-start w-full p-2 gap-2 border-2 border-dark text-sm">
            List names, addresses, telephone and occupation of 2 references
            (other than relatives or former employers) who know you.
          </div>
        </div>
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
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
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
