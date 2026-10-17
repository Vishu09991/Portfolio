// Run with: node --test scripts/test-intro.cjs. Uses the project's existing TypeScript compiler.
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");
const Module = require("node:module");
const path = require("node:path");
const filename = path.join(__dirname, "../components/intro/motion.ts");
const compiled = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const motionModule = new Module(filename, module);
motionModule._compile(compiled, filename);
const { poseAt, plantFeet, joint, wallProgress } = motionModule.exports;
const close = (a, b, tolerance = 0.0001) => assert.ok(Math.abs(a - b) < tolerance, `${a} != ${b}`);

test("both palms maintain contact through the failed push and final brace", () => {
  for (let t = 1.36; t <= 3.72; t += 1 / 60) {
    const pose = poseAt(t);
    close(pose.leftHand.x, 298);
    close(pose.rightHand.x, 298);
    close(pose.leftHand.y, 168);
    close(pose.rightHand.y, 195);
  }
});

test("panel resists, recoils, then moves fully clear", () => {
  close(wallProgress(1.7), 0);
  assert.ok(wallProgress(1.97) > wallProgress(2.2));
  assert.ok(wallProgress(2.68) < 0.01);
  assert.ok(wallProgress(3.7) > wallProgress(3.1));
  close(wallProgress(5.6), 1);
});

test("inverse kinematics preserves limb lengths for a reachable contact point", () => {
  const start = { x: 220, y: 180 }, end = { x: 298, y: 195 };
  for (const bend of [-1, 1]) {
    const elbow = joint(start, end, 51, 59, bend);
    close(Math.hypot(elbow.x - start.x, elbow.y - start.y), 51);
    close(Math.hypot(elbow.x - end.x, elbow.y - end.y), 59);
  }
});

test("boots stay planted in world space between recovery steps at mobile and desktop sizes", () => {
  for (const [viewport, rigWidth] of [[390, 187.2], [1440, 310], [1920, 310]]) {
    const scale = viewport * 0.62 * 320 / rigWidth;
    for (const [foot, start, end] of [["leftFoot", 2.68, 2.93], ["leftFoot", 3.24, 3.45], ["rightFoot", 2.68, 3.23]]) {
      const worldX = t => plantFeet(poseAt(t), t, scale)[foot].x + wallProgress(t) * scale;
      const anchor = worldX(start);
      for (let t = start; t <= end; t += 1 / 60) close(worldX(t), anchor);
    }
  }
});

test("every rig sample is finite, including release and follow-through", () => {
  for (let t = 0; t <= 5.6; t += 1 / 120) {
    const pose = plantFeet(poseAt(t), t, 1000);
    for (const value of Object.values(pose)) {
      if (typeof value === "number") assert.ok(Number.isFinite(value));
      else { assert.ok(Number.isFinite(value.x)); assert.ok(Number.isFinite(value.y)); }
    }
    assert.ok(wallProgress(t) >= 0 && wallProgress(t) <= 1);
  }
});
