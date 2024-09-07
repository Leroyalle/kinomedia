import React from 'react';
import { Skeleton } from '../ui';

interface Props {
  limit?: number;
}

export const MediaItemsSkeleton: React.FC<Props> = ({ limit = 20 }) => {
  return (
    <div className="flex items-center gap-10 flex-wrap w-fit justify-center">
      {...Array(limit)
        .fill(0)
        .map((_, index) => (
          <div className="grid grid-rows-[4fr,1fr] max-w-[250px]" key={index}>
            <Skeleton className="w-[250px] h-[375px] rounded-3xl" />
            <div className="flex flex-col gap-1 mt-1">
              <Skeleton className="w-[230px] h-[20px]" />
              <Skeleton className="w-[180px] h-[20px]" />
            </div>
          </div>
        ))}
    </div>
  );
};
