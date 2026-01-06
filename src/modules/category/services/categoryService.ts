import {
  CreateCategoryRequest,
  UpdateCategoryRequest,
} from "@/modules/category/types/ApiRequestTypes";
import { $api } from "@/http/index";
import Constants from "../constants";
import { CategoryType } from "@/modules/category/types/CategoryType";

class CategoryService {
  async createCategory(data: CreateCategoryRequest) {
    return $api.post<CategoryType>(Constants.CREATE_CATEGORY_URL, data);
  }

  async updateCategory(data: UpdateCategoryRequest) {
    return $api.patch<CategoryType>(Constants.UPDATE_CATEGORY_URL, data);
  }

  async deleteCategory(id: number) {
    return $api.delete<void>(Constants.DELETE_CATEGORY_URL(id));
  }
}

export default new CategoryService();
