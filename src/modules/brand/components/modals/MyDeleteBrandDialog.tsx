import { MyDialog } from "@/components/MyDialog";
import { MyFormField } from "@/ui/MyFormField";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeleteBrandFormSchema } from "@/modules/brand/types/DeleteBrandFormSchema";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import { DeleteCategoryFormSchema } from "@/modules/category/types/DeleteCategoryFormSchema";
import BrandService from "@/modules/brand/services/brandService";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyDeleteBrandDialog({ isVisible, onOpenChange }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeleteBrandFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(DeleteBrandFormSchema),
  });

  const { isLoading, fetchFunction } = UseRequest<AxiosResponse<void>, number>({
    request: BrandService.deleteBrand,
    successText: "бренд был успешно удален",
  });

  const onSubmit: SubmitHandler<DeleteCategoryFormSchema> = (data) => {
    fetchFunction(+data.id);
  };

  return (
    <MyDialog
      title={"Delete brand"}
      isVisible={isVisible}
      onOpenChange={onOpenChange}
      size={"lg"}
      isEnabledFooter={true}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyModalFieldsContainer>
          <MyFormField
            label={"brand [id]"}
            type={"text"}
            register={register("id")}
            errorText={errors?.id?.message}
            isRequired={true}
            placeholder={"Enter brand [id]"}
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
