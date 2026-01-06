import { create } from "zustand";
import { combine } from "zustand/middleware";

interface RevalidationStoreState {
  favoriteRevalidationHandler: () => void;
}

interface RevalidationStoreActions {
  setFavoriteRevalidationHandler: (hanlder: () => void) => void;
}

type DrawerStore = RevalidationStoreState & RevalidationStoreActions;

export const revalidationStore = create<DrawerStore>(
  combine(
    {
      favoriteRevalidationHandler: null,
    },
    (set) => ({
      setFavoriteRevalidationHandler: (handler) =>
        set(() => ({ favoriteRevalidationHandler: handler })),
    }),
  ),
);
