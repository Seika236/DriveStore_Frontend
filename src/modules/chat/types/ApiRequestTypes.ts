import { IListing } from "../../../types/models/IListing";

export interface getRoomsResponse {
  readonly id: number;
  readonly sellerId: number;
  readonly buyerId: number;
  readonly listingId: number;
  readonly createdAt: Date;
  readonly listing: IListing;
}
