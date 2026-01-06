import { create } from "zustand";
import { IUser } from "../types/models/IUser";
import { combine } from "zustand/middleware";

interface AuthStoreState {
  user: IUser;
  isAuth: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  isVisibleResendEmailDialog: boolean;
}

interface AuthStoreActions {
  setUser: (user: IUser) => void;
  setIsAuth: (isAuth: boolean) => void;
  setIsAdmin: (isAdmin: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setVisibleResendEmailDialog: (isOpen: boolean) => void;
}

type AuthStore = AuthStoreState & AuthStoreActions;

export const authStore = create<AuthStore>(
  combine(
    {
      user: null,
      isAuth: false,
      isLoading: true,
      isAdmin: false,
      isVisibleResendEmailDialog: false,
    },
    (set) => ({
      setUser: (user: IUser) => set(() => ({ user })),
      setIsAuth: (isAuth: boolean) => set({ isAuth: isAuth }),
      setIsAdmin: (isAdmin: boolean) => set({ isAdmin: isAdmin }),
      setIsLoading: (isLoading: boolean) => set({ isLoading: isLoading }),
      setVisibleResendEmailDialog: (isOpen: boolean) =>
        set({ isVisibleResendEmailDialog: isOpen }),
    }),
  ),
);
