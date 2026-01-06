import { IProfile } from "../../../types/models/IProfile";
import { IAddress } from "../../../types/models/IAddress";

interface RoleType {
  id: number;
  name: string;
}

export interface ResponseUserDTO {
  id: number;
  name: string;
  createdAt: Date;
  email: string;
  nickname: string;
  isActive: boolean;
  age: number;
  about: string | null;
  role: RoleType[];
  profile: IProfile;
  address: IAddress;
}
