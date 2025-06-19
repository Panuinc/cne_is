"use client";

import SignatureCanvas from "react-signature-canvas";
import { useRef, useState } from "react";
import { Button } from "@heroui/react";
import {
  renderInputField,
  renderTextAreaField,
} from "@/components/ui/hr/recruit/components/UIRenderField";

export default function UIRecruitStep5({
  formData,
  handleInputChange,
  errors,
}) {
  const sigCanvasRef = useRef();
  const [signaturePreview, setSignaturePreview] = useState(
    formData?.recruitDetail?.recruitSignature || ""
  );

  const clearSignature = () => {
    sigCanvasRef.current.clear();
    setSignaturePreview("");
    handleInputChange("recruitDetail.recruitSignature")("");
    handleInputChange("recruitDetail.recruitDetailSignatureImage")(null);
  };

  const saveSignature = () => {
    const canvas = sigCanvasRef.current.getTrimmedCanvas();
    const base64 = canvas.toDataURL("image/png");

    // อัปเดต preview
    setSignaturePreview(base64);
    handleInputChange("recruitDetail.recruitSignature")(base64);

    // แปลง base64 เป็น File object
    fetch(base64)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "signature.png", { type: "image/png" });
        handleInputChange("recruitDetail.recruitDetailSignatureImage")({
          target: { value: file },
        });
      });
  };

  return (
    <>
      {/* ส่วนแนะนำตัว */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
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

      {/* ส่วนลายเซ็น */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-sm">
          ข้าพเจ้าขอรับรองว่า ข้อความทั้งหมดในใบสมัครนี้เป็นความจริงทุกประการ...
          <br />I hereby certify that all the information provided...
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full gap-2 text-md font-[600]">
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
            <Button color="primary" onPress={saveSignature}>
              บันทึกลายเซ็น
            </Button>
            <Button color="danger" onPress={clearSignature}>
              ล้างลายเซ็น
            </Button>
          </div>
          {signaturePreview && (
            <img
              src={signaturePreview}
              alt="Signature Preview"
              className="w-[300px] mt-4 border border-gray-300 rounded"
            />
          )}
          {errors?.["recruitDetail.recruitDetailSignatureImage"] && (
            <div className="text-red-500 text-sm">
              {errors["recruitDetail.recruitDetailSignatureImage"]}
            </div>
          )}
        </div>
      </div>

      {/* ส่วนแนบเอกสาร */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-sm">
          เอกสารที่แนบพร้อมใบสมัคร
          <br />
          Enclosed Documents
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
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
