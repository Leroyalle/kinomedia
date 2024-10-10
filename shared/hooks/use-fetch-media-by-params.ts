import { useQuery } from '@tanstack/react-query';
import { Api } from '../services/api-client';

export const useFetchMediaByParams = (params: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['mediaByParams', params],
    queryFn: () => Api.movies.getAll(params),
    select: (data) => data.docs,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
    isError,
  };
};
