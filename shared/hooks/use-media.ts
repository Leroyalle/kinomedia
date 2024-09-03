import React from 'react';
import { useMediaStore } from '@/store/media';
import { MediaDTO } from '@/@types/mediaDTO';
import { useCategoryState } from '@/store';

interface ReturnProps {
  items: MediaDTO | null;
  loading: boolean;
  error: boolean;
  fetchMedia: (params: string) => void;
}

export const useMedia = (): ReturnProps => {
  const mediaStore = useMediaStore((state) => state);
  const name = useCategoryState((state) => state.name);
  React.useEffect(() => {
    mediaStore.fetchMedia(`genres.name=${name}`);
  }, []);

  return mediaStore;
};
