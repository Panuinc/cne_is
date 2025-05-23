"use client";

import UIPerReqList from "@/components/ui/hr/perReq/UIPerReqList";

import React, { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function perReqList() {
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

  const callUpdate = async (item, newStatus, mgrStage) => {
    const form = new FormData();
    form.append("perReqStatus", newStatus);
    if (mgrStage) form.append("perReqReasonManagerApproveBy", item.userId);
    else form.append("perReqReasonHrApproveBy", item.userId);

    try {
      const res = await fetch(`/api/hr/perReq/${item.perReqId}`, {
        method: "PUT",
        headers: { "secret-token": SECRET_TOKEN || "" },
        body: form,
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Action failed");
      }

      toast.success(json.message);

      setPerReqDataList((prev) =>
        prev.map((p) => (p.perReqId === json.perReq.perReqId ? json.perReq : p))
      );

      return { success: true, message: json.message };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  const handleApprove = useCallback((item, newStatus, userId, mgrStage) => {
    return callUpdate({ ...item, userId }, newStatus, mgrStage);
  }, []);

  const handleReject = useCallback((item, newStatus, userId, mgrStage) => {
    return callUpdate({ ...item, userId }, newStatus, mgrStage);
  }, []);

  return (
    <UIPerReqList
      header="ขออัตรากำลังคน"
      data={perReqDataList}
      error={errorMessage}
      onApprove={handleApprove}
      onReject={handleReject}
    />
  );
}
