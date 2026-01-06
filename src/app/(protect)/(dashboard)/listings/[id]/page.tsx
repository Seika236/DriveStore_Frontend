export const dynamicParams = true;

import { MyListingInfoContainer } from "@/modules/listingInfo";
import GlobalListingService from "@/services/globalListingService";
import { MySpinner } from "@/ui/MySpinner";
import { Suspense } from "react";

export async function generateStaticParams() {
  try {
    const listings = await GlobalListingService.getAllListings();

    return listings.data.map((listing) => ({
      id: String(listing.id),
    }));
  } catch (e) {
    return [];
    console.log("Error generating Static Params: " + e);
  }
}

export default async function Article({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Suspense fallback={<MySpinner />}>
      <MyListingInfoContainer listingId={id} />
    </Suspense>
  );
}
