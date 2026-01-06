import { $api } from "@/http/index";
import { AxiosResponse } from "axios";
import { IArticle } from "../types/models/IArticle";
import { GetArticleByIdResponseType } from "@/modules/userProfileContent/types/GetArticleByIdResponseType";
import { publicConstants } from "@/constants/index";

class ArticleService {
  async getAllArticles({
    nextCursor,
    limit = 3,
  }: {
    nextCursor: number;
    limit?: number;
  }): Promise<AxiosResponse<IArticle[]>> {
    return await $api.get(`${publicConstants.GET_ARTICLE_URL}`, {
      params: {
        limit: limit,
        cursor: nextCursor,
      },
    });
  }

  async getAllArticlesByProfileId({
    profileId,
    nextCursor,
  }: {
    profileId: number;
    nextCursor: number;
  }): Promise<AxiosResponse<IArticle[]>> {
    return await $api.get(
      `${publicConstants.GET_ALL_ARTICLE_URL}/${profileId}`,
      {
        params: {
          limit: 3,
          cursor: nextCursor,
        },
      },
    );
  }

  async getArticleById(
    articleId: number,
  ): Promise<AxiosResponse<GetArticleByIdResponseType>> {
    return await $api.get(`${publicConstants.GET_ARTICLE_URL}/${articleId}`);
  }
}

export default new ArticleService();
