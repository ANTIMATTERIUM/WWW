import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const receipt = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_NPM_022_PUBLICATION_SURFACE.json", "utf8"));
const text = JSON.stringify(receipt);

assert(receipt.schema === "ANTIMATTERIUM_WWW_NPM_022_PUBLICATION_SURFACE", "surface schema mismatch");
assert(receipt.object === "ANTIMATTERIUM_WWW", "surface object mismatch");
assert(receipt.www_surface_version === "0.1.6", "surface version mismatch");

assert(receipt.core_release === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.10-antimatterium-npm-022-publication", "core release mismatch");
assert(receipt.public_surfaces.www_site === "https://antimatterium.github.io/WWW/", "site mismatch");
assert(receipt.public_surfaces.org === "https://github.com/ANTIMATTERIUM", "org mismatch");
assert(receipt.public_surfaces.npm_package === "https://www.npmjs.com/package/@antimatterium/antimatterium", "npm package mismatch");
assert(receipt.public_surfaces.npm_version === "0.2.2", "npm version mismatch");

assert(receipt.bound_identifiers.npm_receipt_id === "780244fd953ed99fb20cd7cebade4c73b3dc5ade4f070bb37753281c5ca2e7aa", "npm receipt mismatch");
assert(receipt.bound_identifiers.verifier_id === "59972b8a13e1d1896e76ad44f18a5d5ca58595afd624842d4557f2557a69696b", "verifier mismatch");
assert(receipt.bound_identifiers.audit_id === "fcadd3a654978081f7ab9a4e775d1ee1d4e2960c14a5812cd2c349f862959d30", "audit mismatch");
assert(receipt.bound_identifiers.control_digest === "bb75f4462f42f37b5fd2faa5d511dd90213df9f60997f16b5875b80a8f99b0b6", "control mismatch");
assert(receipt.bound_identifiers.runtime_event_id === "f4923422f6f97910816b685376aacf9697222a6c09b1c0cabdb63419c07616d7", "runtime mismatch");
assert(receipt.bound_identifiers.replay_id === "63a62592964d5c8fe2c23d8be06972eef297446d5708c898868dadae4bb92319", "replay mismatch");

assert(text.includes("npm i @antimatterium/antimatterium@0.2.2"), "install command missing");
assert(text.includes("npx antimatterium-public-external-verify"), "npx verifier missing");

assert(receipt.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(receipt.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(receipt.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(receipt.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

console.log("ANTIMATTERIUM_WWW_NPM_022_SURFACE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_CORE_V0210_BOUND=true");
console.log("ANTIMATTERIUM_WWW_NPM_022_BOUND=true");
console.log("ANTIMATTERIUM_WWW_NPM_RECEIPT_ID_BOUND=true");
console.log("ANTIMATTERIUM_WWW_EXTERNAL_PUBLIC_VERIFIER_BOUND=true");
console.log("ANTIMATTERIUM_WWW_CONTROL_DIGEST_BOUND=true");
console.log("ANTIMATTERIUM_WWW_RUNTIME_EVENT_BOUND=true");
console.log("ANTIMATTERIUM_WWW_REPLAY_ID_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
