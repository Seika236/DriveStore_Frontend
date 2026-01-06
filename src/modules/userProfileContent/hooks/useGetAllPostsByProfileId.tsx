import { useInfiniteQuery } from "@tanstack/react-query";
import ArticleService from "@/services/articleService";
import PostService from "@/services/postService";
import { IArticle } from "../../../types/models/IArticle";
import { IPost } from "../../../types/models/IPost";
import { useEffect, useRef, useState } from "react";

type Props = {
  profileId: number;
};

export function UseGetAllPostsByProfileId({ profileId }: Props) {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["fetch:get/all/posts"],
      initialPageParam: 0,
      queryFn: ({ pageParam }) =>
        PostService.getAllPostsByProfileId({
          profileId,
          nextCursor: pageParam,
        }),
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
