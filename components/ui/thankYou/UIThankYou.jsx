"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import UIAnimatedText from "@/components/other/UIAnimatedText";

export default function UIThankYou() {
  const handleClose = () => {
    window.close();
  };

  return (
    <div className="flex flex-row items-center justify-center w-full h-full xl:w-6/12 gap-2 bg-white rounded-3xl">
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-4">
        <UIAnimatedText>ขอบคุณที่ร่วมสมัครงานกับเรา!</UIAnimatedText>
        <div className="flex items-center justify-center w-full text-center text-lg font-medium px-4">
          เราได้รับข้อมูลของคุณเรียบร้อยแล้ว<br />
          ทีมงานจะพิจารณาและติดต่อกลับหากคุณเหมาะสมกับตำแหน่ง
        </div>

        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Button
            color="primary"
            size="md"
            radius="xlgl"
            onPress={handleClose}
            className="flex items-center justify-center w-6/12 h-full p-4 gap-2"
          >
            ปิดหน้าต่าง
          </Button>
        </div>
      </div>

      <div className="xl:flex hidden flex-col items-center justify-center w-full h-full p-2 gap-2 bg-cool-gradient rounded-tr-3xl rounded-br-3xl">
        <div className="flex items-center justify-center w-full min-h-[600px] p-2 gap-2 relative">
          <Image
            src="/mascot/mascot-2.png"
            alt="mascot-2"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
