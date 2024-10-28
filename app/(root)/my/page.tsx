import { prisma } from '@/prisma/prisma-client';
import { Container, MyMediaWrapper } from '@/shared/components/shared';
import { getUserSession } from '@/shared/lib/get-user-session';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function My() {
  const session = await getUserSession();
  if (!session) {
    redirect('/not-auth');
  }

  const user = await prisma.user.findFirst({
    where: {
      id: Number(session.id),
    },
  });

  if (!user) {
    redirect('/not-auth');
  }

  return (
    <Container>
      <MyMediaWrapper />
    </Container>
  );
}
