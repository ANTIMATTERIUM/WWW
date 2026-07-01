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

const receipt = JSON.parse(fs.readFileSync(new URL("../public/receipts/ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK.json", import.meta.url), "utf8"));
const pkg = JSON.parse(fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"));

assert(receipt.schema === "antimatterium.surface.control_backlink.v1", "schema mismatch");
assert(receipt.surface === "www", "surface mismatch");
assert(receipt.package.name === "@antimatterium/www", "package name mismatch");
assert(receipt.package.version === "0.1.24", "receipt package version mismatch");
assert(pkg.version === "0.1.24", "package version mismatch");
assert(receipt.control.version === "0.2.13", "control version mismatch");
assert(receipt.control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.13-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure", "control release mismatch");
assert(receipt.control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28506699839", "control ci run mismatch");
assert(receipt.control.closure_id === "1554781e58535f16c8c5d266af98bdbb8d60f6d397488e6c5b473d8cb780bf4d", "control closure id mismatch");
assert(receipt.membership === "rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink", "membership mismatch");
assert(receipt.no_local_root_required === true, "local root boundary mismatch");
assert(receipt.no_current_production_claim === true, "production claim boundary mismatch");
assert(receipt.no_starship_claim === true, "starship claim boundary mismatch");
assert(receipt.no_physical_production_instructions === true, "physical instruction boundary mismatch");

const unsigned = JSON.parse(JSON.stringify(receipt));
delete unsigned.backlink_id;
const expected = crypto.createHash("sha256").update(stable(unsigned)).digest("hex");
assert(receipt.backlink_id === expected, "backlink id mismatch");

console.log("ANTIMATTERIUM_WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_CONTROL_V0213_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_CONTROL_V0213_MEMBER=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("WWW_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_ID=" + receipt.backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
