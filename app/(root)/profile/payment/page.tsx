import { prisma } from '@/prisma/prisma-client';
import { Container } from '@/shared/components/shared';
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
  // TODO: дописать страницу

  return <Container className="px-20 py-16">Подписки</Container>;
}
