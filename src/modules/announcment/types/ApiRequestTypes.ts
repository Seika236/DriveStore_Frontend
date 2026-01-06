import { CreateListingRequest } from "@/modules/listing";

export interface CreateAnnouncementRequest {
  userId: string;
  createListingDto: CreateListingRequest;
}

export interface DeleteAnnouncementRequest {
  userId: number;
  listingId: number;
}
