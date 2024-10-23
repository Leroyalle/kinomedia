import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  className?: string;
}

export const SubscriptionConfirmationBackground: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('absolute bottom-0 w-full h-1/2', className)}>
      <img
        src="/assets/modals/modal-back-subscription.webp"
        alt="Карточки фильмов"
        className="w-full h-full absolute inset-0"
        width={400}
        height={200}
      />
    </div>
  );
};
