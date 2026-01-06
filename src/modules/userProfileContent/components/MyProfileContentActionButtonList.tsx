"use client";
import { Button, IconButton, Menu, Portal } from "@chakra-ui/react";
import { MoreHorizontalIcon } from "@/assets/icons/more-horizontal-icon";
import { ShareIcon } from "@/assets/icons/share-icon";

type Props = {
  onShareButtonClick: () => void;
};

export function MyProfileContentActionButtonList({
  onShareButtonClick,
}: Props) {
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
                variant={"plain"}
                colorPalette={"orange"}
                onClick={onShareButtonClick}
              >
                <ShareIcon /> поделиться
              </IconButton>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
