"use client";

import UIPerReqList from "@/components/ui/hr/perReq/UIPerReqList";

import React, { useEffect, useState } from "react";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function PerReqList() {
  const [perReqDataList, setPerReqDataList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const perReqResponse = await fetch("/api/hr/perReq", {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        const perReqJsonData = await perReqResponse.json();

        if (!perReqResponse.ok) {
          throw new Error(perReqJsonData.error || "Failed to load perReq data");
        }

        setPerReqDataList(perReqJsonData.perReq || []);
      } catch (errorObject) {
        setErrorMessage(errorObject.message || "Failed to load data");
      }
    })();
  }, []);

  const handleExportPDF = (posJobDesId) => {
    if (!posJobDesId) {
      toast.error("ไม่พบข้อมูลใบกำหนดลักษณะงาน");
      return;
    }

    (async () => {
      try {
        const url = `/api/hr/posJobDes/posJobDesPDF/${posJobDesId}`;
        const response = await fetch(url, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        if (!response.ok) {
          throw new Error("ไม่สามารถสร้าง PDF ได้");
        }

        const blob = await response.blob();
        const pdfUrl = URL.createObjectURL(blob);
        window.open(pdfUrl, "_blank");
      } catch (error) {
        toast.error(error.message || "เกิดข้อผิดพลาดในการส่งออก PDF");
      }
    })();
  };

  return (
    <UIPerReqList
      header="ขออัตรากำลังคน"
      data={perReqDataList}
      error={errorMessage}
      onExportPDF={handleExportPDF}
    />
  );
}
