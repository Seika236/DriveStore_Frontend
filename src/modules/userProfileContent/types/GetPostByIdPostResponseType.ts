import { ITransport } from "../../../types/models/ITransport";
import { IHeader } from "../../../types/models/IHeader";
import { IImage } from "../../../types/models/IImage";
import { ISurvey } from "../../../types/models/ISurvey";

export interface GetPostByIdPostResponseType {
  createdAt: string;
  description: string;
  header: IHeader;
  totalViews: number;
  totalLikes: number;
  headerId: 1;
  id: 1;
  isPublic: true;
  postsImages: IImage[];
  profile: {
    id: number;
    profileImg: string;
    user: { name: string };
    userId: number;
  };
  profileId: 1;
  survey: ISurvey;
  surveyId: 1;
  title: string;
  transport: ITransport;
  transportId: 1;
}
