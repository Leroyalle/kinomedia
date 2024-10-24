import React from 'react';
import { monthRules } from '@/shared/constants';
import { getPluralValues } from '@/shared/lib';

interface Props {
  fullName: string;
  monthCount: number;
  totalPrice: number;
  paymentUrl: string;
}

export const PaySubscriptionTemplate: React.FC<Props> = ({
  fullName,
  monthCount,
  totalPrice,
  paymentUrl,
}) => {
  const subScriptionVariant = `${monthCount} ${getPluralValues(monthCount, monthRules)}`;
  return (
    <div>
      <h1>Привет, {fullName}!</h1>
      <p>
        Оплати подписку на {subScriptionVariant} на сумму {totalPrice} перейдя по{' '}
        <a href={paymentUrl}>этой ссылке</a>
      </p>
    </div>
  );
};
