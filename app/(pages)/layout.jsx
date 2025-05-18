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

const submenus = (menu, submenuOpen, toggleSubmenu) => (
  <div
    key={menu.key}
    className="flex flex-col items-center justify-center w-full p-2 gap-2"
  >
    <div
      className="flex items-center justify-center w-full p-2 hover:bg-default"
      onClick={() => toggleSubmenu(menu.key)}
    >
      <div className="flex items-center justify-center h-full p-2 gap-2">
        {menu.icon}
      </div>
      <div className="flex items-center justify-start w-full h-full p-2 gap-2">
        {menu.title}
      </div>
      <div
        className={`flex items-center justify-center h-full p-2 gap-2 transform transition-transform duration-300 ${
          submenuOpen[menu.key] ? "-rotate-180" : "rotate-0"
        }`}
      >
        <Down />
      </div>
    </div>
    {submenuOpen[menu.key] && (
      <div className="flex flex-col w-full h-full pl-2 p-2 gap-2 border-l-2 border-dark">
        {menu.submenus.map((sub, idx) => (
          <div
            key={idx}
            className="flex items-center justify-start w-full h-full p-2 gap-2 hover:bg-default"
          >
            {sub}
          </div>
        ))}
      </div>
    )}
  </div>
);

const toolMenu = (tool, index, collapsed) => (
  <div
    key={index}
    className="flex flex-col xl:flex-row items-center justify-center w-full p-2 hover:bg-white"
  >
    <div className="flex items-center justify-center h-full p-2 gap-2">
      {tool.icon}
    </div>
    {!collapsed && (
      <div className="flex items-center justify-start w-full h-full p-2 gap-2">
        {tool.label}
      </div>
    )}
  </div>
);

const topBar = (currentTime, setOpenMobile) => (
  <div className="flex flex-row items-center justify-center w-full min-h-20 p-2 gap-2 border-b-2 border-default">
    <div
      className="flex xl:hidden items-center justify-center w-full h-full p-2 gap-2"
      onClick={() => setOpenMobile(true)}
    >
      <Hamburger />
    </div>
    <div className="xl:flex hidden items-center justify-start w-full h-full p-2 gap-2 border-2 border-primary bg-primary text-white shadow-md rounded-full">
      <CneSystem /> Cne System
    </div>
    <div className="xl:flex hidden items-center justify-start w-full h-full p-2 gap-2 border-2 border-default bg-default shadow-md rounded-full">
      <CneCloud /> Cne Cloud
    </div>
    <div className="xl:flex hidden items-center justify-start w-full h-full p-2 gap-2 border-2 border-default bg-default shadow-md rounded-full">
      <CneLeave /> ระบบลางาน
    </div>
    <div className="xl:flex hidden items-center justify-center min-w-60 h-full p-2 gap-2 border-2 border-secondary bg-secondary/50 text-white shadow-md rounded-full">
      <Clock /> {currentTime}
    </div>
    <div className="flex items-center justify-center min-w-14 min-h-14 p-2 gap-2 border-2 border-default bg-default shadow-md rounded-full">
      <Search />
    </div>
    <div className="flex items-center justify-center min-w-14 min-h-14 p-2 gap-2 border-2 border-white bg-white shadow-md rounded-full">
      <Bell />
    </div>
    <div className="flex items-center justify-center min-w-14 min-h-14 p-2 gap-2 border-2 border-danger bg-danger text-white shadow-md rounded-full">
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
    <div className="flex flex-row w-full h-screen overflow-hidden gap-2">
      <div
        className={`fixed inset-y-0 left-0 z-40 flex transition-transform duration-300 ease-in-out
          ${openMobile ? "translate-x-0" : "-translate-x-full"}
          xl:static xl:translate-x-0
          ${collapsed ? "xl:w-[20%]" : "xl:w-[25%]"}
          w-[90%]`}
      >
        <div
          className={`flex flex-col items-center justify-between h-full bg-white
            ${collapsed ? "xl:w-[70%]" : "xl:w-[60%]"}
            w-[70%]`}
        >
          <div className="flex items-center justify-center w-full min-h-20 p-2 gap-2 border-b-2 border-default">
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
          <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 overflow-auto">
            <div className="flex items-center justify-center w-full p-2 gap-2">
              <div className="flex items-center justify-center h-full p-2 gap-2">
                <Dashboard />
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                Home
              </div>
            </div>
            {menuItems.map((menu) =>
              submenus(menu, submenuOpen, toggleSubmenu)
            )}
          </div>
          <div className="flex items-center justify-center w-full min-h-20 p-2 gap-2 border-t-2 border-default">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2">
              <Logout /> Logout
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col items-center justify-between h-full bg-default
            ${collapsed ? "xl:w-[30%]" : "xl:w-[40%]"}
            w-[30%]`}
        >
          <div className="flex items-center justify-center w-full min-h-20 p-2 gap-2 border-b-2 border-white">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2">
              Tools
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 overflow-auto">
            {toolMenus.map((tool, index) => toolMenu(tool, index, collapsed))}
          </div>
          <div
            className="flex items-center justify-center w-full min-h-20 p-2 gap-2 border-t-2 border-white"
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
          className="fixed inset-0 z-30 bg-dark/50 xl:hidden p-2 gap-2"
          onClick={() => setOpenMobile(false)}
        />
      )}

      <div
        className={`flex flex-col h-full flex-1 bg-white ${
          collapsed ? "xl:w-[80%]" : "xl:w-[75%]"
        }`}
      >
        {topBar(currentTime, setOpenMobile)}
        <div className="flex flex-col items-center justify-start w-full flex-1 p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              Header
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark overflow-auto">
            <div className="flex items-center justify-center w-full p-2 gap-2 border-2 border-dark">
              1
            </div>
            <div className="flex items-center justify-center w-full p-2 gap-2 border-2 border-dark">
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
