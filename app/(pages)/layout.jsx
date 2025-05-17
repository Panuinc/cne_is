"use client";
import { useState } from "react";
import { Bell, Hamburger, Left } from "@/components/icons/icons";

export default function PagesLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-row items-center justify-center w-full h-screen gap-2">
      <div
        className={`${
          collapsed ? "w-[20%]" : "w-[30%]"
        } flex flex-row items-center justify-center h-full`}
      >
        <div
          className={`flex flex-col items-center justify-start h-full gap-2 bg-white ${
            collapsed ? "w-[70%]" : "w-[60%]"
          }`}
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
          className={`flex flex-col items-center justify-start h-full gap-2 bg-default ${
            collapsed ? "w-[30%]" : "w-[40%]"
          }`}
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

      <div
        className={`flex flex-col items-center justify-center h-full gap-2 bg-white ${
          collapsed ? "w-[80%]" : "w-[70%]"
        }`}
      >
        <div className="flex flex-row items-center justify-center w-full h-[10%] p-2 gap-2 border-2 border-dark border-dashed">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
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
        <div className="flex flex-col items-center justify-center w-full h-[90%] p-2 gap-2 border-2 border-dark border-dashed">
          {children}
        </div>
      </div>
    </div>
  );
}
