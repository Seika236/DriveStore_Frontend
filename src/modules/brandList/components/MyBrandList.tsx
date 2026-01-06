import { Box, Button } from "@chakra-ui/react";
import { MyBrandItem } from "@/modules/brandList/UI/MyBrandItem";
import { EyeIcon } from "@/assets/icons/eye-icon";
import { IBrand } from "../../../types/models/IBrand";
import { UseFilter } from "@/hooks/useFilter";

type Props = {
  brands: IBrand[];
  setIsVisible?: () => void;
  onDefaultBrandClick: () => void;
  isVisibleDefaultBrand: boolean;
};

export function MyBrandList({
  brands,
  onDefaultBrandClick,
  isVisibleDefaultBrand,
  setIsVisible,
}: Props) {
  const { handleSearch } = UseFilter();

  const onBrandClick = (brand: IBrand) => {
    handleSearch({ term: brand.name + "%" + brand.id, query: "brand" });
    setIsVisible?.();
  };

  return (
    <Box
      as={"ul"}
      display={"grid"}
      columnGap={3}
      gridTemplateColumns={{
        base: "repeat(4, 1fr)",
        md: "repeat(5, 1fr)",
        lg: "repeat(6, 1fr)",
      }}
      alignItems={"start"}
    >
      {brands.map((brand, index) => {
        return (
          <Box
            as={"li"}
            key={index}
            _hover={{ color: "red.600" }}
            cursor={"pointer"}
          >
            <MyBrandItem
              onClick={() => {
                onBrandClick(brand);
              }}
              name={brand.name}
              totalCars={brand.totalCars}
            />
          </Box>
        );
      })}
      {isVisibleDefaultBrand && (
        <Box as={"li"}>
          <Button
            variant={"plain"}
            _hover={{ textDecoration: "underline" }}
            border={0}
            padding={0}
            colorPalette={"orange"}
            onClick={onDefaultBrandClick}
          >
            Все марки <EyeIcon />
          </Button>
        </Box>
      )}
    </Box>
  );
}
