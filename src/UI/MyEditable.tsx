import { Button, Editable, IconButton } from "@chakra-ui/react";
import { LuCheck, LuX } from "react-icons/lu";
import { PenOffIcon } from "@/assets/icons/pen-off-icon";
import { useState } from "react";

type Props = {
  onCheckClick: (value: string) => void;
  onFinishEdit: () => void;
};

export function MyEditable({ onCheckClick, onFinishEdit }: Props) {
  const [value, setValue] = useState<string>("");

  const onClick = (value: string) => {
    onCheckClick(value);
    onFinishEdit();
    setValue("");
  };

  return (
    <Editable.Root
      value={value ?? ""}
      onValueChange={(details) => setValue(details.value)}
    >
      <Editable.Preview> Отредактировать</Editable.Preview>
      <Editable.Input />

      <Editable.Control>
        <Editable.CancelTrigger asChild>
          <IconButton variant="outline" size="xs">
            <LuX />
          </IconButton>
        </Editable.CancelTrigger>
        <Editable.SubmitTrigger asChild>
          <IconButton
            onClick={() => onClick(value)}
            variant="outline"
            size="xs"
          >
            <LuCheck />
          </IconButton>
        </Editable.SubmitTrigger>
      </Editable.Control>
      <Button
        size={"sm"}
        variant={"ghost"}
        w={"32px"}
        h={"32px"}
        onClick={onFinishEdit}
      >
        <PenOffIcon size={"sm"} />
      </Button>
    </Editable.Root>
  );
}
