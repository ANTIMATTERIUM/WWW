import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("WWW npm 0.2.2 surface binds Core v0.2.10 and npm receipt", () => {
const receipt = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_NPM_022_PUBLICATION_SURFACE.json", "utf8"));

assert.equal(receipt.www_surface_version, "0.1.6");
assert.equal(receipt.public_surfaces.npm_version, "0.2.2");
assert.equal(receipt.bound_identifiers.npm_receipt_id, "780244fd953ed99fb20cd7cebade4c73b3dc5ade4f070bb37753281c5ca2e7aa");
assert.equal(receipt.boundaries.NO_CURRENT_PRODUCTION_CLAIM, true);
assert.equal(receipt.boundaries.NO_STARSHIP_CLAIM, true);
assert.equal(receipt.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS, true);
});
