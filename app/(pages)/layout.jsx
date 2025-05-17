"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Hamburger,
  Left,
  Search,
  CneSystem,
  CneCloud,
  CneLeave,
  Clock,
  Logout,
  Dashboard,
  Hr,
  Down,
  Account,
  Setting,
  It,
} from "@/components/icons/icons";

const renderSubmenus = (menu, submenuOpen, toggleSubmenu) => (
  <div
    key={menu.key}
    className="flex flex-col items-center justify-center w-full gap-2"
  >
    <div
      className="flex items-center justify-center w-full px-0 py-3 gap-2 hover:bg-default cursor-pointer"
      onClick={() => toggleSubmenu(menu.key)}
    >
      <div className="flex items-center justify-center h-full px-4 py-2 gap-2">
        {menu.icon}
      </div>
      <div className="flex items-center justify-start w-full h-full p-2 gap-2">
        {menu.title}
      </div>
      <div
        className={`flex items-center justify-center h-full px-4 py-2 gap-2 transform transition-transform duration-300 ${
          submenuOpen[menu.key] ? "-rotate-180" : "rotate-0"
        }`}
      >
        <Down />
      </div>
    </div>
    {submenuOpen[menu.key] && (
      <div className="flex flex-col w-full h-full px-2 py-3 gap-2 border-2 border-dark border-dashed">
        {menu.submenus.map((sub, idx) => (
          <div
            key={idx}
            className="flex items-center justify-start w-full h-full px-2 py-3 gap-2 border-2 border-dark border-dashed rounded-xl cursor-pointer hover:bg-default"
          >
            {sub}
          </div>
        ))}
      </div>
    )}
  </div>
);

const renderToolMenu = (tool, index, collapsed) => (
  <div
    key={index}
    className="flex flex-col xl:flex-row items-center justify-center w-full px-2 py-3 hover:bg-white"
  >
    <div className="flex items-center justify-center h-full p-2">
      {tool.icon}
    </div>
    {!collapsed && (
      <div className="flex items-center justify-center h-full p-1 text-sm">
        {tool.label}
      </div>
    )}
  </div>
);

const renderTopBar = (currentTime, setOpenMobile) => (
  <div className="flex flex-row items-center justify-center w-full h-20 p-3 gap-2 border-b-2 border-default">
    <div
      className="flex xl:hidden items-center justify-center w-full h-full aspect-square p-2 gap-2 shadow-md rounded-full cursor-pointer"
      onClick={() => setOpenMobile(true)}
    >
      <Hamburger />
    </div>
    <div className="xl:flex hidden items-center justify-start w-full h-full p-2 gap-2 bg-primary text-white shadow-md border-2 border-default rounded-full cursor-pointer">
      <CneSystem /> Cne System
    </div>
    <div className="xl:flex hidden items-center justify-start w-full h-full p-2 gap-2 bg-default shadow-md border-2 border-default rounded-full cursor-pointer">
      <CneCloud /> Cne Cloud
    </div>
    <div className="xl:flex hidden items-center justify-start w-full h-full p-2 gap-2 bg-default shadow-md border-2 border-default rounded-full cursor-pointer">
      <CneLeave /> ระบบลางาน
    </div>
    <div className="xl:flex hidden items-center justify-center min-w-60 h-full aspect-square p-2 gap-2 border-2 border-primary text-primary shadow-md rounded-full">
      <Clock /> {currentTime}
    </div>
    <div className="flex items-center justify-center w-14 h-full aspect-square p-2 gap-2 bg-default shadow-md border-2 border-default rounded-full cursor-pointer">
      <Search />
    </div>
    <div className="flex items-center justify-center w-14 h-full aspect-square p-2 gap-2 bg-white shadow-md border-2 border-default rounded-full cursor-pointer">
      <Bell />
    </div>
    <div className="flex items-center justify-center w-14 h-full aspect-square p-2 gap-2 bg-warning shadow-md border-2 border-default rounded-full cursor-pointer">
      Ima
    </div>
  </div>
);

export default function PagesLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleSubmenu = (key) => {
    setSubmenuOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const menuItems = [
    {
      title: "Human",
      icon: <Hr />,
      key: "human",
      submenus: ["ระดับตำแหน่ง", "ฝ่าย", "แผนก", "ตำแหน่งงาน"],
    },
    {
      title: "Technology",
      icon: <It />,
      key: "technology",
      submenus: ["ใบแจ้งซ่อม", "ใบเบิกคอม", "แบ็คอัพข้อมูล"],
    },
  ];

  const toolMenus = [
    { label: "Account", icon: <Account /> },
    { label: "Setting", icon: <Setting /> },
  ];

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(time);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row w-full h-screen overflow-hidden">
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
          <div className="flex items-center justify-center w-full h-20 p-3 gap-2 border-b-2 border-default">
            <Link
              href="/"
              className="flex items-center justify-center w-full h-full p-2 gap-2 relative"
            >
              <Image
                src="/logoCompany/com-2.png"
                alt="logo"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start w-full h-[80%] gap-2 overflow-auto">
            <div className="flex items-center justify-center w-full px-0 py-3 gap-2 hover:bg-default">
              <div className="flex items-center justify-center h-full px-4 py-2 gap-2">
                <Dashboard />
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                Home
              </div>
            </div>
            {menuItems.map((menu) =>
              renderSubmenus(menu, submenuOpen, toggleSubmenu)
            )}
          </div>
          <div className="flex items-center justify-center w-full h-20 p-3 gap-2 border-t-2 border-default hover:bg-default">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2">
              <Logout /> Logout
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col items-center justify-start h-full gap-2 bg-default
            ${collapsed ? "xl:w-[30%]" : "xl:w-[40%]"}
            w-[30%]`}
        >
          <div className="flex items-center justify-center w-full h-20 p-3 gap-2 border-b-2 border-white">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2">
              Tools
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full h-[80%] gap-2 overflow-auto">
            {toolMenus.map((tool, index) =>
              renderToolMenu(tool, index, collapsed)
            )}
          </div>
          <div
            className="flex items-center justify-center w-full h-20 p-3 gap-2 border-t-2 border-white cursor-pointer"
            onClick={() => setCollapsed(!collapsed)}
          >
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              <Left />
            </div>
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
        className={`flex flex-col h-full gap-2 bg-white flex-1 ${
          collapsed ? "xl:w-[80%]" : "xl:w-[75%]"
        }`}
      >
        {renderTopBar(currentTime, setOpenMobile)}
        <div className="flex flex-col items-center justify-center w-full flex-1 p-2 gap-2 border-2 border-dark border-dashed overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
