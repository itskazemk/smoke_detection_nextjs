"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

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
    createPageURL(currentPage - 1);
  }

  function handleNext() {
    createPageURL(currentPage + 1);
  }

  return (
    <div className="mt-4 flex items-center justify-between">
      <button
        onClick={handlePrevious}
        className="rounded-md bg-gray-200 px-3 py-1 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500"
        disabled={currentPage === 1}
      >
        قبل
      </button>

      <div className="text-sm text-gray-600 dark:text-gray-300">
        صفحه {currentPage} از {totalPages}
      </div>

      <button
        onClick={handleNext}
        className="rounded-md bg-gray-200 px-3 py-1 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500"
        disabled={currentPage === totalPages}
      >
        بعد
      </button>
    </div>
  );
}
