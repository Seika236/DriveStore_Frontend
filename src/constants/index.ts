export const publicConstants = {
  GET_ALL_TYPES_URL: "types",
  GET_ALL_ARTICLE_URL: "articles/all",
  GET_ARTICLE_URL: "articles",
  GET_ALL_POSTS_URL: "posts/all",
  GET_POST_URL: "posts",
  DELETE_USER_URL: (id: string) => `/users/${id}`,
};
