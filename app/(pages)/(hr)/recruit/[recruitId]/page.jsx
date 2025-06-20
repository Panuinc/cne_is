"use client";

import UIRecruitForm from "@/components/ui/hr/recruit/UIRecruitForm";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function recruitUpdate() {
  const { data: sessionData } = useSession();
  const { id: userId = "", nameTH = "" } = sessionData?.user ?? {};

  const router = useRouter();
  const { recruitId } = useParams();
  const formRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    recruitDetailFullNameTh: "",
    recruitNameShot: "",
    recruitStatus: "",
  });

  useEffect(() => {
    if (!recruitId) return;
    (async () => {
      try {
        const res = await fetch(`/api/hr/recruit/${recruitId}`, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const result = await res.json();

        if (res.ok && result.recruit?.length) {
          setFormData(result.recruit[0]);
        } else {
          toast.error(result.error || "Failed to load recruit data.");
        }
      } catch (err) {
        toast.error(`Failed to load data: ${err.message}`);
      }
    })();
  }, [recruitId]);

  const handleChange = useCallback(
    (field) => (e) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => {
        const { [field]: removed, ...rest } = prev;
        return rest;
      });
    },
    []
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!recruitId || !formRef.current) return;

      const form = new FormData(formRef.current);
      form.append("recruitUpdateBy", userId);

      try {
        const res = await fetch(`/api/hr/recruit/${recruitId}`, {
          method: "PUT",
          body: form,
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        const result = await res.json();

        if (res.ok) {
          toast.success(result.message);
          setTimeout(() => router.push("/recruit"), 2000);
        } else {
          if (result.details) {
            const fieldErrors = Object.fromEntries(
              result.details.map((d) => [d.field?.[0], d.message])
            );
            setErrors(fieldErrors);
          }
          toast.error(result.error || "Failed to update recruit.");
        }
      } catch (err) {
        toast.error(`Failed to update recruit: ${err.message}`);
      }
    },
    [userId, recruitId, router]
  );

  return (
    <>
      <Toaster position="top-right" />
      <UIRecruitForm
        header="แก้ไข ใบสมัครงาน"
        formRef={formRef}
        onSubmit={handleSubmit}
        errors={errors}
        formData={formData}
        handleInputChange={handleChange}
        operatedBy={nameTH}
        isUpdate
      />
    </>
  );
}
