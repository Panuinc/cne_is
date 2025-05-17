"use client";
import { useState } from "react";
import { Bell, Hamburger, Left } from "@/components/icons/icons";

export default function PagesLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <div className="flex flex-row w-full h-screen overflow-hidden gap-2">
      <div
        className={`fixed inset-y-0 left-0 z-40 flex transition-transform duration-300 ease-in-out
          ${openMobile ? "translate-x-0" : "-translate-x-full"}
          xl:static xl:translate-x-0
          ${collapsed ? "xl:w-[20%]" : "xl:w-[25%]"}
          w-[90%]`}
      >
        <div
          className={`flex flex-col items-center justify-start h-full gap-2 bg-white
            ${collapsed ? "xl:w-[70%]" : "xl:w-[60%]"}
            w-[70%]`}
        >
          <div className="flex items-center justify-center w-full h-[10%] p-2 gap-2 border-2 border-dark border-dashed">
            ChannakornEngineer
          </div>
          <div className="flex flex-col items-center justify-start w-full h-[80%] gap-2 overflow-auto">
            <div className="flex items-center justify-center w-full px-2 py-3 gap-2 border-2 border-dark border-dashed">
              <div className="flex items-center justify-center h-full p-2 gap-2 border-2 border-dark border-dashed">
                1
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
                text
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-[10%] p-2 gap-2 border-2 border-dark border-dashed">
            Logout
          </div>
        </div>

        <div
          className={`flex flex-col items-center justify-start h-full gap-2 bg-default
            ${collapsed ? "xl:w-[30%]" : "xl:w-[40%]"}
            w-[30%]`}
        >
          <div className="flex items-center justify-center w-full h-[10%] p-2 gap-2 border-2 border-dark border-dashed">
            Tool
          </div>
          <div className="flex flex-col items-center justify-start w-full h-[80%] gap-2 overflow-auto">
            <div className="flex items-center justify-center w-full px-2 py-3 gap-2 border-2 border-dark border-dashed">
              <div className="flex items-center justify-center h-full p-2 gap-2 border-2 border-dark border-dashed">
                1
              </div>
              <div
                className={`flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark border-dashed ${
                  collapsed ? "hidden" : ""
                }`}
              >
                text
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-center w-full h-[10%] p-2 gap-2 border-2 border-dark border-dashed cursor-pointer"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Left />
          </div>
        </div>
      </div>

      {openMobile && (
        <div
          className="fixed inset-0 z-30 bg-black/40 xl:hidden"
          onClick={() => setOpenMobile(false)}
        />
      )}

      <div
        className={`flex flex-col h-full gap-2 bg-white flex-1
          ${collapsed ? "xl:w-[80%]" : "xl:w-[75%]"}`}
      >
        <div className="flex flex-row items-center justify-center w-full h-[10%] p-2 gap-2 border-2 border-dark border-dashed">
          <div
            className="flex xl:hidden items-center justify-center h-full p-2 gap-2 border-2 border-dark border-dashed cursor-pointer"
            onClick={() => setOpenMobile(true)}
          >
            <Hamburger />
          </div>

          <div className="hidden xl:flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <Hamburger />
          </div>

          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            Time
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            Search
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <Bell />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            Images
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full flex-1 p-2 gap-2 border-2 border-dark border-dashed overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
