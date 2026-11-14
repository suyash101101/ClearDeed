# Diagrams

**Demo film uses only unique assets** (no claims map; `userflow.png` / `architecture.png` were duplicate hashes of `e2e-flow.png` — do not show twice).

## FossFLOW

![E2E mid-payout](e2e-flow.png)

| File | Role |
| --- | --- |
| `fossflow-e2e.json` · `e2e-flow.png` | Full E2E mid-payout (canonical) |
| `fossflow-architecture.json` / `fossflow-userflow.json` | Source models — export only if distinct from E2E |

```bash
node scripts/generate-fossflow-e2e.mjs
```

## Excalidraw

![Complete architecture](quitclaim-architecture.png)

![Ada / Priya demos](ada-priya-architecture.png)

| File | Role |
| --- | --- |
| `quitclaim-architecture.excalidraw` · `.png` | Full stack (demo) |
| `ada-priya-architecture.excalidraw` · `.png` | Clear-title sale + mid-air fail (demo) |
| `quitclaim-claims.excalidraw` | **Not used in demo** — looks weak on camera |

```bash
node scripts/capture-excalidraw.mjs
```

## Demo gallery

Served at `/demo-diagrams/` during recording:

- `explorer-proof.html` + `explorer-proof.png` (your Nearblocks SS)  
- `index.html` — architecture → E2E → Ada/Priya only
