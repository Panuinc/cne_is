"use client";

import UIEmpCvForm from "@/components/ui/hr/empCv/UIEmpCvForm";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function EmpCvUpdate() {
  const { data: sessionData } = useSession();
  const { id: userId = "", nameTH = "" } = sessionData?.user ?? {};

  const router = useRouter();
  const { empCvId } = useParams() || {};
  const formRef = useRef(null);

  const [errorMessages, setErrorMessages] = useState({});
  const [empCvFormData, setEmpCvFormData] = useState({
    empCvName: "",
    empCvStatus: "",
    empCvEducations: [],
    empCvLicenses: [],
    empCvWorkHistories: [],
    empCvLanguageSkills: [],
  });

  useEffect(() => {
    if (!empCvId) return;
    (async () => {
      try {
        const res = await fetch(`/api/hr/empCv/${empCvId}`, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const json = await res.json();
        if (res.ok && json.empCv?.length) {
          const cv = json.empCv[0];
          setEmpCvFormData({
            empCvName: cv.empCvName || "",
            empCvStatus: cv.empCvStatus || "",
            empCvEducations: cv.empCvEducation ?? [],
            empCvLicenses: cv.empCvLicense ?? [],
            empCvWorkHistories:
              (cv.empCvWorkHistory || []).map((wh) => ({
                ...wh,
                empCvProjects: wh.empCvProjects ?? [],
              })) ?? [],
            empCvLanguageSkills: cv.empCvLanguageSkill ?? [],
          });
        } else {
          toast.error(json.error || "Error fetching CV data");
        }
      } catch (err) {
        toast.error("Error fetching CV data: " + err.message);
      }
    })();
  }, [empCvId]);

  const handleChange = useCallback(
    (section, index, field) => (e) => {
      setEmpCvFormData((prev) => {
        const list = [...prev[section]];
        list[index] = { ...list[index], [field]: e.target.value };
        return { ...prev, [section]: list };
      });
      setErrorMessages((prev) => {
        const key = `${section}[${index}].${field}`;
        const { [key]: _, ...rest } = prev;
        return rest;
      });
    },
    []
  );

  const handleProjectFieldChange = useCallback(
    (whIndex, projIndex, field) => (e) => {
      setEmpCvFormData((prev) => {
        const workHistories = [...prev.empCvWorkHistories];
        const projects = [...(workHistories[whIndex].empCvProjects || [])];
        projects[projIndex] = {
          ...projects[projIndex],
          [field]: e.target.value,
        };
        workHistories[whIndex] = {
          ...workHistories[whIndex],
          empCvProjects: projects,
        };
        return { ...prev, empCvWorkHistories: workHistories };
      });
      setErrorMessages((prev) => {
        const key = `empCvWorkHistories[${whIndex}].empCvProjects[${projIndex}].${field}`;
        const { [key]: _, ...rest } = prev;
        return rest;
      });
    },
    []
  );

  const handleAddSection = useCallback(
    (section, defaultItem = {}) =>
      () => {
        setEmpCvFormData((prev) => ({
          ...prev,
          [section]: [...prev[section], defaultItem],
        }));
      },
    []
  );

  const handleRemoveSection = useCallback(
    (section, idx) => () => {
      setEmpCvFormData((prev) => ({
        ...prev,
        [section]: prev[section].filter((_, i) => i !== idx),
      }));
    },
    []
  );

  const handleAddProject = useCallback(
    (whIndex) => () => {
      setEmpCvFormData((prev) => {
        const workHistories = [...prev.empCvWorkHistories];
        const projects = [...(workHistories[whIndex].empCvProjects || [])];
        workHistories[whIndex] = {
          ...workHistories[whIndex],
          empCvProjects: [...projects, {}],
        };
        return { ...prev, empCvWorkHistories: workHistories };
      });
    },
    []
  );

  const handleRemoveProject = useCallback(
    (whIndex, projIndex) => () => {
      setEmpCvFormData((prev) => {
        const workHistories = [...prev.empCvWorkHistories];
        const projects = [...(workHistories[whIndex].empCvProjects || [])];
        projects.splice(projIndex, 1);
        workHistories[whIndex] = {
          ...workHistories[whIndex],
          empCvProjects: projects,
        };
        return { ...prev, empCvWorkHistories: workHistories };
      });
    },
    []
  );

  const exportPdf = useCallback(
    async (lang) => {
      try {
        const res = await fetch(`/api/hr/empCv/empCv${lang}PDF/${empCvId}`, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || "Failed to fetch PDF");
        }
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
        setTimeout(() => URL.revokeObjectURL(url), 60000);
      } catch (err) {
        toast.error("Error previewing PDF: " + err.message);
      }
    },
    [empCvId]
  );

  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!empCvId || !formRef.current) return;

      const fd = new FormData(formRef.current);
      fd.append("empCvUpdateBy", userId);
      [
        "empCvEducations",
        "empCvLicenses",
        "empCvWorkHistories",
        "empCvLanguageSkills",
      ].forEach((k) => fd.append(k, JSON.stringify(empCvFormData[k] || [])));

      try {
        const res = await fetch(`/api/hr/empCv/${empCvId}`, {
          method: "PUT",
          body: fd,
          headers: { "secret-token": SECRET_TOKEN || "" },
        });
        const json = await res.json();
        if (res.ok) {
          toast.success(json.message);
          setTimeout(() => router.push("/hr/emp"), 1500);
        } else {
          if (json.details) {
            const fieldErr = json.details.reduce((acc, d) => {
              const f = d.field?.[0];
              return f ? { ...acc, [f]: d.message } : acc;
            }, {});
            setErrorMessages(fieldErr);
          }
          toast.error(json.error || "Error updating CV");
        }
      } catch (err) {
        toast.error("Error updating CV: " + err.message);
      }
    },
    [empCvId, userId, empCvFormData, router]
  );

  return (
    <>
      <Toaster position="top-right" />
      <UIEmpCvForm
        header="แก้ไข เรซูเม่"
        formRef={formRef}
        onSubmit={handleFormSubmit}
        errors={errorMessages}
        formData={empCvFormData}
        handleInputChange={handleChange}
        handleProjectFieldChange={handleProjectFieldChange}
        handleAddSection={handleAddSection}
        handleRemoveSection={handleRemoveSection}
        handleAddProject={handleAddProject}
        handleRemoveProject={handleRemoveProject}
        operatedBy={nameTH}
        exportPdf={exportPdf}
      />
    </>
  );
}
