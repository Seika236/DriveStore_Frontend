export interface CreatePostCommentRequest {
  userId: number;
  postId: number;
  comment: string;
  parentId?: number;
}

export interface CreateArticleCommentRequest {
  userId: number;
  articleId: number;
  comment: string;
  parentId?: number;
}
