'use client';
import React from 'react';
import { Title } from '../title';
import { CancelAlert, Empty, PaymentProfileSubscription } from './ui';
import { CompletedSubscriptionWithRelation } from '@/@types/subscription';
import { getPluralValues } from '@/shared/lib';
import { monthRules } from '@/shared/constants';
import toast from 'react-hot-toast';
import { cancelSubscription, updateDataPath } from '@/app/actions';

interface Props {
  items: CompletedSubscriptionWithRelation[];
  className?: string;
}

export const PaymentProfileSubscriptionsList: React.FC<Props> = ({ items, className }) => {
  const activeSubscription = items.find((item) => item.activeStatus === 'ACTIVE');
  const [isOpened, setIsOpened] = React.useState(false);

  if (!activeSubscription) {
    return (
      <section className={className}>
        <Title text={'Подписка'} size={'lg'} className="mb-4" />
        <Empty />
      </section>
    );
  }

  const onClickAlert = async (confirm: Boolean) => {
    try {
      if (confirm) {
        toast.success('Подписка отменена', {
          icon: '✅',
        });
        await cancelSubscription(activeSubscription.id);
        await updateDataPath('/profile/payment');
        setIsOpened(false);
      } else {
        setIsOpened(false);
      }
    } catch (error) {
      console.log(error);
      toast.error('Не удалось отменить подписку', {
        icon: '❌',
      });
    }
  };
  return (
    <section className={className}>
      <Title text={'Подписка'} size={'lg'} className="mb-4" />
      <PaymentProfileSubscription
        name={getPluralValues(activeSubscription.subscription.monthCount, monthRules)}
        monthCount={activeSubscription.subscription.monthCount}
        expires={activeSubscription.expires}
        status={activeSubscription.activeStatus}
        onClickCancel={() => setIsOpened(true)}
      />
      <CancelAlert onClickConfirm={onClickAlert} isOpen={isOpened} />
    </section>
  );
};
