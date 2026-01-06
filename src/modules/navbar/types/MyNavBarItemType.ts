import type { MouseEvent, ReactElement } from "react";

export type MyNavBarItemVariants = "button" | "link";

export type MyNavBarItemProps = {
  children: () => ReactElement;
  description: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  path?: string;
};
