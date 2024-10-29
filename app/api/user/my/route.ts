import { MyMedia } from '@/@types/my';
import { prisma } from '@/prisma/prisma-client';
import { getUserSession } from '@/shared/lib/get-user-session';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
  try {
    // const user = await getServerSession({ req, ...authOptions });
    const user = await getUserSession();
    const skip = req.nextUrl.searchParams.get('skip');
    const take = req.nextUrl.searchParams.get('take');

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

    const myMedia = await prisma.selectedMedia.findMany({
      where: {
        userId: findUser.id,
      },
      skip: Number(skip) || 0,
      take: Number(take) || undefined,
      select: {
        id: true,
        name: true,
        mediaId: true,
        previewUrl: true,
        year: true,
        movieLength: true,
        seriesLength: true,
        ratingKp: true,
      },
    });

    return NextResponse.json(myMedia);
  } catch (error) {
    throw error;
  }
}

export async function POST(req: NextRequest, { params }: { params: { id: number } }) {
  try {
    // const user = await getServerSession({ req, ...authOptions });
    const user = await getUserSession();
    const data = (await req.json()) as MyMedia;

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

    const myMedia = await prisma.selectedMedia.create({
      data: {
        userId: findUser.id,
        mediaId: data.mediaId,
        name: data.name,
        previewUrl: data.previewUrl,
        year: data.year,
        movieLength: data.movieLength,
        seriesLength: data.seriesLength,
        ratingKp: data.ratingKp,
      },
    });

    return NextResponse.json(myMedia);
  } catch (error) {
    throw error;
  }
}
export async function DELETE(req: NextRequest, { params }: { params: { id: number } }) {
  try {
    // const user = await getServerSession({ req, ...authOptions });
    const user = await getUserSession();
    const data = (await req.json()) as { mediaId: number };

    if (!user) {
      return NextResponse.json({ message: 'Вы не авторизованы' }, { status: 401 });
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(user.id),
      },
    });

    if (!findUser) {
      return NextResponse.json({
        message: 'Пользователь не найден',
      });
    }

    const selectedMedia = await prisma.selectedMedia.findFirst({
      where: {
        AND: [{ userId: findUser.id }, { mediaId: Number(data.mediaId) }],
      },
    });

    if (!selectedMedia) {
      return NextResponse.json({ message: 'Запись не найдена', status: 404 });
    }

    await prisma.selectedMedia.delete({
      where: {
        id: selectedMedia.id,
      },
    });

    return NextResponse.json({ message: 'Успешно удалено' });
  } catch (error) {
    throw error;
  }
}
