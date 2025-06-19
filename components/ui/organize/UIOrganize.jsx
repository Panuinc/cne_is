"use client";

import React, { useMemo } from "react";
import UIHeader from "@/components/other/UIHeader";
import { Tree, TreeNode } from "react-organizational-chart";
import { Building, Network, Users2, User } from "lucide-react";

const StatBox = ({ label, value }) => (
  <div className="flex flex-col items-center justify-center w-32 h-32 px-4 py-6 bg-primary text-white shadow rounded-full">
    <div className="text-sm font-semibold">{label}</div>
    <div className="text-2xl font-bold">{value}</div>
  </div>
);

const getIcon = (type) => {
  switch (type) {
    case "Company":
      return <Building size={20} className="text-primary" />;
    case "ฝ่าย":
      return <Network size={20} className="text-warning" />;
    case "แผนก":
      return <Users2 size={20} className="text-success" />;
    case "ตำแหน่ง":
      return <User size={18} className="text-info" />;
    default:
      return null;
  }
};

const NodeBox = ({ name, type }) => (
  <div className="flex flex-col items-center bg-white shadow rounded-xl px-6 py-4 text-center">
    <div className="flex flex-col items-center justify-center w-32 h-24 p-2 gap-2 text-sm">
      {getIcon(type)}
      {name}
    </div>
    <div className="text-xs text-gray-500">{type}</div>
  </div>
);

const renderVerticalChain = (positions) => {
  if (!positions || positions.length === 0) return null;
  const [first, ...rest] = positions;
  return (
    <TreeNode label={<NodeBox name={first.name} type={first.type} />}>
      {rest.length > 0 ? renderVerticalChain(rest) : null}
    </TreeNode>
  );
};

export default function UIOrganize({
  divisions = [],
  departments = [],
  employees = [],
  positions = [],
}) {
  const treeData = useMemo(() => {
    return {
      name: "CHANNAKORN ENGINEER",
      type: "Company",
      children: divisions.map((division) => {
        const relatedDepartments = departments.filter(
          (dept) => dept.departmentDivisionId === division.divisionId
        );

        return {
          name: division.divisionName,
          type: "ฝ่าย",
          children: relatedDepartments.map((dept) => {
            const relatedPositions = positions.filter(
              (pos) => pos.positionDepartmentId === dept.departmentId
            );

            return {
              name: dept.departmentName,
              type: "แผนก",
              children: relatedPositions.map((pos) => ({
                name: pos.positionNameTH,
                type: "ตำแหน่ง",
              })),
            };
          }),
        };
      }),
    };
  }, [divisions, departments, positions]);

  return (
    <>
      <UIHeader Header="แผนผังองค์กร" />
      <div className="flex flex-col items-center justify-start w-full min-h-screen p-4 bg-default gap-6">
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

        {/* Tree */}
        <div className="w-full overflow-auto pb-8">
          <Tree
            lineWidth="2px"
            lineColor="#00000030"
            lineBorderRadius="20px"
            label={<NodeBox name={treeData.name} type={treeData.type} />}
          >
            {treeData.children.map((division, i) => (
              <TreeNode
                key={i}
                label={<NodeBox name={division.name} type={division.type} />}
              >
                {division.children.map((dept, j) => (
                  <TreeNode
                    key={j}
                    label={<NodeBox name={dept.name} type={dept.type} />}
                  >
                    {renderVerticalChain(dept.children)}
                  </TreeNode>
                ))}
              </TreeNode>
            ))}
          </Tree>
        </div>
      </div>
    </>
  );
}
