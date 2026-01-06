import { HStack, Link, Text, VStack } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

type Props = {
  label: string;
  value: string;
};

export const MyCarSpecItem = ({ label, value }: Props) => {
  const labelColor = useColorModeValue("gray.500", "gray.400");
  const valueColor = useColorModeValue("black", "white");

  return (
    <HStack align="flex-start" w="full">
      <VStack align="start">
        <Text fontSize="sm" color={labelColor}>
          {label}
        </Text>
        <Text fontWeight="medium" fontSize="md" color={valueColor}>
          {value}
        </Text>
      </VStack>
    </HStack>
  );
};
