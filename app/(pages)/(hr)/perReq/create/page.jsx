"use client";

import UIPerReqForm from "@/components/ui/hr/perReq/UIPerReqForm";

import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function perReqCreate() {
  const { data: sessionData } = useSession();
  const {
    id: userId = "",
    nameTH = "",
    signature = "",
  } = sessionData?.user ?? {};

  const router = useRouter();
  const formRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    perReqDesiredDate: "",
    perReqDivisionId: "",
    perReqDepartmentId: "",
    perReqPositionId: "",
    perReqAmount: "",
    perReqEmpEmploymentType: "",
    perReqEmpEmploymentTypeNote: "",
    perReqReasonForRequest: "",
    perReqReasonForRequestNote: "",
    perReqReasonAge: "",
    perReqReasonGender: "",
    perReqReasonEducation: "",
    perReqReasonEducationNote: "",
    perReqReasonExperience: "",
  });

  const [divisionOptions, setDivisionOptions] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [positionOptions, setPositionOptions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const [divisionRes, departmentRes, positionRes] = await Promise.all([
          fetch("/api/hr/division", {
            headers: { "secret-token": SECRET_TOKEN || "" },
          }),
          fetch("/api/hr/department", {
            headers: { "secret-token": SECRET_TOKEN || "" },
          }),
          fetch("/api/hr/position", {
            headers: { "secret-token": SECRET_TOKEN || "" },
          }),
        ]);

        const [divisionData, departmentData, positionData] = await Promise.all([
          divisionRes.json(),
          departmentRes.json(),
          positionRes.json(),
        ]);

        if (divisionRes.ok) setDivisionOptions(divisionData.division || []);
        else toast.error(divisionData.error || "Failed to load division data");

        if (departmentRes.ok)
          setDepartmentOptions(departmentData.department || []);
        else
          toast.error(departmentData.error || "Failed to load department data");

        if (positionRes.ok) setPositionOptions(positionData.position || []);
        else toast.error(positionData.error || "Failed to load position data");
      } catch (error) {
        toast.error(
          "Failed to fetch division or department or position: " + error.message
        );
      }
    })();
  }, []);

  const filteredDepartmentData = useMemo(() => {
    if (!formData.perReqDivisionId) return [];
    return departmentOptions.filter(
      (dept) =>
        Number(dept.departmentDivisionId) === Number(formData.perReqDivisionId)
    );
  }, [departmentOptions, formData.perReqDivisionId]);

  const filteredPositionData = useMemo(() => {
    const divId = Number(formData.perReqDivisionId);
    const deptId = Number(formData.perReqDepartmentId);
    if (!divId) return [];
    return positionOptions.filter(
      (pos) =>
        Number(pos.positionDivisionId) === divId &&
        (!deptId || Number(pos.positionDepartmentId) === deptId)
    );
  }, [positionOptions, formData.perReqDivisionId, formData.perReqDepartmentId]);

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
      form.append("perReqCreateBy", userId);

      try {
        const res = await fetch("/api/hr/perReq", {
          method: "POST",
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
          toast.error(result.error || "Failed to create perReq.");
        }
      } catch (err) {
        toast.error(`Failed to create perReq: ${err.message}`);
      }
    },
    [userId, router]
  );

  return (
    <>
      <Toaster position="top-right" />
      <UIPerReqForm
        header="เพิ่ม ขออัตรากำลังคน"
        formRef={formRef}
        onSubmit={handleSubmit}
        errors={errors}
        formData={formData}
        handleInputChange={handleChange}
        divisionOptions={divisionOptions}
        departmentOptions={filteredDepartmentData}
        positionOptions={filteredPositionData}
        operatedBy={nameTH}
        signature={signature}
      />
    </>
  );
}
