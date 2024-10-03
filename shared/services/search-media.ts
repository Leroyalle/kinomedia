import { ApiRouter } from './constants';
import { axiosInstance } from './instance';
import { MediaDTO } from '@/@types/mediaDTO';

export const getAll = async (params: string): Promise<MediaDTO> => {
  // FIXME: все арвно возвращает null name & not url
  return (
    await axiosInstance.get<MediaDTO>(
      `${ApiRouter.SEARCH}?notNullFields=name&notNullFields=poster.url&notNullFields=poster.previewUrl${params}`,
    )
  ).data;
};
