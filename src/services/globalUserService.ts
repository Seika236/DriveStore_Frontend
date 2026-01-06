import { $api } from "@/http/index";
import { publicConstants } from "@/constants/index";

export class GlobalUserService {
  async deleteUser(id: string) {
    return $api.delete<void>(publicConstants.DELETE_USER_URL(id));
  }
}

export default new GlobalUserService();
