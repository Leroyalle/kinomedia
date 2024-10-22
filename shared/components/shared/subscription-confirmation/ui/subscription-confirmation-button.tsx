import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/components/ui';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  monthCount: number;
  pricePerCount: number;
  className?: string;
}

export const SubscriptionConfirmationButton: React.FC<Props> = ({
  monthCount,
  pricePerCount,
  className,
  ...props
}) => {
  return (
    <Button className={cn('w-full text-lg h-12', className)} variant={'secondary'} {...props}>
      Оплатить {pricePerCount * monthCount} ₽
    </Button>
  );
};
