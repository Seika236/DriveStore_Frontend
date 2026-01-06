import { Box, Flex } from "@chakra-ui/react";
import { MyAvatar } from "@/ui/MyAvatar";
import { MyCreatePostTransportSelect } from "@/modules/userPost/UI/MyCreatePostTransportSelect";
import { UseFormRegisterReturn } from "react-hook-form";
import { MyCreatePostHeaderSelect } from "@/modules/userPost/UI/MyCreatePostHeaderSelect";
import { MyCreatePostIsPublicSelect } from "@/modules/userPost/UI/MyCreatePostIsPublicSelect";
import { getPreviewImage } from "../lib/getPreviewImage";
import { authStore } from "@/store/authStore";
import { ReactElement } from "react";

type Props = {
  children: ReactElement;
};

export function MyInputContainer({ children }: Props) {
  const { user } = authStore();

  return (
    <Flex
      columnGap={"10px"}
      justifyItems={"start"}
      justifyContent={"start"}
      width={"full"}
    >
      <Box ml={"4px"} mr={"auto"}>
        <MyAvatar
          imageUrl={getPreviewImage(null, user?.profile?.profileImg)}
          size={8}
        />
      </Box>
      {children}
    </Flex>
  );
}
