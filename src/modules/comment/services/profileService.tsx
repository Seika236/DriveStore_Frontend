import { $api } from "@/http/index";
import constants from "@/modules/comment/constants";
import { IProfile } from "../../../types/models/IProfile";

class ProfileService {
  async getProfileByUserId(userId: number) {
    return await $api.get<IProfile>(
      constants.GET_PROFILE_BY_USER_ID_URL(userId),
    );
  }
}

export default new ProfileService();
