import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("WWW Move 109 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-www-move109-control-v0252-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /fd6747f44d1fa00e122e042355e4a7b1c8f855bb183e581cbdc2b524899b4663/);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE109_CONTROL_V0252_BACKLINK_VERIFY_PASS=true/);
});
