import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("WWW binds CONTROL v0.2.7 rootless fanout backlink closure backpropagation closure fanout closure", () => {
  const output = execFileSync("npm", ["run", "verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure"], { encoding: "utf8" });
  assert.match(output, /ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_CLOSURE_BACKLINK_VERIFY_PASS=true/);
  assert.match(output, /WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_CLOSURE_BACKLINK_ID=/);
  assert.match(output, /NO_CURRENT_PRODUCTION_CLAIM=true/);
  assert.match(output, /NO_STARSHIP_CLAIM=true/);
  assert.match(output, /NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true/);
});
