import { userInstance } from './instance';
import { ApiRouter } from './constants';
import { User } from '@prisma/client';
import { MyMedia } from '@/@types/my';
// FIXME: переопределить функции user через Api.*.*()
export const getUser = async (): Promise<User> => {
  return (await userInstance.get<User>(ApiRouter.USER)).data;
};

export const resetAvatar = async () => {
  return (await userInstance.patch(ApiRouter.AVATAR)).data;
};

export const updateAvatar = async (formData: FormData) => {
  return (await userInstance.post(ApiRouter.AVATAR, formData)).data;
};

export const getMyMedia = async (params: string = ''): Promise<MyMedia[]> => {
  return (await userInstance.get<MyMedia[]>(`${ApiRouter.MY}?${params}`)).data;
};

export const saveMyMedia = async (values: Omit<MyMedia, 'id' | 'userId'>): Promise<MyMedia> => {
  return (await userInstance.post<MyMedia>(ApiRouter.MY, values)).data;
};
export const deleteMyMedia = async (mediaId: number) => {
  return (await userInstance.delete(ApiRouter.MY, { data: { mediaId } })).data;
};
