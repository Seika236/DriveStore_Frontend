export interface SetArticleLikeRequest {
  readonly userId: number;
  readonly articleId: number;
}

export interface SetArticleViewRequest {
  readonly userId: number;
  readonly articleId: number;
}

export interface SetPostLikeRequest {
  readonly userId: number;
  readonly postId: number;
}

export interface ChoiceQuestion {
  questionSurveyId: number;
  userId: number;
  questionName: string;
}

export interface RemovePostLikeRequest {
  readonly userId: number;
  readonly postId: number;
}

export interface RemoveArticleLikeRequest {
  readonly userId: number;
  readonly articleId: number;
}

export interface SetPostViewRequest {
  readonly userId: number;
  readonly postId: number;
}

export interface GetUserQuestionRequest {
  userId: number;
  questionSurveyId: number;
}
