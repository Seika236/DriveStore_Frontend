export interface ChangeUserDto {
  id: number;
  email: string;
  nickname: string;
  name: string;
  city: string;
  age: string;
  about?: string;
}
