export interface CreateTypeRequest {
  name: string;
  categoryId: number;
}

export interface UpdateTypeRequest {
  id: number;
  name?: string;
  categoryId?: number;
}

export interface DeleteTypeRequest {
  id: number;
}
