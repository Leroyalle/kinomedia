import { MyMedia } from '@/@types/my';
import React, { Dispatch, SetStateAction } from 'react';
import { MediaItem } from '@/@types/media-item';

export const useCheckIfMediaLiked = (
  data: MyMedia[] | undefined,
  item: MediaItem,
  setLiked: Dispatch<SetStateAction<boolean>>,
) => {
  React.useEffect(() => {
    if (data) {
      setLiked(data.some((movie) => movie.mediaId === item.id));
    }
  }, [data]);
  return;
};
