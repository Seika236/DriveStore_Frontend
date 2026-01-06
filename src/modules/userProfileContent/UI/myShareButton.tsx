import { IconButton } from "@chakra-ui/react";
import { MyIconButton } from "@/ui/MyIconButton";
import { ShareIcon } from "@/assets/icons/share-icon";

type Props = {
  text?: string;
};

export function MyShareButton({ text }: Props) {
  if (text) {
    return (
      <MyIconButton icon={<ShareIcon />} onClick={() => {}} title={text} />
    );
  }

  return (
    <IconButton variant={"ghost"} aria-label="schare button">
      <ShareIcon />
    </IconButton>
  );
}
