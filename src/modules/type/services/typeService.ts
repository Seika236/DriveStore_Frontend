import axios from "axios";

import { $api } from "@/http/index";
import Constants from "../constants";
import {
  CreateTypeRequest,
  UpdateTypeRequest,
} from "@/modules/type/types/ApiRequestTypes";
import { IType } from "../../../types/models/IType";

class TypeService {
  async createType(data: CreateTypeRequest) {
    return $api.post<IType>(Constants.CREATE_TYPE_URL, data);
  }

  async updateType(data: UpdateTypeRequest) {
    return $api.patch<IType>(Constants.UPDATE_TYPE_URL, data);
  }

  async deleteType(id: number) {
    return $api.delete<void>(Constants.DELETE_TYPE_URL(id));
  }
}

export default new TypeService();
