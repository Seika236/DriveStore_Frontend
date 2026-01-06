import { $api } from "@/http/index";
import { publicConstants } from "@/constants/index";
import { IType } from "../types/models/IType";

class GlobalTypesService {
  async getAllTypes() {
    return await $api.get<IType[]>(publicConstants.GET_ALL_TYPES_URL);
  }
}

export default new GlobalTypesService();
