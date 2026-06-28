import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("WWW binds CONTROL v0.2.5 rootless fanout backpropagation echo fanout backlink closure", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-www-rootless-fanout-backpropagation-echo-fanout-backlink-closure-backlink.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_BACKLINK_VERIFY_PASS=true/);
});
