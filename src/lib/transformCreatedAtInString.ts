export function transformCreatedAtInString(createdAt: string) {
  return createdAt?.split("T")?.[0];
}
