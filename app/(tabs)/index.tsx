import { Image } from "expo-image";
import { useState } from "react";
import { Modal, Platform, Pressable, StyleSheet } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link, useRouter } from "expo-router";

const EXPLORE_ACTIONS = [
  { key: "action", label: "Action" },
  { key: "share", label: "Share" },
  { key: "delete", label: "Delete", destructive: true },
] as const;

function ExploreStep() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleAction = (key: (typeof EXPLORE_ACTIONS)[number]["key"]) => {
    setMenuVisible(false);
    alert(`${key[0].toUpperCase()}${key.slice(1)} pressed`);
  };

  if (Platform.OS === "ios") {
    return (
      <Link href="/modal">
        <Link.Trigger>
          <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        </Link.Trigger>
        <Link.Preview />
        <Link.Menu>
          <Link.MenuAction icon="cube" onPress={() => handleAction("action")}>
            Action
          </Link.MenuAction>
          <Link.MenuAction
            icon="square.and.arrow.up"
            onPress={() => handleAction("share")}
          >
            Share
          </Link.MenuAction>
          <Link.Menu title="More" icon="ellipsis">
            <Link.MenuAction
              icon="trash"
              destructive
              onPress={() => handleAction("delete")}
            >
              Delete
            </Link.MenuAction>
          </Link.Menu>
        </Link.Menu>
      </Link>
    );
  }

  return (
    <>
      <Pressable
        onPress={() => router.push("/modal")}
        onLongPress={() => setMenuVisible(true)}
      >
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
      </Pressable>
      <Modal
        transparent
        visible={menuVisible}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable
          style={styles.backdrop}
          onPress={() => setMenuVisible(false)}
        >
          <Pressable onPress={() => {}}>
            <ThemedView style={styles.menuCard}>
              {EXPLORE_ACTIONS.map((action) => (
                <Pressable
                  key={action.key}
                  style={styles.menuItem}
                  onPress={() => handleAction(action.key)}
                >
                  <ThemedText
                    style={
                      "destructive" in action ? styles.destructiveText : undefined
                    }
                  >
                    {action.label}
                  </ThemedText>
                </Pressable>
              ))}
            </ThemedView>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ExploreStep />

        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">
            npm run reset-project
          </ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  backdrop: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  menuCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(128, 128, 128, 0.3)",
  },
  destructiveText: {
    color: "#ff3b30",
  },
});
