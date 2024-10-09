import { addSensorData } from "@/utils/actions";
import { NextResponse } from "next/server";

interface input {
  sensorId: string;
  amount: number;
  smoke: boolean;
}

export async function POST(req: any) {
  const { sensorId, amount, smoke }: input = await req.json();
  // const data = await req.json();

  const persist = addSensorData({ sensorId, amount, smoke });

  return NextResponse.json("Success");
}
