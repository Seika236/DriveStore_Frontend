import { constants } from "@/modules/listingInfo/constants";
import { IFavorite } from "../../../types/models/IFavorite";
import { $api } from "@/http/index";
import { AddFavoriteRequest } from "@/modules/listingInfo/types/ApiRequestTypes";

export class FavoriteService {
  addFavorite({ userId, listingId }: AddFavoriteRequest) {
    return $api.post<IFavorite>(constants.ADD_FAVORITE_URL, {
      listingId,
      userId,
    });
  }
}

export default new FavoriteService();
