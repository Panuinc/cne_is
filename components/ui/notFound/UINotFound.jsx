"use client";

import UIAnimatedText from "@/components/other/UIAnimatedText";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";

export default function UINotFound() {
  return (
    <div className="flex flex-row items-center justify-center w-full h-full xl:w-6/12 gap-2 bg-white shadow-md rounded-3xl">
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
        <UIAnimatedText>เอ๊ะ!! มีบางอย่างผิดนิดหน่อย...</UIAnimatedText>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          หน้าที่คุณกำลังมองหาไม่มีอยู่
        </div>

        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Button
            color="primary"
            size="md"
            radius="xlgl"
            type="submit"
            className="flex items-center justify-center w-6/12 h-full p-4 gap-2"
          >
            <Link href="/home">กลับหน้าหลัก</Link>
          </Button>
        </div>
      </div>

      <div className="xl:flex hidden flex-col items-center justify-center w-full h-full p-2 gap-2 bg-primary rounded-tr-3xl rounded-br-3xl">
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
