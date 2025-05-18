import React from "react";

export default function UIHome() {
  return (
    <>
      <div className="flex items-center justify-center w-full p-2 gap-2 bg-white border-b-2 border-default">
        <div className="flex items-center justify-start w-full h-full p-2 gap-2">
          Header
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark bg-default overflow-auto">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          1
        </div>
      </div>
    </>
  );
}
