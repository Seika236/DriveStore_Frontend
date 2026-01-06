import { $api } from "@/http/index";
import { constants } from "@/modules/userPost/constants";
import { AxiosResponse } from "axios";
import { IHeader } from "../../../types/models/IHeader";

class HeaderService {
  async getAllHeader(): Promise<AxiosResponse<IHeader[]>> {
    return await $api.get(constants.GET_ALL_HEADER_URL);
  }
}

export default new HeaderService();
