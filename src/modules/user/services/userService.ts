import { $api } from "@/http/index";
import Constants from "../constants";
import {
  AddRoleRequest,
  RemoveRoleRequest,
} from "@/modules/user/types/ApiRequestTypes";
import { param } from "ts-interface-checker";

class UserService {
  async addUserRole(data: AddRoleRequest) {
    return $api.post<void>(Constants.ADD_ROLE_USER_URL, data);
  }

  async removeUserRole(data: RemoveRoleRequest) {
    return $api.delete<void>(
      Constants.REMOVE_ROLE_USER_URL(data.role, data.id),
    );
  }
}

export default new UserService();
