import React from 'react';
import { cn } from '@/shared/lib/utils';
import { PaymentHeader } from './payment-header';
import { PaymentItem } from './payment-variants-ui';
import { Subscription } from '@prisma/client';

interface Props {
  items: Subscription[];
  className?: string;
}

export const PaymentVariants: React.FC<Props> = ({ items, className }) => {
  return (
    <section className={cn('', className)}>
      <PaymentHeader className="mb-4" />
      <ul className="grid grid-rows-2 grid-cols-3 gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <PaymentItem monthCount={item.monthCount} pricePerMonth={item.pricePerMonth} />
          </li>
        ))}
      </ul>
    </section>
  );
};
