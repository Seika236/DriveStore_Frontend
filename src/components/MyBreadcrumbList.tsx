import { Breadcrumb } from "@chakra-ui/react";
import { MyBreadcrumbItem } from "@/ui/MyBreadcrumbItem";
import { BreadcrumbType } from "../types/BredCrumbType";
import { Fragment } from "react";

type Props = {
  breadcrumbs: BreadcrumbType[];
};

export function MyBreadcrumbList({ breadcrumbs }: Props) {
  return (
    <Breadcrumb.Root size={"lg"} variant={"plain"}>
      <Breadcrumb.List flexWrap={"wrap"}>
        {breadcrumbs.map((breadcrumb, index) => (
          <Fragment key={index}>
            <MyBreadcrumbItem breadcrumb={breadcrumb} />
            {index !== breadcrumbs.length - 1 && <Breadcrumb.Separator />}
          </Fragment>
        ))}
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
}
