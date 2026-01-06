import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import { IUserPostLikes } from "../../../types/models/IUserPostLikes";
import {
  RemovePostLikeRequest,
  SetPostLikeRequest,
} from "@/modules/userProfileContent/types/ApiRequestTypes";
import PostLikeService from "@/modules/userProfileContent/services/postLikeService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { authStore } from "@/store/authStore";

type Props = {
  postId: number;
};

export function UseProfilePostLikes({ postId }: Props) {
  const queryClient = useQueryClient();
  const { user } = authStore();

  const { fetchFunction: fetchSetLike } = UseRequest<
    AxiosResponse<IUserPostLikes>,
    SetPostLikeRequest
  >({
    request: PostLikeService.setLike,
    successCb: () => {
      queryClient.invalidateQueries({
        queryKey: [`fetch:check/profile/post/like/${postId}`],
      });
      queryClient.invalidateQueries({
        queryKey: [`fetch:get/profile/posts/${postId}`],
      });
    },
    successText: "❤",
  });

  const { fetchFunction: fetchRemoveLike } = UseRequest<
    AxiosResponse<void>,
    RemovePostLikeRequest
  >({
    request: PostLikeService.removeLike,
    successCb: () => {
      queryClient.invalidateQueries({
        queryKey: [`fetch:check/profile/post/like/${postId}`],
      });
      queryClient.invalidateQueries({
        queryKey: [`fetch:get/profile/posts/${postId}`],
      });
    },
    successText: "💔",
  });

  const { data: isLike } = useQuery({
    queryKey: [`fetch:check/profile/post/like/${postId}`],
    queryFn: () => PostLikeService.checkLike(user.id, postId),
    select: (data) => data.data,
  });

  const onSetLikeClick = () => {
    fetchSetLike({ userId: user.id, postId: postId });
  };

  const onRemoveLikeClick = () => {
    fetchRemoveLike({ userId: user.id, postId: postId });
  };

  return {
    onRemoveLikeClick,
    onSetLikeClick,
    isLike,
  };
}
