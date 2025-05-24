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
      className="flex flex-col items-center justify-center w-full gap-2"
    >
      <div
        className={`flex items-center justify-center w-full p-2 gap-2 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${
          isSubActive ? "bg-primary text-white" : ""
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
        <div className="flex flex-col w-full h-full pl-2 p-2 gap-2 border-l-1 border-default">
          {menu.submenus.map((sub, idx) => (
            <Link
              key={idx}
              href={sub.href}
              className={`flex items-center justify-start w-full h-full px-2 py-3 gap-2 hover:bg-primary hover:text-white rounded-lg ${
                pathname === sub.href || pathname.startsWith(sub.href)
                  ? "bg-primary text-white"
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
      className={`flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 hover:bg-primary hover:text-white rounded-lg ${
        isActive ? "bg-primary text-white" : ""
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

const topBar = (session, currentTime, setOpenMobile) => (
  <div className="flex flex-row items-center justify-evenly w-full min-h-[72px] p-2 gap-2 bg-white border-b-1 border-default">
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
    <div className="xl:flex hidden items-center justify-center min-w-60 h-full p-2 gap-2 hover:text-primary">
      <Clock /> {currentTime}
    </div>
    <div className="flex items-center justify-center min-w-[56px] h-full p-2 gap-2 hover:text-primary">
      <Search />
    </div>
    <div className="flex items-center justify-center min-w-[56px] h-full p-2 gap-2 hover:text-primary">
      <Bell />
    </div>
    <div className="flex items-center justify-center min-w-[56px] h-full p-2 gap-2 hover:text-primary relative">
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
      className={`flex items-center justify-center w-full p-2 gap-2 hover:bg-primary hover:text-white rounded-lg ${
        isActive ? "bg-primary text-white" : ""
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
  const [collapsed, setCollapsed] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [submenuOpen, setSubmenuOpen] = useState({});

  const pathname = usePathname();
  const { data: session, status } = useSession();
  const router = useRouter();

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
    { label: "โปรไฟล์", icon: <Account />, href: "/account" },
    // { label: "ตั้งค่า", icon: <Setting />, href: "/setting" },
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
          ${collapsed ? "xl:w-[24%]" : "xl:w-[25%]"}
          w-[90%]`}
        >
          <div
            className={`flex flex-col items-center justify-between h-full bg-white border-r-1 border-default
            ${collapsed ? "xl:w-[70%]" : "xl:w-[60%]"}
            w-[70%]`}
          >
            <div className="flex items-center justify-center w-full min-h-[72px] p-2 gap-2">
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
              {mainMenus.map((menu) => mainMenuItem(menu, pathname))}
              {menuItems.map((menu) =>
                submenus(menu, submenuOpen, toggleSubmenu, pathname)
              )}
            </div>

            <div className="flex items-center justify-center w-full min-h-[72px] p-2 gap-2">
              <Link
                href="/logout"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="flex items-center justify-start w-full h-full p-2 gap-2 hover:bg-primary hover:text-white rounded-lg"
              >
                <Logout /> ออกจากระบบ
              </Link>
            </div>
          </div>

          <div
            className={`flex flex-col items-center justify-between h-full bg-white border-r-1 border-default
            ${collapsed ? "xl:w-[30%]" : "xl:w-[40%]"}
            w-[30%]`}
          >
            <div className="flex items-center justify-center w-full min-h-[72px] p-2 gap-2">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                {""}
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 overflow-auto">
              {toolMenus.map((tool, index) =>
                toolMenu(tool, index, collapsed, pathname)
              )}
            </div>
            <div
              className="flex items-center justify-center w-full min-h-[72px] p-2 gap-2"
              onClick={() => setCollapsed(!collapsed)}
            >
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 rounded-lg cursor-pointer">
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
            className="fixed inset-0 z-30 bg-dark/50 xl:hidden p-2 gap-2 "
            onClick={() => setOpenMobile(false)}
          />
        )}

        <div
          className={`flex flex-col h-full flex-1 bg-white overflow-auto ${
            collapsed ? "xl:w-[80%]" : "xl:w-[75%]"
          }`}
        >
          {topBar(session, currentTime, setOpenMobile)}
          <div className="flex flex-col items-center justify-start w-full flex-1 gap-2 overflow-auto">
            {children}
          </div>
        </div>
      </div>
    </UILogoutProvider>
  );
}

// ✅ แนวทางที่เหมาะสม:
// ใช้ระบบ "เงื่อนไขย่อย" เพื่อเลือก submenu เฉพาะ จากกลุ่ม บุคคล โดยดูจาก roleName และ divisionName

// ✅ ตัวอย่างโค้ด menuItems ใหม่ (แบบยืดหยุ่น):
// js
// คัดลอก
// แก้ไข
// const roleName = session?.user?.roleName;
// const divisionName = session?.user?.divisionName;

// let menuItems = [];

// const hrSubmenus = [
//   { title: "ระดับตำแหน่ง", href: "/role" },
//   { title: "ฝ่าย", href: "/division" },
//   { title: "แผนก", href: "/department" },
//   { title: "ตำแหน่งงาน", href: "/position" },
//   { title: "พนักงาน", href: "/emp" },
// ];

// // 🟢 กำหนดว่าใครเข้าได้บ้าง
// if (roleName === "ผู้ดูแลระบบ") {
//   // 🔓 ผู้ดูแลระบบเห็นทุกเมนู
//   menuItems = [
//     {
//       title: "บุคคล",
//       icon: <Hr />,
//       key: "บุคคล",
//       submenus: hrSubmenus,
//     },
//     {
//       title: "สารสนเทศ",
//       icon: <It />,
//       key: "สารสนเทศ",
//       submenus: [
//         { title: "ใบแจ้งซ่อม", href: "/tech/repair" },
//         { title: "ใบเบิกคอม", href: "/tech/request" },
//         { title: "แบ็คอัพข้อมูล", href: "/tech/backup" },
//       ],
//     },
//   ];
// } else {
//   // 🔐 สิทธิ์กลุ่ม "บุคคล"
//   if (divisionName === "บุคคล") {
//     menuItems.push({
//       title: "บุคคล",
//       icon: <Hr />,
//       key: "บุคคล",
//       submenus: hrSubmenus,
//     });
//   }

//   // 🔐 ฝ่ายอื่น เช่น "เทคโนโลยีสารสนเทศ" ได้สิทธิ์เฉพาะดูพนักงาน
//   if (divisionName === "เทคโนโลยีสารสนเทศ") {
//     menuItems.push({
//       title: "บุคคล",
//       icon: <Hr />,
//       key: "บุคคล",
//       submenus: [
//         { title: "พนักงาน", href: "/emp" },
//       ],
//     });
//   }
// }
// ✅ เพิ่มเติม (แนะนำ):
// ถ้าในอนาคตต้องกำหนดสิทธิ์ได้ละเอียด เช่น จาก backend หรือเป็น array ยืดหยุ่น คุณอาจย้าย logic นี้ออกมาเป็นฟังก์ชัน:

// js
// คัดลอก
// แก้ไข
// function getMenuItems(roleName, divisionName) {
//   ...
//   return menuItems;
// }
// แล้วใช้:

// js
// คัดลอก
// แก้ไข
// const menuItems = getMenuItems(roleName, divisionName);
// ถ้าต้องการเพิ่ม whitelist เฉพาะเมนูแบบ config-driven (เช่น map division → allowed menus) ก็บอกได้นะครับ ผมเขียนให้ได้แบบ maintain ง่ายมาก 💡
