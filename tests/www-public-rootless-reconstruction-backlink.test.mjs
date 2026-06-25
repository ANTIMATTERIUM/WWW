import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("WWW binds public rootless reconstruction", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-www-public-rootless-reconstruction-backlink.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_WWW_PUBLIC_ROOTLESS_RECONSTRUCTION_BACKLINK_VERIFY_PASS=true/);
});
