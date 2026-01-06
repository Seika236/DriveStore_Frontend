"use client";

import { MyProfileLink } from "@/modules/userProfileContent/UI/myProfileLink";
import { Flex } from "@chakra-ui/react";
import { MyProfileContentActionButtonList } from "@/modules/userProfileContent/components/MyProfileContentActionButtonList";
import { UseClipboard } from "@/hooks/useClipboard";

type Props = {
  userName: string;
  type: "article" | "post";
  profileId: number;
  contentId: number;
  profileImage: string;
};

export function MyProfileContentHeader({
  userName,
  type,
  profileId,
  profileImage,
  contentId,
}: Props) {
  const { clipboardHandler } = UseClipboard({
    writeText: `${process.env.NEXT_PUBLIC_CLIENT_URL}/logbook/${type}/${contentId}`,
  });
  const onShareButtonClick = () => {
    clipboardHandler();
  };

  return (
    <Flex justifyContent={"space-between"}>
      <MyProfileLink
        profileImage={profileImage}
        userName={userName}
        profileId={profileId}
      />
      <MyProfileContentActionButtonList
        onShareButtonClick={onShareButtonClick}
      />
    </Flex>
  );
}
