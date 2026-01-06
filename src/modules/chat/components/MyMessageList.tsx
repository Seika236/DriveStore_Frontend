import { MyMessageItem } from "@/modules/chat/UI/MyMessageItem";
import { VStack } from "@chakra-ui/react";
import { messagesStore } from "@/modules/chat/store/messagesStore";

type Props = {
  userId: number;
  changeMessage: (messageId: number, message: string) => void;
};

export function MyMessageList({ userId, changeMessage }: Props) {
  const { messages } = messagesStore();

  const onCheckClick = (messageId: number, message: string) => {
    changeMessage(messageId, message);
  };

  return (
    <VStack
      flex={1}
      p={4}
      justifyContent={"end"}
      align="stretch"
      css={{
        "&::-webkit-scrollbar": { width: "4px" },
        "&::-webkit-scrollbar-track": { width: "6px" },
        "&::-webkit-scrollbar-thumb": {
          background: "#cbd5e0",
          borderRadius: "24px",
        },
      }}
    >
      {messages.map((msg) => (
        <MyMessageItem
          onCheckClick={(value: string) => onCheckClick(msg.id, value)}
          key={msg.id}
          msg={{ ...msg, isMe: userId === msg.authorId }}
        />
      ))}
    </VStack>
  );
}
