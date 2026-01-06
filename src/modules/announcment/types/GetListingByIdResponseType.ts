import { IBrand } from "../../../types/models/IBrand";
import { ICategory } from "../../../types/models/ICategory";
import { IType } from "../../../types/models/IType";
import { IProperty } from "../../../types/models/IProperty";
import { IListingImages } from "../../../types/models/IListingImages";

export interface GetListingByIdResponseType {
  brand: IBrand;
  brandId: number;
  category: ICategory;
  createdAt: string;
  categoryId: number;
  city: string;
  price: number;
  description: string;
  id: number;
  name: string;
  property: IProperty[];
  picture: IListingImages[];
  telephone: string;
  views: number;
  type: IType;
}
