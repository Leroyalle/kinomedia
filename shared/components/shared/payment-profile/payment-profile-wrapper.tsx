import React from 'react';
import { BackButton } from '../back-button';
import { PaymentProfileSubscribe } from './payment-profile-subscribe';

interface Props {
  className?: string;
}

export const PaymentProfileWrapper: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <BackButton className="mb-8 p-0 text-white" />
      <PaymentProfileSubscribe />
    </div>
  );
};
