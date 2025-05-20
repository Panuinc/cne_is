"use client";

import React, { useMemo } from "react";
import UIHeader from "@/components/other/UIHeader";
import { Tree, TreeNode } from "react-organizational-chart";

export default function UIOrganize({
  divisions = [],
  departments = [],
  employees = [],
}) {
  const treeData = useMemo(() => {
    return {
      name: "CHANNAKORN ENGINEER",
      type: "Company",
      children: divisions.map((division) => ({
        name: division.divisionName,
        type: "ฝ่าย",
        children: departments
          .filter((dept) => dept.departmentDivisionId === division.divisionId)
          .map((dept) => ({
            name: dept.departmentName,
            type: "แผนก",
          })),
      })),
    };
  }, [divisions, departments]);

  const renderNode = (node) => (
    <TreeNode
      label={
        <div className="rounded-xl bg-white border-2 border-default p-4 shadow-md text-sm text-center">
          <div className="font-semibold">{node.name}</div>
          <div className="text-xs text-gray-500">{node.type}</div>
        </div>
      }
    >
      {node.children?.map((child, idx) => (
        <React.Fragment key={idx}>{renderNode(child)}</React.Fragment>
      ))}
    </TreeNode>
  );

  return (
    <>
      <UIHeader Header="Organize" />
      <div className="flex flex-col items-center justify-start w-full h-full p-4 gap-4 bg-white overflow-auto">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full min-h-60 p-2 gap-4 bg-white">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
            <div className="text-lg font-semibold">STRUCTURE</div>
            <div>CHANNAKORN ENGINEER</div>
            <div>COMPANY</div>
          </div>
          <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-4">
            <StatBox label="จำนวนพนักงาน" value={employees.length} />
            <StatBox label="จำนวนฝ่าย" value={divisions.length} />
            <StatBox label="จำนวนแผนก" value={departments.length} />
          </div>
        </div>

        <div className="w-full overflow-auto min-h-[600px]">
          <Tree
            lineWidth={"2px"}
            lineColor={"#000000"}
            lineBorderRadius={"10px"}
            label={
              <div className="rounded-xl bg-white border-2 border-default p-4 shadow-md text-sm text-center">
                <div className="font-semibold">{treeData.name}</div>
                <div className="text-xs text-gray-500">{treeData.type}</div>
              </div>
            }
          >
            {treeData.children.map((division, i) => (
              <React.Fragment key={i}>{renderNode(division)}</React.Fragment>
            ))}
          </Tree>
        </div>
      </div>
    </>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-white border-2 border-default shadow-md rounded-xl">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="text-lg font-bold">{value}</div>
    </div>
  );
}
