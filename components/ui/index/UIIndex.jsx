"use client";

import Image from "next/image";
import { Input, Button } from "@heroui/react";
import React, { useEffect, useRef } from "react";

export default function UIIndex(props) {
  const {
    empUserUsername,
    setEmpUserUsername,
    empUserCredential,
    setEmpUserCredential,
    pinDigits,
    setPinDigits,
    handleLogin,
    isPinMode,
    setIsPinMode,
  } = props;

  const inputRefs = useRef([]);

  const handlePinChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newPinDigits = [...pinDigits];
    newPinDigits[index] = value;
    setPinDigits(newPinDigits);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  useEffect(() => {
    if (isPinMode && pinDigits.every((digit) => digit === "")) {
      inputRefs.current[0]?.focus();
    }
  }, [pinDigits, isPinMode]);

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-row items-center justify-center w-full h-full xl:w-6/12 gap-2 bg-white shadow-md rounded-3xl"
    >
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Image
            src="/logoCompany/com-1.png"
            alt="com-1"
            width={75}
            height={75}
            property="true"
          />
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-xl font-[600]">
          Channakorn Internal System
        </div>
        {!isPinMode && (
          <>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              <Input
                type="text"
                label="ชื่อบัญชีผู้ใช้"
                placeholder="กรุณากรอกข้อมูล"
                size="md"
                variant="bordered"
                color="primary"
                radius="lg"
                value={empUserUsername}
                onChange={(e) => setEmpUserUsername(e.target.value)}
                isRequired
              />
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              <Input
                type="password"
                label="รหัสผ่าน"
                placeholder="กรุณากรอกข้อมูล"
                size="md"
                variant="bordered"
                color="primary"
                radius="lg"
                value={empUserCredential}
                onChange={(e) => setEmpUserCredential(e.target.value)}
                isRequired
              />
            </div>
          </>
        )}
        {isPinMode && (
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2">
              เลข 6 หลัก
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 overflow-auto">
              {pinDigits.map((digit, index) => (
                <input
                  key={index}
                  type="password"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handlePinChange(index, e.target.value)}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  className="flex items-center justify-center w-12 h-12 p-2 gap-2 text-white text-center bg-primary rounded-full"
                />
              ))}
            </div>
          </div>
        )}
        {!isPinMode && (
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Button
              color="primary"
              size="md"
              radius="lg"
              type="submit"
              className="flex items-center justify-center w-6/12 h-full p-4 gap-2"
            >
              เข้าสู่ระบบ
            </Button>
          </div>
        )}
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          {isPinMode ? (
            <button
              type="button"
              onClick={() => setIsPinMode(false)}
              className="flex items-center justify-end w-full h-full p-2 gap-2 text-sm"
            >
              เช้าสู่ระบบด้วย ชื่อบัญชีผู้ใช้ / รหัสผ่าน
            </button>
          ) : (
            localStorage.getItem("hasLoggedInBefore") && (
              <button
                type="button"
                onClick={() => setIsPinMode(true)}
                className="flex items-center justify-end w-full h-full p-2 gap-2 text-sm"
              >
                เช้าสู่ระบบด้วย เลข 6 หลัก
              </button>
            )
          )}
        </div>
      </div>
      <div className="xl:flex hidden flex-col items-center justify-center w-full h-full p-2 gap-2 bg-primary rounded-tr-3xl rounded-br-3xl">
        <div className="flex items-center justify-center w-full min-h-[600px] p-2 gap-2 relative">
          <Image
            src="/mascot/mascot-1.png"
            alt="mascot-1"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            priority
          />
        </div>
      </div>
    </form>
  );
}
