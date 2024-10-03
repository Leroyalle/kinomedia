import { MediaDTO, MovieDTO } from '@/@types/mediaDTO';
import { Api } from '@/shared/services/api-client';
import { create } from 'zustand';

interface State {
  items: MediaDTO;
  loading: boolean;
  error: boolean;
  setItems: (data: MovieDTO[]) => void;
  fetchMedia: (params: string) => void;
}

export const useSeriesStore = create<State>()((set) => ({
  items: {
    docs: [],
    total: 0,
    limit: 0,
    page: 1,
    pages: 0,
  },
  loading: true,
  error: false,
  setItems: (data) => {
    set((prevState) => ({
      items: {
        ...prevState.items,
        docs: [...prevState.items.docs, ...data],
      },
    }));
  },
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
