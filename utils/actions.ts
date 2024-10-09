import db from "@/prisma/db";

export async function getAllSensorsData() {
  const test = await db.record.findMany();
  return test;
}

export async function addSensorData({ sensorId, amount, smoke }: any) {
  const persist = await db.record.create({ data: { sensorId, amount, smoke } });
  return persist;
}
