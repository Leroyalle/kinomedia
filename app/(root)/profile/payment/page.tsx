import { prisma } from '@/prisma/prisma-client';
import { Container, PaymentProfileWrapper } from '@/shared/components/shared';
import { getUserSession } from '@/shared/lib/get-user-session';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function PaymentProfilePage() {
  const session = await getUserSession();
  if (!session) {
    redirect('/not-auth');
  }

  const user = await prisma.user.findFirst({
    where: { id: Number(session.id) },
  });

  if (!user) {
    redirect('/not-auth');
  }

  const subscriptions = await prisma.completedSubscription.findMany({
    where: {
      userId: user.id,
    },
    include: {
      subscription: true,
    },
  });

  return (
    <Container className="px-16 py-10">
      <PaymentProfileWrapper items={subscriptions} />
    </Container>
  );
}

