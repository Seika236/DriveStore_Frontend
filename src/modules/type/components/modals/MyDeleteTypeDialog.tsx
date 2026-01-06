import { MyDialog } from "@/components/MyDialog";
import { MySubmitButton } from "@/ui/MySubmitButton";
import { MyFormField } from "@/ui/MyFormField";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeleteTypeFormSchema } from "@/modules/type/types/DeleteTypeFormSchema";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import BrandService from "@/modules/brand/services/brandService";
import { DeleteCategoryFormSchema } from "@/modules/category/types/DeleteCategoryFormSchema";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";
import TypeService from "@/modules/type/services/typeService";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyDeleteTypeDialog({ isVisible, onOpenChange }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<DeleteTypeFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(DeleteTypeFormSchema),
  });

  const { isLoading, fetchFunction } = UseRequest<AxiosResponse<void>, number>({
    request: TypeService.deleteType,
    successText: "тип был успешно удален",
  });

  const onSubmit: SubmitHandler<DeleteTypeFormSchema> = (data) => {
    fetchFunction(+data.id);
  };

  return (
    <MyDialog
      title={"Delete type"}
      isVisible={isVisible}
      onOpenChange={onOpenChange}
      size={"lg"}
      isEnabledFooter={true}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyModalFieldsContainer>
          <MyFormField
            label={"type [id]"}
            type={"text"}
            register={register("id")}
            errorText={errors?.id?.message}
            isRequired={true}
            placeholder={"Enter type [id]"}
          />
        </MyModalFieldsContainer>
        <MyModalFooterButtonsContainer
          onOpenChange={onOpenChange}
          isLoading={isLoading}
        />
      </form>
    </MyDialog>
  );
}
