import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("WWW public chain OS surface binds Core chain OS", () => {
  const receipt = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_PUBLIC_CHAIN_OS_SURFACE.json", "utf8"));
  assert.equal(receipt.www_surface_version, "0.1.7");
  assert.equal(receipt.public_surfaces.npm_version, "0.2.2");
  assert.ok(receipt.bound_identifiers.core_chain_os_id);
  assert.equal(receipt.boundaries.NO_CURRENT_PRODUCTION_CLAIM, true);
});
