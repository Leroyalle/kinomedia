import { useQuery } from '@tanstack/react-query';
import { Api } from '../services/api-client';

export const useFetchSimilarMovies = (id: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['similarMovies', id],
    queryFn: () => Api.movies.getAll(`&similarMovies.id=${id}&limit=10&rating.kp=5-10`),
    select: (data) => data.docs,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
    isError,
  };
};
