import { useInfiniteQuery } from '@tanstack/react-query';
import { Api } from '../services/api-client';
import { useInView } from 'react-intersection-observer';
import React from 'react';

export const useFetchSeries = (genre: string | undefined) => {
  const { ref, inView, entry } = useInView();
  const genreName = genre ? `genres.name=${genre}` : '';
  const initialParams = `&notNullFields=seriesLength&isSeries=true&limit=25&rating.kp=6-10&${genreName}`;
  // FIXME: если лимит меньше чем полученный массив, запрос не отправлять
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['series', genre],
      queryFn: ({ pageParam }) => Api.movies.getAll(`${initialParams}&page=${pageParam}`),
      select: (data) => data.pages.map((item) => item.docs),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
        if (lastPage.docs.length === 0) {
          return;
        }
        return lastPageParam + 1;
      },
      refetchOnWindowFocus: false,
    });

  React.useEffect(() => {
    if (entry && inView) {
      fetchNextPage();
    }
  }, [inView, entry]);

  return {
    data,
    ref,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  };
};
