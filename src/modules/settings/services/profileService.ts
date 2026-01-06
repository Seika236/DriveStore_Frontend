import { $api } from "@/http/index";
import { constants } from "@/modules/settings/constants";

class profileService {
  async setProfileImg(formData: FormData) {
    return await $api.patch(constants.SET_PROFILE_URL, formData);
  }
}

export default new profileService();
