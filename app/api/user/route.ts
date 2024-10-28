import { prisma } from '@/prisma/prisma-client';
import { getUserSession } from '@/shared/lib/get-user-session';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
  try {
    // const user = await getServerSession({ req, ...authOptions });
    const user = await getUserSession();

    if (!user) {
      return NextResponse.json({ message: 'Вы не авторизованы' }, { status: 401 });
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(user.id),
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        image: true,
      },
    });

    if (!findUser) {
      return NextResponse.json({
        statusCode: 400,
        body: { error: 'Ошибка' },
      });
    }

    return NextResponse.json(findUser);
  } catch (error) {
    throw error;
  }
}
