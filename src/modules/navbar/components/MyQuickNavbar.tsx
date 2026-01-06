import { Box, Grid, HStack } from "@chakra-ui/react";
import { UseQuickItems } from "@/modules/navbar/hooks/useQuickItems";
import { useState } from "react";
import { MyNavBarItemProps } from "@/modules/navbar/types/MyNavBarItemType";
import { HeartIcon } from "../../../assets/icons/heart-icon";
import { MessageIcon } from "../../../assets/icons/message-icon";
import { SellIcon } from "../../../assets/icons/sell-icon";
import { drawerStore } from "@/store/drawerStore";
import { MagazineIcon } from "@/assets/icons/magazine-icon";

export function MyQuickNavbar() {
  const {
    setIsVisibleMessageDrawer,
    isVisibleMessageDrawer,
    setIsVisibleFavouriteDrawer,
    isVisibleFavouriteDrawer,
  } = drawerStore();
  const { getNavBarQuickItems } = UseQuickItems();
  const [quickItems] = useState<MyNavBarItemProps[]>([
    {
      description: "Избаранное",
      children: () => <HeartIcon />,
      onClick: () => {
        setIsVisibleFavouriteDrawer(!isVisibleFavouriteDrawer);
      },
    },

    {
      description: "Бортжурнал",
      children: () => <MagazineIcon />,
      path: "/logbook",
    },
    {
      description: "Сообщения",
      children: () => <MessageIcon />,
      onClick: () => {
        setIsVisibleMessageDrawer(!isVisibleMessageDrawer);
      },
    },
    {
      description: "Я продаю",
      children: () => <SellIcon />,
      path: "/announcement",
    },
  ]);

  return (
    <Box as={"ul"}>
      <Box
        display={{ base: "grid", lg: "flex" }}
        alignItems={"center"}
        justifyItems={"center"}
        gap={5}
      >
        {getNavBarQuickItems(quickItems)}
      </Box>
    </Box>
  );
}
