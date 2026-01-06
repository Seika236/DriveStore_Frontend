"use client";
import "@/styles/globals.css";
import { useEffect } from "react";
import authService from "@/modules/auth/services/authService";
import { redirect, useRouter } from "next/navigation";
import { authStore } from "@/store/authStore";
import { checkIsAdmin } from "../../lib/checkIsAdmin";
import { UseError } from "@/hooks/useError";
import { Box, Button, Flex } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import { MyContainer } from "@/modules/navbar/UI/MyContainer";
import { LeftArrowIcon } from "@/assets/icons/left-arrow-icon";

export default function RootLayout({ children }) {
  const { setIsAdmin } = authStore();
  const { throwError } = UseError();

  const router = useRouter();

  useEffect(() => {
    authService
      .checkAuth()
      .then((data) => {
        const userRoles = data.data.role.map((role) => role.name);
        const isAllow = checkIsAdmin(userRoles);
        if (!isAllow) {
          setIsAdmin(false);
          redirect("/");
        }
        setIsAdmin(true);
      })
      .catch((error: Error) => {
        redirect("/");
        throwError(error);
      });
  }, []);

  return (
    <>
      <header>
        <MyContainer>
          <Box display={"flex"} justifyContent={"space-between"} py={5}>
            <Button variant={"ghost"} onClick={() => router.back()}>
              <LeftArrowIcon /> назад
            </Button>
            <ColorModeButton />
          </Box>
        </MyContainer>
      </header>
      <Flex
        w={"100%"}
        h={"80vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {children}
      </Flex>
    </>
  );
}
