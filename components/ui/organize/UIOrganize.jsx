"use client";

import React, { useMemo } from "react";
import UIHeader from "@/components/other/UIHeader";
import { Tree, TreeNode } from "react-organizational-chart";

function StatBox({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-evenly w-full h-full p-4 bg-primary text-white rounded-xl">
      <div className="font-[600]">{label}</div>
      <div className="text-xl font-[600]">{value}</div>
    </div>
  );
}

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
          <div className="font-[600]">{node.name}</div>
          <div className="text-xs text-dark/50">{node.type}</div>
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
      <UIHeader Header="แผนผังองค์กร" />
      <div className="flex flex-col items-center justify-start w-full h-full p-4 gap-4 bg-white overflow-auto">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full min-h-60 p-2 gap-4 bg-white">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
            <div className="text-xl font-[600]">STRUCTURE</div>
            <div className="text-lg font-[600]">CHANNAKORN ENGINEER</div>
            <div className="text-md font-[600]">COMPANY</div>
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
            lineColor={"#00000050"}
            lineBorderRadius={"10px"}
            label={
              <div className="p-4 shadow-md text-sm text-center bg-white border-2 border-default rounded-xl">
                <div className="font-[600]">{treeData.name}</div>
                <div className="text-xs text-dark/50">{treeData.type}</div>
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
