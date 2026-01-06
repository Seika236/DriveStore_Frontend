import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import RoomsService from "@/modules/chat/services/roomsService";
import { authStore } from "@/store/authStore";
import "../styles/style.css";
import { MyChatsList } from "@/modules/chat/components/MyChatsList";
import { MyChatPanel } from "@/modules/chat/components/MyChatPanel";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import type { MouseEvent } from "react";

export function MyChatContainer() {
  const { user } = authStore();
  const [activeChatId, setActiveChatId] = useState<number | null>(null);

  const { data, refetch } = useQuery({
    enabled: !!user?.id,
    queryKey: ["fetch:get/all/rooms"],
    queryFn: () => RoomsService.getAllRoomsByIdUserId(user?.id),
    select: (data) => data.data,
  });

  const { fetchFunction, isLoading } = UseRequest<AxiosResponse<void>, number>({
    request: RoomsService.removeRoomById,
    successText: "чат был удалён",
    successCb: () => {
      refetch();
    },
  });

  const onTrashClick = async (
    event: MouseEvent<HTMLButtonElement>,
    id: number,
  ) => {
    event.stopPropagation();
    fetchFunction(id);
  };

  const onChatClick = (id: number) => {
    setActiveChatId(id);
  };

  return activeChatId ? (
    <MyChatPanel chatId={activeChatId} />
  ) : (
    <MyChatsList
      onTrashClick={onTrashClick}
      onChatClick={onChatClick}
      rooms={data}
    />
  );
}
