import fs from "node:fs";
import crypto from "node:crypto";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function canonical(value) {
  return JSON.stringify(value, Object.keys(value).sort());
}

function stableCanonical(value) {
  if (Array.isArray(value)) return "[" + value.map(stableCanonical).join(",") + "]";
  if (value && typeof value === "object") {
    return "{" + Object.keys(value).sort().map((key) => JSON.stringify(key) + ":" + stableCanonical(value[key])).join(",") + "}";
  }
  return JSON.stringify(value);
}

const receipt = JSON.parse(fs.readFileSync(new URL("../public/receipts/ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK.json", import.meta.url), "utf8"));
const pkg = JSON.parse(fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"));

assert(pkg.version === "0.1.21", "package version mismatch");
assert(receipt.package.version === "0.1.21", "receipt package version mismatch");
assert(receipt.control.version === "0.2.10", "control version mismatch");
assert(receipt.control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.10-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure", "control release mismatch");
assert(receipt.control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28336116773", "control ci run mismatch");
assert(receipt.control.closure_id === "12940aa22c1477af9f4748f928b94eaaecb7e1379717997504c66b6975d19baf", "control closure id mismatch");
assert(receipt.membership.control_member === true, "control member mismatch");
assert(receipt.membership.no_local_root_required === true, "local root boundary mismatch");
assert(receipt.safety.NO_CURRENT_PRODUCTION_CLAIM === true, "current production claim boundary mismatch");
assert(receipt.safety.NO_STARSHIP_CLAIM === true, "starship claim boundary mismatch");
assert(receipt.safety.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary mismatch");

const copy = structuredClone(receipt);
delete copy.closure_id;
const expected = crypto.createHash("sha256").update(stableCanonical(copy)).digest("hex");
assert(receipt.closure_id === expected, "closure id mismatch");

console.log("WWW3" + "_VERIFY_PASS=true");
console.log("WWW3" + "_CONTROL_V0210_RELEASE_BOUND=true");
console.log("WWW3" + "_CONTROL_V0210_MEMBER=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("WWW4" + "=" + receipt.closure_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
