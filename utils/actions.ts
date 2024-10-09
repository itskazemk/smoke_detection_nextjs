import db from "@/prisma/db";

export async function getAllSensorsData() {
  const test = await db.driver.findMany();
  return test;
}

export async function addSensorData() {
  const persist = await db.driver.create({ data: { sensorId: "1", smoke: true, status: "working" } });
  return persist;
}
