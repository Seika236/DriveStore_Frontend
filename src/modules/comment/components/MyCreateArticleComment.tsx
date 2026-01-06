import { authStore } from "@/store/authStore";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import ArticleCommentService from "@/modules/comment/services/articleCommentService";
import { CreateArticleCommentRequest } from "@/modules/comment/types/ApiRequestTypes";
import { IArticleComment } from "../../../types/models/IArticleComments";
import { MyCreateComment } from "@/modules/comment/components/MyCreateComment";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentSchema } from "@/modules/comment/types/FormSchema";
import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  articleId: number;
  refetch: () => void;
  children?: ReactNode;
  parentId?: number;
};

export function MyCreateArticleComment({
  articleId,
  refetch,
  parentId,
  children,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentSchema>({
    mode: "onChange",
    reValidateMode: "onSubmit",
    resolver: zodResolver(CommentSchema),
  });
  const { user } = authStore();

  const { fetchFunction, isLoading } = UseRequest<
    AxiosResponse<IArticleComment>,
    CreateArticleCommentRequest
  >({
    request: ArticleCommentService.createComment,
    successCb: () => {
      refetch();
    },
    successText: "комментарий был успешно создан",
  });

  const onSubmit: SubmitHandler<CommentSchema> = (data) => {
    const createData: CreateArticleCommentRequest = {
      ...data,
      articleId,
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
