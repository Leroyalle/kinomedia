import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/components/ui';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const SubscriptionUiCancelButton: React.FC<Props> = ({ className, ...props }) => {
  return (
    <Button variant={'link'} className={cn('p-0 text-red-600', className)} {...props}>
      Отменить подписку
    </Button>
  );
};
