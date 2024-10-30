import { getServerSession } from 'next-auth';
import { authOptions } from '../constants/auth-options';

/**
 * Получает данные авторизованного пользователя
 * @returns данные авторизованного пользователя
 */

export const getUserSession = async () => {
  const session = await getServerSession(authOptions);

  return session?.user ?? null;
};
