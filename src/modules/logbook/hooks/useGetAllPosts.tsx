import { useInfiniteQuery } from "@tanstack/react-query";
import PostService from "@/services/postService";
import { IPost } from "../../../types/models/IPost";

export function UseGetAllPosts() {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["fetch:get/posts"],
      initialPageParam: 0,
      queryFn: ({ pageParam }) =>
        PostService.getAllPosts({ nextCursor: pageParam }),
      getNextPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage?.data?.length === 0) {
          return undefined;
        }

        return lastPage.data.at(-1)?.id;
      },
      getPreviousPageParam: (lastPage, _, firstPageParam) => {
        if (firstPageParam <= 1) {
          return undefined;
        }
        return firstPageParam - 1;
      },
      select: (data) =>
        data.pages.reduce(
          (arr: IPost[], data) => (arr = [...arr, ...data.data]),
          [],
        ),
    });

  return { data, isFetchingNextPage, fetchNextPage, hasNextPage };
}
