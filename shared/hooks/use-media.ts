'use client';
import React from 'react';
import { useMediaStore } from '@/shared/store/media';
import { MediaDTO } from '@/@types/mediaDTO';
import { useCategoryStore } from '@/shared/store';

interface ReturnProps {
  items: MediaDTO;
  loading: boolean;
  error: boolean;
  fetchMedia: (params: string) => void;
}

export const useMedia = (isSeries: boolean): ReturnProps => {
  const mediaStore = useMediaStore((state) => state);
  const [name, reset] = useCategoryStore((state) => [state.name, state.reset]);
  const isMounted = React.useRef(false);

  const nameParam = name === '' ? '' : `&genres.name=${name}`;
  const isSeriesParams = isSeries
    ? `&notNullFields=seriesLength&isSeries=true`
    : `&notNullFields=movieLength&isSeries=false`;
  React.useEffect(() => {
    if (isMounted.current) {
      mediaStore.fetchMedia(`${nameParam}${isSeriesParams}`);
    } else {
      reset();
      mediaStore.fetchMedia(isSeriesParams);
    }
    isMounted.current = true;
  }, [name]);

  return mediaStore;
};
