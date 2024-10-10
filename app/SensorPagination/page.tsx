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
    {
      accessorKey: "sensorId",
      header: <span>sensorId</span>,
      //   cell: (info) => (
      //     <Link to={`${info.getValue()}`}>
      //       <ArrowRightEndOnRectangleIcon className="w-6" />
      //     </Link>
      //   ),
    },
    // { accessorKey: "location", header:  <span>slotId</span> },
    { accessorKey: "amount", header: <span>amount</span> },
    {
      accessorKey: "smoke",
      header: <span>smoke</span>,
      //   cell: (info) => `ریال ${numberWithCommas(info.getValue())}`,
    },
    {
      accessorKey: "createdAt",
      header: <span>createdAt</span>,
      //   cell: (info) => `ریال ${numberWithCommas(info.getValue())}`,
    },
  ];

  const startDate = searchParams?.startDate || "";
  const endDate = searchParams?.endDate || "";
  const currentPage = Number(searchParams?.page) || 0;

  const data = await getSensorsDataPagination({ pageIndex: currentPage, pageSize: 10 });
  console.log(111, currentPage);

  return (
    <div>
      <SearchBar />

      <div>
        <TransactionsTable data={data} columns={columns} />
      </div>
      <Pagination totalPages={10} />
    </div>
  );
}
