import { CreatePostCommentRequest } from "@/modules/comment/types/ApiRequestTypes";
import { $api } from "@/http/index";
import constants from "@/modules/comment/constants";
import { IPostComment } from "../../../types/models/IPostComments";

class PostCommentService {
  async createComment(data: CreatePostCommentRequest) {
    return await $api.post<IPostComment>(
      constants.CREATE_POST_COMMENT_URL,
      data,
    );
  }

  async getAllComments(postId: number) {
    return await $api.get<IPostComment[]>(
      constants.GET_ALL_POST_COMMENTS_URL(postId),
    );
  }

  async deleteComment(commentId: number) {
    return await $api.delete<void>(
      constants.DELETE_POST_COMMENTS_URL(commentId),
    );
  }
}

export default new PostCommentService();
