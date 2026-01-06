import { useState } from "react";
import { SelectCollectionType } from "../../../types/MySelectType";
import { MySelectWidthDialog } from "@/ui/MySelectWidthDialog";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  register: UseFormRegisterReturn;
  errorText?: string;
};

export function MyCreatePostIsPublicSelect({ register, errorText }: Props) {
  const [collection] = useState<SelectCollectionType>([
    { label: "Доступно только вам", value: "false" },
    { label: "Видят все", value: "true" },
  ]);

  return (
    <MySelectWidthDialog
      maxWidth={150}
      placeholder={"Видят все"}
      collection={collection}
      size={"sm"}
      label={"выбор рубрики"}
      errorText={errorText}
      register={register}
    />
  );
}
