'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { MediaGroup } from './media-group';
import { useMedia } from '@/shared/hooks';
import { QueryFilters } from '@/shared/hooks/use-filters';
import { useMoviesStore } from '@/shared/store';
import { Api } from '@/shared/services/api-client';

interface Props {
  searchParams: QueryFilters;
  type: 'movie' | 'series' | 'cartoon';
  isSeries: boolean;
  className?: string;
}

export const MediaCollectionsGroups: React.FC<Props> = ({
  searchParams,
  type,
  isSeries,
  className,
}) => {
  const { items, loading } = useMedia(searchParams, isSeries);
  const mediaStore = useMoviesStore((state) => state);

  const [fetching, setFetching] = React.useState(false);
  const [elements, setElements] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  // const handleFetch = async () => {
  //   try {
  //     // const data = await Api.movies.getAll(`&limit=10&page=${currentPage}`);
  //     mediaStore.setItems(data.docs);
  //     setCurrentPage((prev) => prev + 1);
  //     console.log(currentPage);
  //   } catch (error) {
  //     console.log('Error', error);
  //   } finally {
  //     setFetching(false);
  //   }
  // };

  // React.useEffect(() => {
  //   if (fetching) {
  //     console.log('fetching');
  //     handleFetch();
  //   }
  // }, [fetching]);

  // React.useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler);
  //   return () => document.removeEventListener('scroll', scrollHandler);
  // }, []);

  // const scrollHandler = (): void => {
  //   if (
  //     document.documentElement.scrollHeight -
  //       (document.documentElement.scrollTop + window.innerHeight) <
  //     100
  //   ) {
  //     setFetching(true);
  //   }
  // };

  return (
    <div className={cn(className)}>
      <MediaGroup items={items.docs} loading={loading} />
    </div>
  );
};
