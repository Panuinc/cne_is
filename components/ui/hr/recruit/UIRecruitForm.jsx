"use client";

import UIHeader from "@/components/other/UIHeader";
import UIRecruitStep1 from "./components/UIRecruitStep1";
import UIRecruitStep2 from "./components/UIRecruitStep2";
import UIRecruitStep3 from "./components/UIRecruitStep3";
import UIRecruitStep4 from "./components/UIRecruitStep4";
import UIRecruitStep5 from "./components/UIRecruitStep5"; // ✅ เพิ่ม step 5
import React, { useState } from "react";
import { Button } from "@heroui/react";

export default function UIRecruitForm({
  header,
  formRef,
  onSubmit,
  errors,
  formData,
  handleInputChange,
  isUpdate,
  operatedBy,
}) {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step === 1 && !formData.recruitFullNameTh) {
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <>
      <UIHeader Header={header} />
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white overflow-auto border-2 border-dark"
      >
        {step === 1 && (
          <UIRecruitStep1
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
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
          />
        )}

        <div className="flex flex-row items-center justify-between w-full p-2 gap-2 border-2 border-dark">
          {step > 1 && (
            <Button
              color="primary"
              size="md"
              radius="full"
              className="flex items-center justify-center w-2/12 h-full p-4 gap-2"
              onPress={handleBack}
            >
              ย้อนกลับ
            </Button>
          )}
          {step < 5 && (
            <Button
              color="primary"
              size="md"
              radius="full"
              className="flex items-center justify-center w-2/12 h-full p-4 gap-2"
              onPress={handleNext}
            >
              ถัดไป
            </Button>
          )}
          {step === 5 && (
            <Button
              color="primary"
              size="md"
              radius="full"
              type="submit"
              className="flex items-center justify-center w-2/12 h-full p-4 gap-2"
            >
              บันทึก
            </Button>
          )}
        </div>
      </form>
    </>
  );
}
