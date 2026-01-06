import { useInfiniteQuery } from "@tanstack/react-query";
import InfinityListingService from "@/modules/infiniteListingFeed/services/infinityListingService";
import { GetAllAnnouncementsWithoutUserIdRequest } from "@/modules/infiniteListingFeed/services/ApiRequestTypes";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { authStore } from "@/store/authStore";

type Props = {
  userId: number;
};

export function UseGetAllAnnouncementsWithoutUserId({ userId }: Props) {
  const searchParams = useSearchParams();
  const brand = searchParams.get("brand");
  const { isLoading } = authStore();
  const type = searchParams.get("type");
  const category = searchParams.get("category");

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, refetch } =
    useInfiniteQuery({
      enabled: !!isLoading,
      queryKey: ["fetch:get/all/without/userId/announcements"],
      queryFn: ({ pageParam }) =>
        InfinityListingService.getAllAnnouncementsWithoutUserId({
          userId,
          nextCursor: pageParam,
          typeId: +type?.split("%")?.[1] || null,
          brandId: +brand?.split("%")?.[1] || null,
          categoryId: +category?.split("%")?.[1] || null,
        }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage?.data?.length === 0) {
          return undefined;
        }
        return lastPage?.data.at(-1)?.id;
      },
      getPreviousPageParam: (lastPage, _, firstPageParam) => {
        if (firstPageParam <= 1) {
          return undefined;
        }
        return firstPageParam - 1;
      },
      select: (data) =>
        data.pages.reduce(
          (arr: GetAllAnnouncementsWithoutUserIdRequest[], data) =>
            (arr = [...arr, ...data.data]),
          [],
        ),
    });

  useEffect(() => {
    if (!isLoading) {
      refetch();
    }
  }, [type, category, brand, isLoading]);

  return { data, isFetchingNextPage, fetchNextPage, hasNextPage };
}
