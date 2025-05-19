"use client";
import React, { useMemo } from "react";
import { Pagination } from "@heroui/react";

export default function UICustomPagination({
  page,
  totalItems,
  rowsPerPage,
  onPageChange,
}) {
  const totalPages = useMemo(() => {
    return Math.ceil(totalItems / rowsPerPage) || 1;
  }, [totalItems, rowsPerPage]);

  return (
    <div className="flex flex-row items-center justify-center w-full p-2 gap-2">
      <div className="flex items-center justify-start w-full h-full p-2 gap-2">
        รวม {totalItems} รายการ
      </div>
      <div className="flex items-center justify-end w-full h-full p-2 gap-2">
        <Pagination
          isCompact
          showControls
          showShadow
          size="md"
          radius="lg"
          color="primary"
          variant="light"
          page={page}
          total={totalPages}
          onChange={onPageChange}
          className="text-center"
        />
      </div>
    </div>
  );
}
