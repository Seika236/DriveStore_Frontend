export interface IRoom {
  readonly id: number;
  readonly sellerId: number;
  readonly buyerId: number;
  readonly listingId: number;
  readonly createdAt: Date;
}
