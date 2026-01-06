import { ReactElement } from "react";

export interface MyCreatePostActionButtonType {
  title: string;
  onClick: () => void;
  icon: ReactElement;
}
