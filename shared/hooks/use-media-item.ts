import { MediaItem } from '@/@types/media-item';
import { Api } from '../services/api-client';

export const useMediaItem = async (movieId: number): Promise<MediaItem> => {
  try {
    const data = await Api.mediaItem.getMedia(movieId);
    return data;
  } catch (error) {
    console.log('Error [MEDIA_ITEM_GET]', error);
    throw error;
  }
};
