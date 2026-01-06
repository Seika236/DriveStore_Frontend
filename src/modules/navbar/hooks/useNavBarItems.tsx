import { SellIcon } from "@/assets/icons/sell-icon";
import { CartIcon } from "@/assets/icons/cart-icon";
import { HeartIcon } from "@/assets/icons/heart-icon";
import { MessageIcon } from "@/assets/icons/message-icon";
import { useState } from "react";
import { MyNavBarItemProps } from "@/modules/navbar/types/MyNavBarItemType";
import { MagazineIcon } from "@/assets/icons/magazine-icon";
import { SettingsIcon } from "@/assets/icons/settings-icon";
import { drawerStore } from "@/store/drawerStore";

export function UseNavBarItems() {
  const { setIsVisibleMessageDrawer, setIsVisibleFavouriteDrawer } =
    drawerStore();

  const [quickItems] = useState<MyNavBarItemProps[]>([
    {
      description: "Я продаю",
      children: () => <SellIcon />,
      path: "/announcement",
    },
    {
      description: "Бортжурнал",
      children: () => <MagazineIcon />,
      path: "/logbook",
    },
    {
      description: "Избранное",
      children: () => <HeartIcon />,
      onClick: () => {
        setIsVisibleFavouriteDrawer(true);
      },
    },
    {
      description: "Сообщения",
      children: () => <MessageIcon />,
      onClick: () => {
        setIsVisibleMessageDrawer(true);
      },
    },
    {
      description: "Настройки",
      children: () => <SettingsIcon size={"lg"} />,
      path: "/profile/settings",
    },
  ]);

  return {
    quickItems,
  };
}
