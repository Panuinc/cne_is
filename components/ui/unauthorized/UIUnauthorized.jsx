"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import UIAnimatedText from "@/components/other/UIAnimatedText";

export default function UIUnauthorized() {
  return (
    <div className="flex flex-row items-center justify-center w-full h-full xl:w-6/12 gap-2 bg-white shadow-md rounded-3xl">
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
        <UIAnimatedText>ขออภัยเป็นอย่างยิ่ง</UIAnimatedText>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          คุณไม่มีสิทธิ์ในการเข้าถึงหน้านี้
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Button
            color="primary"
            size="lg"
            radius="xl"
            type="submit"
            className="flex items-center justify-center w-6/12 h-full p-3 gap-2"
          >
            <Link href="/home">กลับหน้าหลัก</Link>
          </Button>
        </div>
      </div>
      <div className="xl:flex hidden flex-col items-center justify-center w-full h-full p-2 gap-2 bg-primary rounded-tr-3xl rounded-br-3xl">
        <div className="flex items-center justify-center w-full min-h-[600px] p-2 gap-2 relative">
          <Image
            src="/mascot/mascot-2.png"
            alt="mas-2"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
