import { MyDialog } from "@/components/MyDialog";
import { MyFormField } from "@/ui/MyFormField";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { AxiosResponse } from "axios";
import UserService from "@/modules/user/services/userService";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";
import { UseRequest } from "@/hooks/useRequest";
import { DeleteUserFormSchema } from "@/modules/user/types/DeleteUserFormSchema";
import globalUserService from "@/services/globalUserService";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyDeleteUserDialog({ isVisible, onOpenChange }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeleteUserFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(DeleteUserFormSchema),
  });

  const { isLoading, fetchFunction } = UseRequest<AxiosResponse<void>, string>({
    request: globalUserService.deleteUser,
    successText: "user был успешно удалён",
  });

  const onSubmit: SubmitHandler<DeleteUserFormSchema> = (data) => {
    fetchFunction(data.id);
  };

  return (
    <MyDialog
      title={"Delete user"}
      isVisible={isVisible}
      onOpenChange={onOpenChange}
      size={"lg"}
      isEnabledFooter={true}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyModalFieldsContainer>
          <MyFormField
            label={"user [id]"}
            type={"text"}
            register={register("id")}
            errorText={errors?.id?.message}
            isRequired={true}
            placeholder={"Enter user [id]"}
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
