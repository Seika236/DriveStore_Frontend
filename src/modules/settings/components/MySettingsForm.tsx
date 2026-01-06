"use client";

import { Button, FileUpload, Grid, GridItem } from "@chakra-ui/react";
import { UpdateProfileImageComponent } from "@/modules/settings/components/UpdateProfileImageComponent";
import { SubmitHandler, useForm } from "react-hook-form";
import { SettingsFormSchema } from "@/modules/settings/types/SettingsFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyFormField } from "@/ui/MyFormField";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import { MyTextArea } from "@/ui/MyTextArea";
import { authStore } from "@/store/authStore";
import { UseFiles } from "@/modules/userPost/hooks/useFiles";
import userService from "@/modules/settings/services/userService";
import { ChangeUserDto } from "@/modules/settings/types/ChangeUserDto";
import { IUser } from "../../../types/models/IUser";
import profileService from "@/modules/settings/services/profileService";
import { IProfile } from "../../../types/models/IProfile";
import { useCallback } from "react";
import { getPreviewImage } from "../../../lib/getPreviewImage";
import globalUserService from "@/services/globalUserService";
import { UseDefaultSettingsFormValue } from "@/modules/settings/hooks/useDefaultSettingsFormValue";
import { ResponseUserDTO } from "@/modules/auth/types/ResponseUserDTO";
import { AuthService } from "@/modules/auth";

export function MySettingsForm() {
  const { user, setUser } = authStore();
  const { setFileHandler, imageFiles } = UseFiles();
  const { fetchFunction } = UseRequest<AxiosResponse<ResponseUserDTO>, void>({
    request: AuthService.checkAuth,
    successCb: (data) => {
      setUser(data.data);
    },
    successText: "данные о пользователе были успешно применены",
  });
  const { defaultValues } = UseDefaultSettingsFormValue();

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<SettingsFormSchema>({
    defaultValues,
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(SettingsFormSchema),
  });

  const { isLoading: isChangeUserLoading, fetchFunction: fetchChangeUser } =
    UseRequest<AxiosResponse<IUser>, ChangeUserDto>({
      request: userService.changeUser,
      successCb: () => {
        fetchFunction();
      },
    });

  const { isLoading: isDeleteUserLoading, fetchFunction: fetchDeleteUser } =
    UseRequest<AxiosResponse<void>, string>({
      request: globalUserService.deleteUser,
      successText: "user был успешно удалён",
    });

  const {
    isLoading: isChangeProfileLoading,
    fetchFunction: fetchSetProfileImg,
  } = UseRequest<AxiosResponse<IProfile>, FormData>({
    request: profileService.setProfileImg,
    successCb: () => {
      fetchFunction();
    },
  });

  const setProfileImg = useCallback(() => {
    const formData = new FormData();
    formData.append("id", `${user.profile.id}`);
    formData.append("image", imageFiles[0]);
    fetchSetProfileImg(formData);
  }, [imageFiles]);

  const onSubmit: SubmitHandler<SettingsFormSchema> = (data) => {
    fetchChangeUser({ ...data, id: user.id });
  };

  const onResetPreviewImage = () => {
    setFileHandler([]);
  };

  const onDeleteAcount = () => {
    if (confirm("вы действительно хотите удалить аккаунт?")) {
      fetchDeleteUser(String(user.id));
    }
  };

  return (
    <Grid
      gridTemplateColumns={{
        base: "none",
        md: "repeat(8, 1fr)",
        lg: "repeat(5, 1fr)",
      }}
      maxW={800}
      mx={"auto"}
      mt={10}
      bg={{ base: "white", _dark: "gray.900" }}
      borderWidth="1px"
      borderColor={{ base: "gray.200", _dark: "gray.800" }}
      boxShadow={{ base: "sm", _dark: "none" }}
      columnGap={5}
      padding={8}
      rounded={6}
      _hover={{
        outline: "1px solid",
        outlineColor: { base: "orange.500", _dark: "white" },
      }}
    >
      <GridItem colSpan={{ base: -1, md: 4, lg: 2 }}>
        <FileUpload.Root>
          <UpdateProfileImageComponent
            previewImage={getPreviewImage(
              imageFiles?.[0],
              user?.profile?.profileImg,
            )}
            isPreviewImage={!!imageFiles?.[0]}
            setFiles={setFileHandler}
            resetFile={onResetPreviewImage}
            setProfileImg={setProfileImg}
          />
        </FileUpload.Root>
      </GridItem>
      <GridItem colSpan={{ md: 4, lg: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid rowGap={"10px"}>
            <MyFormField
              isVisibleLabel={true}
              isDisabled={true}
              errorText={errors?.email?.message}
              label={"Электронная почта"}
              type={"text"}
              register={register("email")}
            />
            <MyFormField
              isVisibleLabel={true}
              label={"Ник"}
              errorText={errors?.nickname?.message}
              type={"text"}
              register={register("nickname")}
            />
            <MyFormField
              isVisibleLabel={true}
              label={"Имя"}
              errorText={errors?.name?.message}
              type={"text"}
              register={register("name")}
            />
            <MyFormField
              isVisibleLabel={true}
              errorText={errors?.city?.message}
              label={"Город"}
              type={"text"}
              register={register("city")}
            />
            <MyFormField
              isVisibleLabel={true}
              label={"Дата рождения"}
              errorText={errors?.age?.message}
              type={"date"}
              register={register("age")}
            />
            <MyTextArea
              register={register("about")}
              errorText={errors?.about?.message}
              isAutosize={true}
              styles={{
                minHeight: "150px",
              }}
              placeholder={"О себе"}
              label={"О себе"}
            />
            <Button
              type={"submit"}
              variant={"outline"}
              disabled={
                isChangeUserLoading ||
                isChangeProfileLoading ||
                isDeleteUserLoading ||
                !Object.values(dirtyFields).length
              }
              colorPalette={"orange"}
            >
              Сохранить
            </Button>
            <Button
              onClick={onDeleteAcount}
              type={"button"}
              variant={"solid"}
              colorPalette={"red"}
            >
              Удалить аккаунт
            </Button>
          </Grid>
        </form>
      </GridItem>
    </Grid>
  );
}
