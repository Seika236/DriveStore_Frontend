export interface CreateCategoryRequest {
  name: string;
}

export interface UpdateCategoryRequest {
  id: number;
  name: string;
}

export interface DeleteCategoryRequest {
  id: number;
}
