import fs from "node:fs";
import crypto from "node:crypto";

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const receiptPath = "public/receipts/ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_BACKLINK.json";
const idField = "www_rootless_fanout_backlink_closure_backpropagation_closure_backlink_id";
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const versionRegex = new RegExp("^0\\.1\\.(17|1[8-9]|[2-9][0-9]+)$");

assert(versionRegex.test(pkg.version), "package version mismatch");
assert(receipt.binds.control_v026_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.6-antimatterium-control-rootless-fanout-backpropagation-echo-fanout-backlink-closure-backpropagation-closure", "control release mismatch");
assert(receipt.binds.control_v026_tag === "v0.2.6-antimatterium-control-rootless-fanout-backpropagation-echo-fanout-backlink-closure-backpropagation-closure", "control tag mismatch");
assert(receipt.binds.control_v026_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28327289926", "control ci run mismatch");
assert(receipt.binds.rootless_fanout_backpropagation_echo_fanout_backlink_closure_backpropagation_closure_id === "831c663f39d9d5151c5e56e16f5565406f7059624c030ba527f8a48afdd24386", "closure id mismatch");
assert(receipt.acceptance.control_v026_bound === true, "control v0.2.6 not bound");
assert(receipt.acceptance.rootless_fanout_backpropagation_echo_fanout_backlink_closure_backpropagation_closure_member === true, "surface member not bound");
assert(receipt.acceptance.no_local_root_required === true, "local root dependency present");
assert(receipt.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "production claim boundary missing");
assert(receipt.boundaries.NO_STARSHIP_CLAIM === true, "starship claim boundary missing");
assert(receipt.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");

const clone = JSON.parse(JSON.stringify(receipt));
delete clone[idField];
const expected = crypto.createHash("sha256").update(JSON.stringify(clone)).digest("hex");
assert(receipt[idField] === expected, "receipt id mismatch");

console.log("ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_CONTROL_V026_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_MEMBER=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_BACKLINK_ID=" + receipt[idField]);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
