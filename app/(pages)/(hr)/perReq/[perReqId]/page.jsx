"use client";

import UIPerReqForm from "@/components/ui/hr/perReq/UIPerReqForm";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function perReqUpdate() {
  const { data: sessionData } = useSession();
  const { id: userId = "", nameTH = "" } = sessionData?.user ?? {};

  const router = useRouter();
  const { perReqId } = useParams();
  const formRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ perReqName: "", perReqStatus: "" });

  useEffect(() => {
    if (!perReqId) return;
    (async () => {
      try {
        const res = await fetch(`/api/hr/perReq/${perReqId}`, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const result = await res.json();

        if (res.ok && result.perReq?.length) {
          setFormData(result.perReq[0]);
        } else {
          toast.error(result.error || "Failed to load perReq data.");
        }
      } catch (err) {
        toast.error(`Failed to load data: ${err.message}`);
      }
    })();
  }, [perReqId]);

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
      if (!perReqId || !formRef.current) return;

      const form = new FormData(formRef.current);
      form.append("perReqUpdateBy", userId);

      try {
        const res = await fetch(`/api/hr/perReq/${perReqId}`, {
          method: "PUT",
          body: form,
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        const result = await res.json();

        if (res.ok) {
          toast.success(result.message);
          setTimeout(() => router.push("/perReq"), 2000);
        } else {
          if (result.details) {
            const fieldErrors = Object.fromEntries(
              result.details.map((d) => [d.field?.[0], d.message])
            );
            setErrors(fieldErrors);
          }
          toast.error(result.error || "Failed to update perReq.");
        }
      } catch (err) {
        toast.error(`Failed to update perReq: ${err.message}`);
      }
    },
    [userId, perReqId, router]
  );

  return (
    <>
      <Toaster position="top-right" />
      <UIPerReqForm
        header="แก้ไข ขออัตรากำลังคน"
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
