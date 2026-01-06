import { IQestion } from "./IQestion";

export interface ISurvey {
  id: number;
  title: string;
  total: number;
  questions: IQestion[];
}
