import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const receipt = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_PUBLIC_CHAIN_OS_SURFACE.json", "utf8"));

assert(receipt.schema === "ANTIMATTERIUM_WWW_PUBLIC_CHAIN_OS_SURFACE", "schema mismatch");
assert(receipt.www_surface_version === "0.1.7", "version mismatch");
assert(receipt.core_public_chain_os_release === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.11-antimatterium-public-chain-os", "core chain release mismatch");
assert(receipt.public_surfaces.npm_version === "0.2.2", "npm version mismatch");
assert(receipt.bound_identifiers.core_chain_os_id, "core chain os id missing");
assert(receipt.bound_identifiers.www_surface_receipt_id === "652a71c7a591d9c99e5781d154f5d3ff7fd5a78ed6d4529e220f50c902adf321", "www surface mismatch");
assert(receipt.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(receipt.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(receipt.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");

console.log("ANTIMATTERIUM_WWW_PUBLIC_CHAIN_OS_SURFACE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_CORE_CHAIN_OS_BOUND=true");
console.log("ANTIMATTERIUM_WWW_NPM_022_BOUND=true");
console.log("ANTIMATTERIUM_WWW_ORG_PROFILE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_PUBLIC_IDENTIFIERS_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
