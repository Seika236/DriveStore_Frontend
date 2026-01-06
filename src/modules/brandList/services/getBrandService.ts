import { $api } from "@/http/index";
import { constants } from "@/modules/brandList/constants";
import { BrandType } from "@/modules/brand/types/BrandType";
import { IBrand } from "../../../types/models/IBrand";

class GetBrandService {
  async getAllBrands() {
    return await $api.get<IBrand[]>(constants.GET_ALL_BRANDS_URL);
  }
}

export default new GetBrandService();
