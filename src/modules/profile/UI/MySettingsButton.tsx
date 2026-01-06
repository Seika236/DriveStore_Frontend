import { IconButton, LinkOverlay } from "@chakra-ui/react";
import { SettingsIcon } from "@/assets/icons/settings-icon";
import Link from "next/link";
import { constants } from "@/modules/userPost/constants";

export function MySettingsButton() {
  return (
    <Link href={constants.settingsPath} passHref>
      <IconButton variant={"ghost"} w={50} h={50}>
        <SettingsIcon />
      </IconButton>
    </Link>
  );
}
