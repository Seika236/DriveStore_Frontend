"use client";
import { MyListingInfoHeader } from "@/modules/listingInfo/components/MyListingInfoHeader";
import { useQuery } from "@tanstack/react-query";
import ListingService from "@/services/globalListingService";
import { Grid, Skeleton } from "@chakra-ui/react";
import { MyListingInfoContent } from "@/modules/listingInfo/components/MyListingInfoContent";

type Props = {
  listingId: string;
};

export function MyListingInfoContainer({ listingId }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: [`fetch:get/listing/${listingId}`],
    queryFn: () => ListingService.getListingById(+listingId),
    select: (data) => data.data,
  });

  return (
    <Skeleton loading={isLoading}>
      {data ? (
        <Grid rowGap={4}>
          <MyListingInfoHeader listing={data} />
          <MyListingInfoContent listing={data} />
        </Grid>
      ) : (
        <Skeleton h={"300px"} w={"full"} />
      )}
    </Skeleton>
  );
}
