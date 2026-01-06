import { AxiosResponse } from "axios";
import { $api } from "@/http/index";
import { constants } from "@/modules/userProfileContent/constants";
import {
  RemovePostLikeRequest,
  SetPostLikeRequest,
} from "@/modules/userProfileContent/types/ApiRequestTypes";

import { IUserPostLikes } from "../../../types/models/IUserPostLikes";

class PostLikeService {
  async checkLike(
    userId: number,
    postId: number,
  ): Promise<AxiosResponse<boolean>> {
    return await $api.get(constants.CHECK_POST_LIKE_URL(userId, postId));
  }

  async removeLike(data: RemovePostLikeRequest): Promise<AxiosResponse<void>> {
    const { postId, userId } = data;
    return await $api.delete(constants.DELETE_POST_LIKE_URL(userId, postId));
  }

  async setLike(
    data: SetPostLikeRequest,
  ): Promise<AxiosResponse<IUserPostLikes>> {
    return await $api.post(constants.SET_POST_LIKE_URL, data);
  }
}

export default new PostLikeService();
