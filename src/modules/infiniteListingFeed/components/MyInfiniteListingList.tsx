import { Grid, Heading } from "@chakra-ui/react";
import { GetAllAnnouncementsWithoutUserIdRequest } from "@/modules/infiniteListingFeed/services/ApiRequestTypes";
import { MyInfiniteListingItem } from "@/modules/infiniteListingFeed/UI/MyInfiniteListingItem";
import { filterStore } from "@/store/filterStore";
import { useMemo } from "react";

type Props = {
  listings: GetAllAnnouncementsWithoutUserIdRequest[];
};

export function MyInfiniteListingList({ listings }: Props) {
  const { searchValue } = filterStore();

  const filterListings = useMemo(() => {
    if (!searchValue) {
      return listings;
    }
    return listings.filter((item) => {
      return item.listing.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
  }, [searchValue, listings.length]);

  return filterListings.length ? (
    <Grid
      px={4}
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={4}
    >
      {filterListings.map((item) => (
        <MyInfiniteListingItem key={item.listingId} listing={item.listing} />
      ))}
    </Grid>
  ) : (
    <Heading textAlign={"center"}>Здесь пока нет объявлений</Heading>
  );
}
