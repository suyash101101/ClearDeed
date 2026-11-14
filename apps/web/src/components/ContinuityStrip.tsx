"use client";

import type { Seat } from "@/sdk/types";

/** Tip path continuity after sale — derive/preview, not live MPC spend. */
export function ContinuityStrip({ seat }: { seat: Seat }) {
  const hops = seat.holderHistory.length;
  const flips = Math.max(0, hops - 1);
  return (
    <aside className="continuity-strip" aria-label="Continuity across sales">
      <p className="chapter-kicker">Continuity · derive / preview</p>
      <div className="continuity-strip-grid">
        <div className="tip-cell">
          <span className="meta">BTC tip · derive</span>
          <strong className="mono tip-addr" title={seat.btcAddress}>
            {seat.btcAddress}
          </strong>
        </div>
        <div className="tip-cell">
          <span className="meta">SOL tip · derive</span>
          <strong className="mono tip-addr" title={seat.solAddress}>
            {seat.solAddress}
          </strong>
        </div>
        <div className="tip-cell">
          <span className="meta">Hash</span>
          <strong className="mono tip-addr" title={seat.continuityHash}>
            {seat.continuityHash}
          </strong>
        </div>
        <div className="tip-cell">
          <span className="meta">Holders</span>
          <strong>{hops}</strong>
        </div>
      </div>
      <p className="meta">
        {`Control flipped ${flips} ${flips === 1 ? "time" : "times"}. Derive tip paths stayed put. MPC spend = roadmap.`}
      </p>
    </aside>
  );
}
