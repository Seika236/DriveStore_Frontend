import { Box } from "@chakra-ui/react";
import { MyArticle } from "@/modules/userProfileContent/components/MyArticle";
import { UseGetAllArticlesByProfileId } from "@/modules/userProfileContent/hooks/useGetAllArticlesByProfileId";
import { UseGetAllPostsByProfileId } from "@/modules/userProfileContent/hooks/useGetAllPostsByProfileId";
import { mergeArticlesPosts } from "../../../lib/mergeArticlesPosts";
import { useCallback, useMemo, useRef } from "react";
import { MyPost } from "@/modules/userProfileContent/components/MyPost";
import { UseInfinityPagination } from "@/hooks/useInfinityPagination";

type Props = {
  profileId: number;
};

export function MyProfileContentList({ profileId }: Props) {
  const childRef = useRef<Element>(null);
  const parentRef = useRef<Element>(null);
  const { data: articles, fetchNextPage: fetchNextArticlePage } =
    UseGetAllArticlesByProfileId({ profileId });

  const { data: posts, fetchNextPage: fetchNextPostPage } =
    UseGetAllPostsByProfileId({ profileId });

  const combine = useMemo(() => {
    return mergeArticlesPosts(articles, posts);
  }, [articles?.length, posts?.length]);

  const infinity = useCallback(() => {
    fetchNextArticlePage();
    fetchNextPostPage();
  }, [combine.length]);

  UseInfinityPagination({ childRef, parentRef, cb: infinity });

  return (
    <Box as={"ul"} display={"grid"} rowGap={5}>
      {combine?.map((item) => {
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
