"use client";

import Link from "next/link";
import { AttackTimeline } from "@/components/AttackTimeline";
import { DoubleSellStrip } from "@/components/DoubleSellStrip";
import { DynamicQrStrip } from "@/components/DynamicQrStrip";
import { JudgeStampPanel } from "@/components/JudgeStampPanel";
import { KeyZeroStrip } from "@/components/KeyZeroStrip";
import { OffChainRoyalty } from "@/components/OffChainRoyalty";
import { ResaleClearance } from "@/components/ResaleClearance";
import { ScopeHonesty } from "@/components/ScopeHonesty";
import { SessionBar } from "@/components/SessionBar";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { PageHeader } from "@/components/ui/page-header";
import { useApp } from "@/lib/store";
import { LAB_ATTACKS, LAB_FILMED_COUNT, ONCHAIN, txUrl } from "@/lib/evidence";
import { LayoutGrid, ShieldCheck, Ticket } from "lucide-react";

function proofForAttack(attack: string): string | null {
  if (attack.includes("old_owner")) return ONCHAIN.oldOwnerWithdrawRefuse;
  if (attack.includes("listed")) return ONCHAIN.listedWithdrawRefuse;
  if (attack.includes("held")) return ONCHAIN.heldSigRefuse;
  if (attack.includes("wash") || attack.includes("stale")) return null;
  return ONCHAIN.buySeatMidPayout;
}

export default function LabPage() {
  const world = useApp((s) => s.world);
  const lastLab = useApp((s) => s.lastLab);
  const runLab = useApp((s) => s.runLab);
  const runMidPayoutScenario = useApp((s) => s.runMidPayoutScenario);
  const seat = world.seats["3"];
  const lastTx = lastLab ? proofForAttack(lastLab.attack) : null;

  return (
    <section className="section" style={{ borderTop: "none", paddingTop: 0 }}>
      <PageHeader
        title="Transfer Lab"
        lede={`${LAB_FILMED_COUNT} filmed explorer refuses · 2 Preview skeptic answers (stale nonce, wash buy). Re-run without a wallet: pnpm heist.`}
      />
      <ScopeHonesty compact />
      <p className="lab-threat-rail meta" aria-label="Threat radar">
        <span className="badge warn">Threats</span>
        seller recall · listed drain · held-sig · wash buy · stale nonce · sign-epoch · tip derive.
        Filmed rows link Nearblocks; Preview rows say so.
      </p>
      <SessionBar />

      <BentoGrid className="page-bento">
        <BentoCard
          name="Title certificate"
          Icon={ShieldCheck}
          description="PROVABLY CLEAN stamp after mid-payout."
          href="/title/3"
          cta="Open cert"
        />
        <BentoCard
          name="Seat inventory"
          Icon={LayoutGrid}
          description="Five founding NEP-171 seats."
          href="/inventory"
          cta="Browse"
        />
        <BentoCard
          name="Box office"
          Icon={Ticket}
          description="Buy a ticket · splits hit vaults."
          href="/box-office"
          cta="Buy"
        />
      </BentoGrid>

      <JudgeStampPanel />

      <div className="panel lab-receipt-wall" style={{ marginBottom: "1.25rem" }}>
        <h3>
          <span className="badge rpc">Testnet RPC</span> Receipt wall
        </h3>
        <p className="meta" style={{ marginBottom: "0.85rem" }}>
          {LAB_FILMED_COUNT} unique filmed hashes — not an inflated attack count. Preview rows
          answer skeptic questions locally; arm them with the buttons below.
        </p>
        <ul className="lab-receipt-grid">
          {LAB_ATTACKS.map((a) => (
            <li key={a.id} className={a.success ? "pass" : "fail"}>
              <span className="lab-receipt-mark" aria-hidden>
                {a.success ? "✓" : "✕"}
              </span>
              <div>
                <strong>{a.title}</strong>
                <p className="meta">
                  {a.proof === "filmed" ? (
                    <span className="badge ok">Filmed</span>
                  ) : (
                    <span className="badge scenario">Preview</span>
                  )}{" "}
                  {a.reason}
                </p>
                {a.tx ? (
                  <a className="mono" href={txUrl(a.tx)} target="_blank" rel="noreferrer">
                    {a.tx.slice(0, 18)}…
                  </a>
                ) : (
                  <Link className="pin-link" href="#lab-actions">
                    Re-run in Lab · or pnpm heist →
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div id="lab-actions" className="grid-2 lab-action-grid" style={{ marginBottom: "1.25rem" }}>
        <div className="panel">
          <h3>
            <span className="badge rpc">Live path</span> Transfer attacks
          </h3>
          <p className="meta" style={{ marginBottom: "1rem" }}>
            {seat
              ? `owner ${seat.owner} · ${seat.encumbrance} · ${seat.kind}`
              : "No seat loaded — Run mid-payout seeds Preview, or seed from Club Console first."}
          </p>
          <div className="cta-row">
            <button type="button" onClick={runMidPayoutScenario}>
              Run mid-payout scenario
            </button>
            <button
              type="button"
              className="danger"
              disabled={!seat}
              onClick={() => runLab("old", "3")}
            >
              Seller recall withdraw
            </button>
            <button
              type="button"
              className="danger"
              disabled={!seat}
              onClick={() => runLab("listed", "3")}
            >
              Listed withdraw
            </button>
            <button
              type="button"
              className="danger"
              disabled={!seat}
              onClick={() => runLab("held", "3")}
            >
              Held-sig raw sign
            </button>
            <button
              type="button"
              className="danger"
              disabled={!seat}
              onClick={() => runLab("stale", "3")}
            >
              Stale nonce buy
            </button>
            <button
              type="button"
              className="danger"
              disabled={!seat}
              onClick={() => runLab("washBuy", "3")}
            >
              Wash-gated buy
            </button>
            <button
              type="button"
              className="danger"
              disabled={!seat}
              onClick={() => runLab("wash", "3")}
            >
              Wash flag · diligence FIX
            </button>
          </div>
        </div>
        <div className="panel">
          <h3>Last scenario result</h3>
          {lastLab ? (
            <>
              <p>
                <span className={`badge ${lastLab.reason.startsWith("UNEXPECTED") ? "warn" : "ok"}`}>
                  {lastLab.reason.startsWith("UNEXPECTED") ? "UNEXPECTED SUCCESS" : "EXPECTED FAIL"}
                </span>
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                <strong>{lastLab.attack}</strong>
              </p>
              <p className="meta">{lastLab.reason}</p>
              {lastTx && (
                <p style={{ marginTop: "0.75rem" }}>
                  <a className="mono pin-link" href={txUrl(lastTx)} target="_blank" rel="noreferrer">
                    {lastTx.slice(0, 22)}… → explorer
                  </a>
                </p>
              )}
              {!lastTx && (
                <p className="meta" style={{ marginTop: "0.75rem" }}>
                  Preview / unit refuse — no filmed explorer hash for this row yet.
                </p>
              )}
            </>
          ) : (
            <p className="meta">No attack run yet. Mid-payout seeds Preview; other buttons arm then refuse.</p>
          )}
        </div>
      </div>

      <DoubleSellStrip />
      <AttackTimeline />
      <KeyZeroStrip />
      <OffChainRoyalty />
      <DynamicQrStrip />
      <ResaleClearance />
    </section>
  );
}
