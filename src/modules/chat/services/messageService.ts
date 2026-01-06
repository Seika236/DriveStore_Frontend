import { $api } from "@/http/index";
import { constants } from "@/modules/chat/constants";
import { IMessage } from "../../../types/models/IMessage";

class MessageService {
  async getAllMessagesByRoomId(roomId: number) {
    return await $api.get<IMessage[]>(
      constants.GET_ALL_MESSAGES_BY_ROOM_ID_URL(roomId),
    );
  }
}

export default new MessageService();
