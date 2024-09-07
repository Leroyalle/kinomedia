import { MediaDTO } from '@/@types/mediaDTO';
import { Api } from '@/shared/services/api-client';
import { create } from 'zustand';

interface State {
  items: MediaDTO;
  loading: boolean;
  error: boolean;
  fetchMedia: (params: string) => void;
}

export const useMediaStore = create<State>()((set) => ({
  items: {
    docs: [],
  },
  loading: true,
  error: false,
  fetchMedia: async (params) => {
    try {
      set({ loading: true, error: false });
      const items = await Api.movies.getAll(params);
      set({ items });
    } catch (error) {
      set({ error: true });
      console.log('Error [FETCH_MEDIA]', error);
    } finally {
      set({ loading: false });
    }
  },
}));
