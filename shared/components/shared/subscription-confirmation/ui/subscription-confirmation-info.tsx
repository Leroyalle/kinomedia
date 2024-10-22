import React from 'react';
import { cn } from '@/shared/lib/utils';
import { CircleCheck } from 'lucide-react';
import { getPluralValues } from '../../../../lib/get-plural-values';
import { monthRules } from '../../../../constants/month-rules';

interface Props {
  pricePerMonth: number;
  monthCount: number;
  className?: string;
}

export const SubscriptionConfirmationInfo: React.FC<Props> = ({
  pricePerMonth,
  monthCount,
  className,
}) => {
  return (
    <ul className={cn('flex flex-col gap-2 text-lg', className)}>
      <li className="flex gap-x-2">
        <CircleCheck /> {pricePerMonth} ₽ / {monthCount} {getPluralValues(monthCount, monthRules)}
      </li>
      <li className="flex gap-x-2">
        <CircleCheck /> Отменить подписку можно в любой момент
      </li>
    </ul>
  );
};
