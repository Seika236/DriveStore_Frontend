import { useQuery } from "@tanstack/react-query";
import ListingService from "@/services/globalListingService";
import { IAnnouncement } from "../../../types/models/IAnnouncement";
import {
  Badge,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { getStaticImageFromServer } from "../../../lib/getStaticImageFromServer";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import FavoriteService from "@/modules/driwers/services/favoriteService";
import { revalidationStore } from "@/store/revalidationStore";

type Props = {
  announcement: Omit<IAnnouncement, "assignedAt" | "id">;
  isFavorite?: boolean;
  onDelete: (id: number) => void;
};

export function MyAnnouncementItem({ announcement, onDelete }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: [`fetch:get/listing/${announcement.listingId}`],
    queryFn: () => ListingService.getListingById(announcement.listingId),
    select: (data) => data.data,
  });

  const bgColor = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Skeleton loading={isLoading}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={bgColor}
        p={4}
        borderColor={borderColor}
        transition="all 0.2s"
        _hover={{ shadow: "md", borderColor: "orange.600" }}
        maxW="900px"
      >
        <Flex direction={{ base: "column", sm: "row" }} gap={5} align="center">
          <Image
            borderRadius="md"
            boxSize="120px"
            objectFit="cover"
            src={getStaticImageFromServer(data?.picture[0]?.image_name)}
            alt={data?.name}
          />

          <Stack flex="1">
            <Flex align="center" gap={2} mb={1}>
              <Badge colorScheme="blue" variant="subtle" fontSize="0.7em">
                {data?.brand.name}
              </Badge>
              <Badge colorScheme="gray" variant="outline" fontSize="0.7em">
                {data?.type.name}
              </Badge>
            </Flex>

            <Text fontWeight="bold" fontSize="lg">
              {data?.name}
            </Text>

            <Text fontSize="sm" color="gray.500">
              {data?.category.name}
            </Text>

            <Flex align="center" mt={2}>
              <Icon as={FiMapPin} color="gray.400" mr={1} />
              <Text fontSize="xs" color="gray.500">
                г. {data?.city}
              </Text>
            </Flex>
          </Stack>

          <Stack direction={{ base: "row", sm: "column" }}>
            <Link href={`/listings/${data?.id}`} passHref>
              <Button
                size="sm"
                colorPalette="orange"
                variant="outline"
                w="full"
              >
                Посмотреть
              </Button>
            </Link>
            {/*{!isFavorite ? (*/}
            {/*  <Button size="sm" variant="ghost" colorScheme="gray">*/}
            {/*    Изменить*/}
            {/*  </Button>*/}
            {/*) : (*/}
            <Button
              onClick={() => onDelete(announcement.listingId)}
              size="sm"
              variant="solid"
              colorPalette="red"
            >
              Удалить
            </Button>
            {/*)}*/}
          </Stack>
        </Flex>
      </Box>
    </Skeleton>
  );
}
