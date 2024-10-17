import Pagination from "@/Components/Pagination";
import SearchBar from "@/Components/SearchBar";
import { SensorPaginationColumn } from "@/Components/SensorPaginationColumn";
import { TransactionsTable } from "@/Components/Table";
import { getSensorsDataPagination } from "@/utils/actions";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    startDate?: string;
    endDate?: string;
    page?: string;
  };
}) {
  // const startDate = searchParams?.startDate || null;
  // const endDate = searchParams?.endDate || "";
  const currentPage = Number(searchParams?.page) || 0;

  const fetchedData = await getSensorsDataPagination({ pageIndex: currentPage - 1, pageSize: 10 });

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
      {/* <SearchBar /> */}

      <div className="my-4">
        <TransactionsTable data={fetchedData.data} columns={SensorPaginationColumn} />
      </div>

      <Pagination totalPages={Math.ceil(fetchedData.count / 10)} />
    </div>
  );
}
