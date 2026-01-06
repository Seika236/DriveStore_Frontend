import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import { MyAvatar } from "@/ui/MyAvatar";
import NextLink from "next/link";
import { getStaticImageFromServer } from "../../../lib/getStaticImageFromServer";

type Props = {
  userName: string;
  profileId: number;
  profileImage: string | undefined;
};

export function MyProfileLink({ userName, profileId, profileImage }: Props) {
  return (
    <ChakraLink
      textDecoration={"none"}
      _hover={{ color: { base: "red.500", _dark: "red.400" } }}
      color={{ base: "gray.800", _dark: "whiteAlpha.900" }}
      transition="color 0.2s"
      asChild
    >
      <NextLink href={`/profile/${profileId}`}>
        <Flex alignItems={"center"} columnGap={2}>
          <MyAvatar
            imageUrl={getStaticImageFromServer(profileImage)}
            size={8}
          />
          {userName}
        </Flex>
      </NextLink>
    </ChakraLink>
  );
}
