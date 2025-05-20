"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import UIEmpUserForm from "@/components/ui/hr/empUser/UIEmpUserForm";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function EmpUserUpdate() {
  const { data: sessionData } = useSession();
  const { id: userId = "", nameTH = "" } = sessionData?.user ?? {};

  const router = useRouter();
  const { empUserId } = useParams();
  const formRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    empUserUsername: "",
    empUserPassword: "",
  });

  useEffect(() => {
    if (!empUserId) return;
    (async () => {
      try {
        const res = await fetch(`/api/hr/empUser/${empUserId}`, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const result = await res.json();

        if (res.ok && result.empUser?.length) {
          setFormData(result.empUser[0]);
        } else {
          toast.error(result.error || "Failed to load empUser data.");
        }
      } catch (err) {
        toast.error(`Failed to load data: ${err.message}`);
      }
    })();
  }, [empUserId]);

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
      if (!empUserId || !formRef.current) return;

      const form = new FormData(formRef.current);
      form.append("empUserUpdateBy", userId);

      try {
        const res = await fetch(`/api/hr/empUser/${empUserId}`, {
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
          toast.error(result.error || "Failed to update empUser.");
        }
      } catch (err) {
        toast.error(`Failed to update empUser: ${err.message}`);
      }
    },
    [userId, empUserId, router]
  );

  return (
    <>
      <Toaster position="top-right" />
      <UIEmpUserForm
        header="แก้ไข บัญชีใช้งานพนักงาน"
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
