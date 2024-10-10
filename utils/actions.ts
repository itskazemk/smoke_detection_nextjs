import db from "@/prisma/db";

export async function getAllSensorsData() {
  const data = await db.record.findMany();
  return data;
}

export async function getSensorsDataPagination({ pageIndex, pageSize }) {
  const data = await db.record.findMany({ skip: pageIndex, take: pageSize });
  return data;
}

export async function getSensorsDataSmokedPagination({ pageIndex, pageSize }) {
  const data = await db.record.findMany({ skip: pageIndex, take: pageSize });
  return data;
}

export async function addSensorData({ sensorId, amount, smoke }: any) {
  const persist = await db.record.create({ data: { sensorId, amount, smoke } });
  return persist;
}
