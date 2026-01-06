import { AxiosResponse } from "axios";
import { $api } from "@/http/index";
import { constants } from "@/modules/userProfileContent/constants";
import {
  SetArticleLikeRequest,
  SetArticleViewRequest,
  SetPostViewRequest,
} from "@/modules/userProfileContent/types/ApiRequestTypes";
import { IUserArticleLikes } from "../../../types/models/IUserArticleLikes";
import { IUserPostViews } from "../../../types/models/IUserPostViews";

class ArticleViewService {
  async checkView(
    userId: number,
    articleId: number,
  ): Promise<AxiosResponse<boolean>> {
    return await $api.get(constants.CHECK_ARTICLE_VIEW_URL(userId, articleId));
  }

  async setView(
    data: SetArticleViewRequest,
  ): Promise<AxiosResponse<IUserPostViews>> {
    return await $api.post(constants.SET_ARTICLE_VIEW_URL, data);
  }
}

export default new ArticleViewService();
