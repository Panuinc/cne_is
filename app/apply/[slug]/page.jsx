"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import UIRecruitForm from "@/components/ui/hr/recruit/UIRecruitForm";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function RecruitApplyPage() {
  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const formRef = useRef(null);
  const router = useRouter();
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) return;

    (async () => {
      try {
        const res = await fetch(`/api/hr/recruit/slug/${slug}`, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        const json = await res.json();
        if (!res.ok || !json?.recruit?.[0]) {
          throw new Error(json?.error || "ไม่พบข้อมูลใบสมัคร");
        }

        setFormData(json.recruit[0]);
      } catch (error) {
        setErrorMessage(error.message || "เกิดข้อผิดพลาดในการโหลดข้อมูล");
        setFormData(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  const handleInputChange = useCallback(
    (path) => (e) => {
      const value = e?.target?.value ?? e;
      const keys = path.split(".");

      setFormData((prev) => {
        const updated = { ...prev };
        let current = updated;

        for (let i = 0; i < keys.length - 1; i++) {
          current[keys[i]] = { ...current[keys[i]] };
          current = current[keys[i]];
        }

        current[keys[keys.length - 1]] = value;
        return updated;
      });

      setErrors((prev) => {
        const { [path]: removed, ...rest } = prev;
        return rest;
      });
    },
    []
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!formRef.current || !formData) return;

      const form = new FormData(formRef.current);

      form.append("recruitDetail", JSON.stringify(formData.recruitDetail));

      const arrayFields = [
        "recruitFamilyMembers",
        "recruitEmergencyContacts",
        "recruitEducations",
        "recruitProfessionalLicenses",
        "recruitLanguageSkills",
        "recruitOtherSkills",
        "recruitSpecialAbilities",
        "recruitEnglishScores",
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

      form.append("recruitStatus", "Submitted");

      try {
        const res = await fetch("/api/hr/recruit", {
          method: "POST",
          body: form,
          headers: {
            "secret-token": SECRET_TOKEN || "",
          },
        });

        const result = await res.json();

        if (res.ok) {
          toast.success("ส่งใบสมัครเรียบร้อยแล้ว");
          setTimeout(() => router.push("/thank-you"), 2000);
        } else {
          if (result.details) {
            const fieldErrors = Object.fromEntries(
              result.details.map((d) => [d.field?.[0], d.message])
            );
            setErrors(fieldErrors);
          }
          toast.error(result.error || "ไม่สามารถบันทึกข้อมูลได้");
        }
      } catch (err) {
        toast.error(`เกิดข้อผิดพลาด: ${err.message}`);
      }
    },
    [formData, router]
  );

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
          isUpdate={false}
          operatedBy="ผู้สมัคร"
        />
      </div>
    </>
  );
}
