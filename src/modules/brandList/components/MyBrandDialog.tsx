import { MyDialog } from "@/components/MyDialog";
import { Grid, Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { MyBrandList } from "@/modules/brandList/components/MyBrandList";
import { UseInput } from "@/hooks/useInput";
import { useQuery } from "@tanstack/react-query";
import GetBrandService from "@/modules/brandList/services/getBrandService";
import { UseFilterBrand } from "@/modules/brandList/hooks/useFilterBrand";

type Props = {
  isVisible: boolean;
  onOpenChange?: () => void;
};

export function MyBrandDialog({ isVisible, onOpenChange }: Props) {
  const { data } = useQuery({
    queryKey: ["fetch:get/all/brands"],
    queryFn: GetBrandService.getAllBrands,
    select: (data) => data.data,
  });
  const { onChange, value } = UseInput();
  const { filteredBrands } = UseFilterBrand({ brands: data, value });

  return (
    <MyDialog
      size={"lg"}
      title={"Марки авто"}
      isVisible={isVisible}
      onOpenChange={onOpenChange}
    >
      <Grid rowGap={3}>
        <InputGroup flex="1" startElement={<LuSearch />}>
          <Input
            value={value}
            onChange={onChange}
            placeholder="Search contacts"
          />
        </InputGroup>
        <MyBrandList
          setIsVisible={onOpenChange}
          isVisibleDefaultBrand={false}
          brands={value ? filteredBrands : data}
          onDefaultBrandClick={() => {}}
        />
      </Grid>
    </MyDialog>
  );
}
