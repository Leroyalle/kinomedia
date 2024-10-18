import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
  try {
    const id = Number(params.id);

    const findUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!findUser) {
      return NextResponse.json({
        statusCode: 400,
        body: { error: 'Ошибка' },
      });
    }
    const data = await prisma.user.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        image: true,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    throw error;
  }
}
