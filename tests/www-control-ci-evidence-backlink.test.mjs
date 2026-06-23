import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("WWW binds CONTROL CI evidence seal", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-www-control-ci-evidence-backlink.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_WWW_CONTROL_CI_EVIDENCE_BACKLINK_VERIFY_PASS=true/);
});
