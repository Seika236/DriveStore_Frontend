export function checkIsAdmin(roles: string[]): boolean {
  return roles.includes("ADMIN");
}
