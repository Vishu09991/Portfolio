import React, { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";
import PushCharacter, { createRig } from "./PushCharacter";
import { clamp, DURATION, plantFeet, poseAt, track, wallProgress } from "./motion";
import styles from "../../styles/CinematicIntro.module.css";

const SESSION_KEY = "vhs:push-intro:v1";
const ReplayContext = createContext<() => void>(() => undefined);

export function IntroReplayButton() {
  const replay = useContext(ReplayContext);
  return (
    <button type="button" className={styles.replay} onClick={replay}>
      <span aria-hidden="true">↻</span> Replay intro
    </button>
  );
}

function remember() {
  try {
    sessionStorage.setItem(SESSION_KEY, "seen");
  } catch {
    /* Storage can be disabled; the page remains usable. */
  }
}

/** A homepage-only entrance; children stay mounted and all portfolio links/routes remain untouched. */
export default function CinematicIntro({ children }: { children: ReactNode }) {
  const [state, setState] = useState<"pending" | "playing" | "done">("pending");
  const content = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const skip = useRef<HTMLButtonElement>(null);
  const character = useRef<SVGSVGElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const preview = useRef<number | null>(null);
  const finish = useCallback(() => {
    remember();
    setState("done");
  }, []);
  const replay = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    returnFocus.current = document.activeElement as HTMLElement;
    preview.current = null;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setState("playing");
  }, []);

  useEffect(() => {
    // Frame review is available only in development, never in the production bundle behavior.
    if (process.env.NODE_ENV === "development") {
      const frame = new URLSearchParams(window.location.search).get("intro-preview");
      if (frame !== null && Number.isFinite(Number(frame)))
        preview.current = Math.max(0, Math.min(5.59, Number(frame)));
    }
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "seen";
    } catch {
      /* Optional persistence. */
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Preserve deep links and browser-restored scroll positions.
    if (reduced || (preview.current === null && (seen || window.location.hash || window.scrollY > 64))) {
      setState("done");
    } else {
      setState("playing");
    }
  }, []);

  useEffect(() => {
    if (state !== "playing" || !overlay.current || !character.current || !content.current) return;
    const scene = overlay.current;
    const page = content.current;
    const rig = createRig(character.current);
    const assembly = scene.querySelector<HTMLElement>("[data-assembly]")!;
    const robot = scene.querySelector<HTMLElement>("[data-character]")!;
    const backdrop = scene.querySelector<HTMLElement>("[data-backdrop]")!;
    const furniture = scene.querySelector<HTMLElement>("[data-furniture]")!;
    const status = scene.querySelector<HTMLElement>("[data-status]")!;
    const progress = scene.querySelector<HTMLElement>("[data-progress]")!;
    const seam = scene.querySelector<HTMLElement>("[data-seam]")!;
    const burst = scene.querySelector<HTMLElement>("[data-burst]")!;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scrollX = window.scrollX,
      scrollY = window.scrollY;
    const originalFocus = returnFocus.current;
    const bodyStyle = document.body.getAttribute("style");
    const originalInert = page.hasAttribute("inert");
    const originalHidden = page.getAttribute("aria-hidden");
    let frameId = 0;
    let alive = true;
    let width = window.innerWidth;
    let rigWidth = robot.getBoundingClientRect().width;
    const mobile = width <= 600;
    const speed = mobile ? 1.18 : 1;
    const reveals = Array.from(page.querySelectorAll<HTMLElement>("[data-intro-reveal]"));
    const savedStyles = reveals.map(element => element.getAttribute("style"));
    const resize = () => {
      width = window.innerWidth;
      rigWidth = robot.getBoundingClientRect().width;
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") finish();
      if (event.key === "Tab") {
        event.preventDefault();
        skip.current?.focus({ preventScroll: true });
      }
    };
    const onVisibility = () => {
      if (document.hidden && preview.current === null) finish();
    };
    const onMotion = () => {
      if (motion.matches) finish();
    };
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = `-${scrollX}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    if (scrollbar) document.body.style.paddingRight = `${scrollbar}px`;
    page.setAttribute("inert", "");
    page.setAttribute("aria-hidden", "true");
    skip.current?.focus({ preventScroll: true });
    document.addEventListener("keydown", onKey);
    document.addEventListener("visibilitychange", onVisibility);
    motion.addEventListener("change", onMotion);
    window.addEventListener("resize", resize);

    const start = performance.now();
    const render = (now: number) => {
      if (!alive) return;
      const t = preview.current ?? Math.min(DURATION / 1000, ((now - start) / 1000) * speed);
      const wall = wallProgress(t);
      // Both palms and the wall share this parent transform until release at 3.72 s.
      const distance = width * 0.62;
      assembly.style.transform = `translate3d(${wall * distance}px,0,0)`;
      const releasedWall = wallProgress(Math.min(t, 3.72));
      const worldToRig = (distance * 320) / rigWidth;
      rig(plantFeet(poseAt(t), t, worldToRig), t, -(wall - releasedWall) * worldToRig);
      robot.style.opacity = String(
        track(t, [
          [0, 0],
          [0.16, 1],
          [5.08, 1],
          [5.52, 0],
          [5.6, 0],
        ])
      );
      backdrop.style.opacity = String(
        1 -
          track(t, [
            [0, 0],
            [3.55, 0],
            [4.28, 1],
            [5.6, 1],
          ])
      );
      furniture.style.opacity = String(
        1 -
          track(t, [
            [0, 0],
            [3.0, 0],
            [3.45, 1],
            [5.6, 1],
          ])
      );
      seam.style.opacity = String(
        track(t, [
          [0, 0.12],
          [1.65, 0.3],
          [2, 0.6],
          [2.25, 0.2],
          [3.3, 0.7],
          [3.85, 1],
          [4.6, 0],
          [5.6, 0],
        ])
      );
      const shock = clamp((t - 3.72) / 0.65);
      burst.style.opacity = String(shock > 0 ? (1 - shock) * 0.7 : 0);
      burst.style.transform = `translate(-50%,-50%) scale(${0.3 + shock * 2.5})`;
      const camera = mobile ? 0 : Math.sin((t - 3.72) * 43) * 3 * (1 - shock);
      scene.style.transform = shock > 0 && shock < 1 ? `translate3d(${camera}px,${camera * 0.3}px,0)` : "";
      progress.style.transform = `scaleX(${t / 5.6})`;
      const label =
        t < 1.36
          ? "01 / A little curiosity"
          : t < 2.22
          ? "02 / A little resistance"
          : t < 3.72
          ? "03 / One more push"
          : "04 / Welcome to my world";
      if (status.textContent !== label) status.textContent = label;
      scene.dataset.phase = t < 1.36 ? "entrance" : t < 2.22 ? "struggle" : t < 3.72 ? "push" : "reveal";
      reveals.forEach((element, index) => {
        const amount = track(t, [
          [0, 0],
          [3.58 + index * 0.09, 0],
          [4.4 + index * 0.09, 1],
          [5.6, 1],
        ]);
        element.style.opacity = String(amount);
        element.style.transform = `translate3d(0,${(1 - amount) * 22}px,0)`;
      });
      if (t >= 5.6) finish();
      else if (preview.current === null) frameId = requestAnimationFrame(render);
    };
    // Recovery if rendering is throttled or an animation frame fails.
    const watchdog = preview.current === null ? window.setTimeout(finish, DURATION / speed + 800) : undefined;
    render(start);

    return () => {
      alive = false;
      cancelAnimationFrame(frameId);
      window.clearTimeout(watchdog);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("visibilitychange", onVisibility);
      motion.removeEventListener("change", onMotion);
      window.removeEventListener("resize", resize);
      if (bodyStyle === null) document.body.removeAttribute("style");
      else document.body.setAttribute("style", bodyStyle);
      if (!originalInert) page.removeAttribute("inert");
      if (originalHidden === null) page.removeAttribute("aria-hidden");
      else page.setAttribute("aria-hidden", originalHidden);
      reveals.forEach((element, index) => {
        if (savedStyles[index] === null) element.removeAttribute("style");
        else element.setAttribute("style", savedStyles[index]!);
      });
      window.scrollTo({ left: scrollX, top: scrollY, behavior: "instant" as ScrollBehavior });
      const target = originalFocus?.isConnected
        ? originalFocus
        : page.querySelector<HTMLElement>("[data-intro-heading]");
      if (page.isConnected) target?.focus({ preventScroll: true });
      returnFocus.current = null;
    };
  }, [state, finish]);

  return (
    <ReplayContext.Provider value={replay}>
      <div ref={content}>{children}</div>
      {state !== "done" && (
        <div
          ref={overlay}
          className={styles.intro}
          data-intro-overlay=""
          role="dialog"
          aria-modal="true"
          aria-label="A small explorer opens Vishnu’s portfolio"
        >
          <div className={styles.backdrop} data-backdrop="" />
          <div className={styles.furniture} data-furniture="" aria-hidden="true">
            <div className={styles.brand}>
              VHS<span>PORTFOLIO / 01</span>
            </div>
            <div className={styles.copy}>
              <span>EVERY GREAT THING STARTS WITH</span>
              <p>
                A little
                <br />
                <em>push.</em>
              </p>
            </div>
            <div className={styles.floor} />
            <div className={styles.particles}>
              {Array.from({ length: 14 }, (_, i) => (
                <i
                  key={i}
                  style={{
                    left: `${(i * 31 + 7) % 96}%`,
                    top: `${(i * 19 + 14) % 85}%`,
                    animationDelay: `${i * -0.41}s`,
                  }}
                />
              ))}
            </div>
            <div className={styles.caption}>
              <span className={styles.statusDot} />
              <span data-status="">01 / A little curiosity</span>
            </div>
          </div>
          <div className={styles.assembly} data-assembly="" aria-hidden="true">
            <div className={styles.wall}>
              <div className={styles.wallGrain} />
              <div className={styles.wallTop}>
                VISHNU HARI SAHAL<span>ENGINEER · BUILDER · EXPLORER</span>
              </div>
              <div className={styles.wallNumber}>
                01<span>A WORLD OF POSSIBILITIES</span>
              </div>
              <div className={styles.wallRail}>
                <i />
                <i />
                <i />
              </div>
              <div className={styles.seam} data-seam="" />
            </div>
            <div className={styles.character} data-character="">
              <PushCharacter ref={character} />
            </div>
            <div className={styles.burst} data-burst="" />
          </div>
          <button ref={skip} className={styles.skip} onClick={finish} type="button">
            Skip intro <span aria-hidden="true">↗</span>
          </button>
          <div className={styles.progress} aria-hidden="true">
            <span data-progress="" />
          </div>
          <noscript>
            <style>{"[data-intro-overlay] { display: none !important; }"}</style>
          </noscript>
        </div>
      )}
    </ReplayContext.Provider>
  );
}
