import { Avatar } from "@chakra-ui/react";

type Props = {
  size?: number;
  imageUrl: string | null;
};

export function MyAvatar({ size, imageUrl }: Props) {
  return (
    <Avatar.Root h={size || "default"} w={size || "default"}>
      <Avatar.Fallback name="Segun Adebayo" />
      <Avatar.Image src={imageUrl || "https://bit.ly/sage-adebayo"} />
    </Avatar.Root>
  );
}
