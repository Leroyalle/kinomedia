import { MyMedia } from '@/@types/my';
import React, { Dispatch, SetStateAction } from 'react';
import { MediaItem } from '@/@types/media-item';

interface ReturnProps {
  liked: boolean;
  setLiked: Dispatch<SetStateAction<boolean>>;
}

export const useCheckIfMediaLiked = (data: MyMedia[] | undefined, item: MediaItem): ReturnProps => {
  const [liked, setLiked] = React.useState(false);
  React.useEffect(() => {
    if (data) {
      setLiked(data.some((movie) => movie.mediaId === item.id));
    }
  }, [data]);
  return { liked, setLiked };
};
