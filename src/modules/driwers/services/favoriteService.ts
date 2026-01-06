import { IFavorite } from "../../../types/models/IFavorite";
import { $api } from "@/http/index";
import { constants } from "@/modules/driwers/constants";

export class FavoriteService {
  getAllFavoritesByUserId(userId: number) {
    return $api.get<IFavorite[]>(
      constants.GET_ALL_FAVORITES_BY_USER_ID(userId),
    );
  }

  removeFavoriteByListingId({
    listingId,
    userId,
  }: {
    listingId: number;
    userId: number;
  }) {
    return $api.delete<void>(
      constants.REMOVE_FAVORITES_BY_LISTING_ID(listingId, userId),
    );
  }
}

export default new FavoriteService();
