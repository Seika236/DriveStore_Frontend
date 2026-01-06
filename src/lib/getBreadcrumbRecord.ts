export function getBreadcrumbRecord<
  T extends Record<string, any>,
  K extends keyof T,
>(
  obj: T,
  targetKeys: Array<T[K] extends string ? K : never>,
): Record<string, string> {
  let newObj: Record<string, string> = {};

  targetKeys.forEach((key) => {
    if (typeof key === "string") {
      newObj[key] = obj[key];
    }
  });

  return newObj;
}
