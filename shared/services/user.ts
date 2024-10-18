import { userInstance } from './instance';
import { ApiRouter } from './constants';
import { User } from '@prisma/client';

// FIXME: возвращать только нужнык данные, типизаця возвращаемого значения
export const getUser = async (id: number): Promise<User> => {
  return (await userInstance.get<User>(`${ApiRouter.USER}/${id}`)).data;
};

export const resetAvatar = async (id: number) => {
  return (await userInstance.patch(`${ApiRouter.AVATAR}/${id}`)).data;
};

export const updateAvatar = async (id: number, formData: FormData) => {
  return (await userInstance.post(`${ApiRouter.AVATAR}/${id}`, formData)).data;
};
