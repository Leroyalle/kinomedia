'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { PaymentHeader } from './payment-header';
import { Subscription } from '@prisma/client';
import { PaymentItem } from './payment-variants-ui';
import { SubscriptionConfirmation } from '../subscription-confirmation';
import { useSubscriptionModalStore } from '@/shared/store';

interface Props {
  items: Subscription[];
  className?: string;
}

export const PaymentVariants: React.FC<Props> = ({ items, className }) => {
  const [isOpened, setIsOpened] = React.useState(false);

  if (!items || items.length === 0) {
    return null;
  }
  return (
    <section className={className}>
      <PaymentHeader className="mb-4" />
      <ul className="grid grid-rows-2 grid-cols-3 gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <PaymentItem
              id={item.id}
              monthCount={item.monthCount}
              pricePerMonth={item.pricePerMonth}
              onClosePayButton={() => setIsOpened(true)}
            />
          </li>
        ))}
      </ul>
      {isOpened && <SubscriptionConfirmation onClose={() => setIsOpened(false)} />}
    </section>
  );
};
