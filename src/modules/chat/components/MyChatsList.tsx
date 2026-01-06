import { getRoomsResponse } from "@/modules/chat/types/ApiRequestTypes";
import { MyChatItem } from "@/modules/chat/UI/MyChatItem";
import { Box } from "@chakra-ui/react";
import type { MouseEvent } from "react";

type Props = {
  rooms: getRoomsResponse[];
  onChatClick: (id: number) => void;
  onTrashClick: (event: MouseEvent, id: number) => void;
};

export function MyChatsList({ rooms, onChatClick, onTrashClick }: Props) {
  return (
    <Box
      as={"ul"}
      display={"Grid"}
      rowGap={1}
      style={{ alignSelf: "start" }}
      w={"full"}
    >
      {rooms?.map((room) => (
        <MyChatItem
          key={room.id}
          room={room}
          onChatClick={onChatClick}
          onTrashClick={(event: MouseEvent) => onTrashClick(event, room.id)}
        />
      ))}
    </Box>
  );
}
