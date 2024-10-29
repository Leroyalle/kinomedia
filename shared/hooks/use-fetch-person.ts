import { Api } from '../services/api-client';

export const useFetchPerson = async (id: number) => {
  try {
    const data = await Api.person.getPerson(id);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
