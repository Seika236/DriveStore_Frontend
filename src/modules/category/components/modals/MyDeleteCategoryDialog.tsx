import { MyDialog } from "@/components/MyDialog";
import { MySubmitButton } from "@/ui/MySubmitButton";
import { MyFormField } from "@/ui/MyFormField";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeleteCategoryFormSchema } from "@/modules/category/types/DeleteCategoryFormSchema";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { UseRequest } from "@/hooks/useRequest";
import { DeleteCategoryRequest } from "@/modules/category/types/ApiRequestTypes";
import CategoryService from "@/modules/category/services/categoryService";
import { AxiosResponse } from "axios";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";
import { CreateCategoryFormSchema } from "@/modules/category/types/CreateCategoryFormSchema";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyDeleteCategoryDialog({ isVisible, onOpenChange }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeleteCategoryFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(DeleteCategoryFormSchema),
  });
  const { isLoading, fetchFunction } = UseRequest<AxiosResponse<void>, number>({
    request: CategoryService.deleteCategory,
    successText: "категория была успешно удалена",
  });

  const onSubmit: SubmitHandler<DeleteCategoryFormSchema> = (data) => {
    fetchFunction(+data.id);
  };

  return (
    <MyDialog
      title={"Delete category"}
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
            register={register("id")}
            errorText={errors?.id?.message}
            isRequired={true}
            placeholder={"Enter category [id]"}
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
