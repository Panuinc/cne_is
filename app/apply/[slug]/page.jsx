"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { useParams } from "next/navigation";
import UIRecruitForm from "@/components/ui/hr/recruit/UIRecruitForm";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function RecruitApplyPage() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef(null);

  const params = useParams();
  const slug = params?.slug;

  const handleInputChange = useCallback(
    (field) => (e) => {
      const value = e?.target?.value ?? e;
      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => {
        const { [field]: removed, ...rest } = prev;
        return rest;
      });
    },
    []
  );

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
      } catch (errorObject) {
        setErrorMessage(errorObject.message || "เกิดข้อผิดพลาดในการโหลดข้อมูล");
        setFormData(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("ส่งข้อมูล:", formData);
  };

  if (loading) return <p>Loading...</p>;
  if (!formData) return <p>{errorMessage || "ไม่พบข้อมูลใบสมัคร"}</p>;

  return (
    <div className="flex flex-col items-center justify-center w-10/12 h-screen gap-2">
      <UIRecruitForm
        formRef={formRef}
        onSubmit={handleSubmit}
        errors={errors}
        formData={formData}
        handleInputChange={handleInputChange}
        isUpdate={true}
        operatedBy="ผู้สมัคร"
      />
    </div>
  );
}
