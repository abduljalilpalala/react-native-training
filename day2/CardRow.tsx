import { StyleSheet, View, type ViewProps } from "react-native";

export function CardRow(props: ViewProps) {
  return <View {...props} style={[styles.cardRow, props.style]} />;
}

export function Card(props: ViewProps) {
  return <View {...props} style={[styles.card, props.style]} />;
}

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-between",
    gap: 12,
    width: "100%",
  },
  card: {
    width: 160,
    flexShrink: 0,
    padding: 12,
    gap: 4,
    borderRadius: 12,
    backgroundColor: "#eee",
  },
});
