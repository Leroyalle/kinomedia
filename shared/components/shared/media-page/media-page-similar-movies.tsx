'use client';
import React from 'react';
import { MediaGroupSlider } from '../media-group-slider';
import { useFetchSimilarMovies } from '@/shared/hooks';

interface Props {
  id: number;
}

export const MediaPageSimilarMovies: React.FC<Props> = ({ id }) => {
  const { items, loading } = useFetchSimilarMovies(id);

  return <MediaGroupSlider title={'Похожие фильмы'} limit={5} items={items} loading={loading} />;
};
