import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { MyCarSpecItem } from "@/modules/listingInfo/UI/MyCarSpecItem";
import { IProperty } from "../../../types/models/IProperty";
import { MyFullListingPropertiesDialog } from "@/modules/listingInfo/components/modals/MyFullListingPropertiesDialog";
import { UseDialog } from "@/hooks/useDialog";

type Props = {
  properties: IProperty[];
};

export function MyCarSpecList({ properties }: Props) {
  const { isVisible, onOpenDialog } = UseDialog();

  return (
    <Box p={6} maxW="350px">
      <Heading as="h3" size="md" mb={6} fontWeight="bold">
        Характеристики
      </Heading>

      <VStack align="start">
        {properties.slice(0, 6).map((item, i) => (
          <MyCarSpecItem label={item.title} value={item.description} key={i} />
        ))}
      </VStack>

      {properties.length > 6 && (
        <Button
          mt={8}
          w="full"
          py={6}
          bg="gray.100"
          color="black"
          _hover={{ bg: "gray.200" }}
          borderRadius="xl"
          fontSize="md"
          fontWeight="medium"
          onClick={onOpenDialog}
        >
          Все характеристики
        </Button>
      )}

      <MyFullListingPropertiesDialog
        isVisible={isVisible}
        onOpenChange={onOpenDialog}
        properties={properties}
      />
    </Box>
  );
}
