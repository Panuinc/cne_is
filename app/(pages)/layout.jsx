"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import UILogoutProvider from "@/components/other/UILogoutProvider";
import Loading from "@/components/other/UILoading";
import { Tooltip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

import {
  Bell,
  Hamburger,
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
  Organize,
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
      className="flex flex-col items-center justify-center w-full p-2 gap-2"
    >
      <div
        className={`flex items-center justify-center w-full p-2 gap-2 cursor-pointer ${
          isSubActive ? "text-primary" : "hover:text-primary"
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
        <div className="flex flex-col w-full h-full p-2 gap-2">
          {menu.submenus.map((sub, idx) => (
            <Link
              key={idx}
              href={sub.href}
              className={`flex items-center justify-start w-full h-full p-4 gap-2 cursor-pointer ${
                pathname === sub.href || pathname.startsWith(sub.href)
                  ? "bg-cool-gradient text-white shadow-md rounded-3xl"
                  : "hover:text-primary"
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

const toolMenu = (tool, index, pathname) => {
  const isActive = pathname === tool.href || pathname.startsWith(tool.href);

  return (
    <Tooltip
      key={tool.href}
      showArrow
      color="primary"
      content={tool.label}
      placement="bottom"
      delay={100}
    >
      <Link
        href={tool.href}
        className={`flex flex-col xl:flex-row items-center justify-center w-14 h-14 p-2 gap-2 rounded-xl ${
          isActive
            ? "bg-cool-gradient text-white"
            : "hover:bg-primary/25 hover:text-primary"
        }`}
      >
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          {tool.icon}
        </div>
      </Link>
    </Tooltip>
  );
};

const topBar = (session, currentTime, setOpenMobile) => (
  <div className="flex flex-row items-center justify-evenly w-full min-h-[72px] p-2 gap-2 bg-white">
    <div
      className="flex xl:hidden items-center justify-center min-w-[56px] xl:w-full h-full p-2 gap-2 hover:text-primary"
      onClick={() => setOpenMobile(true)}
    >
      <Hamburger />
    </div>
    <Link
      href="http://49.0.66.19:8023/Main/"
      target="_blank"
      className="xl:flex hidden items-center justify-start w-full h-full p-2 gap-2 hover:text-primary"
    >
      <CneSystem /> Cne System
    </Link>
    <Link
      href="http://cnecloud01.myqnapcloud.com:8011/cgi-bin/"
      target="_blank"
      className="xl:flex hidden items-center justify-start w-full h-full p-2 gap-2 hover:text-primary"
    >
      <CneCloud /> Cne Cloud
    </Link>
    <Link
      href="http://49.0.64.242:8088/LoginERS/login.aspx"
      target="_blank"
      className="xl:flex hidden items-center justify-start w-full h-full p-2 gap-2 hover:text-primary"
    >
      <CneLeave /> ระบบลางาน
    </Link>
    <div className="xl:flex hidden items-center justify-center min-w-60 h-full p-2 gap-2 text-primary">
      <Clock /> {currentTime}
    </div>
    <div className="flex items-center justify-center min-w-[56px] h-full p-2 gap-2">
      <Search />
    </div>
    <div className="flex items-center justify-center min-w-[56px] h-full p-2 gap-2">
      <Bell />
    </div>
    <div className="flex items-center justify-center min-w-[56px] h-full p-2 gap-2 relative">
      <Image
        src={
          session.user?.picture
            ? `/empEmployment/userPicture/${session.user.picture}`
            : "/banner/default.png"
        }
        alt={session.user?.nameEN || "user"}
        fill
        style={{ objectFit: "contain", objectPosition: "center" }}
      />
    </div>
  </div>
);

const mainMenuItem = (menu, pathname) => {
  const isActive = pathname === menu.href || pathname.startsWith(menu.href);

  return (
    <Link
      key={menu.href}
      href={menu.href}
      className={`flex items-center justify-center w-full p-2 gap-2 cursor-pointer ${
        isActive
          ? "bg-cool-gradient text-white shadow-md rounded-3xl"
          : "hover:text-primary"
      }`}
    >
      <div className="flex items-center justify-center h-full p-2 gap-2">
        {menu.icon}
      </div>
      <div className="flex items-center justify-start w-full h-full p-2 gap-2">
        {menu.label}
      </div>
    </Link>
  );
};

export default function PagesLayout({ children }) {
  const [openMobile, setOpenMobile] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [submenuOpen, setSubmenuOpen] = useState({});

  const pathname = usePathname();
  const { data: session, status } = useSession();
  const router = useRouter();

  const menuItems = [
    {
      title: "ทรัพยากรบุคคล",
      icon: <Hr />,
      key: "ทรัพยากรบุคคล",
      submenus: [
        { title: "ระดับตำแหน่ง", href: "/role" },
        { title: "ฝ่าย", href: "/division" },
        { title: "แผนก", href: "/department" },
        { title: "ตำแหน่งงาน", href: "/position" },
        { title: "พนักงาน", href: "/emp" },
        { title: "ขออัตรากำลังคน", href: "/perReq" },
      ],
    },
    // {
    //   title: "สารสนเทศ",
    //   icon: <It />,
    //   key: "สารสนเทศ",
    //   submenus: [
    //     { title: "ใบแจ้งซ่อม", href: "/tech/repair" },
    //     { title: "ใบเบิกคอม", href: "/tech/request" },
    //     { title: "แบ็คอัพข้อมูล", href: "/tech/backup" },
    //   ],
    // },
  ];

  const toolMenus = [
    { icon: <Account />, href: "/account", label: "บัญชีผู้ใช้" },
    { icon: <Setting />, href: "/setting", label: "ตั้งค่า" },
  ];

  const mainMenus = [
    { label: "หน้าหลัก", icon: <Dashboard />, href: "/home" },
    { label: "แผนผังองค์กร", icon: <Organize />, href: "/organize" },
  ];

  useEffect(() => {
    if (!session && status !== "loading") router.push("/");
  }, [session, status, router]);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const initialOpen = {};
    menuItems.forEach((menu) => {
      if (
        Array.isArray(menu.submenus) &&
        menu.submenus.some(
          (item) =>
            item.href &&
            (pathname === item.href || pathname.startsWith(item.href))
        )
      ) {
        initialOpen[menu.key] = true;
      }
    });
    setSubmenuOpen(initialOpen);
  }, [pathname]);

  if (status === "loading") return <Loading />;
  if (!session) return null;

  const toggleSubmenu = (key) =>
    setSubmenuOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <UILogoutProvider>
      <div className="flex flex-row w-full h-screen overflow-hidden">
        <div
          className={`fixed inset-y-0 left-0 z-40 flex transition-transform duration-300 ease-in-out
          ${openMobile ? "translate-x-0" : "-translate-x-full"}
          xl:static xl:translate-x-0
          xl:w-[25%] w-[90%]`}
        >
          <div className="flex flex-col items-center justify-between h-full bg-default w-[20%]">
            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 overflow-auto">
              {toolMenus.map((tool, index) => toolMenu(tool, index, pathname))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-between h-full gap-2 bg-white w-[80%]">
            <div className="flex items-center justify-center w-full min-h-[72px] p-2">
              <div className="flex items-center gap-3 w-full px-4 py-2 text-primary font-semibold">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  👋
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Welcome</span>
                  <span className="text-lg font-semibold text-primary">
                    {session?.user?.nameTH ||
                      session?.user?.nameEN ||
                      "ชื่อผู้ใช้"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 overflow-auto">
              {mainMenus.map((menu) => mainMenuItem(menu, pathname))}
              {menuItems.map((menu) =>
                submenus(menu, submenuOpen, toggleSubmenu, pathname)
              )}
            </div>
            <div className="flex items-center justify-center w-full min-h-[72px] p-2 gap-2">
              <Link
                href="/logout"
                onClick={(e) => {
                  e.preventDefault();
                  signOut({ redirect: false }).then(() => {
                    window.location.href = "/";
                  });
                }}
                className="flex items-center justify-start w-full h-full p-2 gap-2 hover:bg-cool-gradient hover:text-white hover:shadow-md hover:rounded-3xl"
              >
                <Logout /> ออกจากระบบ
              </Link>
            </div>
          </div>
        </div>
        {openMobile && (
          <div
            className="fixed inset-0 z-30 bg-dark/50 xl:hidden p-2 gap-2"
            onClick={() => setOpenMobile(false)}
          />
        )}
        <div className="flex flex-col items-center h-full flex-1 px-2 py-0 gap-2 bg-white overflow-auto xl:w-[75%]">
          {topBar(session, currentTime, setOpenMobile)}
          <div className="flex flex-col items-center justify-start w-full flex-1 p-2 xl:px-8 xl:py-4 gap-6 bg-default rounded-2xl overflow-auto">
            {children}
          </div>
        </div>
      </div>
    </UILogoutProvider>
  );
}
