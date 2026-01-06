"use client";

import { Badge, Grid, GridItem, Heading } from "@chakra-ui/react";
import { MyAvatar } from "@/ui/MyAvatar";
import { authStore } from "@/store/authStore";
import { yearToStringFromDate } from "@/modules/profile/lib/YearToStringFromDate";
import { getUserOldDescription } from "@/modules/profile/lib/getUserOldDescription";
import { MySettingsButton } from "@/modules/profile/UI/MySettingsButton";
import { getStaticImageFromServer } from "../../../lib/getStaticImageFromServer";

export function MyUserProfile() {
  const { user } = authStore();

  return (
    <Grid templateColumns="repeat(8, 1fr)" columnGap={4} mt={10}>
      <GridItem colSpan={1} display={"grid"}>
        <MyAvatar
          imageUrl={getStaticImageFromServer(user?.profile?.profileImg)}
          size={100}
        />
      </GridItem>
      <GridItem
        colSpan={6}
        alignSelf={"center"}
        display={"flex"}
        rowGap={1}
        flexDirection={"column"}
        alignItems={"start"}
      >
        <Heading size={{ base: "2xl", md: "3xl", lg: "4xl" }}>
          {user?.nickname}
        </Heading>
        <Badge size={{ base: "sm", md: "md", lg: "lg" }}>
          {yearToStringFromDate(user?.createdAt)}
          {getUserOldDescription(yearToStringFromDate(user?.createdAt), [
            "год на driveStore",
            "года на driveStore",
            "лет на driveStore",
          ])}
        </Badge>
      </GridItem>
      <GridItem colSpan={1} justifySelf={"end"}>
        <MySettingsButton />
      </GridItem>
    </Grid>
  );
}
