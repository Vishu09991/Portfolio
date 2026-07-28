import { useRef, useEffect } from "react";

interface TiltOptions {
  maxTiltDeg?: number;
  scale?: number;
  speed?: number;
  perspective?: number;
}

export const use3DTilt = <T extends HTMLElement = HTMLDivElement>(options: TiltOptions = {}) => {
  const ref = useRef<T | null>(null);
  const {
    maxTiltDeg = 8,
    scale = 1.025,
    speed = 300,
    perspective = 1000,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Accessibility & Mobile Checks
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;

    if (prefersReducedMotion || isTouchDevice) {
      return;
    }

    let reqId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Calculate cursor pos relative to element center (-1 to 1)
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const pctX = (mouseX / width - 0.5) * 2;
      const pctY = (mouseY / height - 0.5) * 2;

      // Rotate X is based on vertical pos (tilt up/down)
      const rotateX = (-pctY * maxTiltDeg).toFixed(2);
      // Rotate Y is based on horizontal pos (tilt left/right)
      const rotateY = (pctX * maxTiltDeg).toFixed(2);

      if (reqId) cancelAnimationFrame(reqId);
      reqId = requestAnimationFrame(() => {
        el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
        el.style.transition = `transform ${speed / 4}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
      });
    };

    const handleMouseEnter = () => {
      el.style.willChange = "transform";
    };

    const handleMouseLeave = () => {
      if (reqId) cancelAnimationFrame(reqId);
      el.style.willChange = "auto";
      el.style.transition = `transform ${speed}ms ease-out`;
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (reqId) cancelAnimationFrame(reqId);
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      if (el) {
        el.style.transform = "";
        el.style.transition = "";
      }
    };
  }, [maxTiltDeg, scale, speed, perspective]);

  return ref;
};
