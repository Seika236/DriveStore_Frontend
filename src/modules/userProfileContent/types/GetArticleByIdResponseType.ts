import { ITransport } from "../../../types/models/ITransport";
import { IHeader } from "../../../types/models/IHeader";
import { IImage } from "../../../types/models/IImage";
import { ISurvey } from "../../../types/models/ISurvey";

export interface GetArticleByIdResponseType {
  createdAt: string;
  description: string;
  header: IHeader;
  totalViews: number;
  totalLikes: number;
  headerId: 1;
  id: 1;
  isPublic: true;
  articlesImages: IImage[];
  profile: {
    id: number;
    profileImg: string;
    user: { name: string };
    userId: number;
  };
  spent: number;
  mileage: number;
  profileId: 1;
  surveyId: 1;
  title: string;
  transport: ITransport;
  transportId: 1;
}
