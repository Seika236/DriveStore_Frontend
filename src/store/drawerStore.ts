import { create } from "zustand";
import { combine } from "zustand/middleware";

interface DrawerStoreState {
  isVisibleMessageDrawer: boolean;
  isVisibleFavouriteDrawer: boolean;
  isVisibleAuthErrorDrawer: boolean;
}

interface DrawerStoreActions {
  setIsVisibleMessageDrawer: (bool: boolean) => void;
  setIsVisibleFavouriteDrawer: (bool: boolean) => void;
  setIsVisibleAuthErrorDrawer: (bool: boolean) => void;
}

type DrawerStore = DrawerStoreState & DrawerStoreActions;

export const drawerStore = create<DrawerStore>(
  combine(
    {
      isVisibleMessageDrawer: false,
      isVisibleFavouriteDrawer: false,
      isVisibleAuthErrorDrawer: false,
    },
    (set) => ({
      setIsVisibleFavouriteDrawer: (bool) =>
        set(() => ({
          isVisibleFavouriteDrawer: bool,
        })),
      setIsVisibleAuthErrorDrawer: (bool) =>
        set(() => ({
          isVisibleAuthErrorDrawer: bool,
        })),
      setIsVisibleMessageDrawer: (bool) =>
        set(() => ({ isVisibleMessageDrawer: bool })),
    }),
  ),
);
