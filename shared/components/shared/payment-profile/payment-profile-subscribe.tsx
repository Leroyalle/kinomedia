import React from 'react';
import { Title } from '../title';
import { Empty } from './ui';

interface Props {
  className?: string;
}

export const PaymentProfileSubscribe: React.FC<Props> = ({ className }) => {
  return (
    <section className={className}>
      <Title text={'Подписка'} size={'lg'} className="mb-4" />
      <Empty />
    </section>
  );
};
