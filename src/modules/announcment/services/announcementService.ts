import { $api } from "@/http/index";
import { announcementConstants } from "@/modules/announcment/constants";
import { IAnnouncement } from "../../../types/models/IAnnouncement";
import { DeleteAnnouncementRequest } from "@/modules/announcment/types/ApiRequestTypes";

class AnnouncementService {
  async createAnnouncement(createAnnouncementDto: FormData) {
    return $api.post<IAnnouncement>(
      announcementConstants.CREATE_ANNOUNCEMENT_URL,
      createAnnouncementDto,
    );
  }

  async deleteAnnouncement({ userId, listingId }: DeleteAnnouncementRequest) {
    return await $api.delete(
      announcementConstants.DELETE_ANNOUNCEMENT_URL(userId, listingId),
    );
  }

  async getAllAnnouncementsByUserId({
    userId,
    nextCursor,
  }: {
    userId: number;
    nextCursor: number;
  }) {
    return $api.get<IAnnouncement[]>(
      announcementConstants.GET_ALL_ANNOUNCEMENTS_BY_USER_ID_URL(userId),
    );
  }
}

export default new AnnouncementService();
