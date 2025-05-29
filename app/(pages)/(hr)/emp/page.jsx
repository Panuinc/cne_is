"use client";

import UIEmpList from "@/components/ui/hr/emp/UIEmpList";

import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function EmpList() {
  const [empDataList, setEmpDataList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const empResponse = await fetch("/api/hr/empMain", {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        const empJsonData = await empResponse.json();

        if (!empResponse.ok) {
          throw new Error(empJsonData.error || "Failed to load emp data");
        }

        setEmpDataList(empJsonData.emp || []);
      } catch (errorObject) {
        setErrorMessage(errorObject.message || "Failed to load data");
      }
    })();
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <UIEmpList header="พนักงาน" data={empDataList} error={errorMessage} />
    </>
  );
}
