import { $api } from "@/http/index";
import { constants } from "@/modules/userPost/constants";
import { AxiosResponse } from "axios";
import { ITransport } from "../../../types/models/ITransport";

class TransportService {
  async getAllTransports(): Promise<AxiosResponse<ITransport[]>> {
    return await $api.get(constants.GET_ALL_TRANSPORTS_URL);
  }
}

export default new TransportService();
