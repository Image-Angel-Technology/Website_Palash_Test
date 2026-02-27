import { useEffect, useState } from 'react';
import { duration } from '../config/motion';

interface UseCountUpOptions {
  /** Target number to count to */
  end: number;
  /** Starting number (default: 0) */
  start?: number;
  /** Duration in milliseconds (default: 1500) */
  duration?: number;
  /** Whether to start counting immediately (default: false) */
  enabled?: boolean;
  /** Number of decimal places (default: 0) */
  decimals?: number;
}

/**
 * Hook for animating number count-ups.
 * Used for statistics and impactful numbers.
 */
export function useCountUp({
  end,
  start = 0,
  duration: countDuration = duration.count,
  enabled = false,
  decimals = 0,
}: UseCountUpOptions): number {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!enabled) {
      setCount(start);
      return;
    }

    const startTime = Date.now();
    const range = end - start;

    const frame = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / countDuration, 1);

      // Ease-out curve for natural deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = start + range * easeOut;

      setCount(Number(current.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(frame);
  }, [enabled, start, end, countDuration, decimals]);

  return count;
}
