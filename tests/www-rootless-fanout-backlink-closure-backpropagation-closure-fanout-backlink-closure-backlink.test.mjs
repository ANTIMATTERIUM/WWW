import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("WWW binds CONTROL v0.2.8 rootless fanout backlink closure", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-backlink.mjs"], {
    cwd: process.cwd(),
    encoding: "utf8"
  });

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_BACKLINK_ID=5ace63cbcedfbed1fbd1e5f96438ed9a463358482a781dc96cf97f8f9f582907/);
});
