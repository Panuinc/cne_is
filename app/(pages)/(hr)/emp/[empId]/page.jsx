"use client";

import UIEmpForm from "@/components/ui/hr/emp/UIEmpForm";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function empUpdate() {
  const { data: sessionData } = useSession();
  const { id: userId = "", nameTH = "" } = sessionData?.user ?? {};

  const router = useRouter();
  const { empId } = useParams();
  const formRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    empTitle: "",
    empFirstNameTH: "",
    empLastNameTH: "",
    empFirstNameEN: "",
    empLastNameEN: "",
    empEmail: "",
    empTel: "",
    empIdCard: "",
    empBirthday: "",
    empCitizen: "",
    empGender: "",
    empStatus: "",
  });

  useEffect(() => {
    if (!empId) return;
    (async () => {
      try {
        const res = await fetch(`/api/hr/empMain/${empId}`, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const result = await res.json();

        if (res.ok && result.emp?.length) {
          setFormData(result.emp[0]);
        } else {
          toast.error(result.error || "Failed to load emp data.");
        }
      } catch (err) {
        toast.error(`Failed to load data: ${err.message}`);
      }
    })();
  }, [empId]);

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
      if (!empId || !formRef.current) return;

      const form = new FormData(formRef.current);
      form.append("empUpdateBy", userId);

      try {
        const res = await fetch(`/api/hr/empMain/${empId}`, {
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
          toast.error(result.error || "Failed to update emp.");
        }
      } catch (err) {
        toast.error(`Failed to update emp: ${err.message}`);
      }
    },
    [userId, empId, router]
  );

  return (
    <>
      <Toaster position="top-right" />
      <UIEmpForm
        header="แก้ไข พนักงาน"
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
