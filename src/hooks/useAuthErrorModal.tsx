import { authStore } from "@/store/authStore";
import { drawerStore } from "@/store/drawerStore";

type Props<T extends (...args: any[]) => void> = {
  callback: T;
};

export function UseAuthErrorModal<T extends (...args: any[]) => void>({
  callback,
}: Props<T>) {
  const { isAuth } = authStore();
  const { setIsVisibleAuthErrorDrawer } = drawerStore();
  const checkAuthHandler = (...props: Parameters<T>) => {
    if (!isAuth) {
      return setIsVisibleAuthErrorDrawer(true);
    }

    callback(...props);
  };

  return {
    checkAuthHandler,
  };
}
