import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("WWW Move 97 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-www-move97-control-v0246-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE97_CONTROL_V0246_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE97_CONTROL_V0246_BACKLINK_ID=7ae73e20982f4964076c7ac8394c534451da0701d8f9ce35c6148d2d6857c392/);
});
