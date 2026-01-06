export default {
  AUTHORIZATION_URL: "/auth/authorization",
  LOGIN_URL: "/auth/login",
  LOGOUT_URL: "/auth/logout",
  CHECK_URL: "/auth/check",
  RESEND_EMAIL: (email: string) => `/auth/resend/${email}`,
};
