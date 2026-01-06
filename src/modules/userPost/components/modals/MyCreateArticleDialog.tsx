import { MyDialog } from "@/components/MyDialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyFormField } from "@/ui/MyFormField";
import { MyModalFieldsContainer } from "@/ui/MyModalFieldsContainer";
import { MyModalFooterButtonsContainer } from "@/components/MyModalFooterButtonsContainer";
import { MyTextArea } from "@/ui/MyTextArea";
import { MyInputContainer } from "@/components/MyInputContainer";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { MyCreatePostActionButtons } from "@/modules/userPost/components/MyDialogActionButtons";
import { CreateArticleFormSchema } from "@/modules/userPost/types/CreateArticleFormSchema";
import { UseFiles } from "@/modules/userPost/hooks/useFiles";
import { createFormData } from "../../../../lib/createFormData";
import { UseRequest } from "@/hooks/useRequest";
import ArticleService from "@/modules/userPost/service/articleService";
import { authStore } from "@/store/authStore";
import { MyCreatePostTransportSelect } from "@/modules/userPost/UI/MyCreatePostTransportSelect";
import { MyCreatePostHeaderSelect } from "@/modules/userPost/UI/MyCreatePostHeaderSelect";
import { MyCreatePostIsPublicSelect } from "@/modules/userPost/UI/MyCreatePostIsPublicSelect";

type Props = {
  isVisible: boolean;
  onOpenChange: () => void;
};

export function MyCreateArticleDialog({ isVisible, onOpenChange }: Props) {
  const { user } = authStore();
  const { setFileHandler, imageFiles } = UseFiles();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CreateArticleFormSchema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(CreateArticleFormSchema),
  });

  const { fetchFunction, isLoading } = UseRequest<any, FormData>({
    request: ArticleService.createArticle,
    successText: "статья была опубликована!",
    successCb: () => {
      reset();
      setFileHandler([]);
    },
  });

  const onSubmit: SubmitHandler<CreateArticleFormSchema> = (data) => {
    const formData = createFormData(
      { ...data, profileId: user.profile.id },
      imageFiles,
    );
    fetchFunction(formData);
  };

  return (
    <Box>
      <MyDialog
        title={"Создать статью"}
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
            <Grid gridTemplateColumns={"repeat(2, 1fr)"} columnGap={"5px"}>
              <GridItem colSpan={1}>
                <MyFormField
                  isVisibleLabel={false}
                  label={"пробег, км"}
                  type={"text"}
                  register={register("mileage")}
                  errorText={errors?.mileage?.message}
                  isRequired={false}
                  placeholder={"пробег, км"}
                />
              </GridItem>
              <GridItem colSpan={1}>
                <MyFormField
                  isVisibleLabel={false}
                  label={"потрачено, руб"}
                  type={"text"}
                  register={register("spent")}
                  errorText={errors?.spent?.message}
                  isRequired={false}
                  placeholder={"потрачено, руб"}
                />
              </GridItem>
            </Grid>
          </MyModalFieldsContainer>
          <Flex alignItems={"end"} justifyContent={"end"} justifyItems={"end"}>
            <Flex maxW={"350px"} mr={"auto"}>
              <MyCreatePostActionButtons
                title={"Фото"}
                onSurveyButtonClick={() => {}}
                isVisibleSurveyButton={false}
                setFiles={setFileHandler}
              />
            </Flex>
            <MyModalFooterButtonsContainer
              onOpenChange={onOpenChange}
              isLoading={isLoading}
            />
          </Flex>
        </form>
      </MyDialog>
    </Box>
  );
}
