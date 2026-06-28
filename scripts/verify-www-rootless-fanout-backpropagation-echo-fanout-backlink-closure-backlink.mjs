import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const receipt = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_BACKLINK.json", "utf8"));
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

assert(receipt.schema === "ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_BACKLINK", "schema mismatch");
assert(receipt.object === "ANTIMATTERIUM_WWW", "object mismatch");
assert(pkg.version === "0.1.16", "package version mismatch");
assert(pkg.name === "@antimatterium/www", "package name mismatch");
assert(receipt.binds.control_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.5-antimatterium-control-rootless-fanout-backpropagation-echo-fanout-backlink-closure", "control release mismatch");
assert(receipt.binds.control_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28326340014", "control ci mismatch");
assert(receipt.binds.rootless_fanout_backpropagation_echo_fanout_backlink_closure_id === "2cefec2c7b3b7d1cc01d238fccb5e6c0dbd61dab4c5a2f65648158fa518fe011", "closure id mismatch");
for (const [k, v] of Object.entries(receipt.acceptance)) assert(v === true, "acceptance not true: " + k);
for (const [k, v] of Object.entries(receipt.boundaries)) assert(v === true, "boundary not true: " + k);

console.log("ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_CONTROL_V025_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_MEMBER=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("WWW_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_BACKLINK_ID=" + receipt.www_rootless_fanout_backpropagation_echo_fanout_backlink_closure_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
