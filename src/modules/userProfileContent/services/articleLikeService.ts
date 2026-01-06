import { AxiosResponse } from "axios";
import { $api } from "@/http/index";
import { constants } from "@/modules/userProfileContent/constants";
import {
  RemoveArticleLikeRequest,
  SetArticleLikeRequest,
} from "@/modules/userProfileContent/types/ApiRequestTypes";
import { IUserArticleLikes } from "../../../types/models/IUserArticleLikes";

class ArticleLikeService {
  async checkLike(
    userId: number,
    articleId: number,
  ): Promise<AxiosResponse<boolean>> {
    return await $api.get(constants.CHECK_ARTICLE_LIKE_URL(userId, articleId));
  }

  async removeLike(
    data: RemoveArticleLikeRequest,
  ): Promise<AxiosResponse<void>> {
    const { articleId, userId } = data;
    return await $api.delete(
      constants.DELETE_ARTICLE_LIKE_URL(userId, articleId),
    );
  }

  async setLike(
    data: SetArticleLikeRequest,
  ): Promise<AxiosResponse<IUserArticleLikes>> {
    return await $api.post(constants.SET_ARTICLE_LIKE_URL, data);
  }
}

export default new ArticleLikeService();
