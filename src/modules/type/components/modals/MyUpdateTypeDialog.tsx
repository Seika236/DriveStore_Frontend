import { MyDialog } from "@/components/MyDialog";
import { MyFormField } from "@/ui/MyFormField";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateTypeFormSchema } from "@/modules/type/types/UpdateTypeFormSchema";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import TypeService from "@/modules/type/services/typeService";
import { UpdateTypeRequest } from "@/modules/type/types/ApiRequestTypes";
import { IType } from "../../../../types/models/IType";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyUpdateTypeDialog({ isVisible, onOpenChange }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdateTypeFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(UpdateTypeFormSchema),
  });

  const { fetchFunction, isLoading } = UseRequest<
    AxiosResponse<IType>,
    UpdateTypeRequest
  >({
    request: TypeService.updateType,
    successText: "тип был успешно обновлен",
  });

  const onSubmit: SubmitHandler<UpdateTypeFormSchema> = (data) => {
    return fetchFunction({
      ...data,
      id: +data.id,
      categoryId: data.categoryId ? +data.categoryId : undefined,
    });
  };

  return (
    <MyDialog
      title={"Update type"}
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
          <MyFormField
            label={"type name"}
            type={"text"}
            register={register("name")}
            errorText={errors?.name?.message}
            isRequired={true}
            placeholder={"Enter type name"}
          />
          <MyFormField
            label={"category [id]"}
            type={"text"}
            register={register("categoryId")}
            errorText={errors?.categoryId?.message}
            isRequired={true}
            placeholder={"Enter type name"}
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
