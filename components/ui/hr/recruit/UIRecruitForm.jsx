"use client";

import UIRecruitStep1 from "./components/UIRecruitStep1";
import UIRecruitStep2 from "./components/UIRecruitStep2";
import UIRecruitStep3 from "./components/UIRecruitStep3";
import UIRecruitStep4 from "./components/UIRecruitStep4";
import UIRecruitStep5 from "./components/UIRecruitStep5";
import UIRecruitStep6 from "./components/UIRecruitStep6";
import UIRecruitStep7 from "./components/UIRecruitStep7";

import React, { useState } from "react";
import { Button } from "@heroui/react";

export default function UIRecruitForm({
  formRef,
  onSubmit,
  errors,
  formData,
  handleInputChange,
  preview,
  setPreview,
  handleFileChange,
  fileInputRef,
  handleSignatureFileChange,
  signatureInputRef,
  formattedDate,
  setSignatureBlob,
}) {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <>
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-start w-full h-full p-2 xl:p-4 gap-2 border-2 border-dark/25 bg-white overflow-auto"
        encType="multipart/form-data"
      >
        {step === 1 && (
          <UIRecruitStep1
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
            preview={preview}
            setPreview={setPreview}
            handleFileChange={handleFileChange}
            fileInputRef={fileInputRef}
            handleSignatureFileChange={handleSignatureFileChange}
            signatureInputRef={signatureInputRef}
            formattedDate={formattedDate}
          />
        )}
        {step === 2 && (
          <UIRecruitStep2
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        )}
        {step === 3 && (
          <UIRecruitStep3
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        )}
        {step === 4 && (
          <UIRecruitStep4
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        )}
        {step === 5 && (
          <UIRecruitStep5
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
            setSignatureBlob={setSignatureBlob}
          />
        )}
        {step === 6 && (
          <UIRecruitStep6
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        )}
        {step === 7 && (
          <UIRecruitStep7
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
            formattedDate={formattedDate}
          />
        )}

        {/* ปุ่มควบคุม */}
        <div className="flex flex-row items-center justify-center w-full p-2 gap-2">
          {step > 1 && (
            <div className="flex items-center justify-start w-full h-full gap-2">
              <Button
                color="danger"
                size="md"
                radius="full"
                className="flex items-center justify-center h-full px-8 py-4 gap-2"
                onPress={handleBack}
              >
                ย้อนกลับ
              </Button>
            </div>
          )}
          {step < 7 && (
            <div className="flex items-center justify-end w-full h-full gap-2">
              <Button
                color="primary"
                size="md"
                radius="full"
                className="flex items-center justify-center h-full px-8 py-4 gap-2"
                onPress={handleNext}
              >
                ถัดไป
              </Button>
            </div>
          )}
          {step === 7 && (
            <div className="flex items-center justify-end w-full h-full gap-2">
              <Button
                color="primary"
                size="md"
                radius="full"
                type="submit"
                className="flex items-center justify-center h-full px-8 py-4 gap-2"
              >
                บันทึก
              </Button>
            </div>
          )}
        </div>
      </form>
    </>
  );
}
