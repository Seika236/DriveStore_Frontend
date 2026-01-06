import { Box } from "@chakra-ui/react";

type Props = {
  name: string;
  isCategory: boolean;
  onClick?: () => void;
};

export function MyCategoryTypeListItem({ name, isCategory, onClick }: Props) {
  return (
    <Box
      onClick={() => onClick()}
      cursor={"pointer"}
      color={isCategory ? "red" : "default"}
      _hover={{ bg: "gray.100", _dark: { bg: "gray.700" } }}
      rounded={"8px"}
      py={"10px"}
      px={"10px"}
    >
      {name}
    </Box>
  );
}
