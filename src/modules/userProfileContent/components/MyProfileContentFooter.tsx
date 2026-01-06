import { Grid } from "@chakra-ui/react";
import { MyProfileContentInfo } from "@/modules/userProfileContent/components/MyProfileContentInfo";
import { MyProfileContentActionButtonContainer } from "@/modules/userProfileContent/components/MyProfileContentActionButtonContainer";
import { transformCreatedAtInString } from "../../../lib/transformCreatedAtInString";

type Props = {
  onCommentClick: () => void;
  createdAt: string;
  totalLikes: number;
  totalViews: number;
  mileage?: number;
  spent?: number;
  onLikeClick: () => void;
  isLike: boolean;
};

export function MyProfileContentFooter({
  onCommentClick,
  createdAt,
  totalViews,
  totalLikes,
  onLikeClick,
  isLike,
  spent,
  mileage,
}: Props) {
  return (
    <Grid rowGap={2} mt={4}>
      <MyProfileContentInfo
        totalLikes={totalLikes}
        totalViews={totalViews}
        createdAt={transformCreatedAtInString(createdAt)}
        spent={spent}
        mileage={mileage}
      />
      <MyProfileContentActionButtonContainer
        isLike={isLike}
        onLikeClick={onLikeClick}
        onCommentClick={onCommentClick}
      />
    </Grid>
  );
}
