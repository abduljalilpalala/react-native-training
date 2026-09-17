import type { Href } from 'expo-router';

export type RoadmapDay = {
  day: number;
  title: string;
  /** Route to the screen for this day's work. Omitted while the day isn't built yet. */
  href?: Href;
};

export type RoadmapWeek = {
  week: number;
  title: string;
  subtitle: string;
  days: RoadmapDay[];
};

export const roadmap: RoadmapWeek[] = [
  {
    week: 1,
    title: 'Foundations and the UI Layer',
    subtitle: 'Unlearn browser assumptions; native rendering, layout, input, touch and list systems.',
    days: [
      { day: 1, title: 'The Native Rendering Model', href: '/day1' },
      { day: 2, title: 'Layout and Flexbox on Native', href: '/day2' },
      { day: 3, title: 'Text, Input and Forms' },
      { day: 4, title: 'Touch and Press Handling' },
      { day: 5, title: 'Lists and Virtualization' },
    ],
  },
  {
    week: 2,
    title: 'Application Architecture',
    subtitle: 'Navigation, networking, offline data, persistence, images, assets, platform-specific behavior.',
    days: [
      { day: 6, title: 'Navigation' },
      { day: 7, title: 'Networking' },
      { day: 8, title: 'Offline Data and Persistence' },
      { day: 9, title: 'Images and Assets' },
      { day: 10, title: 'Platform-Specific Behavior' },
    ],
  },
  {
    week: 3,
    title: 'Polish, Native Capability, and Quality',
    subtitle: 'Animation, gestures, accessibility, device capabilities, permissions, testing.',
    days: [
      { day: 11, title: 'Animation' },
      { day: 12, title: 'Gestures' },
      { day: 13, title: 'Accessibility' },
      { day: 14, title: 'Device Capabilities and Permissions' },
      { day: 15, title: 'Testing' },
    ],
  },
  {
    week: 4,
    title: 'Performance, Native Code, and Shipping',
    subtitle: 'Debugging, performance, Turbo Native Modules, release engineering, capstone defense.',
    days: [
      { day: 16, title: 'Debugging' },
      { day: 17, title: 'Performance' },
      { day: 18, title: 'Turbo Native Modules' },
      { day: 19, title: 'Release Engineering' },
      { day: 20, title: 'Capstone Defense' },
    ],
  },
];
