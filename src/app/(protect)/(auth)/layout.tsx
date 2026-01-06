"use client";

import "@/styles/globals.css";
import { Flex } from "@chakra-ui/react";
import { authStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { MyResendEmailDialog } from "@/modules/auth";

export default function RootLayout({ children }) {
  const { isAuth } = authStore();
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      router.replace("/");
    }
  }, [isAuth]);

  return (
    <Flex
      marginX={"auto"}
      w="full"
      h="100vh"
      justifyContent={"center"}
      alignItems={"center"}
    >
      {children}
      <MyResendEmailDialog />
    </Flex>
  );
}
