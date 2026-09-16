# Drill 1 — Three ways to break the refresh

## Variant A — component-only export
- Rule: Rule 1 — module exports only a React component
- Observed behavior: count survived the save (stayed at its bumped value) after editing the button title from "+1" to "+1!" and saving

## Variant B — component + THEME export
- Rule: Rule 2 — module exports a component plus other things (state "may" reset, not guaranteed)
- Observed behavior: expected the count to reset, but it was preserved — nothing else imports THEME yet, so Fast Refresh had no consumer to invalidate and could still hot-swap just the component. Expect this to change in Variant C once logger.ts imports THEME.

## Variant C — constant imported by a non-React module
- Rule: Rule 3 in the strict sense did not trigger. `logger.ts` imports `THEME` from `Counter.tsx` (a non-component export consumed by a non-React module), but `logger.ts` is only ever reached via `drill1.tsx`, which exports nothing but the default screen component. Fast Refresh walked up the import graph past the broken `Counter.tsx`/`logger.ts` boundary and found `drill1.tsx` to be a valid, component-only Refresh Boundary, so it patched the subtree in place instead of forcing a full reload.
- Observed behavior (before fix): edited the button title in `Counter.tsx` and saved — the title updated but the counter was retained (no reset, no full reload/flash). This shows "imported by a non-React module" only forces a full reload when that chain has no component-only module to stop the walk at; here it did, so the count survived.

## useEffect re-run behavior
- Count before save: 3
- Count after save: 3 (unchanged across all 3 saves)
- Observation: made 3 comment-only edits/saves to `Counter.tsx`. `mounted` printed exactly once per save (3 times total), while the counter stayed at 3 throughout. Confirms `useState` persists across Fast Refresh but `useEffect` always re-runs regardless of its empty dependency array.

## Variant C fix
- What changed: moved `THEME` out of `Counter.tsx` into `drill1/theme.ts`, and updated `logger.ts` to import `THEME` from `./theme` instead of `./Counter`. `Counter.tsx` now exports only the `Counter` component, so it's a clean Refresh Boundary again regardless of what else imports `theme.ts` in the future.
- Confirmed partial refresh restored: [x] yes — bumped the counter, edited a comment in `Counter.tsx`, saved, and the count survived.
