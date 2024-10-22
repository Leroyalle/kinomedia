import { create } from 'zustand';

interface Store {
  monthCount: number;
  pricePerMonth: number;
  setValues: (monthCount: number, pricePerMonth: number) => void;
  resetValues: VoidFunction;
}

export const useSubscriptionModalStore = create<Store>()((set) => ({
  monthCount: 0,
  pricePerMonth: 0,
  setValues: (monthCount: number, pricePerMonth: number) => {
    set({ monthCount, pricePerMonth });
  },
  resetValues: () => {
    set({ monthCount: 0, pricePerMonth: 0 });
  },
}));
