import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_PUBLIC_ECOSYSTEM_INDEX_BACKLINK.json", "utf8"));

assert(r.schema === "ANTIMATTERIUM_WWW_PUBLIC_ECOSYSTEM_INDEX_BACKLINK", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_WWW", "object mismatch");
assert(r.www_version === "0.1.10", "version mismatch");
assert(r.control_public_ecosystem_index_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.8-antimatterium-control-public-ecosystem-index", "control ecosystem release mismatch");
assert(r.control_public_ecosystem_index_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28148611545", "control ecosystem ci run mismatch");
assert(r.bound_identifiers.public_ecosystem_closure_index_id === "85f56c676d2c9bffff66cd59978b8bfcfffb6e8afae91258a71509f0531ba4ea", "ecosystem index id mismatch");
assert(r.bound_identifiers.second_order_public_stranger_ci_closure_id === "16b259a7d2eb063a5a3c7b6e072c7cbed22f59b9642960f154d099581f157ee8", "second-order id mismatch");
assert(r.bound_identifiers.public_stranger_ci_id === "6130ca7749ec3f79bdde19e47374f7dfb6d7ae5334d025e996a8d7593bcaa4ca", "public stranger ci id mismatch");
assert(r.bound_identifiers.prior_www_public_stranger_ci_backlink_id === "6e884796bc7a4c83f7c596e32c98b0a1d382935d82ce82a15a22dd34d34304aa", "prior www backlink id mismatch");

for (const [key, value] of Object.entries(r.acceptance)) assert(value === true, "acceptance not true: " + key);

assert(r.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(r.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(r.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");

console.log("ANTIMATTERIUM_WWW_PUBLIC_ECOSYSTEM_INDEX_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_PUBLIC_ECOSYSTEM_INDEX_BOUND=true");
console.log("ANTIMATTERIUM_WWW_PUBLIC_ECOSYSTEM_GRAPH_MEMBER=true");
console.log("WWW_PUBLIC_ECOSYSTEM_INDEX_BACKLINK_ID=" + r.www_public_ecosystem_index_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
