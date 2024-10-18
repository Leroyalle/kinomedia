import { kinoInstance } from './instance';
import { ApiRouter } from './constants';
import { MediaItem } from '@/@types/media-item';

export const getMedia = async (movieId: number) => {
  return (await kinoInstance.get<MediaItem>(`${ApiRouter.MOVIES}/${movieId}`)).data;
};
