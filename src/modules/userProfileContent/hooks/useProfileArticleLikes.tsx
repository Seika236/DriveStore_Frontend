import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import {
  RemoveArticleLikeRequest,
  SetArticleLikeRequest,
} from "@/modules/userProfileContent/types/ApiRequestTypes";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { authStore } from "@/store/authStore";
import ArticleLikeService from "@/modules/userProfileContent/services/articleLikeService";
import { IUserArticleViews } from "../../../types/models/IUserArticleViews";

type Props = {
  articleId: number;
};

export function UseProfileArticleLikes({ articleId }: Props) {
  const queryClient = useQueryClient();
  const { user } = authStore();

  const { fetchFunction: fetchSetLike } = UseRequest<
    AxiosResponse<IUserArticleViews>,
    SetArticleLikeRequest
  >({
    request: ArticleLikeService.setLike,
    successCb: () => {
      queryClient.invalidateQueries({
        queryKey: [`fetch:check/profile/article/like/${articleId}`],
      });
      queryClient.invalidateQueries({
        queryKey: [`fetch:get/profile/articles/${articleId}`],
      });
    },
    successText: "❤",
  });

  const { fetchFunction: fetchRemoveLike } = UseRequest<
    AxiosResponse<void>,
    RemoveArticleLikeRequest
  >({
    request: ArticleLikeService.removeLike,
    successCb: () => {
      queryClient.invalidateQueries({
        queryKey: [`fetch:check/profile/article/like/${articleId}`],
      });
      queryClient.invalidateQueries({
        queryKey: [`fetch:get/profile/articles/${articleId}`],
      });
    },
    successText: "💔",
  });

  const { data: isLike } = useQuery({
    queryKey: [`fetch:check/profile/article/like/${articleId}`],
    queryFn: () => ArticleLikeService.checkLike(user.id, articleId),
    select: (data) => data.data,
  });

  const onSetLikeClick = () => {
    fetchSetLike({ userId: user.id, articleId: articleId });
  };

  const onRemoveLikeClick = () => {
    fetchRemoveLike({ userId: user.id, articleId: articleId });
  };

  return {
    onRemoveLikeClick,
    onSetLikeClick,
    isLike,
  };
}
