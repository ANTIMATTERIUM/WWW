import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("WWW Move 99 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-www-move99-control-v0247-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE99_CONTROL_V0247_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE99_CONTROL_V0247_BACKLINK_ID=6be0be82cdfecec6a319604688180db339e64fcb1ea873f030e1efca0db0194f/);
});
