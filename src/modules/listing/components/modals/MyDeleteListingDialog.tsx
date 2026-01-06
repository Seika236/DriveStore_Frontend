import { MyDialog } from "@/components/MyDialog";
import { MySubmitButton } from "@/ui/MySubmitButton";
import { MyFormField } from "@/ui/MyFormField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeleteBrandFormSchema } from "@/modules/brand/types/DeleteBrandFormSchema";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { DeleteListingFormSchema } from "@/modules/listing/types/DeleteListingFormSchema";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyDeleteListingDialog({ isVisible, onOpenChange }: Props) {
  const {
    register,
    formState: { errors },
  } = useForm<DeleteListingFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(DeleteListingFormSchema),
  });

  return (
    <MyDialog
      title={"Delete listing"}
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
            placeholder={"Enter listing [id]"}
          />
        </MyModalFieldsContainer>
      </form>
    </MyDialog>
  );
}
