import { Box, BoxProps } from "@chakra-ui/react";
import { MyNavBarItemProps } from "@/modules/navbar/types/MyNavBarItemType";
import Link from "next/link";
import { MyQuickItem } from "@/modules/navbar/UI/MyQuickItem";

export function UseQuickItems() {
  const QuickBoxStyle: BoxProps = {
    _hover: { color: "red" },
  };

  function getNavBarQuickItems(quickItems: MyNavBarItemProps[]) {
    return quickItems.map((quickItem) => {
      if (quickItem.path) {
        return (
          <Box {...QuickBoxStyle} as={"li"} key={quickItem.description}>
            <Link href={quickItem.path}>
              <MyQuickItem description={quickItem.description}>
                {quickItem.children}
              </MyQuickItem>
            </Link>
          </Box>
        );
      }

      if (quickItem.onClick) {
        return (
          <Box {...QuickBoxStyle} as={"li"} key={quickItem.description}>
            <button onClick={quickItem.onClick}>
              <MyQuickItem description={quickItem.description}>
                {quickItem.children}
              </MyQuickItem>
            </button>
          </Box>
        );
      }

      return (
        <Box {...QuickBoxStyle} as={"li"} key={quickItem.description}>
          <MyQuickItem description={quickItem.description}>
            {quickItem.children}
          </MyQuickItem>
        </Box>
      );
    });
  }

  return {
    getNavBarQuickItems,
  };
}
