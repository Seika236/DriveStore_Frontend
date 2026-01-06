export const checkIsAuthorCommentAuthor = (userId, authorId) => {
  if (!userId || !authorId) {
    return false;
  }

  return userId === authorId;
};
