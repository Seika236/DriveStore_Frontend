import {
  CreateCategoryRequest,
  UpdateCategoryRequest,
} from "@/modules/category/types/ApiRequestTypes";
import { $api } from "@/http/index";
import Constants from "@/modules/listing/constants";
import { LisitngType } from "@/modules/listing/types/LisitngType";

class CategoryService {
  async createListing(data: CreateCategoryRequest) {
    return $api.post<LisitngType>(Constants.CREATE_LISTING_URL, data);
  }

  async updateListing(data: UpdateCategoryRequest) {
    return $api.patch<LisitngType>(Constants.UPDATE_LISTING_URL, data);
  }

  async deleteListing(id: number) {
    return $api.delete<void>(Constants.DELETE_LISTING_URL(id));
  }
}

export default new CategoryService();
