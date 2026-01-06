import { CreateArticleCommentRequest } from "@/modules/comment/types/ApiRequestTypes";
import { $api } from "@/http/index";
import constants from "@/modules/comment/constants";
import { IArticleComment } from "../../../types/models/IArticleComments";

class ArticleCommentService {
  async createComment(data: CreateArticleCommentRequest) {
    return await $api.post<IArticleComment>(
      constants.CREATE_ARTICLE_COMMENT_URL,
      data,
    );
  }

  async getAllComments(articleId: number) {
    return await $api.get<IArticleComment[]>(
      constants.GET_ALL_ARTICLE_COMMENTS_URL(articleId),
    );
  }

  async deleteComment(commentId: number) {
    return await $api.delete<void>(
      constants.DELETE_ARTICLE_COMMENTS_URL(commentId),
    );
  }
}

export default new ArticleCommentService();
