import { MyDrawer } from "@/modules/driwers/components/MyDrawer";
import { drawerStore } from "@/store/drawerStore";
import { authStore } from "@/store/authStore";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { MyChatContainer } from "@/modules/chat";

export function MyMessageDrawer() {
  const { isVisibleMessageDrawer, setIsVisibleMessageDrawer } = drawerStore();
  const { isAuth } = authStore();
  const router = useRouter();

  const onCloseDrawer = () => {
    setIsVisibleMessageDrawer(!isVisibleMessageDrawer);
  };

  const getMessageBodyAuthUser = () => {
    return <MyChatContainer />;
  };
  const getMessageBodyNotAuthUser = () => {
    return (
      <Flex
        justifyItems={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        textAlign={"center"}
        rowGap={4}
      >
        <Image w={"100px"} h={"100px"} src={"message-icon.png"} />
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
      size={"sm"}
      open={isVisibleMessageDrawer}
      onCloseDrawer={onCloseDrawer}
      title={"Messages"}
      isCenteredContent={isAuth}
      isVisibleFooter={false}
      bodyStyle={{
        display: "flex",
      }}
    >
      {isAuth ? getMessageBodyAuthUser() : getMessageBodyNotAuthUser()}
    </MyDrawer>
  );
}
