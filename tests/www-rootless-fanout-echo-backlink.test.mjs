import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("WWW binds rootless fanout echo closure", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-www-rootless-fanout-echo-backlink.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_ECHO_BACKLINK_VERIFY_PASS=true/);
});
