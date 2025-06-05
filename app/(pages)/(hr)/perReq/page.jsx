"use client";

import UIPerReqList from "@/components/ui/hr/perReq/UIPerReqList";

import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import JSZip from "jszip";

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
      toast.error("ไม่พบข้อมูลรูปสมัครงาน");
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

  const handleExportAllImagesAsAlbum = async () => {
    const approvedList = perReqDataList.filter(
      (item) => item.perReqStatus === "ApprovedSuccess"
    );

    if (approvedList.length === 0) {
      toast.error("ไม่มีรายการที่อนุมัติแล้วสำหรับสร้างอัลบั้ม");
      return;
    }

    try {
      const zip = new JSZip();

      const frontPageResp = await fetch("/perReqImages/frontPage.jpg");
      const frontBlob = await frontPageResp.blob();
      zip.file("frontPage.jpg", frontBlob);

      for (const item of approvedList) {
        const perReqId = item.perReqId;
        const imageResp = await fetch(
          `/api/hr/perReq/perReqImages/${perReqId}`,
          {
            headers: { "secret-token": SECRET_TOKEN || "" },
          }
        );

        if (imageResp.ok) {
          const imageBlob = await imageResp.blob();
          zip.file(`perReq_${perReqId}.png`, imageBlob);
        } else {
          console.warn(`รูปภาพของ perReqId ${perReqId} ไม่สามารถโหลดได้`);
        }
      }

      const backPageResp = await fetch("/perReqImages/backPage.jpg");
      const backBlob = await backPageResp.blob();
      zip.file("backPage.jpg", backBlob);

      const zipBlob = await zip.generateAsync({ type: "blob" });
      const zipUrl = URL.createObjectURL(zipBlob);

      const link = document.createElement("a");
      link.href = zipUrl;
      link.download = "perReqAlbum.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(zipUrl);
    } catch (error) {
      console.error("Error exporting album:", error);
      toast.error("เกิดข้อผิดพลาดในการสร้างอัลบั้ม");
    }
  };

  const handleGenerateRecruitLink = async (perReqId) => {
    if (!perReqId) {
      toast.error("ไม่พบ ID ของเอกสารขออัตรากำลังคน");
      return;
    }

    try {
      const res = await fetch(`/api/hr/recruit/link/${perReqId}`, {
        headers: { "secret-token": SECRET_TOKEN || "" },
      });

      const json = await res.json();

      if (!res.ok || !json?.url) {
        throw new Error(json?.error || "ไม่สามารถสร้างลิงก์สมัครงานได้");
      }

      await navigator.clipboard.writeText(json.url);
      toast.success("ลิงก์สมัครงานใหม่ถูกคัดลอกแล้ว: " + json.url);
    } catch (err) {
      toast.error(err.message || "เกิดข้อผิดพลาดในการสร้างลิงก์");
    }
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
        onExportImagesAll={handleExportAllImagesAsAlbum}
        onGenerateRecruitLink={handleGenerateRecruitLink}
      />
    </>
  );
}
