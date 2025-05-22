import React from "react";
import { Home } from "@/components/icons/icons";

export default function UIHeader({ Header }) {
  return (
    <div className="flex items-center justify-center w-full p-2 gap-2 border-b-1 border-default text-primary font-[600]">
      <div className="flex items-center justify-start w-full h-full p-2 gap-2">
        <Home /> {Header}
      </div>
    </div>
  );
}
