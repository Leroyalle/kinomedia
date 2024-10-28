import React from 'react';
import { BackButton } from '../back-button';
import { PaymentProfileSubscriptionsList } from './payment-profile-subscriptions-list';
import { CompletedSubscriptionWithRelation } from '@/@types/subscription';

interface Props {
  items: CompletedSubscriptionWithRelation[];
  className?: string;
}
export const PaymentProfileWrapper: React.FC<Props> = ({ items, className }) => {
  return (
    <div className={className}>
      <BackButton className="mb-8 p-0 text-white" />
      <PaymentProfileSubscriptionsList items={items} />
    </div>
  );
};
