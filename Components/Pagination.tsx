"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { DatePickerInput } from "./SimpleInputs";
import { useState } from "react";
import { i2ToIsoGregorian } from "@/utils/helper";
import { DateObject } from "react-multi-date-picker";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 0;
  const { replace } = useRouter();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return replace(`${pathname}?${params.toString()}`);
  };

  function handlePrevious() {
    const pageIndex = createPageURL(currentPage - 1);
    console.log(pageIndex);
  }
  function handleNext() {
    const pageIndex = createPageURL(currentPage + 1);
    console.log(pageIndex);
  }

  return (
    <div>
      <div onClick={handlePrevious}>قبل</div>
      <div>
        صفحه {currentPage} از {totalPages}
      </div>
      <div onClick={handleNext}>بعد</div>
    </div>
  );
}
