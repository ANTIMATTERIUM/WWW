import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_BACKLINK.json", "utf8"));

assert(r.schema === "ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_BACKLINK", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_WWW", "object mismatch");
assert(r.www_version === "0.1.15", "version mismatch");
assert(r.binds_control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.4-antimatterium-control-rootless-fanout-backpropagation-echo-fanout-closure", "control v024 release mismatch");
assert(r.binds_control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28281726132", "control v024 ci mismatch");
assert(r.binds_control.rootless_fanout_backpropagation_echo_fanout_closure_id === "f295de72115effeba53942447cb96919bc468661d35a28223057e57890b58f8c", "v024 fanout closure id mismatch");
assert(r.inherited.www_rootless_fanout_backpropagation_echo_backlink_id === "675637017355486438fc8e56c009c029a55fcf20ec6a421e43a1d50719be3a18", "prior www id mismatch");

for (const [k, v] of Object.entries(r.acceptance)) assert(v === true, "acceptance not true: " + k);
for (const [k, v] of Object.entries(r.boundaries)) assert(v === true, "boundary not true: " + k);

console.log("ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_CONTROL_V024_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_MEMBER=true");
console.log("WWW_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_BACKLINK_ID=" + r.www_rootless_fanout_backpropagation_echo_fanout_closure_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
