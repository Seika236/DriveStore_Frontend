import { Box, Grid, Menu } from "@chakra-ui/react";
import { UseDropMenuItems } from "@/modules/navbar/hooks/useDropMenuItems";
import { UseNavBarItems } from "@/modules/navbar/hooks/useNavBarItems";
import Link from "next/link";
import { MyProfileLinkItem } from "@/modules/navbar/components/MyProfileLinkItem";

export function MyDropMenuNavBar() {
  const { getDropNavBarItems } = UseDropMenuItems();
  const { quickItems } = UseNavBarItems();

  return (
    <Box as={"ul"}>
      <Menu.Item value={"profile"}>
        <Box w={"full"}>
          <Link href={"/profile"}>
            <MyProfileLinkItem />
          </Link>
        </Box>
      </Menu.Item>
      <Grid>{getDropNavBarItems(quickItems)}</Grid>
    </Box>
  );
}
