# Drill 1 — Three ways to break the refresh — Checklist

## Setup
- [ ] Run `npx expo start`, open the app in Expo Go, tap **"Drill 1: Fast Refresh"** on the home tab
- [ ] Tap `+1` a few times to confirm the counter increments and renders

## Variant A — component-only export
- [ ] With `Counter.tsx` in its current state (just the component), bump the counter to some number (e.g. tap `+1` until it shows `5`)
- [ ] Make a small edit (e.g. change `"+1"` to `"+1!"`) and save
- [ ] Observe: does the count survive the save? Record this in `FINDINGS.md` under "Variant A"

## Variant B — component + non-component export
- [ ] Uncomment the `THEME` export at the bottom of `Counter.tsx`
- [ ] Bump the counter again, then make a small edit and save
- [ ] Observe: does the count reset, but the screen still updates without a full reload? Record it under "Variant B"

## Variant C — constant imported by a non-React module
- [ ] In `logger.ts`, uncomment `import { THEME } from './Counter'` and the `console.log(THEME)` line
- [ ] Confirm `app/drill1.tsx` still calls `logTheme()` on mount (it already does)
- [ ] Bump the counter, then edit `Counter.tsx` and save
- [ ] Observe: full reload (white flash / full remount) instead of a partial refresh? Record it under "Variant C"

## useEffect re-run behavior
- [ ] Uncomment `import { useEffect } from 'react'` and `useEffect(() => console.log('mounted'), [])` in `Counter.tsx`
- [ ] Save the file several times with no-op edits, watching the Metro terminal
- [ ] Confirm `'mounted'` logs on every save, and note the counter value before/after each save in `FINDINGS.md`

## Fix Variant C
- [ ] Move `export const THEME = ...` out of `Counter.tsx` — it already exists in `drill1/theme.ts`
- [ ] Update `logger.ts` to import `THEME` from `./theme` instead of `./Counter`
- [ ] Remove the (now unused) `THEME` export from `Counter.tsx`
- [ ] Bump the counter, edit `Counter.tsx`, save — confirm partial refresh is restored (no full reload)

## Wrap up
- [ ] Fill in all sections of `drill1/FINDINGS.md`, attributing each behavior to Rule 1/2/3
- [ ] Record or note live proof that the Variant C fix restores partial refresh
- [ ] Remove the temporary `__DEV__` link from `app/(tabs)/index.tsx` once done (optional cleanup)
- [ ] Remove the temporary debug `console.log('tapped, ...')` from the button's `onPress` in `Counter.tsx` once the increment issue is resolved
