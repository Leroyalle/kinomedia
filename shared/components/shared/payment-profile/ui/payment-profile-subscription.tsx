import React from 'react';
import { cn } from '@/shared/lib/utils';
import { ActiveStatusEnum } from '@prisma/client';
import { Title } from '../../title';
import { CancelButton, Expires, Status } from './subscription-ui';

interface Props {
  name: string;
  monthCount: number;
  expires: Date;
  status: ActiveStatusEnum;
  onClickCancel: VoidFunction;
  className?: string;
}

export const PaymentProfileSubscription: React.FC<Props> = ({
  name,
  monthCount,
  expires,
  status,
  onClickCancel,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-y-4 bg-[hsla(0,0%,100%,.1)] rounded-3xl p-12 border-2 border-gray-900',
        className,
      )}>
      <div className="flex items-center justify-between">
        <Title text={`Подписка ${monthCount} ${name}`} size={'md'} />
        <Status status={status} />
      </div>

      <div className="flex items-center justify-between">
        <Expires expires={expires} />
        <CancelButton onClick={() => onClickCancel()} />
      </div>
    </div>
  );
};
