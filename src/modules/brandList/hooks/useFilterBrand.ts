import { BrandListItem } from "@/modules/brandList/types/BrandListItem";
import { useMemo } from "react";

type Props = {
  brands: BrandListItem[];
  value: string;
};

export function UseFilterBrand({ brands, value }: Props) {
  const filterBrandByName = (brand: BrandListItem, value: string) => {
    return brand.name.toLowerCase().includes(value.toLowerCase());
  };

  const getFilteredBrands = (brands, value) => {
    return brands.filter((brand) => {
      return filterBrandByName(brand, value);
    });
  };

  const filteredBrands = useMemo(() => {
    return getFilteredBrands(brands || [], value);
  }, [value, brands]);

  return {
    filteredBrands,
  };
}
