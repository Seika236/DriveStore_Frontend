export const constants = {
  GET_ALL_POSTS_URL: "posts/all",
  GET_ALL_ARTICLE_URL: "articles/all",
  GET_POST_URL: "posts",
  GET_ARTICLE_URL: "articles",
  GET_PROFILE_URL: "profile",
  CHOICE_QUESTION_URL: "/user-questions",
  GET_USER_QUESTION_URL: (userId: number, questionSurveyId: number) =>
    `/user-questions/${userId}/${questionSurveyId}`,
  SET_ARTICLE_VIEW_URL: `/user-article-views`,
  SET_ARTICLE_LIKE_URL: `/user-article-likes`,
  SET_POST_VIEW_URL: `/user-post-views`,
  SET_POST_LIKE_URL: `/user-post-likes`,
  CHECK_ARTICLE_LIKE_URL: (userId: number, articleId: number) =>
    `/user-article-likes/${userId}/${articleId}`,
  DELETE_ARTICLE_LIKE_URL: (userId: number, articleId: number) =>
    `/user-article-likes/${userId}/${articleId}`,
  CHECK_ARTICLE_VIEW_URL: (userId: number, articleId: number) =>
    `/user-article-views/${userId}/${articleId}`,
  CHECK_POST_LIKE_URL: (userId: number, postId: number) =>
    `/user-post-likes/${userId}/${postId}`,
  DELETE_POST_LIKE_URL: (userId: number, postId: number) =>
    `/user-post-likes/${userId}/${postId}`,
  CHECK_POST_VIEW_URL: (userId: number, postId: number) =>
    `/user-post-views/${userId}/${postId}`,
};
