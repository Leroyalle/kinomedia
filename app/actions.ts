'use server';
import { prisma } from '@/prisma/prisma-client';
import {
  PaySubscriptionTemplate,
  VerificationCodeTemplate,
} from '@/shared/components/shared/email-templates';
import { createPayment, sendEmail } from '@/shared/lib';
import { getUserSession } from '@/shared/lib/get-user-session';
import { ActiveStatusEnum, PaymentStatusEnum, Prisma } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { revalidatePath } from 'next/cache';

export async function registerUser(body: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      if (!user?.verified) {
        throw new Error('Почта не подтверждена');
      }
      throw new Error('Пользователь уже существует');
    }

    const createdUser = await prisma.user.create({
      data: {
        email: body.email,
        fullName: body.fullName,
        password: hashSync(body.password, 10),
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.verificationCode.create({
      data: {
        code,
        userId: createdUser.id,
      },
    });

    await sendEmail(
      createdUser.email,
      'Kinomedia / 📩 Подтверждение регистрации',
      VerificationCodeTemplate({ code }),
    );
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

    await prisma.user.update({
      where: {
        id: findUser.id,
      },
      data: {
        image: null,
      },
    });
  } catch (error) {
    console.log('Error [RESET_AVATAR]', error);
  }
}

export async function createSubscription(subscriptionId: number) {
  try {
    const session = await getUserSession();

    if (!session) {
      return null;
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(session.id),
      },
      include: {
        completedSubscription: {
          where: {
            activeStatus: ActiveStatusEnum.ACTIVE,
          },
        },
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
    const currentTime = new Date();
    const createdSubscription = await prisma.completedSubscription.create({
      data: {
        userId: findUser.id,
        subscriptionId: findSubscription.id,
        expires: new Date(
          new Date().setMonth(
            currentTime.getMonth() + findSubscription.monthCount,
            currentTime.getDate(),
          ),
        ).toISOString(),
        // ! нет доступа к yookassa, не могу отправлять колбек успешной оплаты на роут, через который буду менять статус подпискки
        activeStatus: ActiveStatusEnum.ACTIVE,
        paymentStatus: PaymentStatusEnum.SUCCEEDED,
      },
    });

    if (findUser.completedSubscription.length > 0) {
      await prisma.completedSubscription.updateMany({
        where: {
          id: {
            in: findUser.completedSubscription.map((sub) => sub.id),
          },
        },
        data: {
          activeStatus: ActiveStatusEnum.CANCELLED,
        },
      });
    }

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
  } catch (error) {
    console.log('Error [CREATE_SUBSCRIPTION]', error);
  }
}

export async function cancelSubscription(id: number) {
  try {
    await prisma.completedSubscription.update({
      where: {
        id,
      },
      data: {
        activeStatus: 'CANCELLED',
      },
    });
  } catch (error) {
    throw error;
  }
}

export async function updateDataPath(path: string) {
  if (!path.startsWith('/')) {
    console.log('The path must start at /');
  }
  revalidatePath(path);
}
