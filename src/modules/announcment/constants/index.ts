const announcementConstants = {
  CREATE_ANNOUNCEMENT_URL: "/announcements",
  DELETE_ANNOUNCEMENT_URL: (userId: number, listingId: number) =>
    `/announcements/${userId}/${listingId}`,
  GET_ALL_ANNOUNCEMENTS_BY_USER_ID_URL: (userId: number) =>
    `/announcements/${userId}`,
  GET_LISTING_BY_ID: (listingId: number) => `/listings/${listingId}`,
  GET_ALL_LISTINGS: `/listings`,
};

export { announcementConstants };
