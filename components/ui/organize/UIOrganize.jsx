"use client";

import React, { useMemo } from "react";
import UIHeader from "@/components/other/UIHeader";
import { Tree, TreeNode } from "react-organizational-chart";
import { Building, Network, Users2 } from "lucide-react";

function StatBox({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center min-w-[150px] px-4 py-6 bg-primary text-white shadow rounded-2xl">
      <div className="text-sm font-semibold">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}

export default function UIOrganize({
  divisions = [],
  departments = [],
  employees = [],
}) {
  const treeData = useMemo(
    () => ({
      name: "CHANNAKORN ENGINEER",
      type: "Company",
      children: divisions.map((division) => {
        const relatedDepartments = departments
          .filter((dept) => dept.departmentDivisionId === division.divisionId)
          .map((dept) => ({
            name: dept.departmentName,
            type: "แผนก",
            children: [],
          }));

        return {
          name: division.divisionName,
          type: "ฝ่าย",
          children: relatedDepartments.length
            ? relatedDepartments
            : [{ name: "ไม่มีแผนก", type: "แผนก", children: [] }],
        };
      }),
    }),
    [divisions, departments]
  );

  const getIcon = (type) => {
    switch (type) {
      case "Company":
        return <Building size={20} className="text-primary" />;
      case "ฝ่าย":
        return <Network size={20} className="text-yellow-600" />;
      case "แผนก":
        return <Users2 size={20} className="text-green-600" />;
      default:
        return null;
    }
  };

  const renderNode = (node) => (
    <TreeNode
      label={
        <div className="flex flex-col items-center bg-white shadow min-w-60 rounded-xl px-4 py-3 text-center text-sm">
          <div className="flex items-center gap-2 text-lg font-bold text-gray-700">
            {getIcon(node.type)}
            {node.name}
          </div>
          <div className="text-xs text-gray-500">{node.type}</div>
        </div>
      }
    >
      {(node.children || []).map((child, idx) => (
        <React.Fragment key={idx}>{renderNode(child)}</React.Fragment>
      ))}
    </TreeNode>
  );

  return (
    <>
      <UIHeader Header="แผนผังองค์กร" />
      <div className="flex flex-col items-center justify-start w-full min-h-screen p-4 bg-default gap-6">
        {/* Header Card */}
        <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-center justify-between p-6 gap-6 bg-white shadow rounded-3xl">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="text-lg font-bold text-gray-800">STRUCTURE</div>
            <div className="text-2xl font-bold text-primary">
              CHANNAKORN ENGINEER
            </div>
            <div className="text-sm text-gray-500">COMPANY</div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <StatBox label="จำนวนพนักงาน" value={employees.length} />
            <StatBox label="จำนวนฝ่าย" value={divisions.length} />
            <StatBox label="จำนวนแผนก" value={departments.length} />
          </div>
        </div>

        {/* Org Chart */}
        <div className="w-full overflow-auto pb-8">
          <Tree
            lineWidth="2px"
            lineColor="#00000030"
            lineBorderRadius="10px"
            label={
              <div className="flex flex-col items-center bg-white shadow rounded-xl px-4 py-3 text-center text-sm">
                <div className="flex items-center gap-2 text-lg font-bold text-gray-700">
                  <Building size={20} className="text-primary" />
                  {treeData.name}
                </div>
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
