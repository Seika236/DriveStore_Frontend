"use client";

import { MyFormFieldset } from "@/modules/auth/components/MyFormFieldset";
import { MyFormField } from "@/ui/MyFormField";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormShema } from "@/modules/auth/types/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyFormActionPanel } from "@/modules/auth/components/MyFormActionPanel";
import { useState } from "react";
import AuthService from "@/modules/auth/services/authService";
import { UseToaster } from "@/hooks/useToaster";
import { authStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { UseError } from "@/hooks/useError";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import { ResponseUserDTO } from "@/modules/auth/types/ResponseUserDTO";
import { AuthRequestType } from "@/modules/auth/types/AuthServiceType";

export function MyLoginForm() {
  const { setUser, setIsAuth } = authStore((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormShema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(FormShema),
    defaultValues: {
      email: "nestercukmisadf@gmail.com",
      password: "Bibibk1",
    },
  });
  const router = useRouter();
  const { fetchFunction, isLoading } = UseRequest<
    AxiosResponse<ResponseUserDTO>,
    AuthRequestType
  >({
    request: AuthService.login,
    successCb: (data) => {
      router.replace("/");
      setIsAuth(true);
      setUser(data.data);
    },
    successText: "добро пожаловать!",
  });

  const onSubmit: SubmitHandler<FormShema> = (data) => {
    fetchFunction(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MyFormFieldset title={"Login"}>
        <MyFormField
          register={register("email")}
          label={"email"}
          type={"text"}
          placeholder={"exemple@gmail.com"}
          isRequired={true}
          errorText={errors?.email?.message}
        />
        <MyFormField
          register={register("password")}
          label={"password"}
          type={"text"}
          placeholder={"MySuperPassword1"}
          isRequired={true}
          errorText={errors?.password?.message}
        />
        <MyFormActionPanel isLoading={isLoading} />
      </MyFormFieldset>
    </form>
  );
}
