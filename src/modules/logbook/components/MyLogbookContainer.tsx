import { MyLogbookHeader } from "@/modules/logbook/components/MyLogbookHeader";
import { MyLogbookSideBar } from "@/modules/logbook/components/MyLogbookSideBar";
import { Grid, GridItem } from "@chakra-ui/react";
import { MyLogBookContent } from "@/modules/logbook/components/MyLogBookContent";

export function MyLogbookContainer() {
  return (
    <div>
      <MyLogbookHeader />
      <Grid
        templateColumns={{ md: "1fr 3fr" }}
        templateRows={{ sm: "80px auto" }}
        gap={4}
      >
        <GridItem p={4}>
          <MyLogbookSideBar />
        </GridItem>
        <GridItem p={4}>
          <MyLogBookContent />
        </GridItem>
      </Grid>
    </div>
  );
}
