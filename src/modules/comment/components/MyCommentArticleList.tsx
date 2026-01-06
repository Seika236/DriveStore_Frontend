import { Box, Heading } from "@chakra-ui/react";
import { MyCommentArticleItem } from "@/modules/comment/components/MyCommentArticleItem";
import { IArticleComment } from "../../../types/models/IArticleComments";
import { useQuery } from "@tanstack/react-query";
import ProfileService from "@/modules/comment/services/profileService";

type Props = {
  comments: IArticleComment[];
  refetch: () => void;
};

export function MyArticleCommentList({ comments, refetch }: Props) {
  return comments?.length ? (
    <Box as="ul" display="grid" gridTemplateColumns="1fr" rowGap={3} mb={4}>
      {comments.map((item) => (
        <Box
          as="li"
          key={item.id}
          transitionDuration={"slow"}
          borderWidth="1px"
          borderRadius="lg"
          _hover={{ borderColor: "orange" }}
        >
          <MyCommentArticleItem
            refetch={refetch}
            parentId={item.id}
            comment={item}
            articleId={item.articleId}
          />
        </Box>
      ))}
    </Box>
  ) : (
    <Heading textAlign={"center"} pb={4}>
      Здесь пока нет комментариев
    </Heading>
  );
}
