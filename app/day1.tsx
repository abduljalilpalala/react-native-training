import { useEffect } from 'react';
import { Counter } from '@/day1/Counter';
import { logTheme } from '@/day1/logger';

export default function Day1Screen() {
  useEffect(() => {
    logTheme();
  }, []);

  return <Counter />;
}
