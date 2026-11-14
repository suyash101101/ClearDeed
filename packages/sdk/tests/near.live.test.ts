import { describe, expect, it } from "vitest";
import { CleanDeedClient, SPECIMEN_TESTNET_CONTRACT, seatBuyNonce } from "../src/index";

const live = process.env.QUITCLAIM_LIVE_RPC === "1";
const contractId = process.env.QUITCLAIM_CONTRACT_ID ?? SPECIMEN_TESTNET_CONTRACT;

describe.runIf(live)("live RPC (QUITCLAIM_LIVE_RPC=1)", () => {
  it("reads club, seats, diligence via CleanDeedClient", async () => {
    const client = new CleanDeedClient({ contractId, network: "testnet" });
    const club = await client.getClub();
    expect(club?.name || club?.club_id).toBeTruthy();
    const seats = await client.listSeats().catch(async () => {
      // Pre-list_seats deployments
      const s = await client.getSeat("3");
      return [s];
    });
    expect(seats.length).toBeGreaterThan(0);
    const seat = seats[0]!;
    expect(seat.owner_id).toBeTruthy();
    expect(seat.access_key_count ?? 0).toBe(0);
    const dil = await client.diligence(seat.token_id);
    expect(["PROVABLY CLEAN", "FIX BEFORE BUY"]).toContain(dil.verdict);
    expect(typeof client.buyNonce(seat)).toBe("number");
  });
});

describe("near helpers offline", () => {
  it("seatBuyNonce prefers listing_nonce", () => {
    expect(seatBuyNonce({ token_id: "1", owner_id: "x", listing_nonce: 4, sync_nonce: 9 })).toBe(4);
    expect(seatBuyNonce({ token_id: "1", owner_id: "x", sync_nonce: 9 })).toBe(9);
    expect(seatBuyNonce({ token_id: "1", owner_id: "x" })).toBe(0);
  });

  it("CleanDeedClient requires contractId", () => {
    expect(() => new CleanDeedClient({ contractId: "" })).toThrow(/contractId/);
  });
});
