/** Typed RPC views bound to NEXT_PUBLIC_CONTRACT_ID via CleanDeedClient. */

import { getCleanDeedClient, clubIdFromEnv } from "@/lib/client";
import type {
  ChainClubView as ChainClub,
  ChainDiligenceView as ChainDiligence,
  ChainSeatView as ChainSeat,
} from "@/sdk";

export type { ChainClub, ChainDiligence, ChainSeat };

export function seatBuyNonce(seat: ChainSeat): number {
  return getCleanDeedClient().buyNonce(seat);
}

export function viewClub(clubId?: string) {
  return getCleanDeedClient().getClub(clubId ?? clubIdFromEnv());
}

export function viewSeat(tokenId: string, clubId?: string) {
  return getCleanDeedClient().getSeat(tokenId, clubId ?? clubIdFromEnv());
}

export function viewDiligence(tokenId: string, clubId?: string) {
  return getCleanDeedClient().diligence(tokenId, clubId ?? clubIdFromEnv());
}

export function viewSeats(clubId?: string) {
  return getCleanDeedClient().listSeats(clubId ?? clubIdFromEnv());
}

export function viewClubIds() {
  return getCleanDeedClient().listClubs();
}
