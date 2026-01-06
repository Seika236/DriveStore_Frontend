import { Menu, Portal } from "@chakra-ui/react";
import { MyDropMenuNavBar } from "@/modules/navbar/components/MyDropMenuNavBar";
import { MyAvatar } from "@/ui/MyAvatar";
import { authStore } from "@/store/authStore";
import { getStaticImageFromServer } from "../../../lib/getStaticImageFromServer";

export function AvatarDropMenu() {
  const { user } = authStore();

  return (
    <Menu.Root>
      <Menu.Trigger rounded="full">
        <MyAvatar
          imageUrl={getStaticImageFromServer(user?.profile?.profileImg)}
        />
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <MyDropMenuNavBar />
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
