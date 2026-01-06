import { Flex, IconButton } from "@chakra-ui/react";
import { HeartIcon } from "@/assets/icons/heart-icon";
import { ShareIcon } from "@/assets/icons/share-icon";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import { IFavorite } from "../../../types/models/IFavorite";
import FavoriteService from "@/modules/listingInfo/services/favoriteService";
import {
  AddFavoriteRequest,
  CreateRoomRequest,
} from "@/modules/listingInfo/types/ApiRequestTypes";
import { authStore } from "@/store/authStore";
import { revalidationStore } from "@/store/revalidationStore";
import { UseClipboard } from "@/hooks/useClipboard";
import { MessageIcon } from "@/assets/icons/message-icon";
import { drawerStore } from "@/store/drawerStore";
import RoomsService from "@/modules/listingInfo/services/roomsService";
import { IRoom } from "../../../types/models/IRoom";

type Props = {
  listingId: number;
};

export function MyListingInfoActionButtonList({ listingId }: Props) {
  const { user } = authStore();
  const { setIsVisibleMessageDrawer } = drawerStore();
  const { favoriteRevalidationHandler } = revalidationStore();

  const { fetchFunction, isLoading } = UseRequest<
    AxiosResponse<IFavorite>,
    AddFavoriteRequest
  >({
    request: FavoriteService.addFavorite,
    successCb: () => {
      favoriteRevalidationHandler();
    },
    successText: "машина добавлена в любимые!",
  });

  const { fetchFunction: fetchCreateRoom, isLoading: isLoadingCreateRoom } =
    UseRequest<AxiosResponse<IRoom>, CreateRoomRequest>({
      request: RoomsService.createRoom,
      successCb: () => {
        setIsVisibleMessageDrawer(true);
      },
      successText: "чат был создан!",
    });

  const { clipboardHandler } = UseClipboard({
    writeText: `${window.location.href}`,
  });

  const onShareButtonClick = () => {
    clipboardHandler();
  };

  const onMessageButtonClick = () => {
    fetchCreateRoom({ listingId, buyerId: user.id });
  };

  return (
    <Flex columnGap={3}>
      <IconButton
        loading={isLoading}
        onClick={onMessageButtonClick}
        variant={"outline"}
        colorPalette={"gray"}
      >
        <MessageIcon />
      </IconButton>

      <IconButton
        loading={isLoading}
        onClick={() => fetchFunction({ userId: user?.id, listingId })}
        variant={"outline"}
        colorPalette={"red"}
      >
        <HeartIcon />
      </IconButton>

      <IconButton
        onClick={onShareButtonClick}
        variant={"outline"}
        colorPalette={"orange"}
      >
        <ShareIcon />
      </IconButton>
    </Flex>
  );
}
