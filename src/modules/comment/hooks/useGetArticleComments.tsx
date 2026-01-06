import { useQuery } from "@tanstack/react-query";
import ArticleCommentService from "@/modules/comment/services/articleCommentService";

type Props = {
  articleId: number;
  type: "article" | "post";
};

export function UseGetArticleComments({ articleId, type }: Props) {
  const { data, refetch } = useQuery({
    queryKey: [`fetch:get/article-comments/${articleId}`],
    queryFn: () => ArticleCommentService.getAllComments(articleId),
    enabled: type === "article",
    select: (data) => data.data,
  });

  return { data, refetch };
}
