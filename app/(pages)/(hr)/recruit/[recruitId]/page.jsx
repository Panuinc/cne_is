"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import UIRecruitForm from "@/components/ui/hr/recruit/UIRecruitForm";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function RecruitUpdate() {
  const { data: sessionData } = useSession();
  const { id: userId = "", nameTH = "" } = sessionData?.user ?? {};
  const router = useRouter();
  const { recruitId } = useParams();

  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const signatureInputRef = useRef(null);

  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [preview, setPreview] = useState(null);
  const [signatureBlob, setSignatureBlob] = useState(null);

  // โหลดข้อมูล
  useEffect(() => {
    if (!recruitId) return;

    (async () => {
      try {
        const res = await fetch(`/api/hr/recruit/${recruitId}`, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const result = await res.json();
        if (!res.ok || !result.recruit?.[0]) {
          throw new Error(result?.error || "ไม่พบข้อมูลใบสมัคร");
        }

        const data = JSON.parse(JSON.stringify(result.recruit[0]));

        // Default arrays
        data.recruitFamilyMembers = data.recruitFamilyMembers?.length
          ? data.recruitFamilyMembers
          : [{}];
        data.recruitEducations = data.recruitEducations?.length
          ? data.recruitEducations
          : [{}];
        data.recruitLanguageSkills = data.recruitLanguageSkills?.length
          ? data.recruitLanguageSkills
          : [{}];
        data.recruitWorkExperiences = data.recruitWorkExperiences?.length
          ? data.recruitWorkExperiences
          : [{}];

        setFormData(data);
      } catch (err) {
        setErrorMessage(err.message || "เกิดข้อผิดพลาดในการโหลดข้อมูล");
        setFormData(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [recruitId]);

  // handleInputChange แบบ dynamic
  const handleInputChange = useCallback(
    (path) => (e) => {
      const value = e?.target?.value ?? e;
      const keys = path
        .replace(/\[(\d+)\]/g, ".$1")
        .split(".")
        .filter(Boolean);

      setFormData((prev) => {
        const updated = { ...prev };
        let curr = updated;
        for (let i = 0; i < keys.length - 1; i++) {
          const k = keys[i];
          if (Array.isArray(curr[k])) {
            const idx = parseInt(keys[++i], 10);
            curr[k] = [...curr[k]];
            if (!curr[k][idx]) curr[k][idx] = {};
            curr = curr[k][idx];
          } else {
            curr[k] = { ...curr[k] };
            curr = curr[k];
          }
        }
        curr[keys[keys.length - 1]] = value;
        return updated;
      });

      setErrors((prev) => {
        const { [path]: _, ...rest } = prev;
        return rest;
      });
    },
    []
  );

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      handleInputChange("recruitDetail.recruitDetailProfileImage")({
        target: { value: file },
      });
    }
  };

  // ส่งฟอร์มแบบ update
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!formRef.current || !formData) return;

      const form = new FormData(formRef.current);
      const detail = { ...formData.recruitDetail };

      form.append("recruitDetail", JSON.stringify(detail));

      const arrayFields = [
        "recruitFamilyMembers",
        "recruitEducations",
        "recruitLanguageSkills",
        "recruitWorkExperiences",
      ];
      arrayFields.forEach((key) => {
        form.append(key, JSON.stringify(formData[key] || []));
      });

      Object.entries(formData).forEach(([key, value]) => {
        if (!arrayFields.includes(key) && key !== "recruitDetail") {
          form.append(key, value);
        }
      });

      if (detail.recruitDetailProfileImage instanceof File) {
        form.append(
          "recruitDetailProfileImage",
          detail.recruitDetailProfileImage
        );
      }

      if (signatureBlob instanceof Blob) {
        form.append(
          "recruitDetailSignatureImage",
          new File([signatureBlob], "signature.png", { type: "image/png" })
        );
      }

      const attachmentFields = [
        "recruitDetailAttachIdCard",
        "recruitDetailAttachHouseReg",
        "recruitDetailAttachEducation",
        "recruitDetailAttachMedicalCert",
        "recruitDetailAttachMilitaryDoc",
      ];

      attachmentFields.forEach((field) => {
        const file = detail[field];
        if (file instanceof File) {
          form.append(field, file);
        }
      });

      form.append("recruitUpdateBy", userId);
      form.append("recruitId", formData.recruitId);

      try {
        const res = await fetch(`/api/hr/recruit/${formData.recruitId}`, {
          method: "PUT",
          body: form,
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        const result = await res.json();
        if (res.ok) {
          toast.success("บันทึกข้อมูลใบสมัครเรียบร้อยแล้ว");
          setTimeout(() => router.push("/recruit"), 2000);
        } else {
          if (result.details) {
            const fieldErrors = Object.fromEntries(
              result.details.map((d) => [d.field?.[0], d.message])
            );
            setErrors(fieldErrors);
          }
          toast.error(result.error || "ไม่สามารถอัปเดตข้อมูลได้");
        }
      } catch (err) {
        toast.error(`เกิดข้อผิดพลาด: ${err.message}`);
      }
    },
    [formData, signatureBlob, userId, router]
  );

  const today = new Date();
  const formattedDate = today.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (loading) return <p>Loading...</p>;
  if (!formData) return <p>{errorMessage || "ไม่พบข้อมูลใบสมัคร"}</p>;

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex flex-col items-center justify-center w-full xl:w-10/12 h-screen gap-2">
        <UIRecruitForm
          formRef={formRef}
          onSubmit={handleSubmit}
          errors={errors}
          formData={formData}
          handleInputChange={handleInputChange}
          isUpdate
          operatedBy={nameTH}
          preview={preview}
          setPreview={setPreview}
          handleFileChange={handleFileChange}
          fileInputRef={fileInputRef}
          signatureInputRef={signatureInputRef}
          formattedDate={formattedDate}
          setSignatureBlob={setSignatureBlob}
        />
      </div>
    </>
  );
}
