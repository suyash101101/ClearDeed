import Link from "next/link";

/** 30-second judge cheat sheet — what to click, what to expect. */
export function JudgeCheatSheet() {
  return (
    <aside className="judge-cheat" aria-label="Judge cheat sheet">
      <p className="chapter-kicker">Judge cheat sheet · 30s</p>
      <ol className="judge-cheat-list">
        <li>
          <strong>Home · title policy</strong>
          <span className="meta"> Clubs run ops · CleanDeed attaches the policy</span>
        </li>
        <li>
          <strong>Seat #3 · List → Buy mid-payout</strong>
          <span className="meta"> Preview Film ready · rebound · tip derive unchanged</span>
        </li>
        <li>
          <strong>Lab · seller recall + stale / wash</strong>
          <span className="meta"> EXPECTED FAIL · filmed hashes + Preview rows</span>
        </li>
        <li>
          <strong>/verify · testnet scope</strong>
          <span className="meta"> Mainnet micro-cycle not filmed · lease = Preview</span>
        </li>
      </ol>
      <div className="judge-cheat-ctas">
        <Link className="pin-link" href="/seat/3">
          Seat #3 →
        </Link>
        <Link className="pin-link" href="/lab">
          Transfer Lab →
        </Link>
        <Link className="pin-link" href="/verify">
          /verify matrix →
        </Link>
      </div>
    </aside>
  );
}
