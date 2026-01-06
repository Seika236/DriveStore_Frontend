import { Box, Heading } from "@chakra-ui/react";
import { MyCommentPostItem } from "@/modules/comment/components/MyCommentPostItem";
import { IPostComment } from "../../../types/models/IPostComments";

type Props = {
  comments: IPostComment[];
  refetch: () => void;
};

export function MyCommentPostList({ comments, refetch }: Props) {
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
          <MyCommentPostItem
            refetch={refetch}
            parentId={item.id}
            comment={item}
            postId={item.postId}
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
