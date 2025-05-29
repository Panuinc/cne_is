"use client"

import UIHeader from "@/components/other/UIHeader";

import React from "react";

export default function UIHome() {
  return (
    <>
      <UIHeader Header="หน้าหลัก" />
      <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white shadow-md rounded-xl overflow-auto">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full xl:w-6/12 min-h-64 p-2 gap-2 border-1 border-default bg-white rounded-lg">
            Dashboard 1
          </div>
          <div className="flex items-center justify-center w-full xl:w-4/12 min-h-64 p-2 gap-2 border-1 border-default bg-white rounded-lg">
            Dashboard 2
          </div>
          <div className="flex items-center justify-center w-full xl:w-2/12 min-h-64 p-2 gap-2 border-1 border-default bg-white rounded-lg">
            Dashboard 3
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full xl:w-2/12 min-h-64 p-2 gap-2 border-1 border-default bg-white rounded-lg">
            Dashboard 4
          </div>
          <div className="flex items-center justify-center w-full xl:w-6/12 min-h-64 p-2 gap-2 border-1 border-default bg-white rounded-lg">
            Dashboard 5
          </div>
          <div className="flex items-center justify-center w-full xl:w-4/12 min-h-64 p-2 gap-2 border-1 border-default bg-white rounded-lg">
            Dashboard 6
          </div>
        </div>
      </div>
    </>
  );
}
