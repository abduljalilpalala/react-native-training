import { StyleSheet, View, type ViewProps, type ViewStyle } from "react-native";

type BadgeVariant = "default" | "success" | "warning";

export type BadgeProps = ViewProps & {
  variant?: BadgeVariant;
};

// Stretch: prove that a consumer's `style` prop always wins by rendering three
// usages in app/day2.tsx, each overriding a different property, then assert it
// with a test using StyleSheet.flatten (see CHECKLIST.md "Stretch").
export function Badge({ variant = "default", style, ...rest }: BadgeProps) {
  return <View style={[styles.base, variantStyles[variant], style]} {...rest} />;
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
});

const variantStyles = StyleSheet.create<Record<BadgeVariant, ViewStyle>>({
  default: { backgroundColor: "#ccc" },
  success: { backgroundColor: "#2e7d32" },
  warning: { backgroundColor: "#f9a825" },
});
