import { useState, useEffect } from 'react';

interface UseCounterProps {
  end: number;
  start?: number;
  duration?: number;
  isActive?: boolean;
}

export function useCounter({
  end,
  start = 0,
  duration = 2000,
  isActive = false,
}: UseCounterProps) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isActive) return;

    // Reset count when becoming active
    setCount(start);
    
    // If start and end are the same, no need to animate
    if (start === end) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure we end exactly at the target value
      }
    };
    
    const animationId = window.requestAnimationFrame(step);
    
    return () => {
      window.cancelAnimationFrame(animationId);
    };
  }, [start, end, duration, isActive]);

  return count;
}