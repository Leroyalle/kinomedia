import { create } from 'zustand';
import { getUser, resetAvatar, updateAvatar } from '../services/user';
interface Store {
  id: number | null;
  fullName: string | null;
  email: string | null;
  image: string | null;
  loading: boolean;
  error: boolean;
  getUserData: (id: number) => void;
  resetAvatar: (id: number) => void;
  changeAvatar: (id: number, formData: FormData) => void;
}

export const useProfileStore = create<Store>()((set) => ({
  id: null,
  fullName: null,
  email: null,
  image: null,
  loading: true,
  error: false,

  getUserData: async (id: number) => {
    try {
      set({ loading: true, error: false });
      const data = await getUser(id);
      set({
        id: data.id,
        fullName: data.fullName,
        email: data.email,
        image: data.image,
      });
    } catch (error) {
      set({ error: true });
      console.log('Error [GET_USER_DATA]0', error);
    } finally {
      set({ loading: false });
    }
  },

  resetAvatar: async (id: number) => {
    try {
      set({ loading: true, error: false });
      const data = await resetAvatar(id);
      set({
        image: data.image,
      });
    } catch (error) {
      set({ error: true });
      console.log('Error [GET_USER_DATA]0', error);
    } finally {
      set({ loading: false });
    }
  },

  changeAvatar: async (id: number, formData: FormData) => {
    try {
      set({ loading: true, error: false });
      const data = await updateAvatar(id, formData);
      set({
        image: data.filePath,
      });
      set({ loading: false });
    } catch (error) {
      set({ error: true });
      console.log('Error [CHANGE_AVATAR]', error);
    } finally {
      set({ loading: false });
    }
  },
}));
