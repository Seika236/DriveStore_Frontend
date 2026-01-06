import { useState } from "react";
import { BurgerLinkType } from "@/modules/burgerMenu/types/BurgerLinkType";
import { Box } from "@chakra-ui/react";
import { MyBurgerMenuLinkItem } from "@/modules/burgerMenu/components/MyBurgerMenuLinkItem";

export function MyBurgerButtonLinkList() {
  const [links] = useState<BurgerLinkType[]>([{ title: "Каталог", path: "/" }]);

  return links.map((link) => {
    return (
      <Box
        onMouseEnter={(event) => {}}
        onMouseLeave={(event) => {}}
        focusRing={"none"}
        w={"full"}
        rounded={"8px"}
        _hover={{
          backgroundColor: { base: "gray.100", _dark: "gray.700" },
        }}
        _active={{
          backgroundColor: { base: "gray.200", _dark: "gray.600" },
        }}
        key={link.title}
        as={"li"}
        listStyle={"none"}
        transition="background 0.2s"
      >
        <MyBurgerMenuLinkItem link={link} />
      </Box>
    );
  });
}
