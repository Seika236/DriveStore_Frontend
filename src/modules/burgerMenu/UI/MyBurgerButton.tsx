import { Box, BoxProps, Button, VStack } from "@chakra-ui/react";

type Props = {
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function MyBurgerButton({ onClick, onMouseEnter, onMouseLeave }: Props) {
  const BoxStyle: BoxProps = {
    width: 22,
    height: 0.5,
    bgColor: "red.600",
  };

  return (
    <Button
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      variant="ghost"
    >
      <VStack gap={"3px"}>
        <Box {...BoxStyle}></Box>
        <Box {...BoxStyle}></Box>
        <Box {...BoxStyle}></Box>
      </VStack>
    </Button>
  );
}
