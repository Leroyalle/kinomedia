import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  ratingKp: number;
  className?: string;
}

export const MediaItemBadge: React.FC<Props> = ({ ratingKp, className }) => {
  return (
    <span className={cn('grid place-items-center', className)}>
      {ratingKp.toString().substring(0, 3)}
    </span>
  );
};
