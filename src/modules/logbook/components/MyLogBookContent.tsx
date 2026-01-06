"use client";

import { UseGetAllArticles } from "@/modules/logbook/hooks/useGetAllArticles";
import { UseGetAllPosts } from "@/modules/logbook/hooks/useGetAllPosts";
import { useCallback, useMemo, useRef } from "react";
import { mergeArticlesPosts } from "../../../lib/mergeArticlesPosts";
import { UseInfinityPagination } from "@/hooks/useInfinityPagination";
import { Box } from "@chakra-ui/react";
import { MyPost } from "@/modules/userProfileContent/components/MyPost";
import { MyArticle } from "@/modules/userProfileContent/components/MyArticle";
import { selectTransportValueStore } from "@/modules/logbook/store/selectTransportValue";

export function MyLogBookContent() {
  const childRef = useRef<Element>(null);
  const parentRef = useRef<Element>(null);

  const {
    data: articles,
    isFetchingNextPage: isFetchingNextArticlePage,
    hasNextPage: hasNestArticlePage,
    fetchNextPage: fetchNextArticlePage,
  } = UseGetAllArticles();

  const {
    data: posts,
    isFetchingNextPage: isFetchingNextPostPage,
    hasNextPage: hasNestPostPage,
    fetchNextPage: fetchNextPostPage,
  } = UseGetAllPosts();
  const { transportValue } = selectTransportValueStore();

  const combine = useMemo(() => {
    return mergeArticlesPosts(articles, posts);
  }, [articles?.length, posts?.length]);

  const filteredCombine = useMemo(() => {
    if (transportValue) {
      return combine.filter((item) => {
        return item.transport.name === transportValue;
      });
    }
    return combine;
  }, [transportValue, combine.length]);

  const infinity = useCallback(() => {
    fetchNextArticlePage();
    fetchNextPostPage();
  }, [combine.length]);

  UseInfinityPagination({ childRef, parentRef, cb: infinity });

  return (
    <Box as={"ul"} display={"grid"} rowGap={5}>
      {filteredCombine?.map((item) => {
        switch (item.type) {
          case "post":
            return (
              <Box as={"li"} key={item.id + item.type}>
                <MyPost id={item.id} />
              </Box>
            );
          case "article":
            return (
              <Box as={"li"} key={item.id + item.type}>
                <MyArticle id={item.id} />
              </Box>
            );
          default:
            const end: never = item;
        }
      })}

      <Box ref={childRef} as={"li"} h={0}></Box>
    </Box>
  );
}
