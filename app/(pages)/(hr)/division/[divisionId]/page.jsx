"use client";

import UIDivisionForm from "@/components/ui/hr/division/UIDivisionForm";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function divisionUpdate() {
  const { data: sessionData } = useSession();
  const { id: userId = "", nameTH = "" } = sessionData?.user ?? {};

  const router = useRouter();
  const { divisionId } = useParams();
  const formRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    divisionName: "",
    divisionNameShot: "",
    divisionStatus: "",
  });

  useEffect(() => {
    if (!divisionId) return;
    (async () => {
      try {
        const res = await fetch(`/api/hr/division/${divisionId}`, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const result = await res.json();

        if (res.ok && result.division?.length) {
          setFormData(result.division[0]);
        } else {
          toast.error(result.error || "Failed to load division data.");
        }
      } catch (err) {
        toast.error(`Failed to load data: ${err.message}`);
      }
    })();
  }, [divisionId]);

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
      if (!divisionId || !formRef.current) return;

      const form = new FormData(formRef.current);
      form.append("divisionUpdateBy", userId);

      try {
        const res = await fetch(`/api/hr/division/${divisionId}`, {
          method: "PUT",
          body: form,
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        const result = await res.json();

        if (res.ok) {
          toast.success(result.message);
          setTimeout(() => router.push("/division"), 2000);
        } else {
          if (result.details) {
            const fieldErrors = Object.fromEntries(
              result.details.map((d) => [d.field?.[0], d.message])
            );
            setErrors(fieldErrors);
          }
          toast.error(result.error || "Failed to update division.");
        }
      } catch (err) {
        toast.error(`Failed to update division: ${err.message}`);
      }
    },
    [userId, divisionId, router]
  );

  return (
    <>
      <Toaster position="top-right" />
      <UIDivisionForm
        header="แก้ไข ระดับตำแหน่งงาน"
        formRef={formRef}
        onSubmit={handleSubmit}
        errors={errors}
        setErrors={setErrors}
        formData={formData}
        handleInputChange={handleChange}
        operatedBy={nameTH}
        isUpdate
      />
    </>
  );
}
