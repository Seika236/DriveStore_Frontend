import { IProfile } from "./IProfile";
import { IAddress } from "./IAddress";

export interface IUser {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  nickname: string;
  isActive: boolean;
  age: number | null;
  about: string | null;
  role: IRole[];
  profile: IProfile;
  address: IAddress;
}
