import { MyCreateComment } from "@/modules/comment/components/MyCreateComment";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import { CreatePostCommentRequest } from "@/modules/comment/types/ApiRequestTypes";
import PostCommentService from "@/modules/comment/services/postCommentService";
import { IPostComment } from "../../../types/models/IPostComments";
import { authStore } from "@/store/authStore";
import { useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { CommentSchema } from "@/modules/comment/types/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { UseGetPostComments } from "@/modules/comment/hooks/useGetPostComments";

type Props = {
  postId: number;
  refetch: () => void;
  children?: ReactNode;
  parentId?: number;
};

export function MyCreatePostComment({
  postId,
  refetch,
  children,
  parentId,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentSchema>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(CommentSchema),
  });
  const { user } = authStore();

  const { fetchFunction, isLoading } = UseRequest<
    AxiosResponse<IPostComment>,
    CreatePostCommentRequest
  >({
    request: PostCommentService.createComment,
    successCb: () => {
      refetch();
    },
    successText: "комментарий был успешно создан",
  });

  const onSubmit: SubmitHandler<CommentSchema> = (data) => {
    const createData: CreatePostCommentRequest = {
      ...data,
      postId,
      userId: user.id,
    };
    if (parentId) {
      createData.parentId = parentId;
    }
    fetchFunction(createData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box position={"relative"}>
        <MyCreateComment
          errorText={errors?.comment?.message}
          register={register("comment")}
          isDisabled={isLoading}
        />
        {children}
      </Box>
    </form>
  );
}
