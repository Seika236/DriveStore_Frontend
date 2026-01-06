import { Button } from "@chakra-ui/react";
import type { ButtonProps } from "@chakra-ui/react";

type Variants = "gray" | "green" | "black" | "blue";

type Props = {
  onClick: () => void;
  description: string;
  variant: Variants;
};
const MyButtonVariant: Record<Variants, ButtonProps> = {
  green: { colorPalette: "green", variant: "subtle" },
  gray: { colorPalette: "gray", variant: "subtle" },
  black: { colorPalette: "black", variant: "subtle" },
  blue: { colorPalette: "blue", variant: "subtle" },
};

export function MyButton({ description, onClick, variant }: Props) {
  return (
    <Button {...MyButtonVariant[variant]} onClick={onClick}>
      {description}
    </Button>
  );
}
