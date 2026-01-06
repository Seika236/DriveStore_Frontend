import { Text, VStack } from "@chakra-ui/react";
import { MyNavBarItemProps } from "@/modules/navbar/types/MyNavBarItemType";

export function MyQuickItem({ children, description }: MyNavBarItemProps) {
  return (
    <VStack rowGap={1}>
      {children()}
      <Text>{description}</Text>
    </VStack>
  );
}
