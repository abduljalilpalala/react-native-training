// Step 6 fix: THEME lives here instead of in Counter.tsx, so logger.ts
// can import it from a plain module that never re-exports a React
// component. This is what restores partial Fast Refresh for Variant C.
export const THEME = { primary: 'blue' };
