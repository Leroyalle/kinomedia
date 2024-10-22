import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  pricePerMonth: number;
  className?: string;
}

export const PaymentVariantsItemPrice: React.FC<Props> = ({ pricePerMonth, className }) => {
  return (
    <div className={className}>
      <p className="text-5xl font-wide font-bold mb-2">{pricePerMonth} ₽</p>
      <p className="text-2xl">в месяц</p>
    </div>
  );
};
