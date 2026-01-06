import { useQuery } from "@tanstack/react-query";
import QuestionService from "@/modules/userProfileContent/services/questionService";
import { authStore } from "@/store/authStore";
import { ISurvey } from "../../../types/models/ISurvey";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import { IUserQuestion } from "../../../types/models/IUserQuestion";
import { ChoiceQuestion } from "@/modules/userProfileContent/types/ApiRequestTypes";

type Props = {
  survey: ISurvey;
  surveyRefetch: () => void;
};

export function UseQuestionList({ survey, surveyRefetch }: Props) {
  const { user } = authStore();

  const { data, refetch } = useQuery({
    queryKey: [`fetch:check/profile/question/${survey.title}`],
    queryFn: () =>
      QuestionService.getUserQuestion({
        userId: user.id,
        questionSurveyId: survey.id,
      }),
    select: (data) => data.data,
  });

  const { fetchFunction, isLoading } = UseRequest<
    AxiosResponse<IUserQuestion>,
    ChoiceQuestion
  >({
    request: QuestionService.choiseQuestion,
    successCb: () => {
      refetch();
      surveyRefetch();
    },
    successText: "спасибо за ваш голос!",
  });

  const onQuestionClick = (questionId: number, questionName: string) => {
    fetchFunction({
      userId: user.id,
      questionSurveyId: questionId,
      questionName: questionName,
    });
  };

  return {
    onQuestionClick,
    isLoading,
    data,
  };
}
