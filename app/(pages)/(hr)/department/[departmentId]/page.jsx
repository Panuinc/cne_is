"use client";

import UIDepartmentForm from "@/components/ui/hr/department/UIDepartmentForm";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function departmentUpdate() {
  const { data: sessionData } = useSession();
  const { id: userId = "", nameTH = "" } = sessionData?.user ?? {};

  const router = useRouter();
  const { departmentId } = useParams();
  const formRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    departmentName: "",
    departmentStatus: "",
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

  useEffect(() => {
    if (!departmentId) return;
    (async () => {
      try {
        const res = await fetch(`/api/hr/department/${departmentId}`, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const result = await res.json();

        if (res.ok && result.department?.length) {
          setFormData(result.department[0]);
        } else {
          toast.error(result.error || "Failed to load department data.");
        }
      } catch (err) {
        toast.error(`Failed to load data: ${err.message}`);
      }
    })();
  }, [departmentId]);

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
      if (!departmentId || !formRef.current) return;

      const form = new FormData(formRef.current);
      form.append("departmentUpdateBy", userId);

      try {
        const res = await fetch(`/api/hr/department/${departmentId}`, {
          method: "PUT",
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
          toast.error(result.error || "Failed to update department.");
        }
      } catch (err) {
        toast.error(`Failed to update department: ${err.message}`);
      }
    },
    [userId, departmentId, router]
  );

  return (
    <>
      <Toaster position="top-right" />
      <UIDepartmentForm
        header="แก้ไข แผนก"
        formRef={formRef}
        onSubmit={handleSubmit}
        errors={errors}
        formData={formData}
        handleInputChange={handleChange}
        operatedBy={nameTH}
        isUpdate
        divisionOptions={divisionOptions}
      />
    </>
  );
}
