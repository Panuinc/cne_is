import UIHeader from "@/components/other/UIHeader";
import React from "react";

export default function UIHome() {
  return (
    <>
      <UIHeader Header="หน้าหลัก" />
      <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white overflow-auto">
        <div className="flex flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-6/12 min-h-64 p-2 gap-2 border-2 border-default bg-white rounded-lg shadow-md">
            Dashboard 1
          </div>
           <div className="flex items-center justify-center w-4/12 min-h-64 p-2 gap-2 border-2 border-default bg-white rounded-lg shadow-md">
            Dashboard 2
          </div>
           <div className="flex items-center justify-center w-2/12 min-h-64 p-2 gap-2 border-2 border-default bg-white rounded-lg shadow-md">
            Dashboard 3
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-2/12 min-h-64 p-2 gap-2 border-2 border-default bg-white rounded-lg shadow-md">
            Dashboard 4
          </div>
           <div className="flex items-center justify-center w-6/12 min-h-64 p-2 gap-2 border-2 border-default bg-white rounded-lg shadow-md">
            Dashboard 5
          </div>
           <div className="flex items-center justify-center w-4/12 min-h-64 p-2 gap-2 border-2 border-default bg-white rounded-lg shadow-md">
            Dashboard 6
          </div>
        </div>
      </div>
    </>
  );
}
