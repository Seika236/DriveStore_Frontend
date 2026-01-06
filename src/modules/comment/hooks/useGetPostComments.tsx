import { useQuery } from "@tanstack/react-query";
import ArticleCommentService from "@/modules/comment/services/articleCommentService";
import { CommentsType } from "@/modules/comment/types/CommentsType";
import PostCommentService from "@/modules/comment/services/postCommentService";

type Props = {
  postId: number;
  type: CommentsType;
};

export function UseGetPostComments({ postId, type }: Props) {
  const { data, refetch } = useQuery({
    queryKey: [`fetch:get/post-comments/${postId}`],
    queryFn: () => PostCommentService.getAllComments(postId),
    enabled: type === "post",
    select: (data) => data.data,
  });

  return { data, refetch };
}
