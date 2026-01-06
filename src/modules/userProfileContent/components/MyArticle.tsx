"use client";

import { useQuery } from "@tanstack/react-query";
import ArticleService from "@/services/articleService";
import { MyProfileContentHeader } from "@/modules/userProfileContent/components/MyProfileContentHeader";
import { MyProfileContentBox } from "@/modules/userProfileContent/components/MyProfileContentBox";
import { MyProfileImageContainer } from "@/modules/userProfileContent/components/MyProfileImageContainer";
import { getProfilePostImagesArray } from "@/modules/userProfileContent/lib/getProfilePostImagesArray";
import { MyProfileContentFooter } from "@/modules/userProfileContent/components/MyProfileContentFooter";
import { MyProfileContentContainer } from "@/modules/userProfileContent/components/MyProfileContentContainer";
import { UseProfileArticleLikes } from "@/modules/userProfileContent/hooks/useProfileArticleLikes";
import { UseProfileArticleViews } from "@/modules/userProfileContent/hooks/useProfileArticleViews";
import { redirect } from "next/navigation";
import { UseAuthErrorModal } from "@/hooks/useAuthErrorModal";
import { authStore } from "@/store/authStore";

type Props = {
  id: number;
};

export function MyArticle({ id }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: [`fetch:get/profile/articles/${id}`],
    queryFn: () => ArticleService.getArticleById(id),
    select: (data) => data.data,
  });
  UseProfileArticleViews({ articleId: id });

  const { onSetLikeClick, onRemoveLikeClick, isLike } = UseProfileArticleLikes({
    articleId: id,
  });

  const { checkAuthHandler } = UseAuthErrorModal({ callback: onSetLikeClick });

  const onCommentClick = () => {
    redirect(`/logbook/article/${id}`);
  };

  return (
    <MyProfileContentContainer isLoading={isLoading}>
      <MyProfileContentHeader
        profileImage={data?.profile?.user?.name}
        profileId={data?.profileId}
        type={"article"}
        contentId={data?.id}
        userName={data?.profile?.user?.name}
      />
      <MyProfileContentBox
        title={data?.title}
        description={data?.description}
      />
      {!!data?.articlesImages?.length && (
        <MyProfileImageContainer
          images={getProfilePostImagesArray(data.articlesImages)}
        />
      )}
      <MyProfileContentFooter
        totalViews={data?.totalViews}
        totalLikes={data?.totalLikes}
        createdAt={data?.createdAt}
        mileage={data?.mileage}
        spent={data?.spent}
        onLikeClick={isLike ? onRemoveLikeClick : checkAuthHandler}
        onCommentClick={onCommentClick}
        isLike={isLike}
      />
    </MyProfileContentContainer>
  );
}
