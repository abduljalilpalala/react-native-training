import { Badge } from "@/day2/Badge";
import { Card, CardRow } from "@/day2/CardRow";
import { ChatRow } from "@/day2/ChatRow";
import { PlatformThemedText } from "@/day2/PlatformThemedText";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const LONG_MESSAGE =
  "Hey! Just checking in on the layout changes — wanted to flag that the card row was overflowing on the narrow breakpoint, and the chat bubble was clipping the timestamp whenever the message ran long, so here's a much longer message to stress-test wrapping and make sure nothing breaks even past four hundred characters, which is exactly the kind of edge case that default flexbox values quietly get wrong until you actually go looking for them.";

export default function Day2Screen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PlatformThemedText style={styles.heading}>
        Layout and Flexbox on Native
      </PlatformThemedText>

      <PlatformThemedText style={styles.subheading}>
        Part 1 — Card row
      </PlatformThemedText>
      <CardRow>
        <Card>
          <PlatformThemedText style={styles.cardTitle}>
            Sprint Planning
          </PlatformThemedText>
        </Card>
        <Card>
          <PlatformThemedText style={styles.cardTitle}>
            Design Review
          </PlatformThemedText>
        </Card>
        <Card>
          <PlatformThemedText style={styles.cardTitle}>
            Release Notes
          </PlatformThemedText>
        </Card>
      </CardRow>

      <PlatformThemedText style={styles.subheading}>
        Part 2 — Chat row
      </PlatformThemedText>
      <ChatRow message={LONG_MESSAGE} timestamp="09:41" unread />
      <ChatRow message="Sure thing." timestamp="09:42" />

      <PlatformThemedText style={styles.subheading}>
        Stretch — Badge style override
      </PlatformThemedText>
      <View style={styles.badgeRow}>
        <Badge variant="success" style={styles.badgeSquare}>
          <Text style={styles.badgeLabel}>Shipped</Text>
        </Badge>
        <Badge variant="warning" style={styles.badgeDark}>
          <Text style={styles.badgeLabel}>In review</Text>
        </Badge>
        <Badge variant="default" style={styles.badgeWide}>
          <Text style={styles.badgeLabel}>Backlog</Text>
        </Badge>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
  },
  subheading: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  badgeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  badgeLabel: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  // overrides borderRadius from Badge's base style
  badgeSquare: {
    borderRadius: 4,
  },
  // overrides backgroundColor from Badge's warning variant style
  badgeDark: {
    backgroundColor: "#111",
  },
  // overrides paddingHorizontal from Badge's base style
  badgeWide: {
    paddingHorizontal: 20,
  },
});
