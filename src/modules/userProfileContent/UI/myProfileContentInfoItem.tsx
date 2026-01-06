import { ViewIcon } from "@/assets/icons/view-icon";
import { ContentInfoType } from "@/modules/userProfileContent/types/ContentInfoType";
import { UseGetIconByType } from "@/modules/userProfileContent/hooks/useGetIconByType";
import { Flex } from "@chakra-ui/react";

type Props = {
  value: number;
  type: ContentInfoType;
};

export function MyProfileContentInfoItem({ value, type }: Props) {
  const icon = UseGetIconByType({ type });

  return (
    <Flex columnGap={"5px"} alignItems={"center"}>
      {icon} {value}
    </Flex>
  );
}
