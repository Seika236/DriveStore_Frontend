import { BrandType } from "@/modules/brand/types/BrandType";
import { BrandListItem } from "@/modules/brandList/types/BrandListItem";

export function TransformBrandResponse(
  brand: BrandType | undefined,
): BrandListItem {
  return { name: brand.name, totalCars: 0 };
}
