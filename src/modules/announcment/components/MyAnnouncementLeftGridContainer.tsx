import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MyAnnouncementButtonList } from "@/modules/announcment/components/MyAnnouncementButtonList";
import { MyCreateAnnouncementDialog } from "@/modules/announcment/components/modals/MyCreateAnnouncementDialog";
import { UseDialog } from "@/hooks/useDialog";

type Props = {};

export function MyAnnouncementLeftGridContainer(props: Props) {
  const [activeTab, setActiveTab] = useState("Легковые");
  const { isVisible, onOpenDialog } = UseDialog();
  return (
    <div>
      <MyAnnouncementButtonList
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Flex direction="column" alignItems="flex-start" mt={10} ml={4}>
        <Box mb={8}>
          <Image w={"300px"} src={"red-car-image.png"} />
        </Box>

        <Text fontSize="2xl" fontWeight="normal" mb={2}>
          Продать — легко
        </Text>

        <Text fontSize="md" color="gray.600" mb={8}>
          Добавьте объявление, и его увидят тысячи потенциальных покупателей.
        </Text>

        <Button
          onClick={onOpenDialog}
          color="white"
          colorPalette={"orange"}
          size="xl"
        >
          Разместить объявление
        </Button>
      </Flex>
      <MyCreateAnnouncementDialog
        activeTab={activeTab}
        isVisible={isVisible}
        onOpenChange={onOpenDialog}
      />
    </div>
  );
}
