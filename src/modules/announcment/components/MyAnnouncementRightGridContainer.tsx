import { UseGetAllAnnouncementsByUserId } from "@/modules/announcment/components/hooks/useGetAllAnnouncementsByUserId";
import { authStore } from "@/store/authStore";
import { MyAnnouncementList } from "@/modules/announcment/components/MyAnnouncementList";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import AnnouncementService from "@/modules/announcment/services/announcementService";
import { DeleteAnnouncementRequest } from "@/modules/announcment/types/ApiRequestTypes";

export function MyAnnouncementRightGridContainer() {
  const { user } = authStore();
  const { data } = UseGetAllAnnouncementsByUserId({ userId: user?.id });

  const { fetchFunction, isLoading } = UseRequest<
    AxiosResponse<void>,
    DeleteAnnouncementRequest
  >({
    request: AnnouncementService.deleteAnnouncement,
    successCb: () => {},
    successText: "успешно удалён!",
  });

  const onDeleteFavorite = (id: number) => {
    fetchFunction({ listingId: id, userId: user?.id });
  };

  return (
    <MyAnnouncementList onDelete={onDeleteFavorite} announcements={data} />
  );
}
