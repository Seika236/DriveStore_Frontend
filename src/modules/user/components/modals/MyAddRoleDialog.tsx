import { MyDialog } from "@/components/MyDialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyFormField } from "@/ui/MyFormField";
import { AddRoleFormSchema } from "@/modules/user/types/AddRoleFormSchema";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";
import UserService from "@/modules/user/services/userService";
import { AddRoleRequest } from "@/modules/user/types/ApiRequestTypes";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyAddRoleDialog({ isVisible, onOpenChange }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddRoleFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(AddRoleFormSchema),
  });

  const { isLoading, fetchFunction } = UseRequest<
    AxiosResponse<void>,
    AddRoleRequest
  >({
    request: UserService.addUserRole,
    successText: "роль была успешно добавлена",
  });

  const onSubmit: SubmitHandler<AddRoleFormSchema> = (data) => {
    fetchFunction(data);
  };

  return (
    <MyDialog
      title={"Add role"}
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
            placeholder={"Enter User name"}
          />
          <MyFormField
            label={"role name"}
            type={"text"}
            register={register("role")}
            errorText={errors?.role?.message}
            isRequired={true}
            placeholder={"Enter User name"}
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
