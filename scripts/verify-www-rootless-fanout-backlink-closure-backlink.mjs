import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKLINK.json", "utf8"));

assert(r.schema === "ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKLINK", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_WWW", "object mismatch");
assert(r.www_version === "0.1.13", "version mismatch");
assert(r.binds_control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.2-antimatterium-control-rootless-fanout-backlink-closure", "control release mismatch");
assert(r.binds_control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28265584824", "control ci mismatch");
assert(r.binds_control.rootless_fanout_backlink_closure_id === "9d411e38f3dd5a7f97bd33e4d8955a4646c6bcd346ffed2c97f6176b32d17922", "closure id mismatch");
assert(r.inherited.www_rootless_fanout_echo_backlink_id === "7ed61fd7bd24ebe51c1106e2de1220f9fc9cb8ff8fb4e81e253a18fd026bc2db", "prior www id mismatch");

for (const [k, v] of Object.entries(r.acceptance)) assert(v === true, "acceptance not true: " + k);
for (const [k, v] of Object.entries(r.boundaries)) assert(v === true, "boundary not true: " + k);

console.log("ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_CONTROL_V022_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKPROPAGATION_MEMBER=true");
console.log("WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKLINK_ID=" + r.www_rootless_fanout_backlink_closure_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
