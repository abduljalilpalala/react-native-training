import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { roadmap } from '@/constants/roadmap';
import { useThemeColor } from '@/hooks/use-theme-color';

const DONE_COLOR = '#34d399';

export default function RoadmapScreen() {
  const mutedColor = useThemeColor({}, 'icon');
  const borderColor = useThemeColor({ light: '#e6e6e6', dark: '#2a2a2a' }, 'background');

  return (
    <ThemedView style={styles.screen}>
      <View style={styles.header}>
        <ThemedText type="title">Roadmap</ThemedText>
        <ThemedText style={{ color: mutedColor }}>
          Tap a day to open the work you&apos;ve done for it.
        </ThemedText>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {roadmap.map((week) => (
          <View key={week.week} style={styles.weekSection}>
            <ThemedText type="subtitle">
              Week {week.week} — {week.title}
            </ThemedText>
            <ThemedText style={[styles.weekSubtitle, { color: mutedColor }]}>
              {week.subtitle}
            </ThemedText>

            <View style={styles.days}>
              {week.days.map((day) => {
                const isDone = !!day.href;
                const row = (
                  <View style={[styles.dayRow, { borderColor }]}>
                    <IconSymbol
                      name={isDone ? 'checkmark.circle.fill' : 'circle'}
                      size={22}
                      color={isDone ? DONE_COLOR : mutedColor}
                    />
                    <View style={styles.dayTexts}>
                      <ThemedText style={[styles.dayLabel, { color: mutedColor }]}>
                        Day {day.day}
                      </ThemedText>
                      <ThemedText
                        style={!isDone && [styles.dayTitleMuted, { color: mutedColor }]}>
                        {day.title}
                      </ThemedText>
                    </View>
                    {isDone && (
                      <IconSymbol name="chevron.right" size={18} color={mutedColor} />
                    )}
                  </View>
                );

                if (!isDone) {
                  return <View key={day.day}>{row}</View>;
                }

                return (
                  <Link key={day.day} href={day.href!} asChild>
                    <Pressable>{row}</Pressable>
                  </Link>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    gap: 4,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 24,
  },
  weekSection: {
    gap: 4,
  },
  weekSubtitle: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 4,
  },
  days: {
    marginTop: 8,
  },
  dayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    minHeight: 52,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  dayTexts: {
    flex: 1,
    gap: 2,
  },
  dayLabel: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },
  dayTitleMuted: {
    opacity: 0.7,
  },
});
