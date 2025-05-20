"use client";

import UIOrganize from "@/components/ui/organize/UIOrganize";
import React, { useEffect, useState } from "react";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function Organize() {
  const [divisions, setDivisions] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [divRes, depRes] = await Promise.all([
          fetch("/api/hr/division", {
            headers: { "secret-token": SECRET_TOKEN || "" },
          }),
          fetch("/api/hr/department", {
            headers: { "secret-token": SECRET_TOKEN || "" },
          }),
        ]);

        const [divData, depData] = await Promise.all([
          divRes.json(),
          depRes.json(),
        ]);

        if (divRes.ok && depRes.ok) {
          const activeDivisions = (divData.division || []).filter(
            (division) => division.divisionStatus === "Active"
          );
          const activeDepartments = (depData.department || []).filter(
            (department) => department.departmentStatus === "Active"
          );

          setDivisions(activeDivisions);
          setDepartments(activeDepartments);
        }
      } catch (err) {
        console.error("Error loading organization data:", err);
      }
    };

    fetchData();
  }, []);

  return <UIOrganize divisions={divisions} departments={departments} />;
}
