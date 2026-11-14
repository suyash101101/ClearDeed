"use client";

import { useRouter } from "next/navigation";
import { useApp } from "@/lib/store";

/** First-viewport CTA group — one primary path, one prove path. */
export function HomeActions() {
  const router = useRouter();
  const resetDemo = useApp((s) => s.resetDemo);
  const runMidPayoutScenario = useApp((s) => s.runMidPayoutScenario);
  return (
    <div className="cta-row hero-cta">
      <button
        type="button"
        onClick={() => {
          resetDemo();
          router.push("/seat/3");
        }}
      >
        Open Seat #3
      </button>
      <button
        type="button"
        className="ghost"
        onClick={() => {
          runMidPayoutScenario();
          router.push("/lab");
        }}
      >
        Prove seller recall fails
      </button>
    </div>
  );
}
