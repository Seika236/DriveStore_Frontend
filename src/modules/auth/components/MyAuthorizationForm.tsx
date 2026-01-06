"use client";
import { MyFormFieldset } from "@/modules/auth/components/MyFormFieldset";
import { MyFormField } from "@/ui/MyFormField";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormShema } from "@/modules/auth/types/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyFormActionPanel } from "@/modules/auth/components/MyFormActionPanel";
import AuthService from "@/modules/auth/services/authService";
import { UseToaster } from "@/hooks/useToaster";
import { UseError } from "@/hooks/useError";
import { UseRequest } from "@/hooks/useRequest";
import { ResponseUserDTO } from "@/modules/auth/types/ResponseUserDTO";
import { AuthRequestType } from "@/modules/auth/types/AuthServiceType";

export function MyAuthorizationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormShema>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(FormShema),
    defaultValues: {
      email: "nestercukmisa65@gmail.com",
      password: "Bibibk1",
    },
  });

  const { fetchFunction, isLoading } = UseRequest<void, AuthRequestType>({
    request: AuthService.authorization,
    successText: "на почту было отправлено сообщение",
  });

  const onSubmit: SubmitHandler<FormShema> = (data) => {
    fetchFunction(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MyFormFieldset title={"Authorization"}>
        <MyFormField
          register={register("email")}
          label={"email"}
          type={"text"}
          isRequired={true}
          placeholder={"exemple@gmail.com"}
          errorText={errors?.email?.message}
        />
        <MyFormField
          register={register("password")}
          label={"password"}
          type={"text"}
          isRequired={true}
          placeholder={"MySuperPassword1"}
          errorText={errors?.password?.message}
        />
        <MyFormActionPanel isLoading={isLoading} />
      </MyFormFieldset>
    </form>
  );
}
