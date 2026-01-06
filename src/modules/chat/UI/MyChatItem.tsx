import { getRoomsResponse } from "@/modules/chat/types/ApiRequestTypes";
import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { MyAvatar } from "@/ui/MyAvatar";
import { getStaticImageFromServer } from "../../../lib/getStaticImageFromServer";
import { TrashIcon } from "@/assets/icons/trash-icon";
import type { MouseEvent } from "react";

type Props = {
  room: getRoomsResponse;
  onChatClick: (id: number) => void;
  onTrashClick: (events: MouseEvent) => void;
};

export function MyChatItem({ room, onChatClick, onTrashClick }: Props) {
  return (
    <Box
      className={"card"}
      w={"full"}
      onClick={() => onChatClick(room.id)}
      role={"group"}
      cursor={"pointer"}
      key={room.id}
      p={3}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      transitionDuration={"slow"}
      _hover={{ shadow: "lg", borderColor: "orange.600" }}
      maxW="400px"
    >
      <HStack align="center">
        <Box
          className={"card_avatar"}
          minW="40px"
          h="40px"
          borderWidth="1px"
          p={2}
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          transitionDuration={"slower"}
        >
          <MyAvatar
            imageUrl={getStaticImageFromServer(
              room.listing.picture[0].image_name,
            )}
          />
        </Box>

        <VStack align="start" flex={1}>
          <HStack w="100%">
            <Text fontWeight="bold" fontSize="md">
              {room.listing.name}
            </Text>
            <IconButton onClick={onTrashClick} ml={"auto"} variant={"outline"}>
              <TrashIcon />
            </IconButton>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}
