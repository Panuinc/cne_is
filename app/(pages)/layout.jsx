"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import UILogoutProvider from "@/components/other/UILogoutProvider";
import Loading from "@/components/other/UILoading";
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

const submenus = (menu, submenuOpen, toggleSubmenu, pathname) => {
  const hasSubmenu = Array.isArray(menu.submenus) && menu.submenus.length > 0;
  const isSubActive =
    hasSubmenu &&
    menu.submenus.some(
      (item) =>
        item.href && (pathname === item.href || pathname.startsWith(item.href))
    );

  return (
    <div
      key={menu.key}
      className="flex flex-col items-center justify-center w-full gap-2"
    >
      <div
        className={`flex items-center justify-center w-full p-2 gap-2 hover:bg-default cursor-pointer ${
          isSubActive ? "bg-default text-dark" : ""
        }`}
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
        <div className="flex flex-col w-full h-full pl-2 p-2 gap-2 border-l-2 border-default">
          {menu.submenus.map((sub, idx) => (
            <Link
              key={idx}
              href={sub.href}
              className={`flex items-center justify-start w-full h-full px-2 py-3 gap-2 hover:bg-default ${
                pathname === sub.href || pathname.startsWith(sub.href)
                  ? "bg-default text-dark"
                  : ""
              }`}
            >
              {sub.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const toolMenu = (tool, index, collapsed, pathname) => {
  const isActive = pathname === tool.href || pathname.startsWith(tool.href);

  return (
    <Link
      key={index}
      href={tool.href}
      className={`flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 hover:bg-white ${
        isActive ? "bg-white text-dark" : ""
      }`}
    >
      <div className="flex items-center justify-center h-full p-2 gap-2">
        {tool.icon}
      </div>
      {!collapsed && (
        <div className="flex items-center justify-start w-full h-full p-2 gap-2">
          {tool.label}
        </div>
      )}
    </Link>
  );
};

const topBar = (currentTime, setOpenMobile) => (
  <div className="flex flex-row items-center justify-evenly w-full min-h-[72px] p-2 gap-2 bg-white border-2 border-default">
    <div
      className="flex xl:hidden items-center justify-center min-w-[56px] xl:w-full h-full p-2 gap-2 border-2 border-default bg-white text-dark rounded-full shadow-md"
      onClick={() => setOpenMobile(true)}
    >
      <Hamburger />
    </div>
    <Link
      href="http://49.0.66.19:8023/Main/"
      target="_blank"
      className="xl:flex hidden items-center justify-start w-full h-full p-2 gap-2 border-2 border-default bg-white text-dark rounded-full shadow-md"
    >
      <CneSystem /> Cne System
    </Link>
    <Link
      href="http://cnecloud01.myqnapcloud.com:8011/cgi-bin/"
      target="_blank"
      className="xl:flex hidden items-center justify-start w-full h-full p-2 gap-2 border-2 border-default bg-white text-dark rounded-full shadow-md"
    >
      <CneCloud /> Cne Cloud
    </Link>
    <Link
      href="http://49.0.64.242:8088/LoginERS/login.aspx"
      target="_blank"
      className="xl:flex hidden items-center justify-start w-full h-full p-2 gap-2 border-2 border-default bg-white text-dark rounded-full shadow-md"
    >
      <CneLeave /> ระบบลางาน
    </Link>
    <div className="xl:flex hidden items-center justify-center min-w-60 h-full p-2 gap-2 border-2 border-default bg-white text-dark rounded-full shadow-md">
      <Clock /> {currentTime}
    </div>
    <div className="flex items-center justify-center min-w-[56px] h-full p-2 gap-2 border-2 border-default bg-white text-dark rounded-full shadow-md">
      <Search />
    </div>
    <div className="flex items-center justify-center min-w-[56px] h-full p-2 gap-2 border-2 border-default bg-white text-dark rounded-full shadow-md">
      <Bell />
    </div>
    <div className="flex items-center justify-center min-w-[56px] h-full p-2 gap-2 border-2 border-default bg-white text-dark rounded-full shadow-md relative">
      <Image
        src="/mascot/mascot-1.png"
        alt="mascot-1"
        fill
        style={{ objectFit: "contain", objectPosition: "center" }}
      />
    </div>
  </div>
);

export default function PagesLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [submenuOpen, setSubmenuOpen] = useState({});
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && status !== "loading") router.push("/");
  }, [session, status, router]);

  if (status === "loading") return <Loading />;
  if (!session) return null;

  const toggleSubmenu = (key) => {
    setSubmenuOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isDashboardActive =
    pathname === "/home" || pathname.startsWith("/home");

  const menuItems = [
    {
      title: "บุคคล",
      icon: <Hr />,
      key: "บุคคล",
      submenus: [
        { title: "ระดับตำแหน่ง", href: "/role" },
        { title: "ฝ่าย", href: "/division" },
        { title: "แผนก", href: "/department" },
        { title: "ตำแหน่งงาน", href: "/position" },
      ],
    },
    {
      title: "สารสนเทศ",
      icon: <It />,
      key: "สารสนเทศ",
      submenus: [
        { title: "ใบแจ้งซ่อม", href: "/tech/repair" },
        { title: "ใบเบิกคอม", href: "/tech/request" },
        { title: "แบ็คอัพข้อมูล", href: "/tech/backup" },
      ],
    },
  ];

  const toolMenus = [
    { label: "บัญชี", icon: <Account />, href: "/account" },
    { label: "ตั้งค่า", icon: <Setting />, href: "/setting" },
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
    <UILogoutProvider>
      <div className="flex flex-row w-full h-screen overflow-hidden">
        <div
          className={`fixed inset-y-0 left-0 z-40 flex transition-transform duration-300 ease-in-out
          ${openMobile ? "translate-x-0" : "-translate-x-full"}
          xl:static xl:translate-x-0
          ${collapsed ? "xl:w-[24%]" : "xl:w-[25%]"}
          w-[90%]`}
        >
          <div
            className={`flex flex-col items-center justify-between h-full bg-white
            ${collapsed ? "xl:w-[70%]" : "xl:w-[60%]"}
            w-[70%]`}
          >
            <div className="flex items-center justify-center w-full min-h-[72px] p-2 gap-2 border-b-2 border-default">
              <Link
                href="/home"
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
              <Link
                href="/home"
                className={`flex items-center justify-center w-full p-2 gap-2 hover:bg-default ${
                  isDashboardActive ? "bg-default text-dark" : ""
                }`}
              >
                <div className="flex items-center justify-center h-full p-2 gap-2">
                  <Dashboard />
                </div>
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  หน้าหลัก
                </div>
              </Link>
              {menuItems.map((menu) =>
                submenus(menu, submenuOpen, toggleSubmenu, pathname)
              )}
            </div>
            <div className="flex items-center justify-center w-full min-h-[72px] p-2 gap-2 border-t-2 border-default">
              <Link
                href="/logout"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="flex items-center justify-start w-full h-full p-2 gap-2 hover:bg-default"
              >
                <Logout /> ออกจากระบบ
              </Link>
            </div>
          </div>

          <div
            className={`flex flex-col items-center justify-between h-full bg-default
            ${collapsed ? "xl:w-[30%]" : "xl:w-[40%]"}
            w-[30%]`}
          >
            <div className="flex items-center justify-center w-full min-h-[72px] p-2 gap-2 border-b-2 border-white">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                Tools
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 overflow-auto">
              {toolMenus.map((tool, index) =>
                toolMenu(tool, index, collapsed, pathname)
              )}
            </div>
            <div
              className="flex items-center justify-center w-full min-h-[72px] p-2 gap-2 border-t-2 border-white"
              onClick={() => setCollapsed(!collapsed)}
            >
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 hover:bg-white cursor-pointer">
                <div className="flex items-center justify-center h-full p-2 gap-2">
                  <Left />
                </div>
                {!collapsed && (
                  <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                    ย่อแถบ
                  </div>
                )}
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
          <div className="flex flex-col items-center justify-start w-full flex-1 p-2 gap-2 overflow-auto">
            {children}
          </div>
        </div>
      </div>
    </UILogoutProvider>
  );
}
