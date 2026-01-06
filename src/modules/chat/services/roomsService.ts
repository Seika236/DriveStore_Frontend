import { $api } from "@/http/index";
import { constants } from "@/modules/chat/constants";
import { getRoomsResponse } from "@/modules/chat/types/ApiRequestTypes";

class RoomsService {
  async getAllRoomsByIdUserId(userId: number) {
    return await $api.get<getRoomsResponse[]>(
      constants.GET_ALL_ROOMS_URL(userId),
    );
  }

  async removeRoomById(roomId: number) {
    return await $api.delete<void>(constants.REMOVE_ROOM_BY_ROOM_ID(roomId));
  }
}

export default new RoomsService();
