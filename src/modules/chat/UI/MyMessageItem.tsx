import { Box, Flex, Text } from "@chakra-ui/react";
import { MyEditable } from "@/ui/MyEditable";
import { useState } from "react";

type Props = {
  msg: { id: number; message: string; isMe: boolean };
  onCheckClick: (value: string) => void;
};

export function MyMessageItem({ msg, onCheckClick }: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleContextMenu = (event) => {
    event.preventDefault();
    if (msg.isMe) {
      setIsVisible(true);
    }
  };

  const onFinishEdit = () => {
    setIsVisible(false);
  };

  return (
    <Flex key={msg.id} justifyContent={msg.isMe ? "flex-end" : "flex-start"}>
      <Box
        maxW="70%"
        px={4}
        py={2}
        borderRadius="lg"
        bg={msg.isMe ? "gray.700" : "white"}
        color={msg.isMe ? "white" : "black"}
        boxShadow="sm"
        borderBottomLeftRadius={msg.isMe ? "lg" : "none"}
        borderBottomRightRadius={msg.isMe ? "none" : "lg"}
      >
        {isVisible ? (
          <MyEditable onFinishEdit={onFinishEdit} onCheckClick={onCheckClick} />
        ) : (
          <Text onContextMenu={handleContextMenu} fontSize="sm">
            {msg.message}
          </Text>
        )}
      </Box>
    </Flex>
  );
}
