import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("WWW Move 103 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-www-move103-control-v0249-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /VERIFY_PASS=true/);
  assert.match(result.stdout, /be72c5faba9810a7a9d5e6b80551097bf545d6329bfec4da109b5dc0e1b04dd8/);
});
