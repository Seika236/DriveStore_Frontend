import { MyInput } from "@/ui/MyInput";
import { Button, HStack } from "@chakra-ui/react";
import { UseInput } from "@/hooks/useInput";
import { authStore } from "@/store/authStore";

type Props = {
  onCreateMessage: (message: string, authorId: number) => void;
};

export function MySendPanel({ onCreateMessage }: Props) {
  const { onChange, value, reset } = UseInput();
  const { user } = authStore();

  const onSendMessage = (message: string, userId: number) => {
    onCreateMessage(message, userId);
    reset();
  };

  return (
    <HStack>
      <MyInput
        value={value}
        type={"text"}
        label={"message"}
        onChange={onChange}
        placeholder="Введите сообщение..."
      />
      <Button
        onClick={() => onSendMessage(value, user.id)}
        variant={"outline"}
        colorScheme="blue"
      >
        Отправить
      </Button>
    </HStack>
  );
}
