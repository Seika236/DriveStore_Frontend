import { Button, IconButton, Menu, Portal } from "@chakra-ui/react";
import { MoreHorizontalIcon } from "@/assets/icons/more-horizontal-icon";
import { ShareIcon } from "@/assets/icons/share-icon";
import { TrashIcon } from "@/assets/icons/trash-icon";

type Props = {
  onDelete: () => void;
};

export function MyCommentItemMenu({ onDelete }: Props) {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="ghost">
          <MoreHorizontalIcon />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value={"share button"} padding={0}>
              <IconButton
                w={"full"}
                color={"red.600"}
                variant={"plain"}
                colorPalette={"orange"}
                onClick={onDelete}
              >
                <TrashIcon /> удалить
              </IconButton>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
