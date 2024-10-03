import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Skeleton } from '../ui';

interface Props {
  className?: string;
}

export const MainBannerSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex flex-col w-full h-full gap-20', className)}>
      <Skeleton className="w-full h-[465px]" />
      <div className="flex items-center gap-3">
        {...Array(7)
          .fill(0)
          .map((_, i) => <Skeleton key={i} className="w-[197px] h-[97px]" />)}
      </div>
    </div>
  );
};
