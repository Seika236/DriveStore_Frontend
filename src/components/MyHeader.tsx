import { MyContainer } from "@/modules/navbar/UI/MyContainer";
import { Flex } from "@chakra-ui/react";
import { MyBurgerMenu } from "@/modules/burgerMenu";
import { MyLogo } from "@/ui/MyLogo";
import { MyNavBar } from "@/modules/navbar";
import { ColorModeButton } from "@/components/ui/color-mode";
import { CategoryLine } from "@/modules/categoryLine";

export function MyHeader() {
  return (
    <header>
      <MyContainer>
        <Flex align={"center"} h={76} justify={"space-between"}>
          <Flex columnGap={2} alignItems={"center"}>
            <MyBurgerMenu />
            <MyLogo />
          </Flex>
          <Flex columnGap={2} alignItems={"center"}>
            <MyNavBar />
            <ColorModeButton />
          </Flex>
        </Flex>
      </MyContainer>
      <Flex w={"full"} bg={"red.600/80"} justifyContent={"center"}>
        <Flex maxW={1200} w={"full"}>
          <CategoryLine />
        </Flex>
      </Flex>
    </header>
  );
}
