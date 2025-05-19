"use client";

import React, { useEffect, useState } from "react";
import UIDepartmentList from "@/components/ui/hr/department/UIDepartmentList";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function DepartmentList() {
  const [departmentDataList, setDepartmentDataList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const departmentResponse = await fetch("/api/hr/department", {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        const departmentJsonData = await departmentResponse.json();

        if (!departmentResponse.ok) {
          throw new Error(departmentJsonData.error || "Failed to load department data");
        }

        setDepartmentDataList(departmentJsonData.department || []);
      } catch (errorObject) {
        setErrorMessage(errorObject.message || "Failed to load data");
      }
    })();
  }, []);

  return (
    <UIDepartmentList
      header="แผนก"
      data={departmentDataList}
      error={errorMessage}
    />
  );
}
