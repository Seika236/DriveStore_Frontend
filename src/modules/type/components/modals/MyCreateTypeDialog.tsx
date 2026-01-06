import { MyDialog } from "@/components/MyDialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyFormField } from "@/ui/MyFormField";
import { CreateTypeFormSchema } from "@/modules/type/types/CreateTypeFormSchema";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import TypeService from "@/modules/type/services/typeService";
import { IType } from "../../../../types/models/IType";
import { CreateTypeRequest } from "@/modules/type/types/ApiRequestTypes";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyCreateTypeDialog({ isVisible, onOpenChange }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateTypeFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(CreateTypeFormSchema),
  });

  const { isLoading, fetchFunction } = UseRequest<
    AxiosResponse<IType>,
    CreateTypeRequest
  >({
    request: TypeService.createType,
    successText: "тип был успешно создан",
  });

  const onSubmit: SubmitHandler<CreateTypeFormSchema> = (data) => {
    fetchFunction({ ...data, categoryId: +data.categoryId });
  };

  return (
    <MyDialog
      title={"Create type"}
      isVisible={isVisible}
      onOpenChange={onOpenChange}
      size={"lg"}
      isEnabledFooter={true}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyModalFieldsContainer>
          <MyFormField
            label={"category [id]"}
            type={"text"}
            register={register("categoryId")}
            errorText={errors?.categoryId?.message}
            isRequired={true}
            placeholder={"Enter category [id]"}
          />
          <MyFormField
            label={"type name"}
            type={"text"}
            register={register("name")}
            errorText={errors?.name?.message}
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
