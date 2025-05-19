import UIHeader from "@/components/other/UIHeader";
import React from "react";

export default function UIHome() {
  return (
    <>
      <UIHeader Header="หน้าหลัก" />
      <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white overflow-auto border-2 border-dark">
        <div className="flex items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          1
        </div>
      </div>
    </>
  );
}
