"use client";

import UIAccount from "@/components/ui/account/UIAccount";

import React, { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function Account() {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  const userId = session?.user?.id || "";
  const nameTH = session?.user?.nameTH || "-";

  const fetchData = useCallback(async () => {
    if (!userId) return;

    try {
      const res = await fetch(`/api/hr/empMain/${userId}`, {
        headers: { "secret-token": SECRET_TOKEN || "" },
      });

      const result = await res.json();

      if (res.ok && result.emp?.length) {
        setFormData(result.emp[0]);
      } else {
        toast.error(result.error || "ไม่พบข้อมูลพนักงาน");
      }
    } catch (err) {
      toast.error(`โหลดข้อมูลล้มเหลว: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    if (status === "authenticated") {
      fetchData();
    }
  }, [status, fetchData]);

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
      <UIAccount
        header="โปรไฟล์ของฉัน"
        formData={formData}
        operatedBy={nameTH}
        exportPdf={exportPdf}
      />
    </>
  );
}
