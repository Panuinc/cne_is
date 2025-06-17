"use client";

import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";
import { Button } from "@heroui/react";
import { MinusCircle, PlusCircle } from "lucide-react";
import {
  renderInputField,
  renderTextAreaField,
  renderRadioGroupField,
  renderSelectField,
} from "@/components/ui/hr/recruit/components/UIRenderField";

export default function UIRecruitStep5({
  formData,
  handleInputChange,
  errors,
}) {
  const sigCanvasRef = useRef();

  const clearSignature = () => {
    sigCanvasRef.current.clear();
    handleInputChange("recruitDetail.recruitSignature")("");
  };

  const saveSignature = () => {
    const signatureData = sigCanvasRef.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    handleInputChange("recruitDetail.recruitSignature")(signatureData);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderTextAreaField({
            labelTH: "กรุณาแนะนำตัวท่านเอง เพื่อให้บริษัทรู้จักท่านดีขึ้น",
            labelEN:
              "Please provide any further information about yourself which will allow our company to know you better",
            name: "recruitDetail.recruitDetailSelfIntro",
            type: "text",
            value: formData?.recruitDetail?.recruitDetailSelfIntro || "",
            onChange: handleInputChange("recruitDetail.recruitDetailSelfIntro"),
            error: errors?.["recruitDetail.recruitDetailSelfIntro"],
          })}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
            ข้าพเจ้าขอรับรองว่า ข้อความทั้งหมดในใบสมัครนี้เป็นความจริงทุกประการ
            หากบริษัทฯ จ้างเข้าทำงานแล้วปรากฏว่าข้อความในใบสมัครงาน
            เอกสารที่นำมาแสดง หรือรายละเอียดที่ให้ไว้ไม่เป็นความจริง บริษัทฯ
            มีสิทธิ์ที่จะเลิกจ้างข้าพเจ้าได้โดยไม่ต้องจ่ายเงินชดเชยหรือค่าเสียหายใด
            ๆ ทั้งสิ้น
            <br />I hereby certify that all the information provided in this
            application is true and correct. If the company later discovers that
            any information, documents, or details provided are false, the
            company reserves the right to terminate my employment without any
            compensation or damages.
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning text-md font-[600]">
          <SignatureCanvas
            ref={sigCanvasRef}
            penColor="black"
            canvasProps={{
              width: 500,
              height: 200,
              className: "border-b-2 border-dark/25",
            }}
          />
          ลายมือชื่อผู้สมัคร / Applicant’s signature
          <div className="flex gap-2 mt-2">
            <Button
              color="primary"
              size="md"
              radius="full"
              className="flex items-center justify-center h-full px-8 py-4 gap-2 border-2 border-dark"
              onPress={saveSignature}
            >
              บันทึกลายเซ็น
            </Button>
            <Button
              color="danger"
              size="md"
              radius="full"
              className="flex items-center justify-center h-full px-8 py-4 gap-2 border-2 border-dark"
              onPress={clearSignature}
            >
              ล้างลายเซ็น
            </Button>
          </div>
          {errors?.["recruitDetail.recruitDetailSignatureImage"] && (
            <div className="text-red-500 text-sm">
              {errors["recruitDetail.recruitDetailSignatureImage"]}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
            เอกสารที่แนบพร้อมใบสมัคร
            <br />
            Enclosed Documents
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-4 border-warning">
          {renderInputField({
            labelTH: "สำเนาบัตรประชาชน",
            labelEN: "Identification Card",
            name: "recruitDetail.recruitDetailAttachIdCard",
            type: "file",
            value: formData?.recruitDetail?.recruitDetailAttachIdCard || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailAttachIdCard"
            ),
            error: errors?.["recruitDetail.recruitDetailAttachIdCard"],
          })}
          {renderInputField({
            labelTH: "สำเนาทะเบียนบ้าน",
            labelEN: "House Registration",
            name: "recruitDetail.recruitDetailAttachHouseReg",
            type: "file",
            value: formData?.recruitDetail?.recruitDetailAttachHouseReg || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailAttachHouseReg"
            ),
            error: errors?.["recruitDetail.recruitDetailAttachHouseReg"],
          })}
          {renderInputField({
            labelTH: "หลักฐานการศึกษา",
            labelEN: "Transcript",
            name: "recruitDetail.recruitDetailAttachEducation",
            type: "file",
            value: formData?.recruitDetail?.recruitDetailAttachEducation || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailAttachEducation"
            ),
            error: errors?.["recruitDetail.recruitDetailAttachEducation"],
          })}
          {renderInputField({
            labelTH: "ใบรับรองแพทย์",
            labelEN: "Medical Certificate",
            name: "recruitDetail.recruitDetailAttachMedicalCert",
            type: "file",
            value:
              formData?.recruitDetail?.recruitDetailAttachMedicalCert || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailAttachMedicalCert"
            ),
            error: errors?.["recruitDetail.recruitDetailAttachMedicalCert"],
          })}
          {renderInputField({
            labelTH: "หลักฐานการเกณฑ์ทหาร",
            labelEN: "Military Certificate",
            name: "recruitDetail.recruitDetailAttachMilitaryDoc",
            type: "file",
            value:
              formData?.recruitDetail?.recruitDetailAttachMilitaryDoc || "",
            onChange: handleInputChange(
              "recruitDetail.recruitDetailAttachMilitaryDoc"
            ),
            error: errors?.["recruitDetail.recruitDetailAttachMilitaryDoc"],
          })}
        </div>
      </div>
    </>
  );
}
