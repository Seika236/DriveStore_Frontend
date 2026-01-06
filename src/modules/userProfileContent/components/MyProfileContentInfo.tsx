import { Badge, Flex, Text } from "@chakra-ui/react";
import { MyProfileContentInfoItem } from "@/modules/userProfileContent/UI/myProfileContentInfoItem";

type Props = {
  createdAt: string;
  totalLikes: number;
  totalViews: number;
  mileage?: number;
  spent?: number;
};

export function MyProfileContentInfo({
  totalViews,
  totalLikes,
  createdAt,
  spent,
  mileage,
}: Props) {
  return (
    <Flex alignItems={"center"} userSelect={"none"}>
      <Flex alignItems={"center"} columnGap={3}>
        <MyProfileContentInfoItem value={totalLikes} type={"best"} />
        <MyProfileContentInfoItem value={totalViews} type={"views"} />
      </Flex>
      <Flex alignItems={"center"} ml={"auto"} columnGap={3}>
        {spent && <Badge colorPalette={"green"}>потрачено {spent} ₽</Badge>}
        {mileage && (
          <Badge colorPalette={"green"} fontSize={"12px"}>
            пробег {mileage} км
          </Badge>
        )}
        <Text color={"gray.400"} fontSize={"12px"}>
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  );
}
