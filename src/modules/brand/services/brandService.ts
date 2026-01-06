import { $api } from "@/http/index";
import Constants from "../constants";
import {
  CreateBrandRequest,
  UpdateBrandRequest,
} from "@/modules/brand/types/ApiRequestTypes";
import { BrandType } from "@/modules/brand/types/BrandType";

class BrandService {
  async createBrand(data: CreateBrandRequest) {
    return $api.post<BrandType>(Constants.CREATE_BRAND_URL, data);
  }

  async updateBrand(data: UpdateBrandRequest) {
    return $api.patch<BrandType>(Constants.UPDATE_BRAND_URL, data);
  }

  async deleteBrand(id: number) {
    return $api.delete<void>(Constants.DELETE_BRAND_URL(id));
  }
}

export default new BrandService();
