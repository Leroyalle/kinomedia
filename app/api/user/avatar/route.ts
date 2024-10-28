import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { getUserSession } from '@/shared/lib/get-user-session';

const supportedTypes = ['image/jpeg', 'image/png', 'image/svg', 'image/svg+xml'];

export async function POST(req: NextRequest, { params }: { params: { id: number } }) {
  try {
    // const user = await getServerSession({ req, ...authOptions });
    const user = await getUserSession();

    if (!user) {
      return NextResponse.json({ message: 'Вы не авторизованы' }, { status: 401 });
    }
    const formData = await req.formData();
    const file = formData.get('avatar');

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (!file.type || !supportedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Unsupported image type' }, { status: 400 });
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(user.id),
      },
    });

    if (!findUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');

    const extension = path.extname(file.name);

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uniqueSuffix = Date.now() + Math.round(Math.random() * 5);
    const newFileName = `${uniqueSuffix}${extension}`;
    const newPath = path.join(uploadsDir, newFileName);
    const filePath = '/uploads/' + newFileName;

    await fs.writeFile(newPath, buffer);

    if (findUser.image) {
      const oldFilePath = path.join(process.cwd(), 'public', findUser.image);
      try {
        await fs.unlink(oldFilePath);
        console.log('Файл успешно удален');
      } catch (error) {
        console.log('Не удалось удалить файл');
      }
    }

    await prisma.user.update({
      where: {
        id: findUser.id,
      },
      data: {
        image: filePath,
      },
    });

    return NextResponse.json({
      success: true,
      filePath,
    });
  } catch (error) {
    throw error;
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: number } }) {
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
    });

    if (!findUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const data = await prisma.user.update({
      where: {
        id: findUser.id,
      },
      data: {
        image: null,
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
