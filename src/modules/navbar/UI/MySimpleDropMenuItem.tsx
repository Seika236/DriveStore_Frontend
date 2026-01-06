import { MyNavBarItemProps } from "@/modules/navbar/types/MyNavBarItemType";
import { Box, Menu, MenuItemProps } from "@chakra-ui/react";
import { MyDropMenuItem } from "@/modules/navbar/UI/MyDropMenuItem";

type Props = {
  quickItem: MyNavBarItemProps;
};

export function MySimpleDropMenuItem({ quickItem }: Props) {
  return (
    <Menu.Item key={quickItem.description} value={quickItem.description}>
      <MyDropMenuItem description={quickItem.description}>
        {quickItem.children}
      </MyDropMenuItem>
    </Menu.Item>
  );
}
