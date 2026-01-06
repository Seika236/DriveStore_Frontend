import { HStack, Text } from "@chakra-ui/react";
import { MyNavBarItemProps } from "@/modules/navbar/types/MyNavBarItemType";

export function MyDropMenuItem({ children, description }: MyNavBarItemProps) {
  return (
    <HStack>
      {children()}
      <Text>{description}</Text>
    </HStack>
  );
}
