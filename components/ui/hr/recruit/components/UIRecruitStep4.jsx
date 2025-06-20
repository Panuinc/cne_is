"use client";

import React from "react";
import { Button } from "@heroui/react";
import { MinusCircle, PlusCircle } from "lucide-react";
import {
  renderInputField,
  renderTextAreaField,
  renderRadioGroupField,
} from "@/components/ui/hr/recruit/components/UIRenderField";

export default function UIRecruitStep4({
  formData,
  handleInputChange,
  errors,
}) {
  const workExperiences = formData.recruitWorkExperiences || [];

  const handleAddWorkExperience = () => {
    handleInputChange("recruitWorkExperiences")([
      ...workExperiences,
      {
        recruitWorkplaceName: "",
        recruitWorkPosition: "",
        recruitEmploymentType: "",
        recruitStartDate: "",
        recruitEndDate: "",
        recruitSalary: "",
        recruitExtraIncome: "",
        recruitReasonForLeaving: "",
        recruitJobDescription: "",
      },
    ]);
  };

  const handleRemoveLastWorkExperience = () => {
    if (workExperiences.length > 1) {
      const updated = [...workExperiences];
      updated.pop();
      handleInputChange("recruitWorkExperiences")(updated);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-md font-[600] text-center">
          ประวัติการทำงาน
          <br />
          From the most current
        </div>

        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-sm">
          กรุณาเรียงจากปัจจุบันไปหาอดีต
          <br />
          Do you have a driving license?
        </div>

        {workExperiences.map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              {renderInputField({
                labelTH: "ชื่อสถานที่ทำงาน",
                labelEN: "Company's name",
                name: `recruitWorkExperiences[${index}].recruitWorkplaceName`,
                type: "text",
                value:
                  formData?.recruitWorkExperiences?.[index]
                    ?.recruitWorkplaceName || "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitWorkplaceName`
                ),
                error:
                  errors?.recruitWorkExperiences?.[index]?.recruitWorkplaceName,
              })}

              {renderInputField({
                labelTH: "ตำแหน่งงาน",
                labelEN: "Position",
                name: `recruitWorkExperiences[${index}].recruitWorkPosition`,
                type: "text",
                value:
                  formData?.recruitWorkExperiences?.[index]
                    ?.recruitWorkPosition || "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitWorkPosition`
                ),
                error:
                  errors?.recruitWorkExperiences?.[index]?.recruitWorkPosition,
              })}
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              {renderRadioGroupField({
                labelTH: "ประเภทการจ้างงาน",
                labelEN: "Type of employment",
                name: `recruitWorkExperiences[${index}].recruitEmploymentType`,
                value:
                  formData.recruitWorkExperiences?.[index]
                    ?.recruitEmploymentType || "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitEmploymentType`
                ),
                error:
                  errors?.recruitWorkExperiences?.[index]
                    ?.recruitEmploymentType,
                options: [
                  { value: "FullTime", labelTH: "ประจำ", labelEN: "FullTime" },
                  {
                    value: "PartTime",
                    labelTH: "ชั่วคราว",
                    labelEN: "PartTime",
                  },
                  {
                    value: "Internship",
                    labelTH: "ฝึกงาน",
                    labelEN: "Internship",
                  },
                ],
              })}
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              {renderInputField({
                labelTH: "วัน เดือน ปี ที่เข้าทำงาน",
                labelEN: "Starting date",
                name: `recruitWorkExperiences[${index}].recruitStartDate`,
                type: "date",
                value:
                  formData?.recruitWorkExperiences?.[index]?.recruitStartDate ||
                  "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitStartDate`
                ),
                error:
                  errors?.recruitWorkExperiences?.[index]?.recruitStartDate,
              })}

              {renderInputField({
                labelTH: "วัน เดือน ปี ที่ลาออก",
                labelEN: "Leaving date",
                name: `recruitWorkExperiences[${index}].recruitEndDate`,
                type: "date",
                value:
                  formData?.recruitWorkExperiences?.[index]?.recruitEndDate ||
                  "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitEndDate`
                ),
                error: errors?.recruitWorkExperiences?.[index]?.recruitEndDate,
              })}
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              {renderInputField({
                labelTH: "เงินเดือน",
                labelEN: "Salary",
                name: `recruitWorkExperiences[${index}].recruitSalary`,
                type: "number",
                value:
                  formData?.recruitWorkExperiences?.[index]?.recruitSalary ||
                  "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitSalary`
                ),
                error: errors?.recruitWorkExperiences?.[index]?.recruitSalary,
              })}

              {renderInputField({
                labelTH: "รายได้พิเศษ",
                labelEN: "Allowances",
                name: `recruitWorkExperiences[${index}].recruitExtraIncome`,
                type: "number",
                value:
                  formData?.recruitWorkExperiences?.[index]
                    ?.recruitExtraIncome || "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitExtraIncome`
                ),
                error:
                  errors?.recruitWorkExperiences?.[index]?.recruitExtraIncome,
              })}

              {renderInputField({
                labelTH: "เหตุผลในการลาออก",
                labelEN: "Reason for leaving",
                name: `recruitWorkExperiences[${index}].recruitReasonForLeaving`,
                type: "text",
                value:
                  formData?.recruitWorkExperiences?.[index]
                    ?.recruitReasonForLeaving || "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitReasonForLeaving`
                ),
                error:
                  errors?.recruitWorkExperiences?.[index]
                    ?.recruitReasonForLeaving,
              })}
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              {renderTextAreaField({
                labelTH: "ลักษณะงานที่รับผิดชอบ",
                labelEN: "Job description & responsibility",
                name: `recruitWorkExperiences[${index}].recruitJobDescription`,
                value:
                  formData?.recruitWorkExperiences?.[index]
                    ?.recruitJobDescription || "",
                onChange: handleInputChange(
                  `recruitWorkExperiences[${index}].recruitJobDescription`
                ),
                error:
                  errors?.recruitWorkExperiences?.[index]
                    ?.recruitJobDescription,
              })}
            </div>
          </React.Fragment>
        ))}
        <div className="flex flex-row items-center justify-center w-full gap-2">
          <div className="flex items-center justify-end w-full h-full p-2 gap-2">
            <Button
              color="primary"
              size="md"
              radius="full"
              className="flex items-center justify-center h-full px-8 py-4 gap-2"
              onPress={handleAddWorkExperience}
            >
              <PlusCircle /> เพิ่มประสบการณ์ทำงาน
            </Button>
          </div>
          {workExperiences.length > 1 && (
            <div className="flex items-center justify-end w-full h-full p-2 gap-2">
              <Button
                color="danger"
                size="md"
                radius="full"
                className="flex items-center justify-center h-full px-8 py-4 gap-2"
                onPress={handleRemoveLastWorkExperience}
              >
                <MinusCircle /> ลบประสบการณ์ทำงาน
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
          {renderInputField({
            labelTH: "ท่านจะมาเริ่มงานกับบริษัทได้เมื่อไหร่ ถ้ามีตำแหน่งให้",
            labelEN: "When can you start working with us, if employed",
            name: "recruitDetail.recruitDetailWhenStartWork",
            type: "text",
            value: formData?.recruitDetail?.recruitDetailWhenStartWork || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailWhenStartWork"
            ),
            error: errors?.["recruitDetail.recruitDetailWhenStartWork"],
          })}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
          {renderRadioGroupField({
            labelTH: "ข้าพเข้า",
            labelEN: "I",
            name: "recruitDetail.recruitDetailCheckWorkingHistory",
            value:
              formData?.recruitDetail?.recruitDetailCheckWorkingHistory || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailCheckWorkingHistory"
            ),
            error: errors?.["recruitDetail.recruitDetailCheckWorkingHistory"],
            options: [
              { labelTH: "ยินยอม", labelEN: "Yes", value: "Yes" },
              { labelTH: "ไม่ยินยอม", labelEN: "No", value: "No" },
            ],
          })}
        </div>
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-sm">
          ให้บริษัทตรวจสอบประวัติการทำงานและความประพฤติของข้าพเจ้ากับนายจ้างเดิม
          เพื่อยืนยันข้อมูลที่ข้าพเจ้าได้ให้ไว้กับบริษัทเพื่อการพิจารณาการจ้างงาน
          <br />I authorize the company to verify my employment history and
          conduct with my previous employers to confirm the information I have
          provided for recruitment consideration.
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-center text-md font-[600]">
          ข้อความเพิ่มเติม
          <br />
          Further Information
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
          {renderRadioGroupField({
            labelTH: "ท่านเคยถูกให้ออกจากงานหรือไม่",
            labelEN:
              "Have you ever been discharged from employment for any reason",
            name: "recruitDetail.recruitDetailDischarged",
            value: formData?.recruitDetail?.recruitDetailDischarged || "",
            onChange: handleInputChange("recruitDetail.recruitDetailDischarged"),
            error: errors?.["recruitDetail.recruitDetailDischarged"],
            options: [
              { labelTH: "ไม่เคย", labelEN: "No", value: "No" },
              { labelTH: "เคย", labelEN: "Yes", value: "Yes" },
            ],
          })}

          {formData?.recruitDetail?.recruitDetailDischarged === "Yes" &&
            renderInputField({
              labelTH: "เพราะ",
              labelEN: "Because",
              name: "recruitDetail.recruitDetailDischargedReason",
              type: "text",
              value: formData?.recruitDetail?.recruitDetailDischargedReason || "",
              onChange: handleInputChange(
                "recruitDetail.recruitDetailDischargedReason"
              ),
              error: errors?.["recruitDetail.recruitDetailDischargedReason"],
            })}
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
          {renderRadioGroupField({
            labelTH: "ท่านเคยป่วยหนักและเป็นโรคติดต่อร้ายแรงมาก่อนหรือไม่",
            labelEN:
              "Have you ever been seriously ill or contracted with contagious disease",
            name: "recruitDetail.recruitDetailSeriousIllnessOrContagious",
            value:
              formData?.recruitDetail
                ?.recruitDetailSeriousIllnessOrContagious || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailSeriousIllnessOrContagious"
            ),
            error:
              errors?.["recruitDetail.recruitDetailSeriousIllnessOrContagious"],
            options: [
              { labelTH: "ไม่เคย", labelEN: "No", value: "No" },
              { labelTH: "เคย", labelEN: "Yes", value: "Yes" },
            ],
          })}

          {formData?.recruitDetail?.recruitDetailSeriousIllnessOrContagious ===
            "Yes" &&
            renderInputField({
              labelTH: "ชื่อโรค",
              labelEN: "Explain",
              name: "recruitDetail.recruitDetailIllnessName",
              type: "text",
              value: formData?.recruitDetail?.recruitDetailIllnessName || "",
              onChange: handleInputChange(
                "recruitDetail.recruitDetailIllnessName"
              ),
              error: errors?.["recruitDetail.recruitDetailIllnessName"],
            })}
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
          {renderRadioGroupField({
            labelTH:
              "ท่านเคยได้รับโทษทางอาญาหรือจำคุกหรือเป็นบุคคลล้มละลายหรือไม่",
            labelEN:
              "Have you ever been arrested of convicted for any offense or crime or bankrupt",
            name: "recruitDetail.recruitDetailCriminalConvictionOrBankrupt",
            value:
              formData?.recruitDetail
                ?.recruitDetailCriminalConvictionOrBankrupt || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailCriminalConvictionOrBankrupt"
            ),
            error:
              errors?.[
                "recruitDetail.recruitDetailCriminalConvictionOrBankrupt"
              ],
            options: [
              { labelTH: "ไม่เคย", labelEN: "No", value: "No" },
              { labelTH: "เคย", labelEN: "Yes", value: "Yes" },
            ],
          })}
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
          {renderRadioGroupField({
            labelTH: "ขณะนี้คุณตั้งครรภ์หรือไม่",
            labelEN: "Are you pregnant",
            name: "recruitDetail.recruitDetailIsPregnant",
            value: formData?.recruitDetail?.recruitDetailIsPregnant || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailIsPregnant"
            ),
            error: errors?.["recruitDetail.recruitDetailIsPregnant"],
            options: [
              { labelTH: "ไม่", labelEN: "No", value: "No" },
              { labelTH: "ตั้งครรภ์", labelEN: "Yes", value: "Yes" },
            ],
          })}

          {formData?.recruitDetail?.recruitDetailIsPregnant === "Yes" &&
            renderInputField({
              labelTH: "กี่เดือน",
              labelEN: "Months",
              name: "recruitDetail.recruitDetailPregnancyMonth",
              type: "number",
              value: formData?.recruitDetail?.recruitDetailPregnancyMonth || "",
              onChange: handleInputChange(
                "recruitDetail.recruitDetailPregnancyMonth"
              ),
              error: errors?.["recruitDetail.recruitDetailPregnancyMonth"],
            })}
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
          {renderRadioGroupField({
            labelTH: "ท่านมีเพื่อนที่รู้จัก หรือญาติที่ทำงานในบรษัทนี้หรือไม่",
            labelEN:
              "Do you have relatives and/or friends who are working in this company",
            name: "recruitDetail.recruitDetailHasRelativesInCompany",
            value:
              formData?.recruitDetail?.recruitDetailHasRelativesInCompany || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailHasRelativesInCompany"
            ),
            error: errors?.["recruitDetail.recruitDetailHasRelativesInCompany"],
            options: [
              { labelTH: "ไม่มี", labelEN: "No", value: "No" },
              { labelTH: "มี", labelEN: "Yes", value: "Yes" },
            ],
          })}

          {formData?.recruitDetail?.recruitDetailHasRelativesInCompany ===
            "Yes" &&
            renderInputField({
              labelTH: "กี่เดือน",
              labelEN: "Months",
              name: "recruitDetail.recruitDetailRelativesName",
              type: "text",
              value: formData?.recruitDetail?.recruitDetailRelativesName || "",
              onChange: handleInputChange(
                "recruitDetail.recruitDetailRelativesName"
              ),
              error: errors?.["recruitDetail.recruitDetailRelativesName"],
            })}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-sm">
          เขียนชื่อ ที่อยู่ โทรศัพท์ และอาชีพของผู้ที่อ้างถึง 2 คน
          (ซึ่งไม่ใช่ญาติหรือนายจ้างเดิม) ที่รู้จักคุ้นเคยตัวท่านดี
          <br />
          Please provide the name, address, phone number, and occupation of two
          references (not relatives or former employers) who are well acquainted
          with you.
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full gap-2">
          {renderInputField({
            labelTH: "คนที่ 1",
            labelEN: "No 1",
            name: "recruitDetail.recruitDetailRef1Name",
            type: "text",
            value: formData?.recruitDetail?.recruitDetailRef1Name || "",
            onChange: handleInputChange("recruitDetail.recruitDetailRef1Name"),
            error: errors?.["recruitDetail.recruitDetailRef1Name"],
          })}
          {renderInputField({
            labelTH: "คนที่ 2",
            labelEN: "No 2",
            name: "recruitDetail.recruitDetailRef2Name",
            type: "text",
            value: formData?.recruitDetail?.recruitDetailRef2Name || "",
            onChange: handleInputChange("recruitDetail.recruitDetailRef2Name"),
            error: errors?.["recruitDetail.recruitDetailRef2Name"],
          })}
        </div>
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-sm">
          ข้าพเจ้าขอรับรองว่า ได้รับอนุญาตจากบุคคลอ้างอิงที่มีรายชื่อข้างต้น
          ให้ระบุชื่อเพื่อเป็นข้อมูลอ้างอิงกับบริษัท
          รวมถึงเพื่อให้บริษัทสามารถติดต่อสอบถามข้อมูลและยืนยันข้อมูลเกี่ยวกับตัวข้าพเจ้า
          <br />I certify that I have obtained consent from the listed
          references to provide their names as part of this application, and to
          allow the company to contact them for verification and reference
          purposes.
        </div>
      </div>
    </>
  );
}
