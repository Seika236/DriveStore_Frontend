import { CategoryType } from "@/modules/category/types/CategoryType";

export interface IType {
  id: number;
  name: string;
  categoryId: number;
  category: CategoryType;
}
