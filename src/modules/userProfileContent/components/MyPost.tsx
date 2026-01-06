"use client";
import { MyProfileContentHeader } from "@/modules/userProfileContent/components/MyProfileContentHeader";
import { MyProfileContentBox } from "@/modules/userProfileContent/components/MyProfileContentBox";
import { MyProfileContentContainer } from "@/modules/userProfileContent/components/MyProfileContentContainer";
import { MyProfileContentFooter } from "@/modules/userProfileContent/components/MyProfileContentFooter";
import { useQuery } from "@tanstack/react-query";
import PostService from "@/services/postService";
import { Heading } from "@chakra-ui/react";
import { UseProfilePostLikes } from "@/modules/userProfileContent/hooks/useProfilePostLikes";
import { UseProfilePostViews } from "@/modules/userProfileContent/hooks/useProfilePostViews";
import { MyProfileImageContainer } from "@/modules/userProfileContent/components/MyProfileImageContainer";
import { getProfilePostImagesArray } from "@/modules/userProfileContent/lib/getProfilePostImagesArray";
import { MyQuestionList } from "@/modules/userProfileContent/components/MyQuestionList";
import { redirect } from "next/navigation";
import { UseAuthErrorModal } from "@/hooks/useAuthErrorModal";
import { getStaticImageFromServer } from "../../../lib/getStaticImageFromServer";

type Props = {
  id: number;
};

export function MyPost({ id }: Props) {
  UseProfilePostViews({ postId: id });

  const { data, isLoading, refetch } = useQuery({
    queryKey: [`fetch:get/profile/posts/${id}`],
    queryFn: () => PostService.getPostById(id),
    select: (data) => data.data,
  });

  const { onSetLikeClick, onRemoveLikeClick, isLike } = UseProfilePostLikes({
    postId: id,
  });

  if (!isLoading && !data) {
    return <Heading>Не удалось подгрузить пост</Heading>;
  }

  const onCommentClick = () => {
    redirect(`/logbook/post/${id}`);
  };

  const { checkAuthHandler } = UseAuthErrorModal({ callback: onSetLikeClick });

  return (
    <MyProfileContentContainer isLoading={isLoading}>
      <MyProfileContentHeader
        profileImage={getStaticImageFromServer(data?.profile?.profileImg)}
        profileId={data?.profileId}
        type={"post"}
        contentId={data?.id}
        userName={data?.profile?.user?.name}
      />
      <MyProfileContentBox
        title={data?.title}
        description={data?.description}
      />
      {!!data?.postsImages?.length && (
        <MyProfileImageContainer
          images={getProfilePostImagesArray(data.postsImages)}
        />
      )}
      {!!data?.survey?.questions?.length && (
        <MyQuestionList survey={data.survey} surveyRefetch={() => refetch()} />
      )}
      <MyProfileContentFooter
        onCommentClick={onCommentClick}
        totalViews={data?.totalViews}
        totalLikes={data?.totalLikes}
        createdAt={data?.createdAt}
        onLikeClick={isLike ? onRemoveLikeClick : checkAuthHandler}
        isLike={isLike}
      />
    </MyProfileContentContainer>
  );
}
