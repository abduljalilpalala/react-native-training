import {
  DynamicColorIOS,
  Platform,
  PlatformColor,
  StyleSheet,
  Text,
  type ColorValue,
  type TextProps,
} from "react-native";

// A wrong platform color string is a runtime crash, not a silent fallback —
// that's why this whole thing must stay guarded by Platform.OS.
// Note: this can't be a Platform.select({ ios: DynamicColorIOS(...), ... })
// object literal — JS evaluates every value in an object literal eagerly, so
// DynamicColorIOS would still get called (and crash) on Android/web, where it
// isn't implemented. The Platform.OS ternary below short-circuits instead.
const label: ColorValue =
  Platform.OS === "ios"
    ? DynamicColorIOS({ light: "#111B1C", dark: "#ececee" })
    : Platform.OS === "android"
      ? PlatformColor("?android:attr/textColorPrimary")
      : "#111B1C";

export type PlatformThemedTextProps = TextProps;

export function PlatformThemedText({ style, ...rest }: PlatformThemedTextProps) {
  return <Text style={[styles.label, style]} {...rest} />;
}

const styles = StyleSheet.create({
  label: {
    color: label,
    fontSize: 16,
  },
});
