import { MyDialog } from "@/components/MyDialog";
import { MySubmitButton } from "@/ui/MySubmitButton";
import { MyFormField } from "@/ui/MyFormField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateBrandFormSchema } from "@/modules/brand/types/UpdateBrandFormSchema";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { UpdateListingFormSchema } from "@/modules/listing/types/UpdateListingFormSchema";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyUpdateListingDialog({ isVisible, onOpenChange }: Props) {
  const {
    register,
    formState: { errors },
  } = useForm<UpdateListingFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(UpdateListingFormSchema),
  });

  return (
    <MyDialog
      title={"Update listing"}
      isVisible={isVisible}
      onOpenChange={onOpenChange}
      size={"lg"}
      actionButton={<MySubmitButton isLoading={false} />}
    >
      <form>
        <MyModalFieldsContainer>
          <MyFormField
            label={"listing [id]"}
            type={"text"}
            register={register("id")}
            errorText={errors?.id?.message}
            isRequired={true}
            placeholder={"Enter brand [id]"}
          />
          <MyFormField
            label={"type [id]"}
            type={"text"}
            register={register("typeId")}
            errorText={errors?.typeId?.message}
            isRequired={true}
            placeholder={"Enter type name"}
          />
          <MyFormField
            label={"brand [id]"}
            type={"text"}
            register={register("brandId")}
            errorText={errors?.typeId?.message}
            isRequired={true}
            placeholder={"Enter brand name"}
          />
          <MyFormField
            label={" category [id]"}
            type={"text"}
            register={register("categoryId")}
            errorText={errors?.typeId?.message}
            isRequired={true}
            placeholder={"Enter category name"}
          />
        </MyModalFieldsContainer>
      </form>
    </MyDialog>
  );
}
