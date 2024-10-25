import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Head, PayButton, Price } from './item-ui';

interface Props {
  session: boolean;
  id: number;
  monthCount: number;
  pricePerMonth: number;
  onClickPayButton: (id: number, monthCount: number, pricePerMonth: number) => void;
  className?: string;
}

export const PaymentVariantsItem: React.FC<Props> = ({
  session,
  id,
  monthCount,
  pricePerMonth,
  onClickPayButton,
  className,
}) => {
  const onClickBuy = () => {
    onClickPayButton(id, monthCount, pricePerMonth);
  };
  return (
    <article className={cn('bg-[hsla(0,0%,100%,.1)] rounded-3xl', className)}>
      <div className="p-6">
        <Head monthCount={monthCount} />
        <Price pricePerMonth={pricePerMonth} className="mt-20 mb-12" />
        <PayButton
          session={session}
          pricePerMonth={pricePerMonth}
          monthCount={monthCount}
          onClick={onClickBuy}
        />
      </div>
    </article>
  );
};
