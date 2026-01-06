"use client";

import { MyIconButton } from "@/ui/MyIconButton";
import { BestIcon } from "@/assets/icons/best-icon";
import { MessageIcon } from "@/assets/icons/message-icon";
import { Box, Flex } from "@chakra-ui/react";
import { MyShareButton } from "@/modules/userProfileContent/UI/myShareButton";

type Props = {
  onLikeClick: () => void;
  isLike: boolean;
  onCommentClick: () => void;
};

export function MyProfileContentActionButtonContainer({
  onLikeClick,
  isLike,
  onCommentClick,
}: Props) {
  return (
    <Flex justifyContent={"end"} alignItems={"center"}>
      <Box>
        <MyIconButton
          title={"Нравиться"}
          icon={<BestIcon size={"xl"} />}
          onClick={onLikeClick}
          style={{ color: isLike && "red.600" }}
        />
        <MyIconButton
          title={"Комментарий"}
          icon={<MessageIcon />}
          onClick={onCommentClick}
        />
      </Box>
    </Flex>
  );
}
