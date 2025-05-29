"use client";

import UIHeader from "@/components/other/UIHeader";

import React from "react";

export default function UIHome() {
  return (
    <>
      <UIHeader Header="หน้าหลัก" />
      <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 overflow-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between w-full p-8 bg-gradient-to-br from-[#16CDC7]/70 to-[#46CAEB] text-white rounded-3xl shadow-md">
          <div className="flex flex-col gap-2 text-center xl:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold opacity-90">
              👷‍♂️ Welcome to
            </h2>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-md">
              Channakorn Engineer
            </h1>
            <p className="text-base sm:text-lg text-white/80">
              ระบบบริหารงานภายในองค์กร
            </p>
          </div>

          <div className="mt-6 xl:mt-0 xl:ml-8 flex items-center justify-center w-48 h-48 xl:w-52 xl:h-52 rounded-xl overflow-hidden shadow-inner bg-white/10">
            <img
              src="/mascot/mascot-1.png"
              alt="Welcome Illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full min-h-96 p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 bg-white shadow-md rounded-3xl">
              Dashboard 1
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 bg-primary text-white shadow-md rounded-3xl">
                Dashboard 1
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 bg-danger text-white shadow-md rounded-3xl">
                Dashboard 1
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 bg-white shadow-md rounded-3xl">
            Dashboard 1
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full min-h-96 p-2 gap-2">
          <div className="flex items-center justify-center w-full xl:w-6/12 h-full p-2 gap-2 bg-white shadow-md rounded-3xl">
            Dashboard 1
          </div>
          <div className="flex items-center justify-center w-full xl:w-3/12 h-full p-2 gap-2 bg-white shadow-md rounded-3xl">
            Dashboard 1
          </div>
          <div className="flex items-center justify-center w-full xl:w-3/12 h-full p-2 gap-2 bg-white shadow-md rounded-3xl">
            Dashboard 1
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full min-h-96 p-2 gap-2">
          <div className="flex items-center justify-center w-full xl:w-8/12 h-full p-2 gap-2 bg-white shadow-md rounded-3xl">
            Dashboard 1
          </div>
          <div className="flex items-center justify-center w-full xl:w-4/12 h-full p-2 gap-2 bg-white shadow-md rounded-3xl">
            Dashboard 1
          </div>
        </div>
      </div>
    </>
  );
}
