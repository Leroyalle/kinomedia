import { prisma } from '@/prisma/prisma-client';
import { Container, PaymentVariants } from '@/shared/components/shared';
import React from 'react';

export default async function Payment() {
  const subscriptions = await prisma.subscription.findMany();
  return (
    <Container className="px-20 py-16">
      <PaymentVariants items={subscriptions} />
    </Container>
  );
}
