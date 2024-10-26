import React from 'react';
import { cn } from '@/shared/lib/utils';
import { subscriptionStatusData } from '@/shared/constants';
import { ActiveStatusEnum } from '@prisma/client';

interface Props {
  status: ActiveStatusEnum;
  className?: string;
}

export const SubscriptionUiStatus: React.FC<Props> = ({ status, className }) => {
  return <p className={className}>Статус: {subscriptionStatusData[status]}</p>;
};
