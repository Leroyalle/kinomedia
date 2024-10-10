import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';
import { Api } from '../services/api-client';
import React from 'react';

export const useFetchRandomMovie = (params: string) => {
  const queryClient = useQueryClient();
  const [trigger, setTrigger] = React.useState(1);

  const onNextMovie = () => {
    queryClient.removeQueries({
      queryKey: ['randomMovie', '&rating.kp=7-10&age-16&notNullFields=description', trigger],
      exact: true,
    });
    setTrigger((prev) => prev + 1);
  };

  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ['randomMovie', params, trigger],
    queryFn: () => Api.random.getOne(`&limit=10${params}`),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });

  return {
    data,
    isLoading,
    isError,
    isFetching,
    onNextMovie,
  };
};
