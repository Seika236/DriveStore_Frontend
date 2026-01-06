export interface SetListingViewRequest {
  readonly userId: number;
  readonly listingId: number;
}

export interface AddFavoriteRequest {
  readonly userId: number;
  readonly listingId: number;
}

export interface CreateRoomRequest {
  readonly buyerId: number;
  readonly listingId: number;
}
