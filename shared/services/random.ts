import { ApiRouter } from './constants';
import { kinoInstance } from './instance';
import { MovieDTO } from '@/@types/mediaDTO';

export const getOne = async (params: string): Promise<MovieDTO> => {
  return (
    await kinoInstance.get<MovieDTO>(
      `${ApiRouter.RANDOM}?notNullFields=name&notNullFields=backdrop.url${params}`,
    )
  ).data;
};
