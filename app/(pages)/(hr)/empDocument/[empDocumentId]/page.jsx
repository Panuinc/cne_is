"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import UIEmpDocumentForm from "@/components/ui/hr/empDocument/UIEmpDocumentForm";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function EmpDocumentUpdate() {
  const { data: sessionData } = useSession();
  const { id: userId = "", nameTH = "" } = sessionData?.user ?? {};

  const router = useRouter();
  const { empDocumentId } = useParams();
  const formRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    empDocumentIdCardFile: "",
    empDocumentHomeFile: "",
    empDocumentProfessionalCertificateFile: "",
    empDocumentEducationsFile: "",

    empDocumentPassportFile: "",
    empDocumentImmigrationFile: "",

    empDocumentVisa1File: "",
    empDocumentVisa2File: "",
    empDocumentVisa3File: "",
    empDocumentVisa4File: "",
    empDocumentVisa5File: "",

    empDocumentWorkPermit1File: "",
    empDocumentWorkPermit2File: "",
    empDocumentWorkPermit3File: "",
    empDocumentWorkPermit4File: "",
    empDocumentWorkPermit5File: "",

    empDocumentOldPlaceFile: "",

    empDocumentEmployerChange1File: "",
    empDocumentEmployerChange2File: "",
    empDocumentEmployerChange3File: "",
    empDocumentEmployerChange4File: "",
    empDocumentEmployerChange5File: "",
  });

  useEffect(() => {
    if (!empDocumentId) return;
    (async () => {
      try {
        const res = await fetch(`/api/hr/empDocument/${empDocumentId}`, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const result = await res.json();

        if (res.ok && result.empDocument?.length) {
          setFormData(result.empDocument[0]);
        } else {
          toast.error(result.error || "Failed to load empDocument data.");
        }
      } catch (err) {
        toast.error(`Failed to load data: ${err.message}`);
      }
    })();
  }, [empDocumentId]);

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
      if (!empDocumentId || !formRef.current) return;

      const form = new FormData(formRef.current);
      form.append("empDocumentUpdateBy", userId);

      try {
        const res = await fetch(`/api/hr/empDocument/${empDocumentId}`, {
          method: "PUT",
          body: form,
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        const result = await res.json();

        if (res.ok) {
          toast.success(result.message);
          setTimeout(() => router.push("/emp"), 2000);
        } else {
          if (result.details) {
            const fieldErrors = Object.fromEntries(
              result.details.map((d) => [d.field?.[0], d.message])
            );
            setErrors(fieldErrors);
          }
          toast.error(result.error || "Failed to update empDocument.");
        }
      } catch (err) {
        toast.error(`Failed to update empDocument: ${err.message}`);
      }
    },
    [userId, empDocumentId, router]
  );

  return (
    <>
      <Toaster position="top-right" />
      <UIEmpDocumentForm
        header="แก้ไข เอกสารพนักงาน"
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
