"use client";

import UIDepartmentForm from "@/components/ui/hr/department/UIDepartmentForm";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function departmentCreate() {
  const { data: sessionData } = useSession();
  const { id: userId = "", nameTH = "" } = sessionData?.user ?? {};

  const router = useRouter();
  const formRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    departmentDivisionId: "",
    departmentName: "",
  });
  const [divisionOptions, setDivisionOptions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/hr/division", {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const result = await res.json();
        if (res.ok) {
          setDivisionOptions(
            (result.division || []).filter(
              (division) => division.divisionStatus === "Active"
            )
          );
        } else {
          toast.error(result.error || "Failed to load division data.");
        }
      } catch (err) {
        toast.error(`Failed to load division data: ${err.message}`);
      }
    })();
  }, []);

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
      if (!formRef.current) return;

      const form = new FormData(formRef.current);
      form.append("departmentCreateBy", userId);

      try {
        const res = await fetch("/api/hr/department", {
          method: "POST",
          body: form,
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        const result = await res.json();

        if (res.ok) {
          toast.success(result.message);
          setTimeout(() => router.push("/department"), 2000);
        } else {
          if (result.details) {
            const fieldErrors = Object.fromEntries(
              result.details.map((d) => [d.field?.[0], d.message])
            );
            setErrors(fieldErrors);
          }
          toast.error(result.error || "Failed to create department.");
        }
      } catch (err) {
        toast.error(`Failed to create department: ${err.message}`);
      }
    },
    [userId, router]
  );

  return (
    <>
      <Toaster position="top-right" />
      <UIDepartmentForm
        header="เพิ่ม แผนก"
        formRef={formRef}
        onSubmit={handleSubmit}
        errors={errors}
        formData={formData}
        handleInputChange={handleChange}
        operatedBy={nameTH}
        divisionOptions={divisionOptions}
      />
    </>
  );
}
