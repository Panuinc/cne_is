"use client";

import React, { useEffect, useState } from "react";
import UIPositionList from "@/components/ui/hr/position/UIPositionList";
import toast, { Toaster } from "react-hot-toast";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function PositionList() {
  const [positionDataList, setPositionDataList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const positionResponse = await fetch("/api/hr/position", {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        const positionJsonData = await positionResponse.json();

        if (!positionResponse.ok) {
          throw new Error(
            positionJsonData.error || "Failed to load position data"
          );
        }

        setPositionDataList(positionJsonData.position || []);
      } catch (errorObject) {
        setErrorMessage(errorObject.message || "Failed to load data");
      }
    })();
  }, []);

  const handleExportPDF = async (posJobDesId) => {
    if (!posJobDesId) {
      toast.error("ไม่พบข้อมูลใบกำหนดลักษณะงาน");
      return;
    }

    try {
      const url = `/api/hr/posJobDes/posJobDesPDF/${posJobDesId}`;
      const response = await fetch(url, {
        headers: { "secret-token": SECRET_TOKEN || "" },
      });

      if (!response.ok) throw new Error("ไม่สามารถสร้าง PDF ได้");

      const blob = await response.blob();
      const pdfUrl = URL.createObjectURL(blob);
      window.open(pdfUrl, "_blank");
    } catch (error) {
      toast.error(error.message || "เกิดข้อผิดพลาดในการส่งออก PDF");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <UIPositionList
        header="ตำแหน่งงาน"
        data={positionDataList}
        error={errorMessage}
        onExportPDF={handleExportPDF}
      />
    </>
  );
}
