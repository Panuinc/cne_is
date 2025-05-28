"use client";

import UIPerReqList from "@/components/ui/hr/perReq/UIPerReqList";

import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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

  const handleExportPDF = (perReqId) => {
    if (!perReqId) {
      toast.error("ไม่พบข้อมูลใบขออัตรากำลังคน");
      return;
    }

    (async () => {
      try {
        const url = `/api/hr/perReq/perReqImages/${perReqId}`;
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

  const handleExportImages = (perReqId) => {
    if (!perReqId) {
      toast.error("ไม่พบข้อมูลรูปสมัคงาน");
      return;
    }

    (async () => {
      try {
        const url = `/api/hr/perReq/perReqImages/${perReqId}`;
        const response = await fetch(url, {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        if (!response.ok) {
          throw new Error("ไม่สามารถสร้างรูปภาพได้");
        }

        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = `perReq_${perReqId}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(imageUrl);
      } catch (error) {
        toast.error(error.message || "เกิดข้อผิดพลาดในการดาวน์โหลดรูปภาพ");
      }
    })();
  };

  const handleExportAllImages = () => {
  const approvedList = perReqDataList.filter(item => item.perReqStatus === "ApprovedSuccess");
  if (approvedList.length === 0) {
    toast.error("ไม่มีรายการที่อนุมัติแล้วสำหรับส่งออกรูปภาพ");
    return;
  }

  approvedList.forEach(item => {
    handleExportImages(item.perReqId);
  });
};

  return (
    <>
      <Toaster position="top-right" />
      <UIPerReqList
        header="ขออัตรากำลังคน"
        data={perReqDataList}
        error={errorMessage}
        onExportPDF={handleExportPDF}
        onExportImages={handleExportImages}
        onExportImagesAll={handleExportAllImages}
      />
    </>
  );
}
