import React from 'react';
import { Button } from '../ui';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const PaymentButton: React.FC<Props> = ({ className }) => {
  return (
    <Link className={className} href="/payment">
      <Button variant={'secondary'}>Смотреть тарифы</Button>
    </Link>
  );
};
