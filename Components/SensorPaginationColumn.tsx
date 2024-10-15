"use client";

export const SensorPaginationColumn = [
  { accessorKey: "sensorId", header: <span>Sensor ID</span> },
  { accessorKey: "location", header: <span>Location</span> },
  { accessorKey: "amount", header: <span>Amount</span> },
  { accessorKey: "smoke", header: <span>Smoke Level</span> },
  {
    accessorKey: "createdAt",
    header: <span>Created At</span>,
    cell: (info) => {
      return new Date(info.getValue())?.toLocaleString("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
    },
  },
];
