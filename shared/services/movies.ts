import { ApiRouter } from './constants';
import { axiosInstance } from './instance';
import { MediaDTO } from '@/@types/mediaDTO';

export const getAll = async (params: string): Promise<MediaDTO> => {
  return (
    await axiosInstance.get<MediaDTO>(
      `${ApiRouter.MOVIES}?notNullFields=name&notNullFields=poster.url&notNullFields=movieLength&rating.kp=6-10&limit=50${params}`,
    )
  ).data;
};
