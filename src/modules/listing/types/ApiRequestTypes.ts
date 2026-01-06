export interface CreateListingRequest {
  name: string;
  categoryId: string;
  typeId: string;
  brandId: string;
  description?: string;
}

export interface UpdateListingRequest {
  id: string;
  name: string;
  categoryId: string;
  typeId: string;
  brandId: string;
}

export interface DeleteListingRequest {
  id: number;
}
