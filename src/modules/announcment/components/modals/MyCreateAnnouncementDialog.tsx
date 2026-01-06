"use client";

import { MyDialog } from "@/components/MyDialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyFormField } from "@/ui/MyFormField";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";
import { MyTextArea } from "@/ui/MyTextArea";
import { MyInputContainer } from "@/components/MyInputContainer";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { UseFiles } from "@/modules/userPost/hooks/useFiles";
import { UseRequest } from "@/hooks/useRequest";
import { authStore } from "@/store/authStore";
import { CreateListingFormSchema } from "@/modules/announcment/types/CreateListingFormSchema";
import { MyListingTypesSelect } from "@/modules/announcment/UI/MyListingTypesSelect";
import { MyListingBrandsSelect } from "@/modules/announcment/UI/MyListingBrandsSelect";
import { MyCreateListingActionButtons } from "@/modules/announcment/components/MyCreateListingActionButtons";
import { MyPropertyContainer } from "@/modules/announcment/components/MyPropertyContainer";
import { CreatePropertyType } from "@/modules/announcment/types/CreatePropetyType";
import { createFormData } from "../../../../lib/createFormData";
import AnnouncementService from "@/modules/announcment/services/announcementService";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
  activeTab: string;
};

export function MyCreateAnnouncementDialog({
  isVisible,
  onOpenChange,
  activeTab,
}: Props) {
  const { setFileHandler, imageFiles } = UseFiles();
  const { user } = authStore();
  const [properties, setProperties] = useState<CreatePropertyType[]>([]);
  const [isVisibleProperties, setIsVisibleProperties] =
    useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateListingFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(CreateListingFormSchema),
  });

  const { fetchFunction, isLoading } = UseRequest<any, FormData>({
    request: AnnouncementService.createAnnouncement,
    successText: "пост был опубликована!",
  });

  const onSubmit: SubmitHandler<CreateListingFormSchema> = (data) => {
    const formData = createFormData(
      {
        ...data,
        userId: user.id,
        category: activeTab,
        properties,
      },
      imageFiles,
    );
    fetchFunction(formData);
  };

  const onSurveyButtonClick = () => {
    setIsVisibleProperties(true);
  };

  const onTrashButtonClick = () => {
    setIsVisibleProperties(false);
  };

  return (
    <Box>
      <MyDialog
        title={"Разместить объявление"}
        isVisible={isVisible}
        onOpenChange={onOpenChange}
        size={"lg"}
        isEnabledFooter={true}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <MyModalFieldsContainer style={{ mb: "15px" }}>
            <MyInputContainer>
              <>
                <MyListingTypesSelect
                  register={register("type")}
                  activeTab={activeTab}
                />
                <MyListingBrandsSelect register={register("brand")} />
              </>
            </MyInputContainer>
            <MyFormField
              isVisibleLabel={false}
              label={"listing name"}
              type={"text"}
              register={register("name")}
              errorText={errors?.name?.message}
              isRequired={true}
              placeholder={"Название машины"}
              styles={{
                _placeholder: { fontSize: "2xl" },
                height: "45px",
                fontSize: "2xl",
              }}
            />
            <MyTextArea
              isVisibleLabel={false}
              label={"post description"}
              register={register("description")}
              errorText={errors?.description?.message}
              isRequired={true}
              isAutosize={true}
              placeholder={"Комментарий"}
              styles={{
                minHeight: "150px",
              }}
            />
            <Flex columnGap={3}>
              <MyFormField
                isVisibleLabel={false}
                label={"user telephone"}
                type={"tel"}
                register={register("telephone")}
                errorText={errors?.telephone?.message}
                isRequired={true}
                placeholder={"Телефон"}
              />
              <MyFormField
                isVisibleLabel={false}
                label={"city"}
                type={"text"}
                register={register("city")}
                errorText={errors?.city?.message}
                isRequired={true}
                placeholder={"Город"}
              />
              <MyFormField
                isVisibleLabel={false}
                label={"price"}
                type={"text"}
                register={register("price")}
                errorText={errors?.price?.message}
                isRequired={true}
                placeholder={"10000 руб"}
              />
            </Flex>
          </MyModalFieldsContainer>
          <Flex alignItems={"end"} justifyContent={"end"} justifyItems={"end"}>
            <Flex maxW={"350px"} mr={"auto"}>
              <MyCreateListingActionButtons
                title={"Фото"}
                onPropertyButtonClick={onSurveyButtonClick}
                isVisiblePropertyButton={!isVisibleProperties}
                setFiles={setFileHandler}
              />
            </Flex>
            <MyModalFooterButtonsContainer
              onOpenChange={onOpenChange}
              isLoading={isLoading}
            />
          </Flex>
          <MyPropertyContainer
            properties={properties}
            setProperties={setProperties}
            isVisible={isVisibleProperties}
            onTrashButtonClick={onTrashButtonClick}
          />
        </form>
      </MyDialog>
    </Box>
  );
}
