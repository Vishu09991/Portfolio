import { useEffect, useRef } from "react";
import styles from "../styles/SpatialCursor.module.css";

/** A lightweight, articulated cursor: the precise tip leads a spring-following 3D orbit. */
export default function SpatialCursor() {
  const root = useRef<HTMLDivElement>(null);
  const pointer = useRef<HTMLDivElement>(null);
  const orbit = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = root.current!;
    const tip = pointer.current!;
    const halo = orbit.current!;
    const capability = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const contrast = window.matchMedia("(forced-colors: active)");
    const html = document.documentElement;
    let frame = 0;
    let visible = false;
    let x = 0,
      y = 0,
      followX = 0,
      followY = 0,
      lastFrame = 0;
    const allowed = () => capability.matches && !reduced.matches && !contrast.matches;

    const hide = () => {
      visible = false;
      layer.dataset.visible = "false";
      layer.dataset.pressed = "false";
      html.removeAttribute("data-spatial-cursor");
      cancelAnimationFrame(frame);
      frame = 0;
      lastFrame = 0;
    };
    const draw = (now: number) => {
      frame = 0;
      if (!visible) return;
      const delta = lastFrame ? Math.min(now - lastFrame, 50) : 16;
      lastFrame = now;
      const easing = 1 - Math.exp(-delta / 55);
      followX += (x - followX) * easing;
      followY += (y - followY) * easing;
      const dx = x - followX,
        dy = y - followY;
      halo.style.transform = `translate3d(${followX}px,${followY}px,0)`;
      halo.style.setProperty("--tilt-x", `${54 - Math.max(-22, Math.min(22, dy * 0.7))}deg`);
      halo.style.setProperty("--tilt-y", `${-22 + Math.max(-28, Math.min(28, dx * 0.7))}deg`);
      if (Math.abs(dx) + Math.abs(dy) > 0.08) frame = requestAnimationFrame(draw);
      else lastFrame = 0;
    };
    const updateTarget = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return false;
      // Preserve native I-beams, resize handles, disabled feedback, and embedded surfaces.
      if (
        target.closest(
          'input, textarea, select, [contenteditable]:not([contenteditable="false"]), iframe, [disabled], [aria-disabled="true"], [data-native-cursor]'
        )
      ) {
        hide();
        return false;
      }
      const actionable = target.closest('a[href], button, summary, [role="button"], [role="link"], label[for]');
      layer.dataset.hover = actionable ? "true" : "false";
      return true;
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !allowed()) {
        hide();
        return;
      }
      if (!updateTarget(event.target)) return;
      x = event.clientX;
      y = event.clientY;
      if (!visible) {
        followX = x;
        followY = y;
        visible = true;
        layer.dataset.visible = "true";
        html.setAttribute("data-spatial-cursor", "");
      }
      // The tip stays at the actual click point; only the decorative orbit trails behind.
      tip.style.transform = `translate3d(${x}px,${y}px,0)`;
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const over = (event: PointerEvent) => {
      if (visible) updateTarget(event.target);
    };
    const down = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") hide();
      else if (visible) layer.dataset.pressed = "true";
    };
    const up = () => {
      layer.dataset.pressed = "false";
    };
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Tab") hide();
    };
    const leave = (event: PointerEvent) => {
      if (!event.relatedTarget) hide();
    };
    const change = () => {
      if (!allowed()) hide();
    };
    const visibility = () => {
      if (document.hidden) hide();
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("pointerout", leave, { passive: true });
    window.addEventListener("pointercancel", hide);
    window.addEventListener("blur", hide);
    window.addEventListener("keydown", keyboard);
    window.addEventListener("dragstart", hide);
    document.addEventListener("visibilitychange", visibility);
    capability.addEventListener("change", change);
    reduced.addEventListener("change", change);
    contrast.addEventListener("change", change);
    return () => {
      hide();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointerout", leave);
      window.removeEventListener("pointercancel", hide);
      window.removeEventListener("blur", hide);
      window.removeEventListener("keydown", keyboard);
      window.removeEventListener("dragstart", hide);
      document.removeEventListener("visibilitychange", visibility);
      capability.removeEventListener("change", change);
      reduced.removeEventListener("change", change);
      contrast.removeEventListener("change", change);
    };
  }, []);

  return (
    <div ref={root} className={styles.layer} aria-hidden="true" data-visible="false">
      <div ref={orbit} className={styles.orbit}>
        <div className={styles.scale}>
          <div className={styles.gimbal}>
            <span className={styles.lowerRing} />
            <span className={styles.upperRing} />
            <span className={styles.arc} />
            <span className={styles.satellite} />
          </div>
        </div>
      </div>
      <div ref={pointer} className={styles.pointer}>
        <svg viewBox="0 0 30 34" width="25" height="29" fill="none">
          <path d="M1 1 27 12 16 17 11 30Z" fill="#0d3657" stroke="#d2f6ff" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M1 1 16 17 11 30Z" fill="#239de6" />
          <path d="M1 1 27 12 16 17Z" fill="#b4efff" />
          <path d="M1 1 16 17" stroke="#f4fcff" strokeWidth="1.2" />
        </svg>
      </div>
    </div>
  );
}
