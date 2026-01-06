import { BreadcrumbType } from "../types/BredCrumbType";

export function getBreadcrumbsList(
  crumbs: Record<string, string>,
): BreadcrumbType[] {
  const breadcrumbs: BreadcrumbType[] = [];

  breadcrumbs.push({ href: "/", children: "главная" });

  Object.entries(crumbs).forEach(([key, value]) => {
    const lastCrumb = breadcrumbs.at(-1);

    const separator = lastCrumb.href === "/" ? "?" : "&";
    const newHref = `${lastCrumb.href}${separator}${key}=${encodeURIComponent(value)}`;

    breadcrumbs.push({ href: newHref, children: value });
  });

  return breadcrumbs;
}
