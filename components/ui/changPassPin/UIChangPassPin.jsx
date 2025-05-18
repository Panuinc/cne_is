"use client";
import React, { useState, useRef } from "react";
import { Input, Button } from "@heroui/react";
import Image from "next/image";
import { motion } from "framer-motion";

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
          <motion.div
            className="flex items-center justify-center w-full h-full p-2 gap-2 text-xl text-secondary"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            เปลี่ยนแล้ว ... อย่าลืมจดนะ
          </motion.div>
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Input
            type="password"
            label="รหัสผ่านใหม่"
            placeholder="Please Enter Data"
            size="md"
            variant="bordered"
            color="secondary"
            radius="xl"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            isRequired
          />
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Input
            type="password"
            label="ยืนยันรหัสผ่าน"
            placeholder="Please Enter Data"
            size="md"
            variant="bordered"
            color="secondary"
            radius="xl"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            isRequired
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-secondary">
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
                className="flex items-center justify-center w-12 h-12 p-2 gap-2 text-white text-center bg-secondary rounded-xl"
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Button
            color="secondary"
            size="md"
            radius="lg"
            type="submit"
            className="flex items-center justify-center w-6/12 h-full p-4 gap-2"
          >
            ยืนยัน
          </Button>
        </div>
      </div>
      <div className="xl:flex hidden flex-col items-center justify-center w-full h-full p-2 gap-2 bg-secondary rounded-tr-3xl rounded-br-3xl">
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
