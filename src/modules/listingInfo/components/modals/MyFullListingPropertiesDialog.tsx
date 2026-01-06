import { MyDialog } from "@/components/MyDialog";
import { useForm } from "react-hook-form";
import { CreateCategoryFormSchema } from "@/modules/category/types/CreateCategoryFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IProperty } from "../../../../types/models/IProperty";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { MyCarSpecItem } from "@/modules/listingInfo/UI/MyCarSpecItem";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
  properties: IProperty[];
};

export function MyFullListingPropertiesDialog({
  isVisible,
  onOpenChange,
  properties,
}: Props) {
  const {} = useForm<CreateCategoryFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(CreateCategoryFormSchema),
  });

  return (
    <MyDialog
      title={"Все характеристики"}
      isVisible={isVisible}
      onOpenChange={onOpenChange}
      size={"lg"}
      isEnabledFooter={true}
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {properties.map((property, index) => (
          <GridItem key={property.title} colSpan={1}>
            <Box p={4} rounded={"md"} boxShadow={"md"}>
              <MyCarSpecItem
                label={property.title}
                value={property.description}
              />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </MyDialog>
  );
}
