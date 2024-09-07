import { ApiRouter } from './constants';
import { axiosInstance } from './instance';
import { MediaDTO } from '@/@types/mediaDTO';

export const getAll = async (params: string): Promise<MediaDTO> => {
  return (
    await axiosInstance.get<MediaDTO>(
      `${ApiRouter.MOVIES}?notNullFields=name&notNullFields=poster.url&rating.kp=1-10&limit=250${params}`,
    )
  ).data;
};
