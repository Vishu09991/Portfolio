import { useEffect, useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

/** Reveal once on entry. Content remains visible before JS or without observers. */
export function useSectionReveal() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (reducedMotion || !ref.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-enter");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08 }
    );
    ref.current
      .querySelectorAll(".section-heading, .portfolio-card, .skill-category")
      .forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [reducedMotion]);
  return ref;
}
