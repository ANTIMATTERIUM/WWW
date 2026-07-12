import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("WWW Move 115 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-www-move115-control-v0255-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE115_CONTROL_V0255_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /a61e25e38d45861a8de0caadfa6767cfca68cf933068c315beb24034f65d7c1c/);
});
