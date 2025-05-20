"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import UIEmpView from "@/components/ui/hr/empView/UIEmpView";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function EmpView() {
  const { data: sessionData } = useSession();
  const { id: userId = "", nameTH = "" } = sessionData?.user ?? {};
  const { empId } = useParams();

  const [formData, setFormData] = useState({});

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
          const msg = result.error || "Failed to load emp data.";
          toast.error(msg);
        }
      } catch (err) {
        toast.error(`Failed to load data: ${err.message}`);
      }
    })();
  }, [empId]);

  const exportPdf = useCallback(
    async (lang) => {
      const empCvId = formData?.empEmpCv?.[0]?.empCvId;
      if (!empCvId) return toast.error("ไม่พบ empCvId");

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
    [formData]
  );

  return (
    <>
      <Toaster position="top-right" />
      <UIEmpView
        header="รายละเอียดพนักงาน"
        formData={formData}
        operatedBy={nameTH}
        exportPdf={exportPdf}
      />
    </>
  );
}
