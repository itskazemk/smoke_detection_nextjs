import Pagination from "@/Components/Pagination";
import SearchBar from "@/Components/SearchBar";
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
  const columns = [
    { accessorKey: "sensorId", header: <span>Sensor ID</span> },
    { accessorKey: "location", header: <span>Location</span> },
    { accessorKey: "amount", header: <span>Amount</span> },
    { accessorKey: "smoke", header: <span>Smoke Level</span> },
    { accessorKey: "createdAt", header: <span>Created At</span> },
  ];

  const startDate = searchParams?.startDate || "";
  const endDate = searchParams?.endDate || "";
  const currentPage = Number(searchParams?.page) || 0;

  const data = await getSensorsDataPagination({ pageIndex: currentPage, pageSize: 10 });

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
      <SearchBar />

      <div className="my-4">
        <TransactionsTable data={data} columns={columns} />
      </div>

      <Pagination totalPages={data.length} />
    </div>
  );
}
