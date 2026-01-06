"use client";

import { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { authStore } from "@/store/authStore";
import ArticleViewService from "@/modules/userProfileContent/services/articleViewService";

type Props = {
  articleId: number;
};

export function UseProfileArticleViews({ articleId }: Props) {
  const { user } = authStore();

  const { mutate } = useMutation({
    mutationKey: [`fetch:set/profile/article/view/${articleId}`],
    mutationFn: ArticleViewService.setView,
  });

  const { data: isViewed } = useQuery({
    queryKey: [`fetch:check/profile/article/view/${articleId}`],
    queryFn: () => ArticleViewService.checkView(user.id, articleId),
    select: (data) => data.data,
  });

  useEffect(() => {
    if (isViewed === false && user?.id) {
      mutate({ userId: user.id, articleId: articleId });
    }
  }, [isViewed]);
}
