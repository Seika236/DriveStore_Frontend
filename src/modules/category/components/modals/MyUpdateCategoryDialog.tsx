import { MyDialog } from "@/components/MyDialog";
import { MySubmitButton } from "@/ui/MySubmitButton";
import { MyFormField } from "@/ui/MyFormField";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateCategoryFormSchema } from "@/modules/category/types/UpdateCategoryFormSchema";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { DeleteCategoryFormSchema } from "@/modules/category/types/DeleteCategoryFormSchema";
import { UseRequest } from "@/hooks/useRequest";
import CategoryService from "@/modules/category/services/categoryService";
import { CategoryType } from "@/modules/category/types/CategoryType";
import { AxiosResponse } from "axios";
import { UpdateCategoryRequest } from "@/modules/category/types/ApiRequestTypes";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyUpdateCategoryDialog({ isVisible, onOpenChange }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateCategoryFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(UpdateCategoryFormSchema),
  });
  const { fetchFunction, isLoading } = UseRequest<
    AxiosResponse<CategoryType>,
    UpdateCategoryRequest
  >({
    request: CategoryService.updateCategory,
    successText: "категория была успешно обновлена",
  });

  const onSubmit: SubmitHandler<UpdateCategoryFormSchema> = (data) => {
    fetchFunction({ ...data, id: +data.id });
  };

  return (
    <MyDialog
      title={"Update category"}
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
            errorText={errors?.name?.message}
            isRequired={true}
            placeholder={"Enter category [id]"}
          />
          <MyFormField
            label={"category name"}
            type={"text"}
            register={register("name")}
            errorText={errors?.name?.message}
            isRequired={true}
            placeholder={"Enter category name"}
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
