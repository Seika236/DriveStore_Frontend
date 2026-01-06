import { BurgerLinkType } from "@/modules/burgerMenu/types/BurgerLinkType";
import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

type Props = {
  link: BurgerLinkType;
};

export function MyBurgerMenuLinkItem({ link }: Props) {
  return (
    <ChakraLink
      display={"flex"}
      justifyContent={"center"}
      w={"full"}
      border={"none"}
      variant="underline"
      colorPalette={"gray"}
      py={2}
      asChild
    >
      <Link href={link.path}>{link.title}</Link>;
    </ChakraLink>
  );
}
