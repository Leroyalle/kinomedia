'use client';
import React from 'react';
import { PaymentHeader } from './payment-header';
import { Subscription } from '@prisma/client';
import { PaymentItem } from './payment-variants-ui';
import { SubscriptionConfirmation } from '../subscription-confirmation';
import { useSubscriptionModalStore } from '@/shared/store';

interface Props {
  session: boolean;
  items: Subscription[];
  className?: string;
}

export const PaymentVariants: React.FC<Props> = ({ session, items, className }) => {
  const setValues = useSubscriptionModalStore((store) => store.setValues);
  const [isOpened, setIsOpened] = React.useState(false);

  const onClickPayButton = (id: number, monthCount: number, pricePerMonth: number) => {
    setValues(id, monthCount, pricePerMonth);
    setIsOpened(true);
  };
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
              session={session}
              id={item.id}
              monthCount={item.monthCount}
              pricePerMonth={item.pricePerMonth}
              onClickPayButton={onClickPayButton}
            />
          </li>
        ))}
      </ul>
      {isOpened && <SubscriptionConfirmation onClose={() => setIsOpened(false)} />}
    </section>
  );
};
