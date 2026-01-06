import { create } from "zustand";
import { combine } from "zustand/middleware";

interface DrawerStoreState {
  isVisibleCreatePostDialog: boolean;
  isVisibleCreateArticleDialog: boolean;
}

interface DrawerStoreActions {
  setIsVisibleCreatePostDialog: (bool: boolean) => void;
  setIsVisibleCreateArticleDialog: (bool: boolean) => void;
}

type DrawerUserPostStore = DrawerStoreState & DrawerStoreActions;

export const drawerUserPostStore = create<DrawerUserPostStore>(
  combine(
    { isVisibleCreatePostDialog: false, isVisibleCreateArticleDialog: false },
    (set) => ({
      setIsVisibleCreatePostDialog: (bool) =>
        set(() => ({
          isVisibleCreatePostDialog: bool,
        })),
      setIsVisibleCreateArticleDialog: (bool) =>
        set(() => ({
          isVisibleCreateArticleDialog: bool,
        })),
    }),
  ),
);
