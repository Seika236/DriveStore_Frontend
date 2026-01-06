import { MyBrandContainer } from "@/modules/brandList";
import { MyInfiniteListingContainer } from "@/modules/infiniteListingFeed";
import { Grid } from "@chakra-ui/react";

export default function Home() {
  return (
    <Grid rowGap={4} mb={4}>
      <MyBrandContainer />
      <MyInfiniteListingContainer />
    </Grid>
  );
}
