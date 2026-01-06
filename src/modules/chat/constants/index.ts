export const constants = {
  GET_ALL_ROOMS_URL: (userId: number) => `/rooms/${userId}`,
  GET_ALL_MESSAGES_BY_ROOM_ID_URL: (roomId: number) => `/messages/${roomId}`,
  REMOVE_ROOM_BY_ROOM_ID: (roomId: number) => `/rooms/${roomId}`,
};
