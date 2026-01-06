"use client";

import { Box, ClientOnly, Grid, Skeleton } from "@chakra-ui/react";
import { AiFillHome, AiOutlineStar, AiOutlineMessage } from "react-icons/ai";
import {
  MdOutlineComputer,
  MdOutlineDirectionsCar,
  MdOutlineCarCrash,
  MdOutlineLocalGasStation,
  MdOutlineBuild,
  MdOutlineDirectionsRun,
} from "react-icons/md";
import { useColorModeValue } from "@/components/ui/color-mode";
import { MyLogBookSideBarItem } from "@/modules/logbook/UI/MyLogBookSideBarItem";

export function MyLogbookSideBar() {
  const menuItems = [{ name: "Главная", icon: AiFillHome, isActive: true }];

  const sidebarBg = useColorModeValue("white", "gray.800");
  const sidebarShadow = useColorModeValue("lg", "dark-lg");

  return (
    <ClientOnly fallback={<Skeleton boxSize={8} />}>
      <Grid
        w={"full"}
        bg={sidebarBg}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        h={{ base: "80px", md: "auto" }}
        p={4}
        rounded={"md"}
        boxShadow={sidebarShadow}
      >
        <Grid as={"ul"} gap={2}>
          {menuItems.map((item) => (
            <Box as={"li"} key={item.name}>
              <MyLogBookSideBarItem icon={item.icon} isActive={item.isActive}>
                {item.name}
              </MyLogBookSideBarItem>
            </Box>
          ))}
        </Grid>
      </Grid>
    </ClientOnly>
  );
}
