export interface IArticleComment {
  id: number;
  userId: number;
  articleId: number;
  createdAt: string;
  comment: string;
  parentId: number;
  children: IArticleComment[];
}
