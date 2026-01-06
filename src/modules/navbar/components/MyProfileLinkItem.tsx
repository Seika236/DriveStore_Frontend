import { Box, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { MyAvatar } from "@/ui/MyAvatar";
import { authStore } from "@/store/authStore";
import { getStaticImageFromServer } from "../../../lib/getStaticImageFromServer";

export function MyProfileLinkItem() {
  const { user } = authStore();

  return (
    <Box as={"li"} _hover={{ color: "red.600" }} py={1}>
      <Flex columnGap={"10px"} alignItems={"start"}>
        <MyAvatar
          imageUrl={getStaticImageFromServer(user?.profile?.profileImg)}
        />
        <VStack gap={"0px"} alignItems={"start"}>
          <Text p={0}>{user.nickname}</Text>
          <Text color={"gray.400/60"}>{user.email}</Text>
        </VStack>
      </Flex>
    </Box>
  );
}
