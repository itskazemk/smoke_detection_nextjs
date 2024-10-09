-- CreateTable
CREATE TABLE "Record" (
    "id" TEXT NOT NULL,
    "sensorId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "smoke" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);
