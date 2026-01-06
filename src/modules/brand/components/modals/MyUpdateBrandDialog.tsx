import { MyDialog } from "@/components/MyDialog";
import { MyFormField } from "@/ui/MyFormField";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateBrandFormSchema } from "@/modules/brand/types/UpdateBrandFormSchema";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";
import { UpdateCategoryFormSchema } from "@/modules/category/types/UpdateCategoryFormSchema";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import BrandService from "@/modules/brand/services/brandService";
import { BrandType } from "@/modules/brand/types/BrandType";
import { UpdateBrandRequest } from "@/modules/brand/types/ApiRequestTypes";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyUpdateBrandDialog({ isVisible, onOpenChange }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateBrandFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(UpdateBrandFormSchema),
  });
  const { fetchFunction, isLoading } = UseRequest<
    AxiosResponse<BrandType>,
    UpdateBrandRequest
  >({
    request: BrandService.updateBrand,
    successText: "бренд был успешно обновлен",
  });

  const onSubmit: SubmitHandler<UpdateCategoryFormSchema> = (data) => {
    fetchFunction({ ...data, id: +data.id });
  };

  return (
    <MyDialog
      title={"Update brand"}
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
          <MyFormField
            label={"brand name"}
            type={"text"}
            register={register("name")}
            errorText={errors?.name?.message}
            isRequired={true}
            placeholder={"Enter brand name"}
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
