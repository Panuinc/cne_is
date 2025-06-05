"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
import UIRecruitForm from "@/components/ui/hr/recruit/UIRecruitForm";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function RecruitApplyPage() {
  const params = useParams();
  const slug = params?.slug;
  const formRef = useRef(null);

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

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
    console.log("ส่งข้อมูล:", formData);
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
