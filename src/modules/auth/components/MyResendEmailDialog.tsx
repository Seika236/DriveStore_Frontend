import { MyDialog } from "@/components/MyDialog";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { MyFormField } from "@/ui/MyFormField";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResendEmailFormSchema } from "@/modules/auth/types/ResendEmailFormSchema";
import AuthService from "@/modules/auth/services/authService";
import { authStore } from "@/store/authStore";

export function MyResendEmailDialog() {
  const {
    setVisibleResendEmailDialog: onOpenChange,
    isVisibleResendEmailDialog: isVisible,
  } = authStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResendEmailFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(ResendEmailFormSchema),
  });
  const { fetchFunction, isLoading } = UseRequest<AxiosResponse<void>, string>({
    request: AuthService.resendEmail,
    successText: "повторное сообщение было успешно отправлено на почту",
  });

  const onSubmit: SubmitHandler<ResendEmailFormSchema> = (data) => {
    fetchFunction(data.email);
  };

  return (
    <MyDialog
      title={"Resend email"}
      isVisible={isVisible}
      onOpenChange={() => onOpenChange(!isVisible)}
      size={"lg"}
      isEnabledFooter={true}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyModalFieldsContainer>
          <MyFormField
            label={"resend email"}
            type={"text"}
            register={register("email")}
            errorText={errors?.email?.message}
            isRequired={true}
            placeholder={"example@gmail.com"}
          />
        </MyModalFieldsContainer>
        <MyModalFooterButtonsContainer
          onOpenChange={() => onOpenChange(!isVisible)}
          isLoading={isLoading}
        />
      </form>
    </MyDialog>
  );
}
