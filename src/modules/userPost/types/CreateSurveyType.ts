import { CreateQuestionType } from "@/modules/userPost/types/CreateQuestionType";

export interface CreateSurveyType {
  questions: CreateQuestionType[];
  title: string;
}
