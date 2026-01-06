import { create } from "zustand";
import { combine } from "zustand/middleware";

interface FilterStoreState {
  searchValue: string;
}

interface FilterStoreActions {
  setSearchValue: (value: string) => void;
}

type FilterStore = FilterStoreState & FilterStoreActions;

export const filterStore = create<FilterStore>(
  combine(
    {
      searchValue: "",
    },
    (set) => ({
      setSearchValue: (value: string) => set(() => ({ searchValue: value })),
    }),
  ),
);
