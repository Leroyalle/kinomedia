import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from '../title';
import { Observation } from '../observation';

interface Props {
  className?: string;
}

export const PaymentHeader: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('flex item-center justify-between', className)}>
      <Title text={'Тарифы подписок'} size={'lg'} />
      <Observation
        text={'Для оплаты подписки требуется отключить VPN'}
        variant="small"
        className="text-[#bababa]"
      />
    </header>
  );
};
