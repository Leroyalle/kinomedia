import { axiosInstance } from './instance';
import { ApiRouter } from './constants';
import { MediaItem } from '@/@types/media-item';

export const getMedia = async (movieId: number) => {
  return (await axiosInstance.get<MediaItem>(`${ApiRouter.MOVIES}/${movieId}`)).data;
};
