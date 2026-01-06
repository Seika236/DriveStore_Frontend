import { MyDialog } from "@/components/MyDialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyFormField } from "@/ui/MyFormField";
import { CreateBrandFormSchema } from "@/modules/brand/types/CreateBrandFormSchema";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import BrandService from "@/modules/brand/services/brandService";
import { CreateBrandRequest } from "@/modules/brand/types/ApiRequestTypes";
import { BrandType } from "@/modules/brand/types/BrandType";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyCreateBrandDialog({ isVisible, onOpenChange }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBrandFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(CreateBrandFormSchema),
  });

  const { isLoading, fetchFunction } = UseRequest<
    AxiosResponse<BrandType>,
    CreateBrandRequest
  >({
    request: BrandService.createBrand,
    successText: "бренд был успешно создан",
  });

  const onSubmit: SubmitHandler<CreateBrandFormSchema> = (data) => {
    fetchFunction(data);
  };

  return (
    <MyDialog
      title={"Create brand"}
      isVisible={isVisible}
      onOpenChange={onOpenChange}
      size={"lg"}
      isEnabledFooter={true}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyModalFieldsContainer>
          <MyFormField
            label={"brand name"}
            type={"text"}
            register={register("name")}
            errorText={errors?.name?.message}
            isRequired={true}
            placeholder={"Enter brand name"}
          />
        </MyModalFieldsContainer>{" "}
        <MyModalFooterButtonsContainer
          onOpenChange={onOpenChange}
          isLoading={isLoading}
        />
      </form>
    </MyDialog>
  );
}
