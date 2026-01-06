import { IAnnouncement } from "../../../types/models/IAnnouncement";
import { Box, Heading } from "@chakra-ui/react";
import { MyAnnouncementItem } from "@/modules/announcment/components/MyAnnouncementItem";

type Props = {
  isFavorite?: boolean;
  announcements: Omit<IAnnouncement, "assignedAt" | "id">[];
  onDelete: (id: number) => void;
};

export function MyAnnouncementList({
  announcements,
  isFavorite,
  onDelete,
}: Props) {
  return announcements?.length ? (
    <Box
      as="ul"
      display={"flex"}
      flexDirection={"column"}
      rowGap={5}
      maxH={500}
      overflowY={"auto"}
      listStyleType="none"
      padding={0}
      margin={0}
    >
      {announcements?.map((announcement) => (
        <Box as="li" key={announcement.listingId}>
          <MyAnnouncementItem
            onDelete={onDelete}
            isFavorite={isFavorite}
            announcement={announcement}
          />
        </Box>
      ))}
    </Box>
  ) : (
    <Heading textAlign={"center"}>нет активных объявлений</Heading>
  );
}
