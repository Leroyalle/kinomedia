import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { Api } from '../services/api-client';

export const useFetchFilms = (genre: string | undefined) => {
  const { ref, inView, entry } = useInView();
  const genreName = genre ? `genres.name=${genre}` : '';
  const initialParams = `&notNullFields=movieLength&isSeries=false&limit=10&rating.kp=6-10&${genreName}`;
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['films', genre],
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
