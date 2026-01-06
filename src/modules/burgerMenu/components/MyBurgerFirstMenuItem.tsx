import { Menu, VStack } from "@chakra-ui/react";
import { MyBurgerButtonLinkList } from "@/modules/burgerMenu/components/MyBurgerButtonLinkList";

export function MyBurgerFirstMenuItem() {
  return (
    <Menu.Item
      value="new-txt-a"
      display={"grid"}
      gap={5}
      gridColumn={"span 2"}
      alignItems={"start"}
    >
      <VStack gap={0}>
        <MyBurgerButtonLinkList />
      </VStack>
    </Menu.Item>
  );
}
