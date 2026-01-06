import { Box, Flex, Text } from "@chakra-ui/react";

type Props = {
  onClick: () => void;
  name: string;
  totalCars: number;
};

export function MyBrandItem({ onClick, name, totalCars }: Props) {
  return (
    <Flex onClick={onClick} gap={3} alignItems={"center"} paddingY={2}>
      <Box>{name}</Box>
      <Box color={"gray.400"}>{totalCars}</Box>
    </Flex>
  );
}
