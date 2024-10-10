'use client';
import React from 'react';
import { MediaGroupSlider } from '../media-group-slider';
import { useFetchSimilarMovies } from '@/shared/hooks';
import { MediaItemsSkeleton } from '../media-items-skeleton';

interface Props {
  id: number;
}

export const MediaPageSimilarMovies: React.FC<Props> = ({ id }) => {
  const { data, isLoading, isError } = useFetchSimilarMovies(id);

  if (isLoading) {
    return <MediaItemsSkeleton limit={5} />;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  if (!data) {
    return <h1>Not found</h1>;
  }

  return <MediaGroupSlider title={'Похожие фильмы'} items={data} />;
};
