import Link from "next/link";
import { BRAND_PROOF } from "@/lib/brand";

/** Explicit network humility — judges should not assume mainnet receipts. */
export function ScopeHonesty({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="scope-honesty scope-honesty-compact meta" aria-label="Network scope">
        <span className="badge warn">Testnet</span> {BRAND_PROOF}
      </p>
    );
  }
  return (
    <aside className="scope-honesty" aria-label="Network scope">
      <p className="chapter-kicker">Proof scope</p>
      <p>
        <span className="badge warn">Testnet specimen</span> {BRAND_PROOF}
      </p>
      <p className="meta" style={{ marginTop: "0.45rem" }}>
        Filmed explorer refuses live under FastNear. Seat-cut lease and Intents paths are labeled
        Preview / dry unless a row says otherwise.
      </p>
      <Link className="pin-link" href="/verify">
        Open proof matrix →
      </Link>
    </aside>
  );
}
