import { MySelectWidthDialog } from "@/ui/MySelectWidthDialog";
import { UseFormRegisterReturn } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import TransportService from "@/modules/userPost/service/transportService";
import { transformIntoSelectCollection } from "@/modules/burgerMenu/lib/transformIntoSelectCollection";

type Props = {
  register: UseFormRegisterReturn;
  errorText?: string;
};

export function MyCreatePostTransportSelect({ register, errorText }: Props) {
  const { data } = useQuery({
    queryKey: ["fetch:get/transports"],
    queryFn: TransportService.getAllTransports,
    select: (data) => transformIntoSelectCollection(data?.data),
  });

  return (
    <MySelectWidthDialog
      maxWidth={150}
      placeholder={"Транспорт"}
      collection={data || []}
      size={"sm"}
      label={"выбор транспорта"}
      errorText={errorText}
      register={register}
    />
  );
}
