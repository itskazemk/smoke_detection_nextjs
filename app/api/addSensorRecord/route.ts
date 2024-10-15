import { addSensorData } from "@/utils/actions";
import { NextResponse } from "next/server";

interface input {
  sensorId: string;
  amount: number;
  smoke: boolean;
  location: string;
}

export async function POST(req: any) {
  const { sensorId, location, amount, smoke }: input = await req.json();
  // const data = await req.json();

  const persist = addSensorData({ sensorId, location, amount, smoke });

  return NextResponse.json(persist);
}
