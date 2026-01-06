import { Menu } from "@chakra-ui/react";
import { MyDropMenuItem } from "@/modules/navbar/UI/MyDropMenuItem";
import { MyNavBarItemProps } from "@/modules/navbar/types/MyNavBarItemType";

type Props = {
  quickItem: MyNavBarItemProps;
};

export function MyButtonDropMenuItem({ quickItem }: Props) {
  return (
    <Menu.Item key={quickItem.description} value={quickItem.description}>
      <button onClick={quickItem.onClick}>
        <MyDropMenuItem description={quickItem.description}>
          {quickItem.children}
        </MyDropMenuItem>
      </button>
    </Menu.Item>
  );
}
