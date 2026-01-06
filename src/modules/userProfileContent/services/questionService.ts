import {
  ChoiceQuestion,
  GetUserQuestionRequest,
} from "@/modules/userProfileContent/types/ApiRequestTypes";
import { $api } from "@/http/index";
import { constants } from "@/modules/userProfileContent/constants";
import { AxiosResponse } from "axios";
import { IUserQuestion } from "../../../types/models/IUserQuestion";

class QuestionService {
  async choiseQuestion(
    question: ChoiceQuestion,
  ): Promise<AxiosResponse<IUserQuestion>> {
    return await $api.post(constants.CHOICE_QUESTION_URL, question);
  }

  async getUserQuestion({
    userId,
    questionSurveyId,
  }: GetUserQuestionRequest): Promise<AxiosResponse<IUserQuestion>> {
    return await $api.get(
      constants.GET_USER_QUESTION_URL(userId, questionSurveyId),
    );
  }
}

export default new QuestionService();
