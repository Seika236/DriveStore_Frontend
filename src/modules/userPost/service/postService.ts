import { $api } from "@/http/index";
import { constants } from "@/modules/userPost/constants";
import { AxiosResponse } from "axios";
import { IPost } from "../../../types/models/IPost";

class PostService {
  async createPost(formData: FormData): Promise<AxiosResponse<IPost>> {
    return await $api.post(constants.CREATE_POST_URL, formData);
  }
}

export default new PostService();
