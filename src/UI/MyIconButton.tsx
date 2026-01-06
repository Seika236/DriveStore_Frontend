import { ReactElement } from "react";
import {
  Button,
  ButtonProps,
  ColorPalette,
  Flex,
  Text,
} from "@chakra-ui/react";

type Props = {
  title: string;
  icon: ReactElement;
  onClick: () => void;
  colorPalette?: ColorPalette;
  style?: ButtonProps;
};

export function MyIconButton({
  title,
  icon,
  onClick,
  style,
  colorPalette = "gray",
}: Props) {
  return (
    <Button
      {...style}
      onClick={onClick}
      variant={"ghost"}
      h={"45px"}
      colorPalette={colorPalette}
    >
      <Flex alignItems={"center"} columnGap={2}>
        {icon}
        <Text>{title}</Text>
      </Flex>
    </Button>
  );
}
