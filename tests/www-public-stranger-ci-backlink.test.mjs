import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("WWW binds public stranger CI proof", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-www-public-stranger-ci-backlink.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_WWW_PUBLIC_STRANGER_CI_BACKLINK_VERIFY_PASS=true/);
});
