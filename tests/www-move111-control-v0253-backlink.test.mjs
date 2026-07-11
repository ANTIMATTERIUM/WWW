import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("WWW Move 111 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-www-move111-control-v0253-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE111_CONTROL_V0253_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /cf66a45147f746681d692c5763cb5e8b39bb9c9b980a1e177e4f9dac193e7c70/);
});
