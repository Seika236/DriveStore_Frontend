"use client";

import { MyQuickNavbar } from "@/modules/navbar/components/MyQuickNavbar";
import { Box, Button, Flex } from "@chakra-ui/react";
import { AvatarDropMenu } from "@/modules/navbar/components/AvatarDropMenu";
import Link from "next/link";
import { authStore } from "@/store/authStore";
import { MyHideMenu } from "@/components/MyHideMenu";
import { IdCardIcon } from "@/assets/icons/id-card-icon";

export function MyNavBar() {
  const { isAuth, isAdmin } = authStore();
  return (
    <nav>
      <Flex alignItems={"center"} columnGap={5}>
        <Box display={{ base: "none", lg: "block" }}>
          <MyQuickNavbar />
        </Box>
        <MyHideMenu flexibleKey={"lg"} buttonText={"menu"}>
          <MyQuickNavbar />
        </MyHideMenu>
        {isAuth && <AvatarDropMenu />}
        {isAdmin && (
          <Link href={"/admin"}>
            <Button size={{ base: "sm", lg: "md" }} variant="outline">
              Admin
            </Button>
          </Link>
        )}
        {!isAuth && (
          <>
            <Flex
              alignItems={"center"}
              columnGap={4}
              display={{ base: "none", lg: "flex" }}
            >
              <Link href={"/login"}>
                <Button variant="outline">Login</Button>
              </Link>
              <Link href={"/authorization"}>
                <Button variant="outline">Authorization</Button>
              </Link>
            </Flex>
            <MyHideMenu
              flexibleKey={"lg"}
              buttonText={<IdCardIcon size={"md"} />}
            >
              <Flex alignItems={"center"} columnGap={3}>
                <Link href={"/login"}>
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href={"/authorization"}>
                  <Button variant="outline">Authorization</Button>
                </Link>
              </Flex>
            </MyHideMenu>
          </>
        )}
      </Flex>
    </nav>
  );
}
