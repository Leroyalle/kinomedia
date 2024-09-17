import React from 'react';
import { useMoviesStore } from '@/shared/store/movies';
import { MediaDTO } from '@/@types/mediaDTO';
import { QueryFilters } from './use-filters';

interface ReturnProps {
  items: MediaDTO;
  loading: boolean;
  error: boolean;
  fetchMedia: (params: string) => void;
}

export const useMedia = (params: QueryFilters, isSeries: boolean): ReturnProps => {
  const mediaStore = useMoviesStore((state) => state);
  const genre = params.genre ? `&genres.name=${params.genre}` : '';
  const limit = `&limit=10`;
  const rating = '&rating.kp=6-10';
  const isSeriesParams = isSeries
    ? `&notNullFields=seriesLength&isSeries=true${limit}${rating}`
    : `&notNullFields=movieLength&isSeries=false${limit}${rating}`;
  React.useEffect(() => {
    mediaStore.fetchMedia(`${genre}${isSeriesParams}`);
  }, [params.genre]);

  return mediaStore;
};
