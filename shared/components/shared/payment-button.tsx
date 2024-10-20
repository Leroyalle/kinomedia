import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '../ui';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const PaymentButton: React.FC<Props> = ({ className }) => {
  return (
    <Link className={className} href="/payment">
      <Button variant={'secondary'}>7 дней за 0 ₽</Button>
    </Link>
  );
};
