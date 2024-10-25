import { prisma } from '@/prisma/prisma-client';
import { Container, PaymentVariants } from '@/shared/components/shared';
import { getUserSession } from '@/shared/lib/get-user-session';
import React from 'react';
export default async function Payment() {
  const session = await getUserSession();
  const subscriptions = await prisma.subscription.findMany();

  return (
    <Container className="px-20 py-16">
      <PaymentVariants session={Boolean(session)} items={subscriptions} />
    </Container>
  );
}
