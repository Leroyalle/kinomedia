import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/components/ui';
import { getTotalPriceString } from '@/shared/lib';

interface Props {
  monthCount: number;
  pricePerMonth: number;
  onClick: VoidFunction;
  className?: string;
}

export const PaymentVariantsItemButton: React.FC<Props> = ({
  monthCount,
  pricePerMonth,
  onClick,
  className,
}) => {
  const totalPrice = getTotalPriceString(monthCount, pricePerMonth);

  return (
    <Button
      onClick={onClick}
      variant={'secondary'}
      className={cn('w-full text-lg h-12', className)}>
      {totalPrice}
    </Button>
  );
};
