export default {
  CREATE_ARTICLE_COMMENT_URL: "/article-messages",
  CREATE_POST_COMMENT_URL: "/post-comments",
  GET_ALL_ARTICLE_COMMENTS_URL: (articleId: number) =>
    `/article-messages/${articleId}`,
  GET_ALL_POST_COMMENTS_URL: (postId: number) => `/post-comments/${postId}`,
  GET_PROFILE_BY_USER_ID_URL: (userId: number) => `/profile/${userId}`,
  DELETE_POST_COMMENTS_URL: (commentId: number) =>
    `/post-comments/${commentId}`,
  DELETE_ARTICLE_COMMENTS_URL: (commentId: number) =>
    `/article-messages/${commentId}`,
};
