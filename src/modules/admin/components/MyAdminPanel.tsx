"use client";
import { Flex } from "@chakra-ui/react";

import { MyAdminList } from "@/modules/admin/components/MyAdminList";
import { useState } from "react";

export function MyAdminPanel() {
  const [links] = useState<string[]>([
    "user",
    "brand",
    "type",
    "category",
    // "post",
  ]);

  return (
    <Flex
      w={"100%"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <MyAdminList links={links} />
    </Flex>
  );
}
