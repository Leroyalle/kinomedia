'use client';
import React from 'react';
import { useFetchFilms } from '@/shared/hooks';
import { MediaItemsSkeleton } from './media-items-skeleton';
import { MediaCollection } from './media-collection';
import { QueryFilters } from '@/shared/hooks/use-filters';
import { Loader } from 'lucide-react';

interface Props {
  searchParams: QueryFilters;
  className?: string;
}

export const FilmsCollectionsGroup: React.FC<Props> = ({ searchParams, className }) => {
  const { data, ref, isLoading, isError, isFetchingNextPage } = useFetchFilms(searchParams.genre);

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
      <MediaCollection pages={data} />
      {isFetchingNextPage && <Loader className="w-8 h-8 animate-spin mx-auto" />}
      <div ref={ref} />
    </div>
  );
};
