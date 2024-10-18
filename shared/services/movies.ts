import { ApiRouter } from './constants';
import { kinoInstance } from './instance';
import { MediaDTO } from '@/@types/mediaDTO';

export const getAll = async (params: string): Promise<MediaDTO> => {
  return (
    await kinoInstance.get<MediaDTO>(
      `${ApiRouter.MOVIES}?notNullFields=name&notNullFields=poster.url${params}`,
    )
  ).data;
};
