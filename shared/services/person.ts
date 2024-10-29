import { PersonDataDTO } from '@/@types/person';
import { kinoInstance } from './instance';
import { ApiRouter } from './constants';

export const getPerson = async (id: number): Promise<PersonDataDTO> => {
  return (await kinoInstance.get<PersonDataDTO>(`${ApiRouter.PERSON}/${id}`)).data;
};
