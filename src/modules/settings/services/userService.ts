import { ChangeUserDto } from "@/modules/settings/types/ChangeUserDto";
import { $api } from "@/http/index";
import { constants } from "@/modules/settings/constants";

class userService {
  async changeUser(changeUserDto: ChangeUserDto) {
    return await $api.patch(constants.CHANGE_USER_URL, changeUserDto);
  }
}

export default new userService();
