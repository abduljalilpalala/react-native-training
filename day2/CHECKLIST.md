# Day 2 — Layout and Flexbox on Native — Checklist

## Setup
- [x] Run `npx expo start`, open the app in Expo Go, tap **"Day 2: Layout and Flexbox on Native"** on the home tab
- [x] Read `day2/web-reference.css` — this is the web layout you're porting in Part 1

## Part 1 — Port the card row
- [x] Open `day2/CardRow.tsx`. It's a naive, line-for-line port of `web-reference.css` — it will not render identically on native yet
- [x] Using the lesson's defaults table, find all four default differences between web CSS and React Native this port needs to account for
- [x] Fix `CardRow.tsx` so the card row wraps, gaps, and spans the same way the web version does
- [x] Write an annotated diff in `FINDINGS.md` under "Part 1", naming each of the four defaults you changed and why

## Part 2 — Build the chat row
- [x] Open `day2/ChatRow.tsx` and implement a chat row satisfying all four requirements:
  - [x] A fixed 40dp avatar
  - [x] A message body that grows and wraps long text without overflowing
  - [x] A timestamp that never shrinks
  - [x] An absolutely positioned unread dot on the avatar
- [x] Test it with a 400+ character message (see `app/day2.tsx`) — confirm no overflow and the timestamp doesn't get clipped
- [x] Confirm the unread dot is positioned against a `position: 'relative'` avatar, not pushed into place with margins

## Part 3 — Themed color across platforms
- [x] Open `day2/PlatformThemedText.tsx`. It has a seeded bug: one of the `PlatformColor` / `DynamicColorIOS` values is wrong and will throw or silently resolve to the wrong color
- [x] Find and fix it, keeping the whole thing wrapped in a `Platform.select` guard (an unguarded bad platform string is a runtime crash, not a silent fallback)
- [x] Screenshot the component in both light and dark system theme (note in `FINDINGS.md` if you only have one platform available to test)

## Wrap up
- [x] Fill in all sections of `day2/FINDINGS.md`
- [ ] Mark this lesson's content as reviewed on the course site

## Stretch (optional)
- [x] Open `day2/Badge.tsx` and confirm it merges `[styles.base, variantStyle, props.style]` in that order
- [x] Add three usages in `app/day2.tsx` proving a consumer's `style` prop always wins over the variant default
- [ ] ~~Assert this with a test using `StyleSheet.flatten`~~ — skipped (optional; would need `jest-expo` set up first)
