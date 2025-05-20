"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

import UIEmpEmploymentForm from "@/components/ui/hr/empEmployment/UIEmpEmploymentForm";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function EmpEmploymentUpdate() {
  const { data: sessionData } = useSession();
  const { id: userId = "", nameTH = "" } = sessionData?.user ?? {};

  const router = useRouter();
  const { empEmploymentId } = useParams();
  const formRef = useRef(null);
  const signatureRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    empEmploymentNumber: "",
    empEmploymentCardNumber: "",
    empEmploymentType: "",
    empEmploymentDivisionId: "",
    empEmploymentDepartmentId: "",
    empEmploymentPositionId: "",
    empEmploymentRoleId: "",
    empEmploymentParentId: "",
    empEmploymentStartWork: "",
    empEmploymentPicture: null,
    empEmploymentSignature: null,
    empEmploymentEnterType: "",
    empEmploymentPassportNumber: "",
    empEmploymentPassportStartDate: "",
    empEmploymentPassportEndDate: "",
    empEmploymentPassportIssuedBy: "",
    empEmploymentPlaceOfBirth: "",
    empEmploymentEnterCheckPoint: "",
    empEmploymentEnterDate: "",
    empEmploymentImmigration: "",
    empEmploymentTypeOfVisa: "",
    empEmploymentVisaNumber: "",
    empEmploymentVisaIssuedBy: "",
    empEmploymentWorkPermitNumber: "",
    empEmploymentWorkPermitStartDate: "",
    empEmploymentWorkPermitEndDate: "",
    empEmploymentWorkPermitIssuedBy: "",
    empEmploymentSsoNumber: "",
    empEmploymentSsoHospital: "",
    empEmploymentWorkStatus: "",
  });

  const [previews, setPreviews] = useState({
    employmentPicture: null,
    employmentSignature: null,
  });

  const [roleOptions, setRoleOptions] = useState([]);
  const [divisionOptions, setDivisionOptions] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [positionOptions, setPositionOptions] = useState([]);
  const [parentOptions, setParentOptions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const [roleRes, divisionRes, departmentRes, positionRes, parentRes] =
          await Promise.all([
            fetch("/api/hr/role", {
              headers: { "secret-token": SECRET_TOKEN || "" },
            }),
            fetch("/api/hr/division", {
              headers: { "secret-token": SECRET_TOKEN || "" },
            }),
            fetch("/api/hr/department", {
              headers: { "secret-token": SECRET_TOKEN || "" },
            }),
            fetch("/api/hr/position", {
              headers: { "secret-token": SECRET_TOKEN || "" },
            }),
            fetch("/api/hr/empMain", {
              headers: { "secret-token": SECRET_TOKEN || "" },
            }),
          ]);

        const [
          roleData,
          divisionData,
          departmentData,
          positionData,
          parentData,
        ] = await Promise.all([
          roleRes.json(),
          divisionRes.json(),
          departmentRes.json(),
          positionRes.json(),
          parentRes.json(),
        ]);

        if (roleRes.ok) setRoleOptions(roleData.role || []);
        else toast.error(roleData.error || "Failed to load role data");

        if (divisionRes.ok) setDivisionOptions(divisionData.division || []);
        else toast.error(divisionData.error || "Failed to load division data");

        if (departmentRes.ok)
          setDepartmentOptions(departmentData.department || []);
        else
          toast.error(departmentData.error || "Failed to load department data");

        if (positionRes.ok) setPositionOptions(positionData.position || []);
        else toast.error(positionData.error || "Failed to load position data");

        if (parentRes.ok) setParentOptions(parentData.emp || []);
        else toast.error(parentData.error || "Failed to load employees");
      } catch (error) {
        toast.error(
          "Failed to fetch role or division or department or position: " +
            error.message
        );
      }
    })();
  }, []);

  useEffect(() => {
    if (!empEmploymentId) return;

    (async () => {
      try {
        const res = await fetch(`/api/hr/empEmployment/${empEmploymentId}`, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const json = await res.json();

        if (res.ok && json.empEmployment?.length) {
          const cleaned = Object.fromEntries(
            Object.entries(json.empEmployment[0]).map(([k, v]) => [k, v ?? ""])
          );

          setFormData((prev) => ({ ...prev, ...cleaned }));

          if (cleaned.empEmploymentPicture) {
            setPreviews((p) => ({
              ...p,
              employmentPicture: `/empEmployment/userPicture/${cleaned.empEmploymentPicture}`,
            }));
          }
          if (cleaned.empEmploymentSignature) {
            setPreviews((p) => ({
              ...p,
              employmentSignature: `/empEmployment/signature/${cleaned.empEmploymentSignature}`,
            }));
          }
        } else {
          toast.error(json.error || "Failed to load empEmployment data.");
        }
      } catch (err) {
        console.error(err);
        toast.error("Error fetching empEmployment data: " + err.message);
      }
    })();
  }, [empEmploymentId]);

  const filteredDepartmentData = useMemo(() => {
    if (!formData.empEmploymentDivisionId) return [];
    return departmentOptions.filter(
      (dept) =>
        Number(dept.departmentDivisionId) ===
        Number(formData.empEmploymentDivisionId)
    );
  }, [departmentOptions, formData.empEmploymentDivisionId]);

  const filteredPositionData = useMemo(() => {
    const divId = Number(formData.empEmploymentDivisionId);
    const deptId = Number(formData.empEmploymentDepartmentId);
    if (!divId) return [];
    return positionOptions.filter(
      (pos) =>
        Number(pos.positionDivisionId) === divId &&
        (!deptId || Number(pos.positionDepartmentId) === deptId)
    );
  }, [
    positionOptions,
    formData.empEmploymentDivisionId,
    formData.empEmploymentDepartmentId,
  ]);

  const filteredParentData = useMemo(() => {
    if (!formData.empEmploymentDivisionId) return [];
    const divisionId = Number(formData.empEmploymentDivisionId);
    const validRoles = [
      "ผู้ดูแลระบบ",
      "กรรมการผู้จัดการ",
      "ผู้อำนวยการ",
      "ผู้จัดการฝ่าย",
      "ผู้ช่วยผู้จัดการฝ่าย",
    ];
    return parentOptions.filter((emp) => {
      const empInfo = emp.empEmpEmployment?.[0];
      return (
        empInfo &&
        Number(empInfo.empEmploymentDivisionId) === divisionId &&
        validRoles.includes(empInfo.EmpEmploymentRoleId?.roleName)
      );
    });
  }, [parentOptions, formData.empEmploymentDivisionId]);

  const handleChange = useCallback(
    (field) => (e) => {
      const isFileInput = e.target.type === "file" || !!e.target.files;
      const value = isFileInput ? e.target.files?.[0] ?? null : e.target.value;

      setFormData((prev) => ({ ...prev, [field]: value }));

      if (isFileInput && value) {
        setPreviews((p) => ({
          ...p,
          [field === "empEmploymentPicture"
            ? "employmentPicture"
            : "employmentSignature"]: URL.createObjectURL(value),
        }));
      }

      setErrors((prev) => {
        if (prev[field]) {
          const { [field]: _removed, ...rest } = prev;
          return rest;
        }
        return prev;
      });
    },
    []
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!empEmploymentId || !formRef.current) return;

      const submitForm = new FormData(formRef.current);
      submitForm.set("empEmploymentUpdateBy", userId);

      if (formData.empEmploymentPicture instanceof File) {
        submitForm.set("empEmploymentPicture", formData.empEmploymentPicture);
      }
      if (formData.empEmploymentSignature instanceof File) {
        submitForm.set(
          "empEmploymentSignature",
          formData.empEmploymentSignature,
          "signature.png"
        );
      }

      try {
        const res = await fetch(`/api/hr/empEmployment/${empEmploymentId}`, {
          method: "PUT",
          body: submitForm,
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const result = await res.json();

        if (res.ok) {
          toast.success(result.message);
          setTimeout(() => router.push("/emp"), 1500);
        } else {
          if (result.details) {
            const fieldErrors = result.details.reduce((acc, d) => {
              const key = d.field?.[0];
              if (key) acc[key] = d.message;
              return acc;
            }, {});
            setErrors(fieldErrors);
          }
          toast.error(result.error || "Failed to update empEmployment.");
        }
      } catch (err) {
        toast.error("Failed to update empEmployment: " + err.message);
      }
    },
    [userId, empEmploymentId, router, formData]
  );

  return (
    <>
      <Toaster position="top-right" />
      <UIEmpEmploymentForm
        header="แก้ไข การจ้างงานพนักงาน"
        formRef={formRef}
        onSubmit={handleSubmit}
        errors={errors}
        setErrors={setErrors}
        formData={formData}
        handleInputChange={handleChange}
        roleOptions={roleOptions}
        divisionOptions={divisionOptions}
        departmentOptions={filteredDepartmentData}
        positionOptions={filteredPositionData}
        parentOptions={filteredParentData}
        operatedBy={nameTH}
        isUpdate
        previews={previews}
        signatureRef={signatureRef}
      />
    </>
  );
}
