import { MyDialog } from "@/components/MyDialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateCategoryFormSchema } from "@/modules/category/types/CreateCategoryFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyFormField } from "@/ui/MyFormField";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";
import { UseRequest } from "@/hooks/useRequest";
import CategoryService from "@/modules/category/services/categoryService";
import { AxiosResponse } from "axios";
import { CategoryType } from "@/modules/category/types/CategoryType";
import { CreateCategoryRequest } from "@/modules/category/types/ApiRequestTypes";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyCreateCategoryDialog({ isVisible, onOpenChange }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateCategoryFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(CreateCategoryFormSchema),
  });

  const { fetchFunction, isLoading } = UseRequest<
    AxiosResponse<CategoryType>,
    CreateCategoryRequest
  >({
    request: CategoryService.createCategory,
    successText: "категория была успешно создан",
  });

  const onSubmit: SubmitHandler<CreateCategoryFormSchema> = (data) => {
    fetchFunction(data);
  };
  return (
    <MyDialog
      title={"Create category"}
      isVisible={isVisible}
      onOpenChange={onOpenChange}
      size={"lg"}
      isEnabledFooter={true}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyModalFieldsContainer>
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
