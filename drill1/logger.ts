// Step 6 fix: import THEME from theme.ts instead of Counter.tsx so this
// non-React module no longer depends on a file that exports a component.
import { THEME } from './theme';

export function logTheme() {
  console.log(THEME);
}
