import { ContentInfoType } from "@/modules/userProfileContent/types/ContentInfoType";
import { ViewIcon } from "@/assets/icons/view-icon";
import { BestIcon } from "@/assets/icons/best-icon";

type Props = {
  type: ContentInfoType;
};

export function UseGetIconByType({ type }: Props) {
  switch (type) {
    case "views":
      return <ViewIcon />;
    case "best":
      return <BestIcon />;
    default:
      const final: never = type;
  }
}
