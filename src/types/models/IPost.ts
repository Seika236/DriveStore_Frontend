import { ITransport } from "./ITransport";

export interface IPost {
  id: number;
  profileId: number;
  title: string;
  type: "post";
  createdAt: string;
  description: string;
  totalLikes: number;
  totalViews: number;
  transportId: number;
  transport: ITransport;
  headerId: number;
  isPublic: number;
  surveyId: number;
}
