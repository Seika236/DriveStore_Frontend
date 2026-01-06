import { constants } from "@/modules/infiniteListingFeed/constants";
import { $api } from "@/http/index";
import { GetAllAnnouncementsWithoutUserIdRequest } from "@/modules/infiniteListingFeed/services/ApiRequestTypes";

interface GetAllAnnouncementsWithoutUserIdArgs {
  userId: number;
  nextCursor: number;
  typeId: number;
  brandId: number;
  categoryId: number;
}

export class InfinityListingService {
  async getAllAnnouncementsWithoutUserId({
    userId,
    nextCursor,
    typeId,
    brandId,
    categoryId,
  }: GetAllAnnouncementsWithoutUserIdArgs) {
    return await $api.get<GetAllAnnouncementsWithoutUserIdRequest[]>(
      constants.GET_ALL_ANNOUNCEMENTS_WITHOUT_USERID_URL(userId),
      {
        params: {
          nextCursor,
          typeId,
          brandId,
          categoryId,
          limit: 10,
        },
      },
    );
  }
}

export default new InfinityListingService();
