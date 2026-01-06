import {
  Box,
  Button,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MyAvatar } from "@/ui/MyAvatar";
import { transformCreatedAtInString } from "../../../lib/transformCreatedAtInString";
import { useColorModeValue } from "@/components/ui/color-mode";
import { MyCreatePostComment } from "@/modules/comment/components/MyCreatePostComment";
import { CloseIcon } from "@/assets/icons/close-icon";
import { IPostComment } from "../../../types/models/IPostComments";
import { UseCommentItem } from "@/modules/comment/hooks/useCommentItem";
import { MyCommentPostList } from "@/modules/comment/components/MyCommentPostList";
import { MyCommentItemMenu } from "@/modules/comment/components/MyCommentItemMenu";
import { authStore } from "@/store/authStore";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import PostCommentService from "@/modules/comment/services/postCommentService";
import { checkIsAuthorCommentAuthor } from "@/modules/comment/lib/checkIsCommentAuthor";
import { useQuery } from "@tanstack/react-query";
import ProfileService from "@/modules/comment/services/profileService";
import { getStaticImageFromServer } from "../../../lib/getStaticImageFromServer";

type Props = {
  postId: number;
  comment: IPostComment;
  parentId: number;
  refetch: () => void;
};

export function MyCommentPostItem({
  comment,
  postId,
  parentId,
  refetch,
}: Props) {
  const { data } = useQuery({
    queryKey: [`fetch:get/profile/${comment.userId}`],
    queryFn: () => ProfileService.getProfileByUserId(comment.userId),
    select: (data) => data.data,
  });

  console.log(data);

  const { user } = authStore();
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  const {
    onVisibleAnswerPanel,
    setIsVisibleAnswerPanel,
    isVisibleAnswerPanel,
    onRevalidateData,
  } = UseCommentItem({ refetch });

  const { fetchFunction, isLoading } = UseRequest<AxiosResponse<void>, number>({
    request: PostCommentService.deleteComment,
    successCb: () => {
      refetch();
    },
    successText: "добро пожаловать!",
  });

  const onDeleteComment = () => {
    fetchFunction(comment.id);
  };

  return (
    <Box p={4} borderRadius="lg" shadow="md" w="full">
      <VStack align="stretch">
        <HStack align="center">
          <MyAvatar
            size={8}
            imageUrl={getStaticImageFromServer(data?.profileImg)}
          />

          <VStack align="start" rowGap={0}>
            <Text fontWeight="bold" fontSize="sm">
              {"comment.userName"}
            </Text>
            <Text fontSize="xs" color={secondaryTextColor}>
              {transformCreatedAtInString(comment?.createdAt)}
            </Text>
          </VStack>
          {checkIsAuthorCommentAuthor(user?.id, comment?.userId) && (
            <Box ml={"auto"}>
              <MyCommentItemMenu onDelete={onDeleteComment} />
            </Box>
          )}
        </HStack>

        <Box pl={0}>
          <Text fontSize="md" whiteSpace="pre-wrap">
            {comment.comment}
          </Text>
        </Box>

        <HStack justify="flex-start" pt={1}>
          {!isVisibleAnswerPanel && !comment?.parentId && (
            <Button
              onClick={onVisibleAnswerPanel}
              size="xs"
              variant="plain"
              colorPalette={"orange"}
            >
              Ответить
            </Button>
          )}
        </HStack>
        {isVisibleAnswerPanel && (
          <MyCreatePostComment
            postId={postId}
            parentId={parentId}
            refetch={onRevalidateData}
          >
            <IconButton
              aria-label="Close"
              size="sm"
              variant={"outline"}
              onClick={() => setIsVisibleAnswerPanel(false)}
              position="absolute"
              top={-10}
              right={0}
              opacity={0.5}
              _hover={{ opacity: 1 }}
            >
              <CloseIcon />
            </IconButton>
          </MyCreatePostComment>
        )}
        {comment?.children?.length > 0 && (
          <MyCommentPostList comments={comment.children} refetch={refetch} />
        )}
      </VStack>
    </Box>
  );
}
