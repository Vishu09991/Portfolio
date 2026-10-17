/** One deterministic clock drives the wall and the articulated character. Units are SVG pixels. */
export const DURATION = 5600;
export type Point = { x: number; y: number };
export type Pose = {
  hip: Point;
  lean: number;
  head: number;
  leftFoot: Point;
  rightFoot: Point;
  leftHand: Point;
  rightHand: Point;
  travel: number;
  contact: number;
};
export const clamp = (n: number) => Math.max(0, Math.min(1, n));
export const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => t * t * (3 - 2 * t);
export function track(t: number, keys: number[][]) {
  for (let i = 1; i < keys.length; i++) {
    if (t <= keys[i][0]) {
      const [start, from] = keys[i - 1];
      const [end, to] = keys[i];
      return mix(from, to, smooth(clamp((t - start) / (end - start))));
    }
  }
  return keys[keys.length - 1][1];
}

/** Two-bone inverse kinematics. The end remains pinned while the shoulder/hip shifts. */
export function joint(start: Point, end: Point, upper: number, lower: number, bend: number): Point {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.max(0.001, Math.hypot(dx, dy));
  const reach = Math.min(distance, upper + lower - 0.001);
  const along = (upper * upper - lower * lower + reach * reach) / (2 * reach);
  const height = Math.sqrt(Math.max(0, upper * upper - along * along)) * bend;
  return { x: start.x + (dx * along - dy * height) / distance, y: start.y + (dy * along + dx * height) / distance };
}

export function rotate(point: Point, origin: Point, degrees: number): Point {
  const angle = (degrees * Math.PI) / 180;
  return {
    x: origin.x + point.x * Math.cos(angle) - point.y * Math.sin(angle),
    y: origin.y + point.x * Math.sin(angle) + point.y * Math.cos(angle),
  };
}

export function wallProgress(t: number) {
  // The first attempt has only a 0.6% give and a recoil. Release starts after the second brace.
  return track(t, [
    [0, 0],
    [1.72, 0],
    [1.97, 0.006],
    [2.2, 0.001],
    [2.68, 0.001],
    [3.12, 0.026],
    [3.48, 0.06],
    [3.82, 0.14],
    [4.48, 0.94],
    [4.7, 1],
    [5.6, 1],
  ]);
}

/** Keep each boot fixed in world space between short, staggered recovery steps. */
export function plantFeet(pose: Pose, t: number, worldToRig: number): Pose {
  if (t < 1.1) return pose;
  const travel = wallProgress(Math.min(t, 3.72));
  const leftSteps = [
    [2.94, 3.23],
    [3.46, 3.72],
  ];
  const rightSteps = [[3.24, 3.53]];
  const foot = (point: Point, steps: number[][]) => {
    let anchor = 0;
    let lift = 0;
    for (const [start, end] of steps) {
      if (t >= end) anchor = wallProgress(end);
      else if (t > start) {
        const phase = (t - start) / (end - start);
        anchor = mix(anchor, wallProgress(end), smooth(phase));
        lift = Math.sin(phase * Math.PI) * 15;
      }
    }
    const settle = 1 - smooth(clamp((t - 3.72) / 0.45));
    return { x: point.x - (travel - anchor) * worldToRig * settle, y: point.y - lift };
  };
  return { ...pose, leftFoot: foot(pose.leftFoot, leftSteps), rightFoot: foot(pose.rightFoot, rightSteps) };
}

export function poseAt(t: number): Pose {
  const walk = t < 1.1;
  const contact = track(t, [
    [0, 0],
    [1.04, 0],
    [1.36, 1],
    [3.72, 1],
    [3.95, 0],
    [5.6, 0],
  ]);
  const lean = track(t, [
    [0, 4],
    [0.98, 4],
    [1.24, 10],
    [1.72, 28],
    [1.98, 30],
    [2.22, 13],
    [2.6, 35],
    [3.35, 31],
    [3.7, 38],
    [4.02, 18],
    [4.3, -7],
    [4.52, 0],
    [4.8, -3],
    [5.1, 0],
    [5.6, 0],
  ]);
  const strain = t > 1.5 && t < 3.7 ? Math.sin(t * 64) * 0.65 * contact : 0;
  const hip = {
    x: track(t, [
      [0, 171],
      [1.05, 171],
      [1.7, 183],
      [2.16, 171],
      [2.6, 181],
      [3.7, 193],
      [4.15, 195],
      [4.5, 180],
      [5.6, 180],
    ]),
    y:
      track(t, [
        [0, 216],
        [1.1, 216],
        [1.7, 234],
        [2.2, 224],
        [2.6, 241],
        [3.5, 232],
        [3.7, 238],
        [4.12, 220],
        [4.35, 215],
        [5.6, 216],
      ]) + (walk ? Math.sin(t * 22) * 3 : strain),
  };
  const shoulder = rotate({ x: 3, y: -59 }, hip, lean);
  const swing = Math.sin(t * 11.5);
  let leftFoot = { x: 151, y: 305 };
  let rightFoot = { x: 214, y: 305 };
  if (walk) {
    leftFoot = { x: 170 + swing * 28, y: 305 - Math.max(0, Math.cos(t * 11.5)) * 18 };
    rightFoot = { x: 170 - swing * 28, y: 305 - Math.max(0, -Math.cos(t * 11.5)) * 18 };
    const settle = smooth(clamp((t - 0.85) / 0.25));
    leftFoot = { x: mix(leftFoot.x, 151, settle), y: mix(leftFoot.y, 305, settle) };
    rightFoot = { x: mix(rightFoot.x, 214, settle), y: mix(rightFoot.y, 305, settle) };
  } else {
    // Rear boot steps back during the reset, then stays planted through the final effort.
    leftFoot.x = track(t, [
      [0, 151],
      [2.08, 151],
      [2.5, 126],
      [3.72, 126],
      [4.3, 155],
      [5.6, 155],
    ]);
    leftFoot.y -= t > 2.08 && t < 2.5 ? Math.sin(((t - 2.08) / 0.42) * Math.PI) * 12 : 0;
    rightFoot.x = track(t, [
      [0, 214],
      [3.72, 214],
      [4.15, 235],
      [4.5, 202],
      [5.6, 202],
    ]);
    rightFoot.y -= t > 3.72 && t < 4.5 ? Math.sin(((t - 3.72) / 0.78) * Math.PI) * 16 : 0;
  }
  const restLeft = { x: shoulder.x - 22 - (walk ? swing * 23 : 0), y: shoulder.y + 67 };
  const restRight = { x: shoulder.x + 18 + (walk ? swing * 23 : 0), y: shoulder.y + 68 };
  const wave = track(t, [
    [0, 0],
    [4.35, 0],
    [4.6, 1],
    [4.9, 1],
    [5.16, 0],
    [5.6, 0],
  ]);
  restRight.x = mix(restRight.x, 243 + Math.sin(t * 24) * 5, wave);
  restRight.y = mix(restRight.y, 132, wave);
  return {
    hip,
    lean: lean + strain,
    contact,
    head: track(t, [
      [0, -5],
      [1.05, 3],
      [1.6, 12],
      [2.2, -12],
      [2.7, 16],
      [3.7, 10],
      [4.2, -8],
      [4.6, -14],
      [4.9, -4],
      [5.6, 0],
    ]),
    leftFoot,
    rightFoot,
    leftHand: { x: mix(restLeft.x, 298, contact), y: mix(restLeft.y, 168, contact) },
    rightHand: { x: mix(restRight.x, 298, contact), y: mix(restRight.y, 195, contact) },
    travel: track(t, [
      [0, -230],
      [0.12, -230],
      [1.08, 0],
      [5.12, 0],
      [5.6, 58],
    ]),
  };
}
