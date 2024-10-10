'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Skeleton } from '../ui';

interface Props {
  className?: string;
}

export const RandomMovieSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <section>
      <Skeleton className="mb-4 w-[518px] h-[48px] " />
      <Skeleton
        className={cn(
          'flex flex-col relative h-[500px] w-full overflow-hidden before:z-10 after:z-10',
          className,
        )}
      />
    </section>
  );
};
