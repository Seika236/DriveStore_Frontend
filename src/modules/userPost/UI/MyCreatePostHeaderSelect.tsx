import { MySelectWidthDialog } from "@/ui/MySelectWidthDialog";
import { UseFormRegisterReturn } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import HeaderService from "@/modules/userPost/service/headerService";
import { transformIntoSelectCollection } from "@/modules/burgerMenu/lib/transformIntoSelectCollection";

type Props = {
  register: UseFormRegisterReturn;
  errorText?: string;
};

export function MyCreatePostHeaderSelect({ register, errorText }: Props) {
  const { data } = useQuery({
    queryKey: ["fetch:get/header"],
    queryFn: HeaderService.getAllHeader,
    select: (data) => transformIntoSelectCollection(data?.data),
  });

  return (
    <MySelectWidthDialog
      maxWidth={150}
      placeholder={"Рубрика"}
      collection={data || []}
      size={"sm"}
      label={"выбор рубрики"}
      errorText={errorText}
      register={register}
    />
  );
}
