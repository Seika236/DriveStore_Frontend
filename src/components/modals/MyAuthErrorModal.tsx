"use client";

import { drawerStore } from "@/store/drawerStore";
import { MyDialog } from "@/components/MyDialog";
import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

export function MyAuthErrorModal() {
  const { isVisibleAuthErrorDrawer, setIsVisibleAuthErrorDrawer } =
    drawerStore();

  const onOpenChange = () => {
    setIsVisibleAuthErrorDrawer(!isVisibleAuthErrorDrawer);
  };

  return (
    <MyDialog
      title={"Вы не авторизованы"}
      isVisible={isVisibleAuthErrorDrawer}
      onOpenChange={onOpenChange}
      size={"sm"}
      isEnabledFooter={true}
    >
      <Flex alignItems={"center"} columnGap={3}>
        <Link href={"/login"}>
          <Button variant="outline">Login</Button>
        </Link>
        <Link href={"/authorization"}>
          <Button variant="outline">Authorization</Button>
        </Link>
      </Flex>
    </MyDialog>
  );
}
