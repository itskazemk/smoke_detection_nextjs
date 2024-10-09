import { addSensorData } from "@/utils/actions";

export async function POST(req) {
  const obj = await req.json();
  console.log(obj);

  // const persist = addSensorData();

  // const data = await res.json();

  return Response.json("persist");
}
