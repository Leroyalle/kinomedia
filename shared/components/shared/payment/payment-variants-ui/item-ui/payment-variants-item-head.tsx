import React from 'react';
import { cn } from '@/shared/lib/utils';
import { monthRules } from '@/shared/constants';
import { getPluralValues } from '@/shared/lib';

interface Props {
  monthCount: number;
  className?: string;
}

export const PaymentVariantsItemHead: React.FC<Props> = ({ monthCount, className }) => {
  return (
    <p className={cn('text-[28px] text-[#2e3ae5] uppercase font-bold', className)}>
      {monthCount} {getPluralValues(monthCount, monthRules)}
    </p>
  );
};
