export default {
  ADD_ROLE_USER_URL: "/users/change/add/role",
  REMOVE_ROLE_USER_URL: (role: string, id: string) =>
    `/users/change/remove/role/${role}/id/${id}`,
  DELETE_USER_URL: (id: string) => `/users/${id}`,
};
