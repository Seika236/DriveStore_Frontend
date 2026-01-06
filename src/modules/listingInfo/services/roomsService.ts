import { CreateRoomRequest } from "@/modules/listingInfo/types/ApiRequestTypes";
import { $api } from "@/http/index";
import { constants } from "@/modules/listingInfo/constants";
import { IRoom } from "../../../types/models/IRoom";

class RoomsService {
  async createRoom(createRoomRequest: CreateRoomRequest) {
    return $api.post<IRoom>(constants.CREATE_ROOM_URL, createRoomRequest);
  }
}

export default new RoomsService();
