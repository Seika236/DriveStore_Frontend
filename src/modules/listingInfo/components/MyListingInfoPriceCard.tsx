import { GetListingByIdResponseType } from "@/modules/announcment";
import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ViewIcon } from "@/assets/icons/view-icon";
import { transformCreatedAtInString } from "../../../lib/transformCreatedAtInString";
import { UseListingViews } from "@/modules/listingInfo/hooks/useListingViews";
import { transformPrice } from "../../../lib/transformPrice";

type Props = {
  listing: GetListingByIdResponseType;
};

export function MyListingInfoPriceCard({ listing }: Props) {
  UseListingViews({ listingId: listing.id });

  return (
    <Box
      w="100%"
      p={4}
      bg={{ base: "white", _dark: "gray.800" }}
      borderWidth="1px"
      borderColor={{ base: "gray.100", _dark: "transparent" }}
      boxShadow={{ base: "sm", _dark: "none" }}
      rounded={"lg"}
      transitionDuration={"slower"}
      _hover={{ borderColor: "white" }}
    >
      <Flex
        alignItems={"center"}
        alignContent={"center"}
        columnGap={3}
        color={{ base: "black", _dark: "white" }}
        fontSize="sm"
        wrap="wrap"
      >
        <Stack flex="1" rowGap={6}>
          <Heading as="h1" size="lg" fontSize={"38px"} fontWeight="bold">
            {listing.name || "Без названия"}
          </Heading>

          <Flex
            alignItems={"center"}
            alignContent={"center"}
            columnGap={3}
            fontSize="sm"
            wrap="wrap"
          >
            <Text m={0}>{transformCreatedAtInString(listing.createdAt)}</Text>

            <HStack>
              <ViewIcon />
              <Text>{listing.views}</Text>
            </HStack>
          </Flex>
        </Stack>

        <Stack align="flex-end" justify={"space-between"} rowGap={6}>
          <HStack>
            <Text fontSize="3xl" fontWeight="bold" lineHeight="1">
              от {transformPrice(String(listing.price))} ₽
            </Text>
          </HStack>
          <Flex columnGap={1}>
            <Badge variant="subtle" borderRadius="full" px={2}>
              В наличии
            </Badge>
            <Badge variant="subtle" borderRadius="full" px={2}>
              {listing.category.name}
            </Badge>
            <Badge variant="subtle" borderRadius="full" px={2}>
              {listing.brand.name}
            </Badge>
            <Badge variant="subtle" borderRadius="full" px={2}>
              {listing.type.name}
            </Badge>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}
