export interface IPostComment {
  id: number;
  userId: number;
  postId: number;
  createdAt: string;
  comment: string;
  parentId: number;
  children: IPostComment[];
}
