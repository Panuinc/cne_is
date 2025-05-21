"use client";

import UIAnimatedText from "@/components/other/UIAnimatedText";

import Image from "next/image";
import { Input, Button } from "@heroui/react";
import React, { useState, useRef } from "react";

export default function UIChangePassword({
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  setPin,
  handleSubmit,
}) {
  const [pinDigits, setPinDigits] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handlePinChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newPinDigits = [...pinDigits];
    newPinDigits[index] = value;
    setPinDigits(newPinDigits);
    setPin(newPinDigits.join(""));

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row items-center justify-center w-full xl:w-6/12 gap-2 bg-white shadow-md rounded-3xl"
    >
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <UIAnimatedText>เปลี่ยนแล้ว ... อย่าลืมจดนะ</UIAnimatedText>
        </div>

        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Input
            type="password"
            label="รหัสผ่านใหม่"
            placeholder="กรุณากรอกข้อมูล"
            size="md"
            variant="bordered"
            color="primary"
            radius="lg"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            isRequired
          />
        </div>

        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Input
            type="password"
            label="ยืนยันรหัสผ่าน"
            placeholder="กรุณากรอกข้อมูล"
            size="md"
            variant="bordered"
            color="primary"
            radius="lg"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            isRequired
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2">
            เลข 6 หลัก
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
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

        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Button
            color="primary"
            size="md"
            radius="lg"
            type="submit"
            className="flex items-center justify-center w-6/12 h-full p-4 gap-2"
          >
            ยืนยัน
          </Button>
        </div>
      </div>

      <div className="xl:flex hidden flex-col items-center justify-center w-full h-full p-2 gap-2 bg-primary rounded-tr-3xl rounded-br-3xl">
        <div className="flex items-center justify-center w-full min-h-[600px] p-2 gap-2 relative">
          <Image
            src="/mascot/mascot-3.png"
            alt="mascot-3"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            priority
          />
        </div>
      </div>
    </form>
  );
}
