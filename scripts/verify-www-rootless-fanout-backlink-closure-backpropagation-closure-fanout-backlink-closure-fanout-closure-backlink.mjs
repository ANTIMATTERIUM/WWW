import fs from "node:fs";
import crypto from "node:crypto";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function stable(value) {
  if (Array.isArray(value)) return "[" + value.map(stable).join(",") + "]";
  if (value && typeof value === "object") {
    return "{" + Object.keys(value).sort().map((key) => JSON.stringify(key) + ":" + stable(value[key])).join(",") + "}";
  }
  return JSON.stringify(value);
}

function digest(value) {
  return crypto.createHash("sha256").update(stable(value)).digest("hex");
}

const receiptPath = new URL("../public/receipts/ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK.json", import.meta.url);
const packagePath = new URL("../package.json", import.meta.url);

const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));
const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));

const expected = receipt.backlink_id;
const unsigned = { ...receipt };
delete unsigned.backlink_id;

assert(receipt.schema === "antimatterium.surface_backlink.v1", "schema mismatch");
assert(receipt.surface === "www", "surface mismatch");
assert(receipt.membership === "rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink", "membership mismatch");
assert(receipt.control_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.9-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure", "CONTROL release mismatch");
assert(receipt.control_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28335270892", "CONTROL CI run mismatch");
assert(receipt.control_version === "0.2.9", "CONTROL version mismatch");
assert(receipt.control_closure_id === "570726c66a7f54f3e015ff8d4f09860036957d41c788e3cea8be16ff81d76f44", "CONTROL closure id mismatch");
assert(receipt.package.name === "@antimatterium/www", "package name mismatch");
assert(receipt.package.version === "0.1.20", "receipt package version mismatch");
assert(pkg.version === receipt.package.version, "package version mismatch");
assert(receipt.no_local_root_required === true, "local root boundary mismatch");
assert(receipt.no_current_production_claim === true, "production claim boundary mismatch");
assert(receipt.no_starship_claim === true, "starship claim boundary mismatch");
assert(receipt.no_physical_production_instructions === true, "physical instruction boundary mismatch");
assert(digest(unsigned) === expected, "backlink digest mismatch");

console.log("ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_CONTROL_V029_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_MEMBER=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_ID=" + receipt.backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
