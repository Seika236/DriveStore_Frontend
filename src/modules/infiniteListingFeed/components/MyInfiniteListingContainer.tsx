"use client";

import { UseGetAllAnnouncementsWithoutUserId } from "@/modules/infiniteListingFeed/hooks/useGetAllAnnouncementsWithoutUserId";
import { authStore } from "@/store/authStore";
import { MyInfiniteListingList } from "@/modules/infiniteListingFeed/components/MyInfiniteListingList";
import { Box, Grid } from "@chakra-ui/react";
import { MyFilterGroup } from "@/modules/infiniteListingFeed/components/MyFilterGroup";
import { useCallback, useRef } from "react";
import { UseInfinityPagination } from "@/hooks/useInfinityPagination";

export function MyInfiniteListingContainer() {
  const childRef = useRef<Element>(null);
  const parentRef = useRef<Element>(null);
  const { user } = authStore();
  const { data, fetchNextPage } = UseGetAllAnnouncementsWithoutUserId({
    userId: user?.id,
  });

  const infinity = useCallback(() => {
    fetchNextPage();
  }, [data?.length]);

  UseInfinityPagination({ childRef, parentRef, cb: infinity });

  return (
    <Grid rowGap={5}>
      <MyFilterGroup />

      <MyInfiniteListingList listings={data || []} />
      <Box ref={childRef} h={0}></Box>
    </Grid>
  );
}
