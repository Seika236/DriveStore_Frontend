import { Button, Icon } from "@chakra-ui/react";
import { TabButtonType } from "@/modules/announcment/types/TabButtonType";

type Props = {
  isActive: boolean;
  onClick: () => void;
  button: TabButtonType;
};

export function MyAnnouncementButtonItem({ isActive, onClick, button }: Props) {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      size="md"
      w={"full"}
      flexGrow={1}
      borderWidth="1px"
      borderColor={isActive ? "orange.500" : "transparent"}
      justifyContent="center"
      bg={isActive ? { base: "white", _dark: "gray.800" } : "transparent"}
      color={
        isActive
          ? { base: "orange.600", _dark: "orange.600" }
          : { base: "gray.500", _dark: "gray.500" }
      }
      boxShadow={isActive ? { base: "sm", _dark: "none" } : "none"}
      borderRadius="md"
      _hover={{
        bg: isActive
          ? { base: "white", _dark: "gray.800" }
          : { base: "gray.200", _dark: "whiteAlpha.100" },
      }}
    >
      {button.label}
    </Button>
  );
}
