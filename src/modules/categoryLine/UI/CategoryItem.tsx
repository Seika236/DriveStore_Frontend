import { Button } from "@chakra-ui/react";

interface Props {
  categoryName: string;
}

export function CategoryItem({ categoryName }: Props) {
  return (
    <Button
      variant={"ghost"}
      colorPalette={"red"}
      color={{ base: "whiteAlpha.700", _dark: "white.200" }}
      rounded={0}
      _hover={{
        bg: "whiteAlpha.100",
        color: { base: "white", _dark: "red.100" },
      }}
    >
      {categoryName}
    </Button>
  );
}
