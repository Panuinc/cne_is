"use client";

import React, { useEffect, useState } from "react";
import UIRoleList from "@/components/ui/hr/role/UIRoleList";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function RoleList() {
  const [roleDataList, setRoleDataList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const roleResponse = await fetch("/api/hr/role", {
          headers: { "secret-token": SECRET_TOKEN || "" },
        });

        const roleJsonData = await roleResponse.json();

        if (!roleResponse.ok) {
          throw new Error(roleJsonData.error || "Failed to load role data");
        }

        setRoleDataList(roleJsonData.role || []);
      } catch (errorObject) {
        setErrorMessage(errorObject.message || "Failed to load data");
      }
    })();
  }, []);

  return (
    <UIRoleList
      header="ระดับตำแหน่ง"
      data={roleDataList}
      error={errorMessage}
    />
  );
}
