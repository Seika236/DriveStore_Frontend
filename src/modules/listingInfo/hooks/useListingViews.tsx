import { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import PostViewService from "@/modules/userProfileContent/services/postViewService";
import { authStore } from "@/store/authStore";
import ListingViewSerivce from "@/modules/listingInfo/services/listingViewSerivce";

type Props = {
  listingId: number;
};

export function UseListingViews({ listingId }: Props) {
  const { user } = authStore();

  const { mutate } = useMutation({
    mutationKey: [`fetch:set/listings/view/${listingId}`],
    mutationFn: ListingViewSerivce.setView,
  });

  const { data: isViewed } = useQuery({
    queryKey: [`fetch:check/listings/view/${listingId}`],
    queryFn: () => ListingViewSerivce.checkView(user.id, listingId),
    select: (data) => data.data,
  });

  useEffect(() => {
    if (isViewed === false && user?.id) {
      mutate({ userId: user.id, listingId: listingId });
    }
  }, [isViewed]);
}
