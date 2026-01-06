import { AxiosResponse } from "axios";
import { $api } from "@/http/index";

import { SetPostViewRequest } from "@/modules/userProfileContent/types/ApiRequestTypes";
import { IUserPostViews } from "../../../types/models/IUserPostViews";
import { constants } from "@/modules/listingInfo/constants";
import { SetListingViewRequest } from "@/modules/listingInfo/types/ApiRequestTypes";

class ListingViewService {
  async checkView(
    userId: number,
    articleId: number,
  ): Promise<AxiosResponse<boolean>> {
    return await $api.get(constants.CHECK_LISTING_VIEW_URL(userId, articleId));
  }

  async setView(
    data: SetListingViewRequest,
  ): Promise<AxiosResponse<IUserPostViews>> {
    return await $api.post(constants.SET_LISTING_VIEW_URL, data);
  }
}

export default new ListingViewService();
