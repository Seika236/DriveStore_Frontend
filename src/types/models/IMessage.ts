export interface IMessage {
  readonly id: number;
  readonly roomId: number;
  readonly message: string;
  readonly createdAt: Date;
  readonly authorId: number;
  readonly isViewed: boolean;
}
