import UIHeader from "@/components/other/UIHeader";
import React from "react";

export default function UIOrganize() {
  return (
    <>
      <UIHeader Header="Organize" />
      <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white overflow-auto border-2 border-dark">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark">
              STRUCTURE
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark">
              CHANNAKORN ENGINEER
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark">
              COMPANY
            </div>
          </div>
          <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col items-center justify-center w-full h-full p-2 border-2 border-dark bg-white shadow-md rounded-xl">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark bg-default">
                จำนวนพนักงาน
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                จำนวนพนักงาน
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full p-2 border-2 border-dark bg-white shadow-md rounded-xl">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark bg-default">
                จำนวนฝ่าย
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                จำนวนฝ่าย
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full p-2 border-2 border-dark bg-white shadow-md rounded-xl">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark bg-default">
                จำนวนแผนก
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                จำนวนแผนก
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          1
        </div>
      </div>
    </>
  );
}
