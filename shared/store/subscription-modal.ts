import { create } from 'zustand';

interface Store {
  id: number;
  monthCount: number;
  pricePerMonth: number;
  setValues: (id: number, monthCount: number, pricePerMonth: number) => void;
  resetValues: VoidFunction;
}

export const useSubscriptionModalStore = create<Store>()((set) => ({
  id: 0,
  monthCount: 0,
  pricePerMonth: 0,
  setValues: (id: number, monthCount: number, pricePerMonth: number) => {
    set({ id, monthCount, pricePerMonth });
  },
  resetValues: () => {
    set({ id: 0, monthCount: 0, pricePerMonth: 0 });
  },
}));
