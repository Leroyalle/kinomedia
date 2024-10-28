import { create } from 'zustand';
import { getUser, resetAvatar, updateAvatar } from '../services/user';

type TUserData = {
  id: number | null;
  fullName: string | null;
  email: string | null;
  image: string | null;
};

interface Store {
  user: TUserData;
  loading: boolean;
  error: boolean;
  getUserData: () => void;
  resetAvatar: VoidFunction;
  changeAvatar: (formData: FormData) => void;
}

export const useProfileStore = create<Store>()((set) => ({
  user: { id: null, fullName: null, email: null, image: null, subscribe: null },
  loading: true,
  error: false,

  getUserData: async () => {
    try {
      set({ loading: true, error: false });
      const data = await getUser();
      set({
        user: {
          id: data.id,
          fullName: data.fullName,
          email: data.email,
          image: data.image,
        },
      });
    } catch (error) {
      set({ error: true });
      console.log('Error [GET_USER_DATA]', error);
    } finally {
      set({ loading: false });
    }
  },

  resetAvatar: async () => {
    try {
      set({ loading: true, error: false });
      const data = await resetAvatar();
      set((prev) => ({
        user: {
          ...prev.user,
          image: data.image,
        },
      }));
    } catch (error) {
      set({ error: true });
      console.log('Error [GET_USER_DATA]0', error);
    } finally {
      set({ loading: false });
    }
  },

  changeAvatar: async (formData: FormData) => {
    try {
      set({ loading: true, error: false });
      const data = await updateAvatar(formData);
      set((prev) => ({
        user: {
          ...prev.user,
          image: data.filePath,
        },
        loading: false,
      }));
    } catch (error) {
      set({ error: true });
      console.log('Error [CHANGE_AVATAR]', error);
    } finally {
      set({ loading: false });
    }
  },
}));
