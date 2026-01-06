import { $api } from "@/http/index";
import { announcementConstants } from "@/modules/announcment/constants";
import { GetListingByIdResponseType } from "@/modules/announcment/types/GetListingByIdResponseType";

export class GlobalListingService {
  async getListingById(id: number) {
    return await $api.get<GetListingByIdResponseType>(
      announcementConstants.GET_LISTING_BY_ID(id),
    );
  }

  async getAllListings() {
    return await $api.get<GetListingByIdResponseType[]>(
      announcementConstants.GET_ALL_LISTINGS,
    );
  }
}

export default new GlobalListingService();
