import { useColorModeValue } from "@/components/ui/color-mode";
import { Tag } from "@chakra-ui/react";
import { TrashIcon } from "@/assets/icons/trash-icon";
import { CloseIcon } from "@/assets/icons/close-icon";

type Props = {
  title: string;
  onClick?: () => void;
};

export const FilterChip = ({ title, onClick }: Props) => {
  const filterStyles = {
    bg: { base: "gray.700", _dark: "whiteAlpha.200" },
    hoverBg: { base: "black", _dark: "whiteAlpha.300" },
    color: { base: "white", _dark: "whiteAlpha.900" },
  };
  return (
    <Tag.Root
      size="lg"
      borderRadius="full"
      variant="subtle"
      bg={filterStyles.bg}
      color={filterStyles.color}
      py={1}
      cursor="pointer"
      transition="all 0.2s"
      _hover={{ bg: filterStyles.hoverBg }}
      onClick={onClick}
    >
      <Tag.Label fontWeight="medium" mr={2}>
        {title}
      </Tag.Label>
      <CloseIcon />
    </Tag.Root>
  );
};
