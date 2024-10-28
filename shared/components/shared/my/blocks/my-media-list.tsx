'use client';
import React from 'react';
import { useFetchMyMedia } from '@/shared/hooks';
import { MediaItemsSkeleton } from '../../media-items-skeleton';
import { MyMediaCollection } from './my-media-collection';
import { Loader } from 'lucide-react';

interface Props {
  className?: string;
}

export const MyMediaList: React.FC<Props> = ({ className }) => {
  const { data, ref, isFetchingNextPage, isLoading, isError } = useFetchMyMedia();

  if (isLoading) {
    return <MediaItemsSkeleton limit={10} />;
  }

  if (isError) {
    return <h1>Error fetching</h1>;
  }

  if (!data) {
    return <h1>Not found</h1>;
  }

  return (
    <div className={className}>
      <MyMediaCollection pages={data} />
      {isFetchingNextPage && <Loader className="w-8 h-8 animate-spin mx-auto" />}
      <div ref={ref} />
    </div>
  );
};
