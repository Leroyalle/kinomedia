import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  ratingKp: number;
  className?: string;
}

export const MediaItemBadge: React.FC<Props> = ({ ratingKp, className }) => {
  return (
    <span
      className={cn(
        'block px-3 py-1 bg-[linear-gradient(90deg,#48078f,#004fd6)] rounded-sm font-bold text-sm',
        className,
      )}>
      {ratingKp.toString().substring(0, 3)}
    </span>
  );
};
