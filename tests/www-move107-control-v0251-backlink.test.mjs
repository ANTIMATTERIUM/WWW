import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("WWW Move 107 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-www-move107-control-v0251-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE107_CONTROL_V0251_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /dd8ebcf9b032f93ecc232725effc99610bd7da38205d9b9a053720525461be27/);
});
