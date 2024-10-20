import { prisma } from './prisma-client';

async function up() {
  await prisma.subscription.createMany({
    data: [
      {
        monthCount: 1,
        pricePerMonth: 299,
      },
      {
        monthCount: 3,
        pricePerMonth: 249,
      },
      {
        monthCount: 6,
        pricePerMonth: 216,
      },
      {
        monthCount: 12,
        pricePerMonth: 166,
      },
    ],
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Subscription" RESTART IDENTITY CASCADE`;
}
async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
