export const constants = {
  GET_ALL_ANNOUNCEMENTS_WITHOUT_USERID_URL: (
    userId: number,
    // queries?: Record<string, number>,
  ) => {
    // const queryEntries = Object.entries(queries);
    // const queryArray = queryEntries.map(([k, v], index) => {
    //   if (index === queryEntries.length - 1) {
    //     return `${k}=${v}`;
    //   }
    //   return `${k}=${v}&`;
    // });
    // return `announcements/without/${userId}?${queryArray.join("")}`;
    return `announcements/without/${userId}`;
  },
};
