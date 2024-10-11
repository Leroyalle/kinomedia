'use server';

import { prisma } from '@/prisma/prisma-client';
import { Prisma } from '@prisma/client';
import { hashSync } from 'bcrypt';

export async function registerUser(body: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      throw new Error('Пользователь уже существует');
    }

    await prisma.user.create({
      data: {
        email: body.email,
        fullName: body.fullName,
        password: hashSync(body.password, 10),
      },
    });
  } catch (error) {
    console.log('Error [REGISTER_USER]', error);
    throw error;
  }
}
