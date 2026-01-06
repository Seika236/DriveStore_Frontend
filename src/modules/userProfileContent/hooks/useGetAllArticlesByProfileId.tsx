import { useInfiniteQuery } from "@tanstack/react-query";
import ArticleService from "@/services/articleService";
import { IArticle } from "../../../types/models/IArticle";
import { useEffect, useRef, useState } from "react";

type Props = {
  profileId: number;
};

export function UseGetAllArticlesByProfileId({ profileId }: Props) {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["fetch:get/all/articles"],
      queryFn: ({ pageParam }) =>
        ArticleService.getAllArticlesByProfileId({
          profileId,
          nextCursor: pageParam,
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
          (arr: IArticle[], data) => (arr = [...arr, ...data.data]),
          [],
        ),
    });

  return { data, isFetchingNextPage, fetchNextPage, hasNextPage };
}
