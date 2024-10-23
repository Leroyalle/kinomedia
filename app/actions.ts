'use server';

import { prisma } from '@/prisma/prisma-client';
import { PaySubscriptionTemplate } from '@/shared/components/shared/email-templates';
import { createPayment, sendEmail } from '@/shared/lib';
import { getUserSession } from '@/shared/lib/get-user-session';
import { Prisma, StatusEnum } from '@prisma/client';
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

export async function updateUser(body: Prisma.UserUpdateInput) {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error('Пользователь не найден');
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    if (!findUser) {
      return null;
    }

    await prisma.user.update({
      where: {
        id: findUser.id,
      },
      data: {
        fullName: body.fullName,
        email: body.email,
        password: body.password ? hashSync(body.password as string, 10) : findUser.password,
      },
    });
  } catch (error) {
    console.log('Error [UPDATE_USER]', error);
    throw error;
  }
}

export async function deleteUser() {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      return null;
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    if (!findUser) {
      return null;
    }

    await prisma.user.delete({
      where: {
        id: findUser.id,
      },
    });
  } catch (error) {
    console.log('Error [DELETE_USER]', error);
    throw error;
  }
}

export async function resetAvatar() {
  const currentUser = await getUserSession();

  if (!currentUser) {
    return null;
  }

  const findUser = await prisma.user.findFirst({
    where: {
      id: Number(currentUser.id),
    },
  });

  if (!findUser) {
    return null;
  }

  await prisma.user.update({
    where: {
      id: findUser.id,
    },
    data: {
      image: null,
    },
  });
}

export async function createSubscription(subscriptionId: number) {
  const session = await getUserSession();

  if (!session) {
    return null;
  }

  const findUser = await prisma.user.findFirst({
    where: {
      id: Number(session.id),
    },
  });

  if (!findUser) {
    throw new Error('Account not found');
  }

  const findSubscription = await prisma.subscription.findFirst({
    where: {
      id: subscriptionId,
    },
  });

  if (!findSubscription) {
    throw new Error('Subscription not found');
  }

  const createdSubscription = await prisma.completedSubscription.create({
    data: {
      userId: findUser.id,
      expires: new Date(new Date().setMonth(1, 6)).toISOString(),
      status: StatusEnum.PENDING,
    },
  });

  const totalPrice = findSubscription.monthCount * findSubscription.pricePerMonth;

  const paymentData = await createPayment({
    amount: totalPrice,
    description: 'Оплата подписки' + createdSubscription.id,
    orderId: createdSubscription.id,
  });

  if (!paymentData) {
    throw new Error('Не удалось создать заказ');
  }

  const paymentUrl = paymentData.confirmation.confirmation_url;
  await sendEmail(
    findUser.email,
    'Kinomedia | Оплата подписки',
    PaySubscriptionTemplate({
      fullName: findUser.fullName,
      monthCount: findSubscription.monthCount,
      totalPrice,
      paymentUrl,
    }),
  );

  return paymentUrl;
}
