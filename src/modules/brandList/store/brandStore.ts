import { create } from "zustand";
import { combine } from "zustand/middleware";

interface BrandStoreState {
  isVisibleBrandModal: boolean;
}

interface BrandStoreActions {
  setIsVisibleBrandModal: (bool: boolean) => void;
}

type BrandStore = BrandStoreState & BrandStoreActions;

export const brandStore = create<BrandStore>(
  combine({ isVisibleBrandModal: false }, (set) => ({
    setIsVisibleBrandModal: (bool) =>
      set(() => ({
        isVisibleBrandModal: bool,
      })),
  })),
);
