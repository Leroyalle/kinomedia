import { create } from 'zustand';

interface State {
  activeId: number;
  name: string;
  setActiveId: (activeId: number) => void;
  setName: (name: string) => void;
}
export const useCategoryState = create<State>()((set) => ({
  activeId: 0,
  name: '',
  setActiveId: (activeId: number) => set({ activeId }),
  setName: (name: string) => set({ name }),
}));
