# Judges — CleanDeed

**One-liner:** Clubs run ticket ops. CleanDeed is the **title policy** any venue attaches.

**Submit name:** CleanDeed · track **`nfts` only**  
**Live:** https://quitclaim.vercel.app  
**Repo:** https://github.com/suyash101101/ClearDeed  
**Contract:** [`cleartitle562464.testnet`](https://explorer.testnet.near.org/accounts/cleartitle562464.testnet) · venues `nearnight` + `dayfest`  
**Scale:** https://quitclaim.vercel.app/scale  
**Network:** Testnet specimen. Mainnet micro-cycle not filmed yet.

## What to click (≤100s)

1. **Home** — brand + one sentence category lock → Seat #3 / Lab.
2. **Seat #3** — Preview Film ready → List @ 100 → CLEAN → Buy mid-payout → tip **derive** unchanged.
3. **Transfer Lab** — seller recall / held-sig (filmed) · stale nonce / wash buy (Preview).
4. **Explorer proof** — [old-owner withdraw refuse](https://testnet.nearblocks.io/txns/DdKFyCUWUiXS1JA9LQji43VBB2gBe6jxdPRvsxRuRRBp) (`withdraw refused: not current owner`).
5. **/verify** — filmed hashes · Preview rows labeled · promise → method → test map.
6. Optional: architecture stack diagram (no claims map).

Film VO order + screenshot drop: [`docs/demo-video/VOICEOVER_SCRIPT.md`](demo-video/VOICEOVER_SCRIPT.md) · [`docs/DEMO_SCRIPT.md`](DEMO_SCRIPT.md)

## Proof commands

```bash
pnpm test:unit
cd contracts/cleartitle && cargo test
pnpm heist          # SDK story + live hash re-check
pnpm heist:live     # explorer refuses only (no wallet)
pnpm evidence
pnpm test:e2e:smoke
```

## Honest scope (read this)

| Claim | Status |
| --- | --- |
| Mid-payout rebound + old-owner refuse | Filmed testnet |
| Held-sig / listed withdraw | Filmed testnet |
| Stale nonce buy / wash-gated buy | Preview + unit (`pnpm heist`) |
| Tip BTC/SOL continuity | **Derive / preview** — not live MPC spend |
| Seat-cut lease | **Preview + SDK** — not filmed on specimen |
| Intents ticket pay | **dry:true** only |
| Mainnet | Not filmed |

## Track

**`nfts` only** — title insurance for earning seat NFTs. Do not declare a second track.

## Why this wins the transfer threat

| Differentiator | What you see |
| --- | --- |
| Mid-payout rebound | Pending cut rebinds to buyer |
| Transfer Lab | Expected-fail explorer receipts + Preview skeptic rows |
| Diligence stamp | PROVABLY CLEAN before buy |
| Multi-venue | `list_clubs` → nearnight + dayfest |
| SDK | Same path in Vitest without the UI |
| Chain Signatures derive | Tip paths stable across sale (preview) |

Do not compare named rival projects. Score the threat model and receipts.
