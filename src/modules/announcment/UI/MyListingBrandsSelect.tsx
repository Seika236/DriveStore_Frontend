import { MySelectWidthDialog } from "@/ui/MySelectWidthDialog";
import { UseFormRegisterReturn } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import GlobalTypesService from "@/services/globalTypesService";
import { transformTypeResponse } from "@/modules/burgerMenu/lib/transformTypeResponse";
import { transformIntoSelectCollectionFromMass } from "../../../lib/transformIntoSelectCollectionFromMass";
import GetBrandService from "@/modules/brandList/services/getBrandService";
import { TransformBrandResponse } from "@/modules/brandList/lib/transformBrandResponse";
import brandService from "@/modules/brand/services/brandService";

type Props = {
  register: UseFormRegisterReturn;
  errorText?: string;
};

export function MyListingBrandsSelect({ register, errorText }: Props) {
  const { data: brands } = useQuery({
    queryKey: ["fetch:get/all/brands"],
    queryFn: GetBrandService.getAllBrands,
    select: (data) => {
      const brands = data.data.map((item) => item.name);
      return transformIntoSelectCollectionFromMass(brands);
    },
  });

  return (
    <MySelectWidthDialog
      maxWidth={150}
      placeholder={"Марки"}
      collection={brands || []}
      size={"sm"}
      label={"выбор рубрики"}
      errorText={errorText}
      register={register}
    />
  );
}
