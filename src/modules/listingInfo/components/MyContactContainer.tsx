import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { GetListingByIdResponseType } from "@/modules/announcment";
import { useState } from "react";
import { UseAuthErrorModal } from "@/hooks/useAuthErrorModal";

type Props = {
  listing: GetListingByIdResponseType;
};

export function MyContactContainer({ listing }: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const getTelephone = (telephone: string, isVisible: boolean) => {
    if (isVisible) {
      return `+ ${telephone}`;
    } else {
      return "+• ••• ••• •• ••";
    }
  };

  const onShowTelephone = () => {
    setIsVisible(true);
  };

  const { checkAuthHandler } = UseAuthErrorModal({ callback: onShowTelephone });

  return (
    <Box
      border="1px solid"
      borderColor={{ base: "gray.200", _dark: "gray.700" }}
      borderRadius="xl"
      overflow="hidden"
      bg={{ base: "white", _dark: "gray.800" }}
      boxShadow="sm"
      transitionDuration={"slower"}
      _hover={{ borderColor: "green.500" }}
    >
      <Flex align="stretch" direction={{ base: "column", md: "row" }}>
        <Box p={4} flex="1">
          <VStack align="start">
            <Text fontWeight="bold" fontSize="md" textTransform="uppercase">
              {listing.brand?.name || "Дилер"}
            </Text>
            <Text color="gray.500" fontSize="sm">
              {listing.city ? `${listing.city}` : "Адрес не указан"}
            </Text>
          </VStack>
        </Box>

        <Button
          colorScheme="green"
          bg="#38B261"
          height="auto"
          py={3}
          px={10}
          borderRadius="0"
          borderRightRadius={{ md: "xl" }}
          flexDir="column"
          _hover={{ bg: "green.600" }}
          onClick={checkAuthHandler}
        >
          <VStack>
            <Text fontSize="sm" fontWeight="bold">
              Показать телефон
            </Text>
            <Text fontSize="md" fontWeight="normal" opacity={0.9}>
              {getTelephone(listing.telephone, isVisible)}
            </Text>
          </VStack>
        </Button>
      </Flex>
    </Box>
  );
}
