import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("WWW v0.1.17 binds CONTROL v0.2.6 rootless fanout backlink closure backpropagation closure", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-www-rootless-fanout-backlink-closure-backpropagation-closure-backlink.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_BACKLINK_VERIFY_PASS=true/);
  assert.match(out, /WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_BACKLINK_ID=/);
});
