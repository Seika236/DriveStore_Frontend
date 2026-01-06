import { Box, Grid, GridItem } from "@chakra-ui/react";
import { GetListingByIdResponseType } from "@/modules/announcment";
import { MyContactContainer } from "@/modules/listingInfo/components/MyContactContainer";
import { MyListingInfoPriceCard } from "@/modules/listingInfo/components/MyListingInfoPriceCard";
import { MyCarSpecList } from "@/modules/listingInfo/components/MyCarSpecList";
import { MyListingCarousel } from "@/modules/listingInfo/components/MyListingCarousel";
import { MySellerComment } from "@/modules/listingInfo/components/MySellerComment";
import { MyImageZoomModal } from "@/components/modals/MyImageZoomModal";
import { useState } from "react";
import { getStaticImageFromServer } from "../../../lib/getStaticImageFromServer";

type Props = {
  listing: GetListingByIdResponseType;
};

export function MyListingInfoContent({ listing }: Props) {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const onOpenChange = () => {
    setActiveImage(null);
  };

  const onSetActiveImage = (index: number) => {
    setActiveImage(index);
  };
  return (
    <Grid rowGap={4}>
      <MyListingInfoPriceCard listing={listing} />
      <MyContactContainer listing={listing} />
      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows={{ base: "repeat(auto, auto)", md: "none" }}
        gap={4}
        width="full"
      >
        <GridItem colSpan={{ base: 4, md: 1 }} rowSpan={{ base: 1, md: 0 }}>
          <MyCarSpecList properties={listing?.property || []} />
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 3 }} rowSpan={{ base: 1, md: 0 }}>
          <MyListingCarousel
            onClick={onSetActiveImage}
            images={listing?.picture || []}
            carName={listing?.name}
          />
        </GridItem>
      </Grid>
      <MySellerComment comment={listing.description} />
      <MyImageZoomModal
        image={
          listing?.picture?.[activeImage] &&
          getStaticImageFromServer(listing.picture[activeImage].image_name)
        }
        onOpenChange={onOpenChange}
      />
    </Grid>
  );
}
