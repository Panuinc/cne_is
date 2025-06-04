"use client";

import UIRecruitList from "@/components/ui/hr/recruit/UIRecruitList";

import React, { useEffect, useState } from "react";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function RecruitList() {
  const [recruitDataList, setRecruitDataList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const recruitResponse = await fetch("/api/hr/recruit", {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        const recruitJsonData = await recruitResponse.json();

        if (!recruitResponse.ok) {
          throw new Error(recruitJsonData.error || "Failed to load recruit data");
        }

        setRecruitDataList(recruitJsonData.recruit || []);
      } catch (errorObject) {
        setErrorMessage(errorObject.message || "Failed to load data");
      }
    })();
  }, []);

  return (
    <UIRecruitList
      header="ใบสมัคงาน"
      data={recruitDataList}
      error={errorMessage}
    />
  );
}
