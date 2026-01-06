export const constants = {
  CHECK_LISTING_VIEW_URL: (userId: number, listingId: number) =>
    `/user-listing-views/${userId}/${listingId}`,
  SET_LISTING_VIEW_URL: "/user-listing-views",
  ADD_FAVORITE_URL: "/favorite",
  CREATE_ROOM_URL: "/rooms",
};
