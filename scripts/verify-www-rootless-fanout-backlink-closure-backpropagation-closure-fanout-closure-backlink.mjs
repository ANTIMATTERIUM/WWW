import fs from "node:fs";
import crypto from "node:crypto";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function digest(value) {
  return crypto.createHash("sha256").update(JSON.stringify(value, Object.keys(value).sort())).digest("hex");
}

const receiptPath = new URL("../public/receipts/ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_CLOSURE_BACKLINK.json", import.meta.url);
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));
const pkg = JSON.parse(fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"));

const id = receipt.www_rootless_fanout_backlink_closure_backpropagation_closure_fanout_closure_backlink_id;
const clone = { ...receipt };
delete clone.www_rootless_fanout_backlink_closure_backpropagation_closure_fanout_closure_backlink_id;

assert(pkg.name === "@antimatterium/www", "package name mismatch");
assert(pkg.version === "0.1.18", "package version mismatch");
assert(receipt.schema === "antimatterium.rootless_fanout_backlink_closure_backpropagation_closure_fanout_closure_backlink.v1", "schema mismatch");
assert(receipt.surface === "www", "surface mismatch");
assert(receipt.role === "public_surface_backlink", "role mismatch");
assert(receipt.control_version === "v0.2.7", "control version mismatch");
assert(receipt.control_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.7-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure", "control release mismatch");
assert(receipt.control_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28327734001", "control ci run mismatch");
assert(receipt.upstream_closure_id === "755c0844bc9bd8c3194e1fc02bc1254e9b6a0c5cefb79d21bb5ae6d0b1e5baa1", "upstream closure id mismatch");
assert(receipt.previous_control_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.6-antimatterium-control-rootless-fanout-backpropagation-echo-fanout-backlink-closure-backpropagation-closure", "previous control release mismatch");
assert(receipt.previous_control_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28327289926", "previous control ci run mismatch");
assert(receipt.www_rootless_fanout_backlink_closure_backpropagation_closure_backlink_id === "8e2e70ee4d53d7512668189b51571ea927e53b3cd99d4fab390f389187b54fa5", "prior backlink id mismatch");
assert(receipt.package_name === "@antimatterium/www", "receipt package name mismatch");
assert(receipt.package_version === "0.1.18", "receipt package version mismatch");
assert(receipt.no_current_production_claim === true, "production boundary mismatch");
assert(receipt.no_starship_claim === true, "starship boundary mismatch");
assert(receipt.no_physical_production_instructions === true, "instruction boundary mismatch");
assert(id === digest(clone), "receipt id mismatch");

console.log("ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_CLOSURE_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_CONTROL_V027_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_CLOSURE_MEMBER=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_CLOSURE_BACKLINK_ID=" + id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
