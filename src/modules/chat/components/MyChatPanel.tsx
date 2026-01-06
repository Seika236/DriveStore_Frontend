import { Box, Container, Flex, Skeleton } from "@chakra-ui/react";
import { UseChatWebsocket } from "@/modules/chat/hooks/useChatWebsocket";
import { memo, useEffect } from "react";
import { MySendPanel } from "@/modules/chat/UI/MySendPanel";
import { MyMessageList } from "@/modules/chat/components/MyMessageList";
import { authStore } from "@/store/authStore";
import { useQuery } from "@tanstack/react-query";
import MessageService from "@/modules/chat/services/messageService";
import { messagesStore } from "@/modules/chat/store/messagesStore";

type Props = {
  chatId: number;
};

export const MyChatPanel = memo(function ({ chatId }: Props) {
  const { deleteMessage, changeMessage, createMessage } = UseChatWebsocket({
    roomId: chatId,
  });
  const { setAllMessages } = messagesStore();

  const { data, isLoading, isSuccess } = useQuery({
    enabled: !!chatId,
    queryKey: [`fetch:get/all/messages/${chatId}`],
    queryFn: () => MessageService.getAllMessagesByRoomId(chatId),
    select: (data) => data.data,
  });

  useEffect(() => {
    if (isSuccess && !!chatId) {
      setAllMessages(data);
    }
  }, [data]);

  const { user } = authStore();

  return (
    <Container maxW="xl" p={0}>
      <Skeleton loading={isLoading}>
        <Flex
          flexDirection="column"
          h="100%"
          maxH="100px"
          borderX="1px"
          borderColor="gray.200"
        >
          <MyMessageList changeMessage={changeMessage} userId={user.id} />
          <Box minH={"50px"} />
          <Box
            p={3}
            borderTop="1px"
            borderColor="gray.200"
            position={"fixed"}
            bottom={0}
          >
            <MySendPanel onCreateMessage={createMessage} />
          </Box>
        </Flex>
      </Skeleton>
    </Container>
  );
});
