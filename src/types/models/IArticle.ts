import { ITransport } from "./ITransport";

export interface IArticle {
  id: number;
  profileId: number;
  title: string;
  type: "article";
  description: string;
  totalLikes: number;
  totalViews: number;
  createdAt: string;
  transportId: number;
  transport: ITransport;
  headerId: number;
  isPublic: number;
  mileage: null | number;
  spent: null | number;
}
