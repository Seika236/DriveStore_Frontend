import { MyDialog } from "@/components/MyDialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyFormField } from "@/ui/MyFormField";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";
import { CreatePostFormSchema } from "@/modules/userPost/types/CreatePostFormSchema";
import { MyTextArea } from "@/ui/MyTextArea";
import { MyInputContainer } from "@/components/MyInputContainer";
import { Box, Flex } from "@chakra-ui/react";
import { MyCreatePostActionButtons } from "@/modules/userPost/components/MyDialogActionButtons";
import { MySurveyContainer } from "@/modules/userPost/components/MySurveyContainer";
import { useState } from "react";
import { UseFiles } from "@/modules/userPost/hooks/useFiles";
import PostService from "@/modules/userPost/service/postService";
import { UseRequest } from "@/hooks/useRequest";
import { authStore } from "@/store/authStore";
import { createFormData } from "../../../../lib/createFormData";
import { CreateSurveyType } from "@/modules/userPost/types/CreateSurveyType";
import { MyCreatePostTransportSelect } from "@/modules/userPost/UI/MyCreatePostTransportSelect";
import { MyCreatePostHeaderSelect } from "@/modules/userPost/UI/MyCreatePostHeaderSelect";
import { MyCreatePostIsPublicSelect } from "@/modules/userPost/UI/MyCreatePostIsPublicSelect";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyCreatePostDialog({ isVisible, onOpenChange }: Props) {
  const { setFileHandler, imageFiles } = UseFiles();
  const { user } = authStore();
  const [survey, setSurvey] = useState<CreateSurveyType>({
    title: "",
    questions: [],
  });
  const [isVisibleSurvey, setIsVisibleSurvey] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CreatePostFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(CreatePostFormSchema),
  });

  const { fetchFunction, isLoading } = UseRequest<any, FormData>({
    request: PostService.createPost,
    successText: "пост был опубликована!",
    successCb: () => {
      reset();
      setSurvey({
        title: "",
        questions: [],
      });
      setFileHandler([]);
    },
  });

  const onSubmit: SubmitHandler<CreatePostFormSchema> = (data) => {
    const formData = createFormData(
      {
        ...data,
        profileId: user.profile.id,
        survey: survey,
      },
      imageFiles,
    );

    fetchFunction(formData);
  };

  const onSurveyButtonClick = () => {
    setIsVisibleSurvey(true);
  };

  const onTrashButtonClick = () => {
    setIsVisibleSurvey(false);
    setSurvey({
      title: "",
      questions: [],
    });
  };

  return (
    <Box>
      <MyDialog
        title={"Создать пост"}
        isVisible={isVisible}
        onOpenChange={onOpenChange}
        size={"lg"}
        isEnabledFooter={true}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <MyModalFieldsContainer style={{ mb: "15px" }}>
            <MyInputContainer>
              <>
                <MyCreatePostTransportSelect
                  errorText={errors?.transport?.message}
                  register={register("transport")}
                />
                <MyCreatePostHeaderSelect
                  errorText={errors?.header?.message}
                  register={register("header")}
                />
                <MyCreatePostIsPublicSelect
                  errorText={errors?.isPublic?.message}
                  register={register("isPublic")}
                />
              </>
            </MyInputContainer>
            <MyFormField
              isVisibleLabel={false}
              label={"post title"}
              type={"text"}
              register={register("title")}
              errorText={errors?.title?.message}
              isRequired={true}
              placeholder={"Заголовок"}
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
              placeholder={"Что нового?"}
              styles={{
                minHeight: "150px",
              }}
            />
          </MyModalFieldsContainer>
          <Flex alignItems={"end"} justifyContent={"end"} justifyItems={"end"}>
            <Flex maxW={"350px"} mr={"auto"}>
              <MyCreatePostActionButtons
                title={"Фото"}
                onSurveyButtonClick={onSurveyButtonClick}
                isVisibleSurveyButton={!isVisibleSurvey}
                setFiles={setFileHandler}
              />
            </Flex>
            <MyModalFooterButtonsContainer
              onOpenChange={onOpenChange}
              isLoading={isLoading}
            />
          </Flex>
          <MySurveyContainer
            survey={survey}
            setSurvey={setSurvey}
            isVisible={isVisibleSurvey}
            onTrashButtonClick={onTrashButtonClick}
          />
        </form>
      </MyDialog>
    </Box>
  );
}
