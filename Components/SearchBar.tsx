"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { DatePickerInput } from "./SimpleInputs";
import { useState } from "react";
import { i2ToIsoGregorian } from "@/utils/helper";
import { DateObject } from "react-multi-date-picker";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const startDateinput = searchParams.get("startDate")?.toString();
  const endDateinput = searchParams.get("endDate")?.toString();

  const [startDate, setStartDate] = useState(new DateObject(new Date(startDateinput)));
  const [endDate, setEndDate] = useState(new DateObject(new Date(endDateinput)));

  function handleSearch(e) {
    e.preventDefault();
    const startDateString = i2ToIsoGregorian(startDate);
    const endDateString = i2ToIsoGregorian(endDate);
    const params = new URLSearchParams(searchParams);
    if (startDateString && endDateString) {
      params.set("startDate", startDateString);
      params.set("endDate", endDateString);
    } else {
      params.delete("startDate");
      params.delete("endDate");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <DatePickerInput name="startDate" value={startDate} onChange={setStartDate} />
      <DatePickerInput name="endDate" value={endDate} onChange={setEndDate} />
      <button type="submit" className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        جستجو
      </button>
    </form>
  );
}
