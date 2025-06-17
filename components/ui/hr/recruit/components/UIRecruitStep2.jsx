"use client";

import React from "react";
import { Button } from "@heroui/react";
import { MinusCircle, PlusCircle } from "lucide-react";
import {
  renderInputField,
  renderSelectField,
} from "@/components/ui/hr/recruit/components/UIRenderField";

export default function UIRecruitStep2({
  formData,
  handleInputChange,
  errors,
}) {
  const familyMembers = formData.recruitFamilyMembers || [];

  const handleAddFamilyMember = () => {
    handleInputChange("recruitFamilyMembers")([
      ...familyMembers,
      {
        recruitFamilyMemberRelation: "",
        recruitFamilyMemberFullName: "",
        recruitFamilyMemberAge: "",
        recruitFamilyMemberOccupation: "",
        recruitFamilyMemberWorkplace: "",
        recruitFamilyMemberPhone: "",
      },
    ]);
  };

  const handleRemoveLastMember = () => {
    if (familyMembers.length > 1) {
      const updated = [...familyMembers];
      updated.pop();
      handleInputChange("recruitFamilyMembers")(updated);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-center text-lg font-[600]">
          ข้อมูลทางครอบครัว
          <br />
          Family Data
        </div>

        {familyMembers.map((_, index) => (
          <div
            key={index}
            className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning"
          >
            {renderSelectField({
              labelTH: "ความสัมพันธ์",
              labelEN: "Member Relation",
              name: `recruitFamilyMembers[${index}].recruitFamilyMemberRelation`,
              value:
                formData.recruitFamilyMembers?.[index]
                  ?.recruitFamilyMemberRelation || "",
              onChange: handleInputChange(
                `recruitFamilyMembers[${index}].recruitFamilyMemberRelation`
              ),
              error:
                errors?.recruitFamilyMembers?.[index]
                  ?.recruitFamilyMemberRelation,
              options: [
                { value: "Father", labelTH: "พ่อ", labelEN: "Father" },
                { value: "Mother", labelTH: "แม่", labelEN: "Mother" },
                { value: "Elder", labelTH: "พี่", labelEN: "Elder" },
                { value: "Younger", labelTH: "น้อง", labelEN: "Younger" },
                { value: "Wife", labelTH: "ภรรยา", labelEN: "Wife" },
                { value: "Husband", labelTH: "สามี", labelEN: "Husband" },
              ],
            })}

            {renderInputField({
              labelTH: "ชื่อ - นามสกุล",
              labelEN: "First name - Last name",
              name: `recruitFamilyMembers[${index}].recruitFamilyMemberFullName`,
              type: "text",
              value:
                formData?.recruitFamilyMembers?.[index]
                  ?.recruitFamilyMemberFullName || "",
              onChange: handleInputChange(
                `recruitFamilyMembers[${index}].recruitFamilyMemberFullName`
              ),
              error:
                errors?.recruitFamilyMembers?.[index]
                  ?.recruitFamilyMemberFullName,
            })}

            {renderInputField({
              labelTH: "อายุ",
              labelEN: "Age",
              name: `recruitFamilyMembers[${index}].recruitFamilyMemberAge`,
              type: "number",
              value:
                formData?.recruitFamilyMembers?.[index]
                  ?.recruitFamilyMemberAge || "",
              onChange: handleInputChange(
                `recruitFamilyMembers[${index}].recruitFamilyMemberAge`
              ),
              error:
                errors?.recruitFamilyMembers?.[index]?.recruitFamilyMemberAge,
            })}

            {renderInputField({
              labelTH: "อาชีพ",
              labelEN: "Occupation/Position",
              name: `recruitFamilyMembers[${index}].recruitFamilyMemberOccupation`,
              type: "text",
              value:
                formData?.recruitFamilyMembers?.[index]
                  ?.recruitFamilyMemberOccupation || "",
              onChange: handleInputChange(
                `recruitFamilyMembers[${index}].recruitFamilyMemberOccupation`
              ),
              error:
                errors?.recruitFamilyMembers?.[index]
                  ?.recruitFamilyMemberOccupation,
            })}

            {renderInputField({
              labelTH: "ที่ทำงาน",
              labelEN: "Office",
              name: `recruitFamilyMembers[${index}].recruitFamilyMemberWorkplace`,
              type: "text",
              value:
                formData?.recruitFamilyMembers?.[index]
                  ?.recruitFamilyMemberWorkplace || "",
              onChange: handleInputChange(
                `recruitFamilyMembers[${index}].recruitFamilyMemberWorkplace`
              ),
              error:
                errors?.recruitFamilyMembers?.[index]
                  ?.recruitFamilyMemberWorkplace,
            })}

            {renderInputField({
              labelTH: "โทรศัพท์",
              labelEN: "Tel",
              name: `recruitFamilyMembers[${index}].recruitFamilyMemberPhone`,
              type: "text",
              value:
                formData?.recruitFamilyMembers?.[index]
                  ?.recruitFamilyMemberPhone || "",
              onChange: handleInputChange(
                `recruitFamilyMembers[${index}].recruitFamilyMemberPhone`
              ),
              error:
                errors?.recruitFamilyMembers?.[index]?.recruitFamilyMemberPhone,
            })}
          </div>
        ))}

        <div className="flex flex-row items-center justify-center w-full p-2 gap-2 border-4 border-warning">
          <div className="flex items-center justify-end w-full h-full p-2 gap-2 border-4 border-primary">
            <Button
              color="primary"
              size="md"
              radius="full"
              className="flex items-center justify-center h-full px-8 py-4 gap-2 border-2 border-dark"
              onPress={handleAddFamilyMember}
            >
              <PlusCircle /> เพิ่มสมาชิก
            </Button>
          </div>
          {familyMembers.length > 1 && (
            <div className="flex items-center justify-end w-full h-full p-2 gap-2 border-4 border-warning">
              <Button
                color="danger"
                size="md"
                radius="full"
                className="flex items-center justify-center h-full px-8 py-4 gap-2 border-2 border-dark"
                onPress={handleRemoveLastMember}
              >
                <MinusCircle /> ลบสมาชิก
              </Button>
            </div>
          )}
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
            กรณีเร่งด่วนติดต่อ In case od emergency, please notify
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderInputField({
            labelTH: "ชื่อ - นามสกุล",
            labelEN: "Name - Surname",
            name: "recruitDetail.recruitDetailEmergencyFullName",
            type: "text",
            value:
              formData?.recruitDetail?.recruitDetailEmergencyFullName || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailEmergencyFullName"
            ),
            error: errors?.["recruitDetail.recruitDetailEmergencyFullName"],
          })}

          {renderInputField({
            labelTH: "ความสัมพันธ์",
            labelEN: "Relationship",
            name: "recruitDetail.recruitDetailEmergencyRelationship",
            type: "text",
            value:
              formData?.recruitDetail?.recruitDetailEmergencyRelationship || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailEmergencyRelationship"
            ),
            error: errors?.["recruitDetail.recruitDetailEmergencyRelationship"],
          })}

          {renderInputField({
            labelTH: "โทรศัพท์",
            labelEN: "Tel",
            name: "recruitDetail.recruitDetailEmergencyPhone",
            type: "number",
            value: formData?.recruitDetail?.recruitDetailEmergencyPhone || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailEmergencyPhone"
            ),
            error: errors?.["recruitDetail.recruitDetailEmergencyPhone"],
          })}
        </div>
      </div>
    </>
  );
}
