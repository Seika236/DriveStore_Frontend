"use client";

import { Box, Grid, GridItem } from "@chakra-ui/react";
import { MyAnnouncementLeftGridContainer } from "@/modules/announcment/components/MyAnnouncementLeftGridContainer";
import { MyAnnouncementRightGridContainer } from "@/modules/announcment/components/MyAnnouncementRightGridContainer";

export function MyAnnouncementContainer() {
  return (
    <Grid
      templateColumns={{ lg: "repeat(2, 1fr)" }}
      gap={3}
      p={6}
      mt={4}
      borderWidth={"1px"}
      rounded={"2xl"}
      _hover={{ borderColor: "gray.400" }}
    >
      <GridItem colSpan={1}>
        <MyAnnouncementLeftGridContainer />
      </GridItem>
      <GridItem colSpan={1}>
        <MyAnnouncementRightGridContainer />
      </GridItem>
    </Grid>
  );
}
