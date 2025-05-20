import UIHeader from "@/components/other/UIHeader";
import React from "react";

export default function UIPosJobDes({ header }) {
  return (
    <>
      <UIHeader Header={header} />
      <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark bg-white overflow-auto">
        <div className="flex flex-col xl:flex-row items-center justify-start w-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center h-full p-4 gap-2 bg-primary/75 border-2 border-primary text-white rounded-lg">
            ข้อมูล ใบกำหนดลักษณะงาน
          </div>
        </div>
      </div>
    </>
  );
}
