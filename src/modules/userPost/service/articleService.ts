import { $api } from "@/http/index";
import { constants } from "@/modules/userPost/constants";
import { AxiosResponse } from "axios";
import { IArticle } from "../../../types/models/IArticle";

class ArticleService {
  async createArticle(formData: FormData): Promise<AxiosResponse<IArticle>> {
    return await $api.post(constants.CREATE_ARTICLE_URL, formData);
  }
}

export default new ArticleService();
