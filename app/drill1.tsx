import { useEffect } from 'react';
import { Counter } from '@/drill1/Counter';
import { logTheme } from '@/drill1/logger';

export default function Drill1Screen() {
  useEffect(() => {
    logTheme();
  }, []);

  return <Counter />;
}
