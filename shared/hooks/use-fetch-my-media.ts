import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { getMyMedia, saveMyMedia, deleteMyMedia } from '../services/user';
import { MyMedia } from '@/@types/my';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Api } from '../services/api-client';

export const useFetchMyMedia = () => {
  const queryClient = useQueryClient();
  const { ref, inView, entry } = useInView();

  const { mutate: saveMutate, isPending: isSavingPending } = useMutation({
    mutationKey: ['save-media'],
    mutationFn: (values: Omit<MyMedia, 'id' | 'userId'>) => saveMyMedia(values),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['my-media'] }),
  });

  const { mutate: deleteMutate, isPending: isDeletingPending } = useMutation({
    mutationKey: ['delete-media'],
    mutationFn: (mediaId: number) => deleteMyMedia(mediaId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['my-media'] }),
  });

  const { data: checkedData } = useQuery({
    queryKey: ['my-media-for-check-liked'],
    queryFn: () => getMyMedia(),
    refetchOnWindowFocus: false,
  });

  const perPage = 25;

  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['my-media'],
      queryFn: ({ pageParam }) =>
        Api.user.getMyMedia(`skip=${(pageParam - 1) * perPage}&take=${perPage}`),
      select: (data) => data.pages.map((item) => item),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
        if (lastPage.length === 0) {
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
    checkedData,
    isFetchingNextPage,
    isLoading,
    isError,
    saveMutate,
    isSavingPending,
    deleteMutate,
    isDeletingPending,
  };
};
