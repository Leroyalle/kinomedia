import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const SubscriptionConfirmationOverlay: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 w-[100vw] h-[100vh] bg-[#09090c] m-0 p-12 flex justify-center',
        className,
      )}>
      {children}
    </div>
  );
};
