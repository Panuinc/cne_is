"use client";

import UIOrganize from "@/components/ui/organize/UIOrganize";
import React, { useEffect, useState } from "react";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function Organize() {
  const [divisions, setDivisions] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [divRes, depRes, empRes] = await Promise.all([
          fetch("/api/hr/division", {
            headers: { "secret-token": SECRET_TOKEN || "" },
          }),
          fetch("/api/hr/department", {
            headers: { "secret-token": SECRET_TOKEN || "" },
          }),
          fetch("/api/hr/empMain", {
            headers: { "secret-token": SECRET_TOKEN || "" },
          }),
        ]);

        const [divData, depData, empData] = await Promise.all([
          divRes.json(),
          depRes.json(),
          empRes.json(),
        ]);

        if (divRes.ok && depRes.ok && empRes.ok) {
          const activeDivisions = (divData.division || []).filter(
            (division) => division.divisionStatus === "Active"
          );
          const activeDepartments = (depData.department || []).filter(
            (department) => department.departmentStatus === "Active"
          );
          const activeEmployees = (empData.emp  || []).filter(
            (employee) => employee.empStatus === "Active"
          );

          setDivisions(activeDivisions);
          setDepartments(activeDepartments);
          setEmployees(activeEmployees);
        }
      } catch (err) {
        console.error("Error loading organization data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <UIOrganize
      divisions={divisions}
      departments={departments}
      employees={employees}
    />
  );
}
