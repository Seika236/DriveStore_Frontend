import { Box, MenuItemProps } from "@chakra-ui/react";
import { MyNavBarItemProps } from "@/modules/navbar/types/MyNavBarItemType";
import { MySimpleDropMenuItem } from "@/modules/navbar/UI/MySimpleDropMenuItem";
import { MyButtonDropMenuItem } from "@/modules/navbar/UI/MyButtonDropMenuItem";
import { MyLinkDropMenuItem } from "@/modules/navbar/UI/MyLinkDropMenuItem";

export function UseDropMenuItems() {
  const DropItemStyle: Omit<MenuItemProps, "value"> = {
    _hover: { color: "red" },
    height: "full",
    width: "100%",
  };

  function getDropNavBarItems(quickItems: MyNavBarItemProps[]) {
    return quickItems.map((quickItem) => {
      if (quickItem.path) {
        return (
          <Box {...DropItemStyle} as={"li"} key={quickItem.description}>
            <MyLinkDropMenuItem quickItem={quickItem} />
          </Box>
        );
      }

      if (quickItem.onClick) {
        return (
          <Box {...DropItemStyle} as={"li"} key={quickItem.description}>
            <MyButtonDropMenuItem quickItem={quickItem} />
          </Box>
        );
      }

      return (
        <Box {...DropItemStyle} as={"li"} key={quickItem.description}>
          <MySimpleDropMenuItem quickItem={quickItem} />
        </Box>
      );
    });
  }

  return {
    getDropNavBarItems,
  };
}
