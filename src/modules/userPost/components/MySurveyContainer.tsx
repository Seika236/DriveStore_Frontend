import { Button, Flex, Grid, Heading, IconButton } from "@chakra-ui/react";
import { TrashIcon } from "@/assets/icons/trash-icon";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { MyInput } from "@/ui/MyInput";
import { AddPlusCircleIcon } from "@/assets/icons/add-plus-circle-icon";
import { CreateSurveyType } from "@/modules/userPost/types/CreateSurveyType";

type Props = {
  isVisible: boolean;
  onTrashButtonClick: () => void;
  survey: CreateSurveyType;
  setSurvey: Dispatch<SetStateAction<CreateSurveyType>>;
};

export function MySurveyContainer({
  isVisible,
  onTrashButtonClick,
  survey,
  setSurvey,
}: Props) {
  const onChangeSurveyHeader = (event: ChangeEvent<HTMLInputElement>) => {
    setSurvey({ ...survey, title: event.target.value });
  };

  const onChangeSurveyTitle = (
    event: ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    setSurvey((prevState) => ({
      ...prevState,
      questions: prevState.questions.map((question) => {
        if (question.id === id) {
          return { ...question, title: event.target.value };
        }
        return question;
      }),
    }));
  };

  const onDeleteQuestionItem = (id: number) => {
    setSurvey({
      ...survey,
      questions: survey.questions.reduce((mass, item) => {
        item.id !== id
          ? mass.push({ id: mass.length + 1, title: item.title })
          : mass;
        return mass;
      }, []),
    });
  };

  const onAddQuestionItem = (survey: CreateSurveyType) => {
    const newQuestions = survey.questions;
    if (survey.questions.length === 0) {
      newQuestions.push({ title: "", id: 1 });
      return setSurvey({ ...survey, questions: newQuestions });
    }
    const lastQuestion = survey.questions.at(-1);
    newQuestions.push({ title: "", id: lastQuestion.id + 1 });
    return setSurvey({ ...survey, questions: newQuestions });
  };

  return (
    isVisible && (
      <Grid rowGap={"10px"} mt={"20px"}>
        <Flex justifyContent={"space-between"}>
          <Heading>Опрос</Heading>
          <IconButton
            onClick={onTrashButtonClick}
            aria-label="Search database"
            variant="outline"
            size={"sm"}
          >
            <TrashIcon />
          </IconButton>
        </Flex>
        <Grid rowGap={"15px"}>
          <MyInput
            type={"text"}
            onChange={onChangeSurveyHeader}
            label={"Ваш вопрос"}
            placeholder={"Ваш вопрос"}
            isVisibleLabel={false}
          />
          {survey.questions.map((question) => {
            return (
              <Flex key={question.id} columnGap={"10px"} alignItems={"center"}>
                <IconButton
                  variant={"ghost"}
                  onClick={() => onDeleteQuestionItem(question.id)}
                  color={"red.600"}
                >
                  <TrashIcon />
                </IconButton>
                <MyInput
                  type={"text"}
                  onChange={(event) => onChangeSurveyTitle(event, question.id)}
                  label={`Вариант ${question.id}`}
                  placeholder={`Вариант ${question.id}`}
                />
              </Flex>
            );
          })}
          <Button
            type={"button"}
            variant={"outline"}
            colorPalette={"orange"}
            onClick={() => onAddQuestionItem(survey)}
          >
            <AddPlusCircleIcon /> Добавить ещё
          </Button>
        </Grid>
      </Grid>
    )
  );
}
