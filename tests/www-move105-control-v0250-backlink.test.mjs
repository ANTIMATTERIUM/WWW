import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("WWW Move 105 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-www-move105-control-v0250-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE105_CONTROL_V0250_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /3f9410579f838edf1cf208064e2bfb4974708ba04a78be16d600450c37f7a284/);
});
