import { AxiosResponse } from "axios";
import { IArticle } from "../../../types/models/IArticle";
import { $api } from "@/http/index";
import { constants } from "@/modules/userProfileContent/constants";
import { IProfile } from "../../../types/models/IProfile";

class ProfileService {
  async getProfileById(profileId: number): Promise<AxiosResponse<IProfile[]>> {
    return await $api.get(`${constants.GET_PROFILE_URL}/${profileId}`);
  }
}

export default new ProfileService();
