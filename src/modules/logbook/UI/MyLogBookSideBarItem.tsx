"use client";

import { useColorModeValue } from "@/components/ui/color-mode";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react";

type Props = {
  icon: ElementType;
  children: string;
  isActive: boolean;
};

export function MyLogBookSideBarItem({ icon, children, isActive }: Props) {
  const activeBg = useColorModeValue("gray.100", "gray.700");

  const color = useColorModeValue("gray.800", "white");

  return (
    <Flex
      align="center"
      p={3}
      mx={2}
      borderRadius="lg"
      role="group"
      cursor="pointer"
      bg={isActive ? activeBg : "transparent"}
      color={color}
      _hover={{
        bg: activeBg,
      }}
      style={
        isActive
          ? {
              fontWeight: "bold",
            }
          : {}
      }
      transition="all 0.2s"
    >
      {icon && (
        <Icon
          mr={4}
          fontSize="xl"
          as={icon}
          _groupHover={{
            color: "teal.500",
          }}
          color={isActive ? "teal.500" : color}
        />
      )}
      <Text fontSize="md">{children}</Text>
    </Flex>
  );
}
