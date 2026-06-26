import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_ECHO_BACKLINK.json", "utf8"));

assert(r.schema === "ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_ECHO_BACKLINK", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_WWW", "object mismatch");
assert(r.www_version === "0.1.12", "version mismatch");
assert(r.binds_control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.1-antimatterium-control-rootless-fanout-echo-closure", "control release mismatch");
assert(r.binds_control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28190185370", "control ci mismatch");
assert(r.binds_control.rootless_fanout_echo_closure_id === "39110d1cf58cedbfc54624d89a8e536e5d40f76821e18dd02d8ae615b9afb1a1", "fanout echo id mismatch");
assert(r.inherited.www_public_rootless_reconstruction_backlink_id === "3dd5c95367eceae8453a45181cb8859bb8c10497b4781900dd3e8b8a65d73836", "prior www backlink id mismatch");

for (const [key, value] of Object.entries(r.acceptance)) assert(value === true, "acceptance not true: " + key);
for (const [key, value] of Object.entries(r.boundaries)) assert(value === true, "boundary not true: " + key);

console.log("ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_ECHO_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_CONTROL_V021_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_ECHO_MEMBER=true");
console.log("WWW_ROOTLESS_FANOUT_ECHO_BACKLINK_ID=" + r.www_rootless_fanout_echo_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
