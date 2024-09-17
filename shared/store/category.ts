import { CategoriesDTO } from '@/@types/categories';
import { create } from 'zustand';

interface State {
  items: CategoriesDTO[];
  activeId: number;
  name: string;
  setActiveId: (activeId: number) => void;
  setName: (name: string) => void;
}

export const useCategoryStore = create<State>()((set) => ({
  items: [],
  activeId: 0,
  name: '',
  setActiveId: (activeId: number) => set({ activeId }),
  setName: (name: string) => set({ name }),
}));
