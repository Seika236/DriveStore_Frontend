import { Breadcrumb } from "@chakra-ui/react";
import { BreadcrumbType } from "../types/BredCrumbType";

type Props = {
  breadcrumb: BreadcrumbType;
};

export function MyBreadcrumbItem({ breadcrumb }: Props) {
  return (
    <Breadcrumb.Item>
      <Breadcrumb.Link href={breadcrumb.href}>
        {breadcrumb.children.split("%")[0]}
      </Breadcrumb.Link>
    </Breadcrumb.Item>
  );
}
