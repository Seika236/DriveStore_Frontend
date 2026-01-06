"use client";

import { Flex, Grid, GridItem, Input, InputGroup } from "@chakra-ui/react";
import { MyAvatar } from "@/ui/MyAvatar";
import { authStore } from "@/store/authStore";
import { MyCreatePostDialog } from "@/modules/userPost/components/modals/MyCreatePostDialog";
import { drawerUserPostStore } from "@/modules/userPost/store/drawerUserPostStore";
import { PostIcon } from "@/assets/icons/post-icon";
import { ArticleIcon } from "@/assets/icons/article-icon";
import { MessageIcon } from "@/assets/icons/message-icon";
import { MyCreateArticleDialog } from "@/modules/userPost/components/modals/MyCreateArticleDialog";
import { MyIconButton } from "@/ui/MyIconButton";
import { getStaticImageFromServer } from "../../../lib/getStaticImageFromServer";

export function MyCreatePostPanel() {
  const { user } = authStore();
  const {
    isVisibleCreateArticleDialog,
    setIsVisibleCreatePostDialog,
    isVisibleCreatePostDialog,
    setIsVisibleCreateArticleDialog,
  } = drawerUserPostStore();

  const onOpenCreatePostDialog = () => {
    setIsVisibleCreatePostDialog(!isVisibleCreatePostDialog);
  };

  const onOpenCreateArticleDialog = () => {
    setIsVisibleCreateArticleDialog(!isVisibleCreateArticleDialog);
  };

  return (
    <Grid
      gridTemplateRows={"repeat(2, 1fr)"}
      paddingX={4}
      bg={{ base: "white", _dark: "gray.900" }}
      borderWidth="1px"
      borderColor={{ base: "gray.100", _dark: "gray.800" }}
      boxShadow={{ base: "sm", _dark: "none" }}
      rounded={14}
      _hover={{ bg: { base: "gray.50", _dark: "gray.800" } }}
    >
      <GridItem paddingY={2} rowSpan={1} borderBottom={"1px solid gray"}>
        <InputGroup
          startElement={
            <MyAvatar
              imageUrl={getStaticImageFromServer(user?.profile?.profileImg)}
              size={8}
            />
          }
        >
          <Input
            outline={"none"}
            onClick={onOpenCreatePostDialog}
            readOnly={true}
            cursor={"text"}
            _placeholder={{ color: { base: "gray.500", _dark: "gray.400" } }}
            color={{ base: "black", _dark: "white" }}
            size={"2xl"}
            border={"none"}
            placeholder={`${user?.nickname}, что нового?`}
          />
        </InputGroup>
      </GridItem>
      <GridItem
        paddingY={2}
        rowSpan={1}
        display={"grid"}
        alignItems={"center"}
        justifyItems={"start"}
      >
        <Flex>
          <MyIconButton
            title={"Пост"}
            icon={<PostIcon />}
            onClick={onOpenCreatePostDialog}
          />
          <MyIconButton
            title={"статья"}
            icon={<ArticleIcon />}
            onClick={onOpenCreateArticleDialog}
          />
          {/*сделать когда-нибудь отзывы*/}
          {/*<MyIconButton*/}
          {/*  title={"отзыв"}*/}
          {/*  icon={<MessageIcon />}*/}
          {/*  onClick={() => {}}*/}
          {/*/>*/}
        </Flex>
      </GridItem>
      <MyCreatePostDialog
        isVisible={isVisibleCreatePostDialog}
        onOpenChange={onOpenCreatePostDialog}
      />
      <MyCreateArticleDialog
        isVisible={isVisibleCreateArticleDialog}
        onOpenChange={onOpenCreateArticleDialog}
      />
    </Grid>
  );
}
