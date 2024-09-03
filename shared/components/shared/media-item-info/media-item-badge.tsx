import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  ratingKp: number;
  className?: string;
}

export const MediaItemBadge: React.FC<Props> = ({ ratingKp, className }) => {
  return (
    <span className={cn('block px-3 py-1 bg-purple-700 rounded-sm text-xs font-bold', className)}>
      {ratingKp.toString().substring(0, 3)}
    </span>
  );
};
