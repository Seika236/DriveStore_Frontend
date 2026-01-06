import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { MyAnnouncementButtonItem } from "@/modules/announcment/UI/MyAnnouncementButtonItem";
import { TabButtonType } from "@/modules/announcment/types/TabButtonType";

type Props = {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
};

const buttons: TabButtonType[] = [
  { value: "Легковые", label: "Легковые" },
  { value: "Коммерческие", label: "Коммерческие" },
  { value: "Мото", label: "Мото" },
];

export function MyAnnouncementButtonList({ activeTab, setActiveTab }: Props) {
  const onSetActiveTab = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Grid
      gridTemplateColumns={"repeat(3, 1fr)"}
      as={"ul"}
      bg={{ base: "gray.100", _dark: "gray.900" }}
      borderRadius="lg"
      p="1"
      position="relative"
      gap="1"
      borderWidth="1px"
      borderColor={{ base: "gray.200", _dark: "transparent" }}
    >
      {buttons.map((button) => {
        const isActive = button.value === activeTab;
        return (
          <Box as={"li"} key={button.value}>
            <MyAnnouncementButtonItem
              onClick={() => onSetActiveTab(button.value)}
              button={button}
              isActive={isActive}
            />
          </Box>
        );
      })}
    </Grid>
  );
}
