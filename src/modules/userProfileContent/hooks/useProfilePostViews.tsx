import { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import PostViewService from "@/modules/userProfileContent/services/postViewService";
import { authStore } from "@/store/authStore";

type Props = {
  postId: number;
};

export function UseProfilePostViews({ postId }: Props) {
  const { user } = authStore();

  const { mutate } = useMutation({
    mutationKey: [`fetch:set/profile/posts/view/${postId}`],
    mutationFn: PostViewService.setView,
  });

  const { data: isViewed } = useQuery({
    queryKey: [`fetch:check/profile/posts/view/${postId}`],
    queryFn: () => PostViewService.checkView(user.id, postId),
    select: (data) => data.data,
  });

  useEffect(() => {
    if (isViewed === false && user?.id) {
      mutate({ userId: user.id, postId: postId });
    }
  }, [isViewed]);
}
