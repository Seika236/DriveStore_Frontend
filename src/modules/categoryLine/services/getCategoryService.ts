import { $api } from "@/http/index";
import { CategoryType } from "@/modules/category/types/CategoryType";
import { constants } from "@/modules/categoryLine/constants";
import { ICategory } from "../../../types/models/ICategory";

class GetCategoryService {
  async getAllCategories() {
    return await $api.get<ICategory[]>(constants.GET_ALL_CATEGORIES_URL);
  }
}

export default new GetCategoryService();
