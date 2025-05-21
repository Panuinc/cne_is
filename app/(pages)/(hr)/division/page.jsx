"use client";

import UIDivisionList from "@/components/ui/hr/division/UIDivisionList";

import React, { useEffect, useState } from "react";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function DivisionList() {
  const [divisionDataList, setDivisionDataList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const divisionResponse = await fetch("/api/hr/division", {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        const divisionJsonData = await divisionResponse.json();

        if (!divisionResponse.ok) {
          throw new Error(divisionJsonData.error || "Failed to load division data");
        }

        setDivisionDataList(divisionJsonData.division || []);
      } catch (errorObject) {
        setErrorMessage(errorObject.message || "Failed to load data");
      }
    })();
  }, []);

  return (
    <UIDivisionList
      header="ฝ่าย"
      data={divisionDataList}
      error={errorMessage}
    />
  );
}
