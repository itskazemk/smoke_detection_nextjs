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
    console.log(i2ToIsoGregorian(startDate), i2ToIsoGregorian(endDate));

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
    <form onSubmit={handleSearch} className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      {/* <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      /> */}
      <DatePickerInput name={"startDate"} value={startDate} onChange={setStartDate} />
      <DatePickerInput name={"endDate"} value={endDate} onChange={setEndDate} />

      <button>جستجو</button>
    </form>
  );
}
