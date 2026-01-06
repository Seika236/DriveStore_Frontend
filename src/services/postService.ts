import { $api } from "@/http/index";
import { AxiosResponse } from "axios";
import { IPost } from "../types/models/IPost";
import { GetPostByIdPostResponseType } from "@/modules/userProfileContent/types/GetPostByIdPostResponseType";
import { publicConstants } from "@/constants/index";

class PostService {
  async getAllPosts({
    nextCursor,
    limit = 3,
  }: {
    nextCursor: number;
    limit?: number;
  }): Promise<AxiosResponse<IPost[]>> {
    return await $api.get(`${publicConstants.GET_POST_URL}`, {
      params: {
        limit: 3,
        cursor: nextCursor,
      },
    });
  }

  async getAllPostsByProfileId({
    profileId,
    nextCursor,
  }: {
    profileId: number;
    nextCursor: number;
  }): Promise<AxiosResponse<IPost[]>> {
    return await $api.get(`${publicConstants.GET_ALL_POSTS_URL}/${profileId}`, {
      params: {
        limit: 3,
        cursor: nextCursor,
      },
    });
  }

  async getPostById(
    postId: number,
  ): Promise<AxiosResponse<GetPostByIdPostResponseType>> {
    return await $api.get(`${publicConstants.GET_POST_URL}/${postId}`);
  }
}

export default new PostService();
