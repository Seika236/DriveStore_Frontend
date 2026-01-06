import { MyDialog } from "@/components/MyDialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyFormField } from "@/ui/MyFormField";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { CreateListingFormSchema } from "@/modules/listing/types/CreateListingFormSchema";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";
import { AxiosResponse } from "axios";
import { UseRequest } from "@/hooks/useRequest";
import listingService from "@/modules/listing/services/listingService";
import { CreateListingRequest } from "@/modules/listing/types/ApiRequestTypes";
import { LisitngType } from "@/modules/listing/types/LisitngType";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyCreateListingDialog({ isVisible, onOpenChange }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateListingFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(CreateListingFormSchema),
  });

  const { isLoading, fetchFunction } = UseRequest<
    AxiosResponse<LisitngType>,
    CreateListingRequest
  >({
    request: listingService.createListing,
    successText: "роль была успешно добавлена",
  });

  const onSubmit: SubmitHandler<CreateListingFormSchema> = (data) => {
    fetchFunction(data);
  };

  return (
    <MyDialog
      title={"Create listing"}
      isVisible={isVisible}
      onOpenChange={onOpenChange}
      size={"lg"}
      isEnabledFooter={true}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyModalFieldsContainer>
          <MyFormField
            label={"listing name"}
            type={"text"}
            register={register("name")}
            errorText={errors?.name?.message}
            isRequired={true}
            placeholder={"Enter listing name"}
          />
          <MyFormField
            label={"brand [id]"}
            type={"text"}
            register={register("brandId")}
            errorText={errors?.brandId?.message}
            isRequired={true}
            placeholder={"Enter brand [id]"}
          />
          <MyFormField
            label={"category [id]"}
            type={"text"}
            register={register("categoryId")}
            errorText={errors?.categoryId?.message}
            isRequired={true}
            placeholder={"Enter category [id]"}
          />
          <MyFormField
            label={"type [id]"}
            type={"text"}
            register={register("typeId")}
            errorText={errors?.typeId?.message}
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
