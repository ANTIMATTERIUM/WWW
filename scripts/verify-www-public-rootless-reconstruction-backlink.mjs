import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_PUBLIC_ROOTLESS_RECONSTRUCTION_BACKLINK.json", "utf8"));

assert(r.schema === "ANTIMATTERIUM_WWW_PUBLIC_ROOTLESS_RECONSTRUCTION_BACKLINK", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_WWW", "object mismatch");
assert(r.www_version === "0.1.11", "version mismatch");
assert(r.control_public_rootless_reconstruction_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.0-antimatterium-control-public-rootless-reconstruction-index", "control rootless release mismatch");
assert(r.control_public_rootless_reconstruction_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28149722481", "control rootless ci run mismatch");
assert(r.bound_identifiers.public_rootless_reconstruction_index_id === "7cab442dcb14c223ffe740cd1c1c9c5f107e7bd6ee48957db775d493e93e5e8e", "rootless id mismatch");
assert(r.bound_identifiers.prior_www_public_ecosystem_index_backlink_id === "6b5f3844dffe293bc02c6bcb1b20397285a977b1172d1186621299c698d86078", "prior www id mismatch");

for (const [key, value] of Object.entries(r.acceptance)) assert(value === true, "acceptance not true: " + key);

assert(r.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(r.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(r.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");

console.log("ANTIMATTERIUM_WWW_PUBLIC_ROOTLESS_RECONSTRUCTION_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_NO_LOCAL_ROOT_REQUIRED_BOUND=true");
console.log("ANTIMATTERIUM_WWW_PUBLIC_RELEASES_SUFFICIENT_BOUND=true");
console.log("WWW_PUBLIC_ROOTLESS_RECONSTRUCTION_BACKLINK_ID=" + r.www_public_rootless_reconstruction_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
