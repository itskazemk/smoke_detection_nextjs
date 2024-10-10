"use client";

import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

export function TransactionsTable({ data, columns }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // debugTable: true,
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-100 dark:bg-gray-800">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-b px-4 py-2 text-center text-sm font-medium text-gray-700 dark:border-gray-600 dark:text-gray-300"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white dark:bg-gray-900">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border-b px-4 py-2 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-300"
                >
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
