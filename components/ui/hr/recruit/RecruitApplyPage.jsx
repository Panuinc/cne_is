"use client";

import UIRecruitForm from "./UIRecruitForm";
import { useEffect, useState, useCallback, useRef } from "react";
const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function RecruitApplyPage({ slug }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const formRef = useRef(null);

  // ✅ define handleInputChange function
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
          headers: {
            "secret-token": SECRET_TOKEN || "",
          },
        });

        const json = await res.json();

        if (res.ok && json?.recruit?.[0]) {
          setFormData(json.recruit[0]);
        } else {
          setFormData(null);
        }
      } catch (err) {
        setFormData(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  if (loading) return <p>Loading...</p>;
  if (!formData) return <p>ไม่พบข้อมูลใบสมัคร</p>;

  return (
    <UIRecruitForm
      header="ใบสมัครงาน"
      formRef={formRef}
      onSubmit={handleSubmit}
      errors={errors}
      formData={formData}
      handleInputChange={handleInputChange}
      isUpdate={true}
      operatedBy="ผู้สมัคร"
    />
  );
}
