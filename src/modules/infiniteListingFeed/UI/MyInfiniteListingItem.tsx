import { FiEye, FiImage, FiMapPin } from "react-icons/fi";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IListing } from "../../../types/models/IListing";
import Link from "next/link";
import { getStaticImageFromServer } from "../../../lib/getStaticImageFromServer";
import { transformPrice } from "../../../lib/transformPrice";
import { useColorModeValue } from "@/components/ui/color-mode";

type Props = {
  listing: IListing;
};

export function MyInfiniteListingItem({ listing }: Props) {
  const bgColor = useColorModeValue("white", "#1A1A1D");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const imageBg = useColorModeValue("gray.50", "gray.800");
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      maxW="350px"
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="xl"
      overflow="hidden"
      transition="all 0.2s"
      boxShadow={useColorModeValue("sm", "none")}
      _hover={{
        borderColor: "orange.400",
        transform: "translateY(-4px)",
        boxShadow: "md",
      }}
    >
      <Box
        position="relative"
        h="200px"
        bg={imageBg}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {!!listing?.picture[0]?.image_name ? (
          <Image
            src={getStaticImageFromServer(listing?.picture[0]?.image_name)}
          />
        ) : (
          <Icon as={FiImage} w={10} h={10} color="gray.500" opacity={0.4} />
        )}

        <Badge
          position="absolute"
          top={3}
          left={3}
          variant="solid"
          colorScheme="blackAlpha"
          fontSize="xs"
        >
          ID: {listing.id}
        </Badge>
      </Box>

      <Stack p={4}>
        <Flex justify="space-between" align="center">
          <Text
            fontSize="xs"
            fontWeight="bold"
            color={useColorModeValue("orange.600", "gray.500")}
          >
            {transformPrice(String(listing.price))} руб
          </Text>
          <Badge
            colorScheme="orange"
            variant={useColorModeValue("subtle", "outline")}
            borderRadius="full"
            px={2}
          >
            Used
          </Badge>
        </Flex>

        <Box h="60px" mb={2}>
          <Heading size="md" color={headingColor}>
            {listing.name}
          </Heading>
          <Text color={textColor} fontSize="sm" mt={1}>
            {listing.description.slice(0, 45)}...
          </Text>
        </Box>

        <Flex
          justify="space-between"
          align="center"
          fontSize="xs"
          color="gray.500"
        >
          <Flex align="center">
            <Icon as={FiMapPin} mr={1} />
            {listing.city}
          </Flex>
          <Flex align="center">
            <Icon as={FiEye} mr={1} />
            {listing.views} views
          </Flex>
        </Flex>

        <Flex gap={2} pt={2}>
          <Link href={`/listings/${listing?.id}`} passHref>
            <Button
              size="sm"
              colorPalette={"orange"}
              variant="outline"
              w="full"
            >
              Посмотреть
            </Button>
          </Link>
          {/*<IconButton*/}
          {/*  aria-label="Edit"*/}
          {/*  variant="outline"*/}
          {/*  color="gray.400"*/}
          {/*  size="sm"*/}
          {/*  _hover={{*/}
          {/*    color: useColorModeValue("orange.500", "white"),*/}
          {/*    bg: iconButtonHoverBg,*/}
          {/*  }}*/}
          {/*/>*/}
        </Flex>
      </Stack>
    </Box>
  );
}
