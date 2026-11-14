# Evidence map

| Claim | Test | Runner |
| --- | --- | --- |
| Ticket BPS split | `ticket_splits_treasury_and_seats` | `pnpm test:unit` + Rust |
| 0 access keys | `keys_empty_after_mint` | SDK + Rust |
| Mid-payout rebound | `sale_mid_payout_rebinds_pending` | SDK + Rust + Lab |
| Held-sig refuse | `held_sig_refused_while_listed` | SDK + Rust + Lab |
| Old owner blocked | `old_owner_withdraw_fails_after_sale` | SDK + Rust + Lab |
| Stale nonce buy | `lab_stale_nonce_buy_expected_fail` | SDK + Lab (Preview) |
| Wash-gated buy | `lab_wash_buy_expected_fail` | SDK + Lab (Preview) |
| Diligence CLEAN | `diligence_clean_when_healthy` | SDK + Rust + UI |
| Buy gate CLEAN\|FIX | `assertCleanToBuy` | SDK policy |
| Sign-epoch on list | `list_bumps_sign_epoch` | SDK + Rust |
| Tip continuity | `continuity_hash_stable` | SDK + TipContinuity UI (derive) |
| Seat-cut lease | `lease_blocks_list_until_settle` | SDK engine · Preview UI |
| Two venues | live `list_clubs` | `pnpm heist:live` |

## Filmed testnet hashes

See `apps/web/src/lib/evidence.ts` (`ONCHAIN` + `LAB_ATTACKS`).

- **6 filmed** unique explorer hashes (do not inflate this count).
- **2 Preview** skeptic rows: stale nonce buy, wash-gated buy — re-run via Lab buttons or `pnpm heist` / unit tests.

Re-check without a wallet:

```bash
pnpm heist:live
# or
pnpm heist   # SDK story then live hash verify
```

## Specimen

- Contract: `cleartitle562464.testnet`
- Venues: `nearnight`, `dayfest`
- Deploy: `4b6s9LbkcLzyekzaoefCZz51BLACJSgrG8U2QHzuuAAw`
- Network: **testnet** — mainnet micro-cycle not filmed
