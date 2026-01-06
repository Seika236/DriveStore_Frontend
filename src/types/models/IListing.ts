import { IListingImages } from "./IListingImages";

export interface IListing {
  id: number;
  name: string;
  description: string;
  city: string;
  price: number;
  picture: IListingImages[];
  categoryId: number;
  typeId: number;
  brandId: number;
  views: number;
}
