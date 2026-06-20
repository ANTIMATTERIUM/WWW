import fs from "node:fs";

const site = JSON.parse(fs.readFileSync("public/site.json", "utf8"));
const html = fs.readFileSync("index.html", "utf8");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(site.site === "ANTIMATTERIUM_WWW", "site mismatch");
assert(site.institution === "ANTIMATTERIUM", "institution mismatch");
assert(site.npm_package.includes("@antimatterium/antimatterium"), "npm package missing");
assert(site.latest_control_release.includes("v0.1.7-antimatterium-npm-publication-receipt"), "release receipt missing");
assert(site.claim_boundary.claims_current_industrial_antimatter_production === false, "production overclaim");
assert(site.claim_boundary.claims_current_starship_readiness === false, "starship overclaim");
assert(site.claim_boundary.claims_physical_production_instructions === false, "production instruction overclaim");
assert(html.includes("ANTIMATTERIUM"), "html missing institution");
assert(html.includes("npm i @antimatterium/antimatterium"), "html missing npm install");
assert(html.includes("not current industrial antimatter production"), "html missing boundary");

console.log("ANTIMATTERIUM_WWW_VERIFY_PASS=true");
console.log("PUBLIC_WEB_SURFACE_BOUND=true");
console.log("NPM_PACKAGE_BOUND=true");
console.log("GITHUB_RELEASE_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
