"use client";

import { Grid } from "@chakra-ui/react";
import { UseGetArticleComments } from "@/modules/comment/hooks/useGetArticleComments";
import { UseGetPostComments } from "@/modules/comment/hooks/useGetPostComments";
import { CommentsType } from "@/modules/comment/types/CommentsType";
import { MyCreatePostComment } from "@/modules/comment/components/MyCreatePostComment";
import { MyCreateArticleComment } from "@/modules/comment/components/MyCreateArticleComment";
import { MyCommentPostList } from "@/modules/comment/components/MyCommentPostList";
import { MyArticleCommentList } from "@/modules/comment/components/MyCommentArticleList";

type Props = {
  id: number;
  type: CommentsType;
};

export function MyCommentsContainer({ type, id }: Props) {
  const { data: articleComments, refetch: articleRefetch } =
    UseGetArticleComments({
      type,
      articleId: id,
    });
  const { data: postComments, refetch: postRefetch } = UseGetPostComments({
    type,
    postId: id,
  });

  return (
    <Grid rowGap={6}>
      {type === "post" ? (
        <MyCreatePostComment postId={id} refetch={() => {}} />
      ) : (
        <MyCreateArticleComment articleId={id} refetch={articleRefetch} />
      )}
      {type === "post" ? (
        <MyCommentPostList refetch={postRefetch} comments={postComments} />
      ) : (
        <MyArticleCommentList
          refetch={articleRefetch}
          comments={articleComments}
        />
      )}
    </Grid>
  );
}
