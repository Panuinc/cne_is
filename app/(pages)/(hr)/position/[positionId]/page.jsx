"use client";

import UIPositionForm from "@/components/ui/hr/position/UIPositionForm";
import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function positionUpdate() {
  const { data: sessionData } = useSession();
  const { id: userId = "", nameTH = "" } = sessionData?.user ?? {};

  const router = useRouter();
  const { positionId } = useParams();
  const formRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    positionDivisionId: "",
    positionDepartmentId: "",
    positionNameTH: "",
    positionNameEN: "",
    positionStatus: "",
  });
  const [divisionOptions, setDivisionOptions] = useState([]);
  const [departmentOptions, setAllDepartmentData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const [divisionRes, departmentRes] = await Promise.all([
          fetch("/api/hr/division", {
            headers: { "secret-token": SECRET_TOKEN || "" },
          }),
          fetch("/api/hr/department", {
            headers: { "secret-token": SECRET_TOKEN || "" },
          }),
        ]);
        const [divisionData, departmentData] = await Promise.all([
          divisionRes.json(),
          departmentRes.json(),
        ]);

        if (divisionRes.ok) setDivisionOptions(divisionData.division || []);
        else toast.error(divisionData.error || "Failed to load division data");

        if (departmentRes.ok)
          setAllDepartmentData(departmentData.department || []);
        else
          toast.error(departmentData.error || "Failed to load department data");
      } catch (error) {
        toast.error("Failed to fetch division or department: " + error.message);
      }
    })();
  }, []);

  const filteredDepartmentData = useMemo(() => {
    if (!formData.positionDivisionId) return [];
    return departmentOptions.filter(
      (d) =>
        String(d.departmentDivisionId) === String(formData.positionDivisionId)
    );
  }, [departmentOptions, formData.positionDivisionId]);

  useEffect(() => {
    if (!positionId) return;
    (async () => {
      try {
        const res = await fetch(`/api/hr/position/${positionId}`, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const result = await res.json();

        if (res.ok && result.position?.length) {
          setFormData(result.position[0]);
        } else {
          toast.error(result.error || "Failed to load position data.");
        }
      } catch (err) {
        toast.error(`Failed to load data: ${err.message}`);
      }
    })();
  }, [positionId]);

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
      if (!positionId || !formRef.current) return;

      const form = new FormData(formRef.current);
      form.append("positionUpdateBy", userId);

      try {
        const res = await fetch(`/api/hr/position/${positionId}`, {
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
          toast.error(result.error || "Failed to update position.");
        }
      } catch (err) {
        toast.error(`Failed to update position: ${err.message}`);
      }
    },
    [userId, positionId, router]
  );

  return (
    <>
      <Toaster position="top-right" />
      <UIPositionForm
        header="แก้ไข ตำแหน่งงาน"
        formRef={formRef}
        onSubmit={handleSubmit}
        errors={errors}
        formData={formData}
        handleInputChange={handleChange}
        operatedBy={nameTH}
        isUpdate
        divisionOptions={divisionOptions}
        departmentOptions={filteredDepartmentData}
      />
    </>
  );
}
