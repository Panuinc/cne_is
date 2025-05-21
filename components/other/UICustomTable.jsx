"use client";

import React, { useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";

export default function UICustomTable({
  columns,
  data,
  pageNumber,
  rowsPerPage,
  error,
  topContent,
  bottomContent,
  renderCell,
}) {
  const paginatedData = useMemo(() => {
    const start = (pageNumber - 1) * rowsPerPage;
    return data.slice(start, start + rowsPerPage);
  }, [data, pageNumber, rowsPerPage]);

  const tableBodyContent = useMemo(() => {
    if (error) {
      return (
        <TableRow>
          <TableCell colSpan={columns.length}>{error}</TableCell>
        </TableRow>
      );
    }
    return paginatedData.map((item, index) => (
      <TableRow
        key={index}
        className="h-14 border-b-2 border-default text-center"
      >
        {(columnKey) => (
          <TableCell>{renderCell(item, index, columnKey)}</TableCell>
        )}
      </TableRow>
    ));
  }, [error, paginatedData, columns.length, renderCell]);

  return (
    <Table
      isHeaderSticky
      aria-label="Data Table"
      shadow="sm"
      topContent={topContent}
      topContentPlacement="outside"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            className="h-14"
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={error ? error : "No Data found"}>
        {tableBodyContent}
      </TableBody>
    </Table>
  );
}
