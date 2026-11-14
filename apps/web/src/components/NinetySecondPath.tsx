import Link from "next/link";

/** Visual 90-second judge path — category lock first. */
const STEPS = [
  { n: "01", label: "Title policy", href: "/", cta: "Category lock" },
  { n: "02", label: "Two venues", href: "/console", cta: "Club Console" },
  { n: "03", label: "Mid-payout buy", href: "/seat/3", cta: "Seat #3" },
  { n: "04", label: "Refuse receipt", href: "/lab", cta: "Transfer Lab" },
  { n: "05", label: "Prove matrix", href: "/verify", cta: "/verify" },
];

export function NinetySecondPath() {
  return (
    <aside className="ninety-path" aria-label="Ninety second judge path">
      <p className="chapter-kicker">90-second path</p>
      <p className="meta" style={{ marginBottom: "0.65rem" }}>
        Policy → venues → rebound → EXPECTED FAIL → /verify. Skip the ticket roll on camera.
      </p>
      <ol className="ninety-path-list">
        {STEPS.map((s) => (
          <li key={s.n}>
            <span className="ninety-path-n">{s.n}</span>
            <span className="ninety-path-label">{s.label}</span>
            <Link className="pin-link" href={s.href}>
              {s.cta}
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
}
