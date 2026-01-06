import openSocket from "socket.io-client";
import { messagesStore } from "@/modules/chat/store/messagesStore";
import { IMessage } from "../../../types/models/IMessage";
import { useEffect } from "react";

type Props = {
  roomId: number;
};

export function UseChatWebsocket({ roomId }: Props) {
  const socket = openSocket(process.env.NEXT_PUBLIC_API_WEBSOCKET_URL);
  const { setMessage, updateMessage } = messagesStore();

  useEffect(() => {
    if (!!roomId) {
      socket.emit("join_room", { roomId });
    }
  }, [roomId]);

  socket.on("subscribe_to_get_messages", (data) => {
    setMessage(data);
  });

  socket.on("join_room", (data) => {
    console.log(data);
  });

  socket.on("subscribe_to_update_messages", (data: IMessage) => {
    updateMessage(data);
  });

  socket.on("subscribe_to_delete_messages", (data: IMessage) => {
    console.log(data);
  });

  function createMessage(message: string, authorId: number) {
    socket.emit("create_message", { message, roomId, authorId });
  }

  function deleteMessage(id: number) {
    socket.emit("delete_message", { id, roomId });
  }

  function changeMessage(messageId: number, message: string) {
    socket.emit("update_message", { messageId, message, roomId });
  }

  return {
    createMessage,
    deleteMessage,
    changeMessage,
  };
}
