import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => console.log("mounted"), []);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Button
        title="+1"
        onPress={() => {
          console.log("tapped, current count:", count);
          setCount((c) => c + 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    backgroundColor: "#ffffff",
  },
  count: { fontSize: 48 },
});
