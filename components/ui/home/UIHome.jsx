"use client";

import UIHeader from "@/components/other/UIHeader";

import React from "react";

export default function UIHome() {
  return (
    <>
      <UIHeader Header="หน้าหลัก" />
      <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 overflow-auto">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full min-h-96 p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 bg-white shadow-md rounded-xl">
              Dashboard 1
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 bg-primary text-white shadow-md rounded-xl">
                Dashboard 1
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 bg-danger text-white shadow-md rounded-xl">
                Dashboard 1
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 bg-white shadow-md rounded-xl">
            Dashboard 1
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full min-h-96 p-2 gap-2">
          <div className="flex items-center justify-center w-full xl:w-6/12 h-full p-2 gap-2 bg-white shadow-md rounded-xl">
            Dashboard 1
          </div>
          <div className="flex items-center justify-center w-full xl:w-3/12 h-full p-2 gap-2 bg-white shadow-md rounded-xl">
            Dashboard 1
          </div>
          <div className="flex items-center justify-center w-full xl:w-3/12 h-full p-2 gap-2 bg-white shadow-md rounded-xl">
            Dashboard 1
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full min-h-96 p-2 gap-2">
          <div className="flex items-center justify-center w-full xl:w-8/12 h-full p-2 gap-2 bg-white shadow-md rounded-xl">
            Dashboard 1
          </div>
          <div className="flex items-center justify-center w-full xl:w-4/12 h-full p-2 gap-2 bg-white shadow-md rounded-xl">
            Dashboard 1
          </div>
        </div>
      </div>
    </>
  );
}
