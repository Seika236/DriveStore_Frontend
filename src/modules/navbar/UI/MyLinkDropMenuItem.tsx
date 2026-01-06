import { MyNavBarItemProps } from "@/modules/navbar/types/MyNavBarItemType";
import { Menu } from "@chakra-ui/react";
import Link from "next/link";
import { MyDropMenuItem } from "@/modules/navbar/UI/MyDropMenuItem";

type Props = {
  quickItem: MyNavBarItemProps;
};

export function MyLinkDropMenuItem({ quickItem }: Props) {
  return (
    <Menu.Item key={quickItem.description} value={quickItem.description}>
      <Link href={quickItem.path}>
        <MyDropMenuItem description={quickItem.description}>
          {quickItem.children}
        </MyDropMenuItem>
      </Link>
    </Menu.Item>
  );
}
