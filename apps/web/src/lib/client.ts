/**
 * App-bound CleanDeed client from Next public env.
 * Falls back to SPECIMEN_TESTNET_CONTRACT only so SSR can prerender.
 */

import { CleanDeedClient, SPECIMEN_TESTNET_CONTRACT } from "@/sdk";

let cached: CleanDeedClient | null = null;

export function getCleanDeedClient(): CleanDeedClient {
  if (cached) return cached;
  const contractId =
    process.env.NEXT_PUBLIC_CONTRACT_ID?.trim() ||
    process.env.CLEANDEED_CONTRACT_ID?.trim() ||
    process.env.QUITCLAIM_CONTRACT_ID?.trim() ||
    SPECIMEN_TESTNET_CONTRACT;
  const network = (process.env.NEXT_PUBLIC_NEAR_NETWORK ??
    process.env.CLEANDEED_NETWORK ??
    process.env.QUITCLAIM_NETWORK ??
    "testnet") as "testnet" | "mainnet" | "local";
  cached = new CleanDeedClient({
    contractId,
    network,
    clubId:
      process.env.NEXT_PUBLIC_CLUB_ID ||
      process.env.CLEANDEED_CLUB_ID ||
      process.env.QUITCLAIM_CLUB_ID,
    rpcUrl:
      process.env.NEXT_PUBLIC_NEAR_RPC ||
      process.env.CLEANDEED_RPC ||
      process.env.QUITCLAIM_RPC,
  });
  return cached;
}

export function clubIdFromEnv(): string | undefined {
  return process.env.NEXT_PUBLIC_CLUB_ID || process.env.CLEANDEED_CLUB_ID || process.env.QUITCLAIM_CLUB_ID || undefined;
}
