import { CategoryType } from "@/modules/category/types/CategoryType";

export function TransformCategoryResponse(category: CategoryType | undefined) {
  return category.name;
}
