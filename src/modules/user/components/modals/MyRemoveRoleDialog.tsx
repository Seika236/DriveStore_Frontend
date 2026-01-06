import { MyDialog } from "@/components/MyDialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyFormField } from "@/ui/MyFormField";
import { MySubmitButton } from "@/ui/MySubmitButton";
import { RemoveRoleFormSchema } from "@/modules/user/types/RemoveRoleFormSchema";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import {
  AddRoleRequest,
  RemoveRoleRequest,
} from "@/modules/user/types/ApiRequestTypes";
import UserService from "@/modules/user/services/userService";
import { AddRoleFormSchema } from "@/modules/user/types/AddRoleFormSchema";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyRemoveRoleDialog({ isVisible, onOpenChange }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RemoveRoleFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(RemoveRoleFormSchema),
  });

  const { isLoading, fetchFunction } = UseRequest<
    AxiosResponse<void>,
    RemoveRoleRequest
  >({
    request: UserService.removeUserRole,
    successText: "роль была успешно удалена",
  });

  const onSubmit: SubmitHandler<RemoveRoleFormSchema> = (data) => {
    fetchFunction(data);
  };

  return (
    <MyDialog
      title={"Remove role"}
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
