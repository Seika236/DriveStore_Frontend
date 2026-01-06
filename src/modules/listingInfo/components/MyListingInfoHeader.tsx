import { MyBreadcrumbList } from "@/components/MyBreadcrumbList";
import { GetListingByIdResponseType } from "@/modules/announcment";
import { getBreadcrumbsList } from "../../../lib/getBreadcrumbsList";
import { Flex } from "@chakra-ui/react";
import { MyListingInfoActionButtonList } from "@/modules/listingInfo/components/MyListingInfoActionButtonList";

type Props = {
  listing: GetListingByIdResponseType;
};

export function MyListingInfoHeader({ listing }: Props) {
  return (
    <Flex alignItems={"end"} justifyContent={"space-between"} mt={4}>
      <MyBreadcrumbList
        breadcrumbs={getBreadcrumbsList({
          category: listing.category.name + "%" + listing.category.id,
          brand: listing.brand.name + "%" + listing.brand.id,
          type: listing.type.name + "%" + listing.type.id,
          city: listing.city,
        })}
      />
      <MyListingInfoActionButtonList listingId={listing.id} />
    </Flex>
  );
}
