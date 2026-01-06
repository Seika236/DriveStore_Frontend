import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

type Props = {
  link: string;
};

export function MyAdminLink({ link }: Props) {
  return (
    <ChakraLink
      p={3}
      w={"200px"}
      border={"1px solid"}
      rounded={"8px"}
      borderColor={"orange.500"}
      justifyContent={"center"}
      transitionDuration={"0.3s"}
      _hover={{
        bg: "orange.600/40",
        shadow: "0px 0px 30px 0.5px rgba(249, 115, 22, .2)",
      }}
      textDecoration={"none"}
      asChild
    >
      <Link href={`/admin/${link}`}>{link}</Link>
    </ChakraLink>
  );
}
