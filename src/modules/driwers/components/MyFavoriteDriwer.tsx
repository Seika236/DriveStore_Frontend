import { MyDrawer } from "@/modules/driwers/components/MyDrawer";
import { drawerStore } from "@/store/drawerStore";
import { authStore } from "@/store/authStore";
import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import FavoriteService from "@/modules/driwers/services/favoriteService";
import { MyAnnouncementList } from "@/modules/announcment";
import { useEffect } from "react";
import { revalidationStore } from "@/store/revalidationStore";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";

export function MyFavoriteDrawer() {
  const { isVisibleFavouriteDrawer, setIsVisibleFavouriteDrawer } =
    drawerStore();
  const { isAuth, user, isLoading: isCheckAuthLoading } = authStore();
  const router = useRouter();
  const { setFavoriteRevalidationHandler } = revalidationStore();
  const { favoriteRevalidationHandler } = revalidationStore();
  const { fetchFunction, isLoading: isRemoveFavoriteLoading } = UseRequest<
    AxiosResponse<void>,
    { listingId: number; userId: number }
  >({
    request: FavoriteService.removeFavoriteByListingId,
    successCb: () => {
      favoriteRevalidationHandler();
    },
    successText: "успешно удалён!",
  });

  const onDeleteFavorite = (id: number) => {
    fetchFunction({ listingId: id, userId: user?.id });
  };

  const { data, isLoading, refetch, isSuccess } = useQuery({
    enabled: !isCheckAuthLoading,
    queryKey: [`fetch:get/all/favorites/drawer`],
    queryFn: () => FavoriteService.getAllFavoritesByUserId(user?.id),
    select: (data) => data.data,
  });

  useEffect(() => {
    if (isSuccess) {
      setFavoriteRevalidationHandler(refetch);
    }
  }, [isSuccess]);

  const onCloseDrawer = () => {
    setIsVisibleFavouriteDrawer(!isVisibleFavouriteDrawer);
  };

  const getFavoriteBodyAuthUser = () => {
    return (
      <MyAnnouncementList
        isFavorite={true}
        announcements={data}
        onDelete={onDeleteFavorite}
      />
    );
  };
  const getFavoriteBodyNotAuthUser = () => {
    return (
      <Flex
        justifyItems={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        textAlign={"center"}
        rowGap={4}
      >
        <Image w={"100px"} h={"100px"} src={"favorite-heart-image.png"} />
        <Heading size={"2xl"}>Объявления</Heading>
        <Text maxW={450}>
          Войдите, чтобы сохранять понравившиеся объявления и узнавать об
          изменении цен на всех устройствах
        </Text>
        <Button as={"a"} onClick={() => router.replace("/login")}>
          Войти
        </Button>
      </Flex>
    );
  };

  return (
    <MyDrawer
      size={"md"}
      open={isVisibleFavouriteDrawer}
      onCloseDrawer={onCloseDrawer}
      title={"Favorite"}
      isCenteredContent={isAuth}
    >
      <div>
        {isAuth ? getFavoriteBodyAuthUser() : getFavoriteBodyNotAuthUser()}
      </div>
    </MyDrawer>
  );
}
