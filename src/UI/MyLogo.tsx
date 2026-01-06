import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

type Props = {};

export function MyLogo(props: Props) {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <ChakraLink color={"red.500"} fontSize={25} asChild>
        <Link href={"/"}>DriveStore</Link>
      </ChakraLink>
    </Box>
  );
}
