import { useInfiniteQuery } from "@tanstack/react-query";
import AnnouncementService from "@/modules/announcment/services/announcementService";
import { IAnnouncement } from "../../../../types/models/IAnnouncement";

type Props = {
  userId: number;
};

export function UseGetAllAnnouncementsByUserId({ userId }: Props) {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["fetch:get/all/announcements"],
      queryFn: ({ pageParam }) =>
        AnnouncementService.getAllAnnouncementsByUserId({
          userId,
          nextCursor: pageParam,
        }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage?.data?.length === 0) {
          return undefined;
        }
        return lastPage?.data.at(-1)?.listingId;
      },
      getPreviousPageParam: (lastPage, _, firstPageParam) => {
        if (firstPageParam <= 1) {
          return undefined;
        }
        return firstPageParam - 1;
      },
      select: (data) =>
        data.pages.reduce(
          (arr: IAnnouncement[], data) => (arr = [...arr, ...data.data]),
          [],
        ),
    });

  return { data, isFetchingNextPage, fetchNextPage, hasNextPage };
}
