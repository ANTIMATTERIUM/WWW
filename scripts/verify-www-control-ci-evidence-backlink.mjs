import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const receipt = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_CONTROL_CI_EVIDENCE_BACKLINK.json", "utf8"));

assert(receipt.schema === "ANTIMATTERIUM_CONTROL_CI_EVIDENCE_BACKLINK", "schema mismatch");
assert(receipt.surface === "www", "surface mismatch");
assert(receipt.surface_version === "0.1.8", "surface version mismatch");
assert(receipt.control_authority.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.2-antimatterium-control-ci-evidence-seal", "control release mismatch");
assert(receipt.bound_identifiers.ci_evidence_seal_id === "402681ceb54a72fc8c6681e1f46840ad8426ca08dac660484cc3a92b86a212ee", "ci evidence seal mismatch");
assert(receipt.bound_identifiers.www_chain_os_surface_id === "15f958d4cc1c6cc8bc279f4c77eb2e2a8fd387b2451c40415703f640d610b404", "www chain mismatch");

for (const [key, value] of Object.entries(receipt.acceptance)) {
  assert(value === true, "acceptance not true: " + key);
}

assert(receipt.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(receipt.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(receipt.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");

console.log("ANTIMATTERIUM_WWW_CONTROL_CI_EVIDENCE_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_CONTROL_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_CI_EVIDENCE_SEAL_BOUND=true");
console.log("ANTIMATTERIUM_WWW_BIDIRECTIONAL_PUBLIC_CHAIN_BOUND=true");
console.log("WWW_CONTROL_BACKLINK_ID=" + receipt.www_control_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
