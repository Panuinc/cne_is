"use client";

import UIPosJobDes from "@/components/ui/posJobDes/UIPosJobDes";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function posJobDesUpdate() {
  const { data: sessionData } = useSession();
  const { id: userId = "", nameTH = "" } = sessionData?.user ?? {};

  const router = useRouter();
  const { posJobDesId } = useParams();
  const formRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    posJobDesAge: "",
    posJobDesSex: "",
    posJobDesEducations: "",
    posJobDesSkill: "",
    posJobDesExperience: "",
    posJobDesResponsibility: "",
  });

  useEffect(() => {
    if (!posJobDesId) return;
    (async () => {
      try {
        const res = await fetch(`/api/hr/posJobDes/${posJobDesId}`, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const result = await res.json();

        if (res.ok && result.posJobDes?.length) {
          setFormData(result.posJobDes[0]);
        } else {
          toast.error(result.error || "Failed to load posJobDes data.");
        }
      } catch (err) {
        toast.error(`Failed to load data: ${err.message}`);
      }
    })();
  }, [posJobDesId]);

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
      if (!posJobDesId || !formRef.current) return;

      const form = new FormData(formRef.current);
      form.append("posJobDesUpdateBy", userId);

      try {
        const res = await fetch(`/api/hr/posJobDes/${posJobDesId}`, {
          method: "PUT",
          body: form,
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        const result = await res.json();

        if (res.ok) {
          toast.success(result.message);
          setTimeout(() => router.push("/position"), 2000);
        } else {
          if (result.details) {
            const fieldErrors = Object.fromEntries(
              result.details.map((d) => [d.field?.[0], d.message])
            );
            setErrors(fieldErrors);
          }
          toast.error(result.error || "Failed to update posJobDes.");
        }
      } catch (err) {
        toast.error(`Failed to update posJobDes: ${err.message}`);
      }
    },
    [userId, posJobDesId, router]
  );

  return (
    <>
      <Toaster position="top-right" />
      <UIPosJobDes
        header="แก้ไข ใบกำหนดลักษณะงาน"
        formRef={formRef}
        onSubmit={handleSubmit}
        errors={errors}
        formData={formData}
        handleInputChange={handleChange}
        operatedBy={nameTH}
      />
    </>
  );
}
