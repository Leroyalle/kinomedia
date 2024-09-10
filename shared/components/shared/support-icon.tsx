import React from 'react';
import { cn } from '@/shared/lib/utils';
import { MessagesSquare } from 'lucide-react';

interface Props {
  className?: string;
}

export const SupportIcon: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex justify-end w-[200px]', className)}>
      <MessagesSquare size={30} />
    </div>
  );
};
