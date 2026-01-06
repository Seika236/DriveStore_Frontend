"use client";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { MenuItemType } from "@/modules/userProfileContent/types/MyMenuItemType";
import { MoreHorizontalIcon } from "@/assets/icons/more-horizontal-icon";

type Props = {
  menuItem: MenuItemType;
};

export function MyProfileContentActionButtonList({ menuItem }: Props) {
  return (
    <Menu.Item
      key={menuItem.value}
      value={menuItem.value}
      onClick={menuItem.onClick}
    >
      {menuItem.text}
    </Menu.Item>
  );
}
