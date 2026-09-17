import { StyleSheet, Text, View } from "react-native";

type ChatRowProps = {
  message: string;
  timestamp: string;
  unread?: boolean;
};

export function ChatRow({ message, timestamp, unread = false }: ChatRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.avatar}>
        {unread && <View style={styles.unreadDot} />}
      </View>

      <View style={styles.bubble}>
        <Text style={styles.message}>{message}</Text>
      </View>

      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
    paddingVertical: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
    position: "relative",
  },
  unreadDot: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "red",
  },
  bubble: {
    flex: 1,
    backgroundColor: "#f1f1f3",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  message: {
    fontSize: 15,
    lineHeight: 20,
  },
  timestamp: {
    flexShrink: 0,
    fontSize: 12,
    color: "#888",
  },
});
