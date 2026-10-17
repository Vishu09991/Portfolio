import React, { forwardRef, useId } from "react";
import { joint, Point, Pose, rotate } from "./motion";

/** Original ceramic explorer, with separately rigged limbs, helmet, antenna and palms. */
const PushCharacter = forwardRef<SVGSVGElement>(function PushCharacter(_, ref) {
  const id = useId().replace(/:/g, "");
  return (
    <svg ref={ref} viewBox="0 0 320 340" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-shell`} x1="0" y1="0" x2="1" y2="0.8">
          <stop stopColor="#f2f7fb" />
          <stop offset="0.45" stopColor="#b9d1df" />
          <stop offset="1" stopColor="#4a6c86" />
        </linearGradient>
        <linearGradient id={`${id}-dark`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#315570" />
          <stop offset="1" stopColor="#0a192b" />
        </linearGradient>
        <linearGradient id={`${id}-visor`} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#15364b" />
          <stop offset="1" stopColor="#020b16" />
        </linearGradient>
      </defs>
      <g data-rig="actor">
        <ellipse data-rig="shadow" cx="176" cy="319" rx="70" ry="8" fill="#000" opacity="0.55" />
        {(["back-leg", "front-leg"] as const).map((name, index) => (
          <g key={name} opacity={index ? 1 : 0.65}>
            <path
              data-rig={`${name}-cable`}
              stroke="#071322"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path data-rig={`${name}-upper`} stroke={`url(#${id}-dark)`} strokeWidth="21" strokeLinecap="round" />
            <path data-rig={`${name}-lower`} stroke={`url(#${id}-shell)`} strokeWidth="23" strokeLinecap="round" />
            <circle data-rig={`${name}-joint`} r="8" fill="#10283e" stroke="#80a9bf" strokeWidth="2" />
            <g data-rig={`${name}-boot`}>
              <path
                d="M-17-12 Q-18-17-9-17 H6 Q12-16 13-8 L25-3 Q29 0 26 6 H-18Z"
                fill={`url(#${id}-dark)`}
                stroke="#42687f"
                strokeWidth="1.5"
              />
              <path d="M-18 6 H26" stroke="#9ed5ec" strokeWidth="3" />
              <path d="M-10-11 H3" stroke="#5ccfff" strokeWidth="3" />
            </g>
          </g>
        ))}
        <g data-rig="back-arm" opacity="0.6">
          <path
            data-rig="back-arm-cable"
            stroke="#061323"
            strokeWidth="23"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path data-rig="back-arm-upper" stroke={`url(#${id}-shell)`} strokeWidth="20" strokeLinecap="round" />
          <path data-rig="back-arm-lower" stroke={`url(#${id}-dark)`} strokeWidth="19" strokeLinecap="round" />
          <circle data-rig="back-arm-joint" r="7" fill="#10283e" stroke="#80a9bf" strokeWidth="2" />
          <g data-rig="back-arm-hand">
            <rect x="-10" y="-14" width="11" height="29" rx="5" fill="#a1c1d5" />
            <path d="M-8-6 H0 M-8 0 H0 M-8 6 H0" stroke="#45667c" />
          </g>
        </g>
        <g data-rig="body">
          <rect
            x="-40"
            y="-66"
            width="20"
            height="48"
            rx="9"
            fill={`url(#${id}-dark)`}
            stroke="#416c89"
            strokeWidth="2"
          />
          <path d="M-35-56 V-32" stroke="#65d5ff" strokeWidth="3" />
          <rect x="-13" y="-88" width="27" height="23" rx="8" fill="#193248" stroke="#7098ae" strokeWidth="2" />
          <path
            d="M-26-70 Q0-82 27-70 L30-25 Q29-8 14 0 H-14 Q-29-8-30-25Z"
            fill={`url(#${id}-shell)`}
            stroke="#cee7f3"
            strokeWidth="1.5"
          />
          <path d="M-20-61 Q0-69 20-61 L17-32 Q0-23-17-32Z" fill={`url(#${id}-dark)`} stroke="#729bad" />
          <circle cx="1" cy="-48" r="9" fill="#102c46" stroke="#68d7ff" strokeWidth="2" />
          <path d="m-3-51 4 3-4 3 M4-45 H8" stroke="#adf2ff" strokeWidth="1.5" />
          <path d="M-14-16 H12 M-11-10 H9" stroke="#547a91" strokeWidth="2" />
          <circle cx="-23" cy="-30" r="2" fill="#436379" />
          <circle cx="23" cy="-30" r="2" fill="#436379" />
          <g data-rig="head">
            <g data-rig="antenna">
              <path d="M-17-127-23-147" stroke="#7ba8bf" strokeWidth="3" />
              <circle cx="-23" cy="-149" r="4" fill="#80e6ff" />
            </g>
            <path
              d="M-36-119 Q-35-139-13-141 H17 Q39-139 41-120 L42-94 Q40-77 19-76 H-16 Q-35-80-37-96Z"
              fill={`url(#${id}-shell)`}
              stroke="#d2e8f2"
              strokeWidth="1.5"
            />
            <path d="M-23-130 Q1-137 22-130" stroke="#f0fbff" strokeWidth="2" opacity="0.7" />
            <rect
              x="-20"
              y="-122"
              width="62"
              height="34"
              rx="14"
              fill={`url(#${id}-visor)`}
              stroke="#52768a"
              strokeWidth="2"
            />
            <path d="M-12-116 H27" stroke="#74d4ee" opacity="0.25" />
            <g data-rig="eyes">
              <rect x="4" y="-113" width="6" height="14" rx="3" fill="#8beaff" />
              <rect x="23" y="-113" width="6" height="14" rx="3" fill="#8beaff" />
            </g>
            <circle cx="-31" cy="-105" r="10" fill={`url(#${id}-dark)`} stroke="#7c9eaf" strokeWidth="2" />
            <circle cx="-31" cy="-105" r="4" fill="#6bcce9" />
            <path d="M-9-81 H11" stroke="#4e7188" strokeWidth="2" />
          </g>
        </g>
        <g data-rig="front-arm">
          <path
            data-rig="front-arm-cable"
            stroke="#061323"
            strokeWidth="25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path data-rig="front-arm-upper" stroke={`url(#${id}-shell)`} strokeWidth="22" strokeLinecap="round" />
          <path data-rig="front-arm-lower" stroke={`url(#${id}-shell)`} strokeWidth="20" strokeLinecap="round" />
          <circle data-rig="front-arm-joint" r="9" fill="#19374d" stroke="#8cb3c9" strokeWidth="2" />
          <circle data-rig="elbow-light" r="3" fill="#72dbff" />
          <g data-rig="front-arm-hand">
            <rect
              x="-13"
              y="-15"
              width="14"
              height="31"
              rx="6"
              fill={`url(#${id}-dark)`}
              stroke="#88bbd2"
              strokeWidth="1.5"
            />
            <path d="M-9-7 H0 M-9 0 H0 M-9 7 H0" stroke="#8bc9df" strokeWidth="1.5" />
            <path d="M-12 6-17 1 V-5" stroke="#a8d1e2" strokeWidth="5" strokeLinecap="round" />
          </g>
        </g>
      </g>
    </svg>
  );
});
export default PushCharacter;

export function createRig(svg: SVGSVGElement) {
  const parts = new Map<string, SVGElement>();
  svg.querySelectorAll<SVGElement>("[data-rig]").forEach(part => parts.set(part.dataset.rig!, part));
  const set = (name: string, attr: string, value: string | number) =>
    parts.get(name)?.setAttribute(attr, String(value));
  const move = (name: string, point: Point) => set(name, "transform", `translate(${point.x} ${point.y})`);
  const limb = (name: string, start: Point, end: Point, upper: number, lower: number, bend: number, leg = false) => {
    const middle = joint(start, end, upper, lower, bend);
    const a = `${start.x} ${start.y}`,
      b = `${middle.x} ${middle.y}`,
      c = `${end.x} ${end.y}`;
    set(`${name}-cable`, "d", `M${a} L${b} L${c}`);
    set(`${name}-upper`, "d", `M${a} L${b}`);
    set(`${name}-lower`, "d", `M${b} L${c}`);
    move(`${name}-joint`, middle);
    move(`${name}-${leg ? "boot" : "hand"}`, end);
    if (name === "front-arm") move("elbow-light", middle);
  };
  return (pose: Pose, t: number, releaseOffset: number) => {
    set("actor", "transform", `translate(${pose.travel + releaseOffset} 0)`);
    move("shadow", { x: pose.hip.x - 176, y: 0 });
    set("body", "transform", `translate(${pose.hip.x} ${pose.hip.y}) rotate(${pose.lean})`);
    set("head", "transform", `rotate(${pose.head} 0 -85)`);
    set("antenna", "transform", `rotate(${Math.sin(t * 13) * (pose.contact ? 6 : 2)} -17 -127)`);
    set("eyes", "transform", t > 1.6 && t < 3.7 ? "translate(0 -45) scale(1 .58)" : "translate(0 0)");
    limb("back-leg", { x: pose.hip.x - 10, y: pose.hip.y }, pose.leftFoot, 48, 53, -1, true);
    limb("front-leg", { x: pose.hip.x + 12, y: pose.hip.y }, pose.rightFoot, 46, 53, -1, true);
    limb("back-arm", rotate({ x: -8, y: -60 }, pose.hip, pose.lean), pose.leftHand, 57, 65, 1);
    limb("front-arm", rotate({ x: 16, y: -58 }, pose.hip, pose.lean), pose.rightHand, 51, 59, 1);
  };
}
