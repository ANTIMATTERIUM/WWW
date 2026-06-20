import fs from "node:fs";

const receipt = JSON.parse(fs.readFileSync("public/releases/ANTIMATTERIUM_ORG_PROFILE_SURFACE.json", "utf8"));
const files = ["index.html", "README.md"].filter((p) => fs.existsSync(p));
const combined = files.map((p) => fs.readFileSync(p, "utf8")).join("\n") +
  "\n" + fs.readFileSync("public/releases/ANTIMATTERIUM_ORG_PROFILE_SURFACE.json", "utf8");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function token(parts) {
  return parts.join("");
}

const blocked = [
  token(["/U", "sers/"]),
  token(["Down", "loads", "/A", "pps"]),
  token(["SOVEREIGN", "-STACK", "-INDEX"]),
  token(["V", "AT", "Fix"]),
  token(["ka", "af", "film"]),
  token(["TRUTH", "FRAMER"]),
  token(["CINE", "MATICUM"]),
  token(["private", " folder"]),
  token(["personal", " stack", " inventory"])
];

assert(receipt.surface === "ANTIMATTERIUM_WWW_ORG_PROFILE_SURFACE", "surface mismatch");
assert(receipt.version === "v0.1.4", "version mismatch");
assert(receipt.organization_profile === "https://github.com/ANTIMATTERIUM", "org profile missing");
assert(receipt.organization_profile_release.includes("v0.0.2-antimatterium-org-profile-privacy-scrub"), "org profile release missing");
assert(receipt.core_release.includes("v0.2.2-antimatterium-npm-021-publication-receipt"), "core release missing");
assert(receipt.npm_version === "0.2.1", "npm version missing");

assert(receipt.privacy_boundary.contains_non_public_machine_locations === false, "machine location leak");
assert(receipt.privacy_boundary.contains_non_public_inventory === false, "non-public inventory leak");
assert(receipt.privacy_boundary.contains_personal_portfolio_mapping === false, "personal portfolio map leak");
assert(receipt.privacy_boundary.contains_unrelated_organization_mapping === false, "unrelated org map leak");

assert(receipt.claim_boundary.claims_current_industrial_antimatter_production === false, "production overclaim");
assert(receipt.claim_boundary.claims_starship_readiness === false, "starship overclaim");
assert(receipt.claim_boundary.contains_physical_production_instructions === false, "physical instruction leak");
assert(receipt.claim_boundary.claims_unverified_external_adoption === false, "adoption overclaim");

assert(receipt.completion.WWW_ORG_PROFILE_SURFACE_BOUND === true, "WWW surface not bound");
assert(receipt.completion.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public info not excluded");

assert(combined.includes("github.com/ANTIMATTERIUM"), "page missing org profile");
assert(combined.includes("v0.0.2-antimatterium-org-profile-privacy-scrub"), "page missing clean profile release");

for (const value of blocked) {
  assert(!combined.includes(value), "blocked public token present");
}

console.log("ANTIMATTERIUM_WWW_ORG_PROFILE_SURFACE_VERIFY_PASS=true");
console.log("WWW_ORG_PROFILE_SURFACE_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_BOUND=true");
console.log("NON_PUBLIC_INFORMATION_EXCLUDED=true");
console.log("NO_FORBIDDEN_PUBLIC_TOKENS=true");
console.log("NO_LOCAL_MACHINE_PATHS=true");
console.log("NO_PRIVATE_FOLDER_INVENTORY=true");
console.log("NO_PERSONAL_STACK_INVENTORY=true");
console.log("NO_UNRELATED_NAMESPACE_INVENTORY=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
