import { IListing } from "../../../types/models/IListing";

export interface GetAllAnnouncementsWithoutUserIdRequest {
  id: number;
  userId: number;
  listingId: number;
  listing: IListing;
  assignedAt: string;
}
