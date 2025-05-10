"use client";

import { icData } from "@/constants/data";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo } from "react";

export default function PartsList({searchTerm}: {searchTerm: string}) {
  const columns = [
    { accessorKey: "No", header: "No" },
    { accessorKey: "Part Number", header: "Part Number" },
    { accessorKey: "Description", header: "Description" },
    { accessorKey: "Manufacturer", header: "Manufacturer" },
    { accessorKey: "Qty", header: "Qty" },
  ];

  const memoizedColumns = useMemo(() => columns, []);
  const memoizedData = useMemo(() => icData, []);

  const filteredData = useMemo(() => {
    return icData.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const table = useReactTable({
    columns: memoizedColumns,
    data: filteredData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-2 border-b bg-muted">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 border-b">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
