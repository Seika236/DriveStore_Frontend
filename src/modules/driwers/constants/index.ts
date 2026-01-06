export const constants = {
  GET_ALL_FAVORITES_BY_USER_ID: (userId: number) => `favorite/all/${userId}`,
  REMOVE_FAVORITES_BY_LISTING_ID: (listingId: number, userId: number) =>
    `favorite/${listingId}/${userId}`,
};
