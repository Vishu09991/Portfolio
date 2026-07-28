import { useState, useEffect, useRef } from "react";

export const useAutoScroll = (speedPxPerSec = 22) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const scrollPosRef = useRef<number>(0);
  const isPlayingRef = useRef(false);

  isPlayingRef.current = isPlaying;

  const stopAutoScroll = () => {
    setIsPlaying(false);
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
  };

  const toggleAutoScroll = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (!isPlaying) {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      return;
    }

    lastTimeRef.current = null;
    scrollPosRef.current = window.scrollY;

    const scrollLoop = (timestamp: number) => {
      if (!isPlayingRef.current) return;

      if (lastTimeRef.current !== null) {
        const deltaMs = timestamp - lastTimeRef.current;
        // Cap frame delta to avoid huge jumps on tab switches or frame drops
        const safeDelta = Math.min(deltaMs, 64);
        const scrollAmount = (speedPxPerSec * safeDelta) / 1000;

        // Detect if user manually scrolled in between frames and sync position seamlessly
        const currentY = window.scrollY;
        if (Math.abs(scrollPosRef.current - currentY) > 2) {
          scrollPosRef.current = currentY;
        }

        scrollPosRef.current += scrollAmount;

        // Use behavior: 'auto' to ensure 60fps/120fps frame updates without smooth-scroll curve thrashing
        window.scrollTo({
          top: scrollPosRef.current,
          behavior: "auto",
        });

        // Auto-stop when reaching page bottom
        const isAtBottom =
          window.innerHeight + Math.ceil(window.scrollY) >= document.documentElement.scrollHeight - 15;
        if (isAtBottom) {
          stopAutoScroll();
          return;
        }
      }

      lastTimeRef.current = timestamp;
      animFrameRef.current = requestAnimationFrame(scrollLoop);
    };

    animFrameRef.current = requestAnimationFrame(scrollLoop);

    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
    };
  }, [isPlaying, speedPxPerSec]);

  return { isPlaying, toggleAutoScroll, stopAutoScroll };
};
