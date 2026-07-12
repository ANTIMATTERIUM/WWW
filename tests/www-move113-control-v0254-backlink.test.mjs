import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("WWW Move 113 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-www-move113-control-v0254-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /MOVE113_CONTROL_V0254_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /820dd8dc5685b4624f390bd80e085a27bf8d656033ee8a0fcd0c553bbeecc5cf/);
});
