"use client";
import { MyBurgerButton } from "../UI/MyBurgerButton";
import { MyDropBurgerMenu } from "@/modules/burgerMenu/components/MyDropBurgerMenu";
import { Box } from "@chakra-ui/react";
import { UseOpenBurgerMenu } from "@/modules/burgerMenu/hooks/useOpenBurgerMenu";

export function MyBurgerMenu() {
  const {
    onMouseEnterMenu,
    onBurgerButtonEnter,
    onBurgerButtonLeave,
    onMouseLeaveMenu,
    onOpenBurgerMenu,
    isOpen,
  } = UseOpenBurgerMenu();

  return (
    <div>
      <Box>
        <MyDropBurgerMenu
          isOpen={isOpen}
          onMouseLeave={onMouseLeaveMenu}
          onMouseEnter={onMouseEnterMenu}
          onOpenChange={onOpenBurgerMenu}
        >
          <MyBurgerButton
            onMouseEnter={onBurgerButtonEnter}
            onMouseLeave={onBurgerButtonLeave}
          />
        </MyDropBurgerMenu>
      </Box>
    </div>
  );
}
