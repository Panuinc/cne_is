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
import { useRouter, useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function perReqUpdate() {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const { perReqId } = useParams();

  const {
    id: userId = "",
    roleName,
    divisionName,
    nameTH = "",
  } = sessionData?.user ?? {};

  const formRef = useRef(null);
  const actionRef = useRef("save");

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
    perReqComputerSkills: [],
    perReqComputerSkillIsOther: "",
    perReqLanguageSkills: [],
    perReqDrivingLicenses: [],
    perReqProfessionalLicenses: [],
    perReqStatus: "",
  });

  const [divisionOptions, setDivisionOptions] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [positionOptions, setPositionOptions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const [divRes, depRes, posRes] = await Promise.all([
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
        const [divData, depData, posData] = await Promise.all([
          divRes.json(),
          depRes.json(),
          posRes.json(),
        ]);
        if (divRes.ok) setDivisionOptions(divData.division || []);
        if (depRes.ok) setDepartmentOptions(depData.department || []);
        if (posRes.ok) setPositionOptions(posData.position || []);
      } catch (err) {
        toast.error("Failed to load option list: " + err.message);
      }
    })();
  }, []);

  useEffect(() => {
    if (!perReqId) return;
    (async () => {
      try {
        const res = await fetch(`/api/hr/perReq/${perReqId}`, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Load error");
        const data = json.perReq[0];

        const skills = data.perReqComputerSkills || [];
        const defaults = [
          "MicrosoftOffice",
          "MicrosoftProject",
          "Revit",
          "Autocad",
          "Sketchup",
          "Solidwork",
          "Canva",
          "Adobe",
          "BPluse",
        ];
        const others = skills.filter(
          (s) => s !== "Other" && !defaults.includes(s)
        );

        setFormData({
          ...data,
          perReqComputerSkillIsOther: skills.includes("Other")
            ? others.join(", ")
            : "",
        });
      } catch (err) {
        toast.error(err.message);
      }
    })();
  }, [perReqId]);

  const allowApprove = useMemo(() => {
    const isMgr =
      roleName === "ผู้จัดการฝ่าย" &&
      divisionName === formData?.PerReqDivisionId?.divisionName;
    const isHrMgr = roleName === "ผู้จัดการฝ่าย" && divisionName === "บุคคล";
    return (
      (formData.perReqStatus === "PendingManagerApprove" && isMgr) ||
      (formData.perReqStatus === "PendingHrApprove" && isHrMgr)
    );
  }, [roleName, divisionName, formData]);

  const isParentApprover = useMemo(() => {
    const parentId =
      formData?.PerReqCreateBy?.empEmpEmployment?.[0]?.empEmploymentParentId;
    return Number(userId) === Number(parentId);
  }, [userId, formData]);

  const filteredDept = useMemo(
    () =>
      departmentOptions.filter(
        (d) =>
          Number(d.departmentDivisionId) === Number(formData.perReqDivisionId)
      ),
    [departmentOptions, formData.perReqDivisionId]
  );

  const filteredPos = useMemo(() => {
    const divId = Number(formData.perReqDivisionId);
    const depId = Number(formData.perReqDepartmentId);
    return positionOptions.filter(
      (p) =>
        Number(p.positionDivisionId) === divId &&
        (!depId || Number(p.positionDepartmentId) === depId)
    );
  }, [positionOptions, formData.perReqDivisionId, formData.perReqDepartmentId]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!formRef.current) return;

      const form = new FormData(formRef.current);

      // Merge Other skills into perReqComputerSkills
      const otherSkillsRaw = formData.perReqComputerSkillIsOther || "";
      const otherSkills = otherSkillsRaw
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== "");

      let computerSkills = formData.perReqComputerSkills || [];
      if (computerSkills.includes("Other")) {
        computerSkills = computerSkills.filter((s) => s !== "Other");
        computerSkills = [...computerSkills, ...otherSkills, "Other"];
      }

      form.append("perReqComputerSkills", JSON.stringify(computerSkills));
      form.append(
        "perReqLanguageSkills",
        JSON.stringify(formData.perReqLanguageSkills || [])
      );
      form.append(
        "perReqDrivingLicenses",
        JSON.stringify(formData.perReqDrivingLicenses || [])
      );
      form.append(
        "perReqProfessionalLicenses",
        JSON.stringify(formData.perReqProfessionalLicenses || [])
      );

      if (actionRef.current === "save") {
        form.append("perReqUpdateBy", userId);
        form.append("perReqStatus", formData.perReqStatus);
      }

      if (actionRef.current === "approve") {
        form.append("perReqUpdateBy", userId);
        if (formData.perReqStatus === "PendingManagerApprove") {
          form.append("perReqStatus", "PendingHrApprove");
          form.append("perReqReasonManagerApproveBy", userId);
        } else if (formData.perReqStatus === "PendingHrApprove") {
          form.append("perReqStatus", "ApprovedSuccess");
          form.append("perReqReasonHrApproveBy", userId);
        }
      }

      if (actionRef.current === "reject") {
        form.append("perReqUpdateBy", userId);
        form.append("perReqStatus", "Cancel");
        if (formData.perReqStatus === "PendingManagerApprove") {
          form.append("perReqReasonManagerApproveBy", userId);
        } else {
          form.append("perReqReasonHrApproveBy", userId);
        }
      }

      if (actionRef.current === "cancel") {
        form.append("perReqUpdateBy", userId);
        form.append("perReqStatus", "Cancel");
      }

      try {
        const res = await fetch(`/api/hr/perReq/${perReqId}`, {
          method: "PUT",
          body: form,
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const json = await res.json();

        if (!res.ok) {
          if (json.details) {
            const errObj = Object.fromEntries(
              json.details.map((d) => [d.field?.[0], d.message])
            );
            setErrors(errObj);
          }
          throw new Error(json.error || "Update failed");
        }

        toast.success(json.message);
        setTimeout(() => router.push("/perReq"), 1500);
      } catch (err) {
        toast.error(err.message);
      } finally {
        actionRef.current = "save";
      }
    },
    [perReqId, userId, formData, router]
  );

  return (
    <>
      <Toaster position="top-right" />
      <UIPerReqForm
        header="แก้ไข / อนุมัติ ใบขออัตรากำลังคน"
        formRef={formRef}
        actionRef={actionRef}
        onSubmit={handleSubmit}
        errors={errors}
        formData={formData}
        setFormData={setFormData}
        handleInputChange={(field) => (e) =>
          setFormData((prev) => ({ ...prev, [field]: e.target.value })) &
          setErrors((er) => {
            const { [field]: removed, ...rest } = er;
            return rest;
          })}
        isUpdate
        allowApprove={allowApprove || isParentApprover}
        isReadOnly={isParentApprover}
        divisionOptions={divisionOptions}
        departmentOptions={filteredDept}
        positionOptions={filteredPos}
        operatedBy={nameTH}
        onApprove={() => {
          actionRef.current = "approve";
        }}
        onReject={() => {
          actionRef.current = "reject";
        }}
      />
    </>
  );
}
