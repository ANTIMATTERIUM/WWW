import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("WWW Move 101 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-www-move101-control-v0248-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE101_CONTROL_V0248_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE101_CONTROL_V0248_BACKLINK_ID=82ed229a283be8cf9d54e32dbf7f43a82cf3bdd8e0ba8d1b426c992231c83bae/);
});
