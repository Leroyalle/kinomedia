import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/components/ui';
import { getPluralValues } from '@/shared/lib';
import { monthRules } from '@/shared/constants';

interface Props {
  monthCount: number;
  pricePerMonth: number;
  className?: string;
}

export const PaymentVariantsUiItem: React.FC<Props> = ({
  monthCount,
  pricePerMonth,
  className,
}) => {
  return (
    <article className={cn('bg-[hsla(0,0%,100%,.1)] rounded-3xl', className)}>
      <div className="p-6">
        <p className="text-[28px] text-[#5659ff] uppercase font-bold">
          {getPluralValues(monthCount, monthRules)}
        </p>
        <div className="mt-20 mb-12">
          <p className="text-5xl font-wide font-bold mb-2 ">{pricePerMonth} ₽</p>
          <p className="text-2xl">в месяц</p>
        </div>
        <Button variant={'secondary'} className="w-full text-lg h-12">
          Оформить за {pricePerMonth} ₽
        </Button>
      </div>
    </article>
  );
};
