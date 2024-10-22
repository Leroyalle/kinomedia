import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Head, PayButton, Price } from './item-ui';
import { useSubscriptionModalStore } from '@/shared/store';

interface Props {
  monthCount: number;
  pricePerMonth: number;
  onClosePayButton: VoidFunction;
  className?: string;
}

export const PaymentVariantsItem: React.FC<Props> = ({
  monthCount,
  pricePerMonth,
  onClosePayButton,
  className,
}) => {
  const setValues = useSubscriptionModalStore((store) => store.setValues);

  const onClickPayButton = () => {
    setValues(monthCount, pricePerMonth);
    onClosePayButton();
  };
  return (
    <article className={cn('bg-[hsla(0,0%,100%,.1)] rounded-3xl', className)}>
      <div className="p-6">
        <Head monthCount={monthCount} />
        <Price pricePerMonth={pricePerMonth} className="mt-20 mb-12" />
        <PayButton
          pricePerMonth={pricePerMonth}
          monthCount={monthCount}
          onClick={onClickPayButton}
        />
      </div>
    </article>
  );
};
