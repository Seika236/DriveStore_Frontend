import { MySelectWidthDialog } from "@/ui/MySelectWidthDialog";
import { UseFormRegisterReturn } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import HeaderService from "@/modules/userPost/service/headerService";
import { transformIntoSelectCollection } from "@/modules/burgerMenu/lib/transformIntoSelectCollection";
import GlobalTypesService from "@/services/globalTypesService";
import { transformTypeResponse } from "@/modules/burgerMenu/lib/transformTypeResponse";
import { transformIntoSelectCollectionFromMass } from "../../../lib/transformIntoSelectCollectionFromMass";
import { transformTypeResponseForSelect } from "../../../lib/transformTypeResponseForSelect";

type Props = {
  register: UseFormRegisterReturn;
  activeTab: string;
  errorText?: string;
};

export function MyListingTypesSelect({
  register,
  errorText,
  activeTab,
}: Props) {
  const { data: types } = useQuery({
    queryKey: ["fetch:get/all/types"],
    queryFn: GlobalTypesService.getAllTypes,
    select: (data) => {
      const categoryTypes = data.data.reduce(
        transformTypeResponseForSelect,
        {},
      );

      const types = categoryTypes[activeTab];
      return transformIntoSelectCollectionFromMass(types);
    },
  });

  return (
    <MySelectWidthDialog
      maxWidth={150}
      placeholder={"Типы"}
      collection={types || []}
      size={"sm"}
      label={"выбор рубрики"}
      errorText={errorText}
      register={register}
    />
  );
}
